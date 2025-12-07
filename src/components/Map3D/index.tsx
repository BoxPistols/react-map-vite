import { useMediaQuery, useTheme } from '@mui/material'
import maplibregl from 'maplibre-gl'
import { useCallback, useEffect, useRef, useState } from 'react'
import type React from 'react'

import { useHapticFeedback } from '@/hooks/useHapticFeedback'
import { usePinPlacementMode } from '@/hooks/usePinPlacementMode'
import { hookUseTheme } from '@/hooks/useTheme'

import 'maplibre-gl/dist/maplibre-gl.css'
import { MobilePinModeToggle } from './MobilePinModeToggle'
import { MobilePinResult } from './MobilePinResult'
import { MobileSearchResult } from './MobileSearchResult'

interface Map3DProps {
  latitude: number
  longitude: number
  zoom: number
  pitch: number
  bearing: number
}

// Long press duration in ms
const LONG_PRESS_DURATION = 500

export const Map3D: React.FC<Map3DProps> = ({
  latitude = 35.6809591,
  longitude = 139.7673068,
  zoom = 9,
  pitch = 60,
  bearing = -20,
}) => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<maplibregl.Map | null>(null)
  const markersRef = useRef<Map<string, maplibregl.Marker>>(new Map())
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const touchStartPos = useRef<{ x: number; y: number } | null>(null)

  const [mapInfo, setMapInfo] = useState({
    lng: longitude,
    lat: latitude,
    zoom: zoom,
    pitch: 60,
    bearing: -20,
  })
  const [searchQuery, setSearchQuery] = useState('')

  const { mode } = hookUseTheme()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const {
    isPinMode,
    pins,
    lastPlacedPin,
    togglePinMode,
    addPin,
    removePin,
    updatePinName,
    clearLastPlacedPin,
  } = usePinPlacementMode()

  const { pinPlacementFeedback, tapFeedback } = useHapticFeedback()

  // Add marker to map
  const addMarkerToMap = useCallback(
    (lng: number, lat: number, id: string) => {
      if (!mapInstance.current) return

      // Create custom marker element
      const el = document.createElement('div')
      el.className = 'custom-pin-marker'
      el.style.cssText = `
        width: 32px;
        height: 32px;
        background-color: ${theme.palette.primary.main};
        border: 3px solid white;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        cursor: pointer;
        transition: transform 0.2s ease;
      `

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat([lng, lat])
        .addTo(mapInstance.current)

      markersRef.current.set(id, marker)
    },
    [theme.palette.primary.main]
  )

  // Remove marker from map
  const removeMarkerFromMap = useCallback((id: string) => {
    const marker = markersRef.current.get(id)
    if (marker) {
      marker.remove()
      markersRef.current.delete(id)
    }
  }, [])

  // Handle pin placement
  const handlePinPlacement = useCallback(
    (lngLat: maplibregl.LngLat) => {
      if (!isPinMode && !isMobile) return

      pinPlacementFeedback()
      const newPin = addPin(lngLat.lng, lngLat.lat)
      addMarkerToMap(lngLat.lng, lngLat.lat, newPin.id)
    },
    [isPinMode, isMobile, pinPlacementFeedback, addPin, addMarkerToMap]
  )

  // Handle pin deletion
  const handleDeletePin = useCallback(
    (id: string) => {
      removePin(id)
      removeMarkerFromMap(id)
    },
    [removePin, removeMarkerFromMap]
  )

  // Navigate to pin
  const handlePinSelect = useCallback(
    (pin: { lng: number; lat: number }) => {
      if (mapInstance.current) {
        tapFeedback()
        mapInstance.current.flyTo({
          center: [pin.lng, pin.lat],
          zoom: 14,
          duration: 1000,
        })
      }
    },
    [tapFeedback]
  )

  // Long press detection for mobile
  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      if (!isMobile) return

      const touch = e.touches[0]
      touchStartPos.current = { x: touch.clientX, y: touch.clientY }

      longPressTimer.current = setTimeout(() => {
        if (!mapInstance.current || !touchStartPos.current) return

        // Get the map container bounds
        const rect = mapContainer.current?.getBoundingClientRect()
        if (!rect) return

        // Calculate the point relative to the map container
        const x = touchStartPos.current.x - rect.left
        const y = touchStartPos.current.y - rect.top

        const lngLat = mapInstance.current.unproject([x, y])
        handlePinPlacement(lngLat)

        // Enable pin mode after first long press
        if (!isPinMode) {
          togglePinMode()
        }
      }, LONG_PRESS_DURATION)
    },
    [isMobile, handlePinPlacement, isPinMode, togglePinMode]
  )

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isMobile || !touchStartPos.current) return

      const touch = e.touches[0]
      const moveThreshold = 10

      const dx = touch.clientX - touchStartPos.current.x
      const dy = touch.clientY - touchStartPos.current.y

      // Cancel long press if moved too much
      if (Math.abs(dx) > moveThreshold || Math.abs(dy) > moveThreshold) {
        if (longPressTimer.current) {
          clearTimeout(longPressTimer.current)
          longPressTimer.current = null
        }
      }
    },
    [isMobile]
  )

  const handleTouchEnd = useCallback(() => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
      longPressTimer.current = null
    }
    touchStartPos.current = null
  }, [])

  // Map click handler for pin mode
  const handleMapClick = useCallback(
    (e: maplibregl.MapMouseEvent) => {
      if (isPinMode) {
        handlePinPlacement(e.lngLat)
      }
    },
    [isPinMode, isMobile, handlePinPlacement]
  )

  // Initialize map
  useEffect(() => {
    if (mapContainer.current && !mapInstance.current) {
      const map = new maplibregl.Map({
        container: mapContainer.current,
        style: {
          version: 8,
          sources: {
            osm: {
              type: 'raster',
              tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
              tileSize: 256,
              attribution: '&copy; OpenStreetMap Contributors',
              maxzoom: 19,
            },
            terrainSource: {
              type: 'raster-dem',
              url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
              tileSize: 256,
            },
            hillshadeSource: {
              type: 'raster-dem',
              url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
              tileSize: 256,
            },
          },
          layers: [
            {
              id: 'osm',
              type: 'raster',
              source: 'osm',
            },
            {
              id: 'hills',
              type: 'hillshade',
              source: 'hillshadeSource',
              layout: { visibility: 'visible' },
              paint: { 'hillshade-shadow-color': '#473B24' },
            },
          ],
          terrain: {
            source: 'terrainSource',
            exaggeration: 1.5,
          },
        },
        center: [longitude, latitude],
        zoom: zoom,
        pitch: 60,
        bearing: -20,
        antialias: true,
      })

      map.addControl(
        new maplibregl.NavigationControl({
          visualizePitch: true,
          showZoom: true,
          showCompass: true,
        })
      )

      map.on('style.load', () => {
        map.setTerrain({
          source: 'terrainSource',
          exaggeration: 1.5,
        })
      })

      map.on('move', () => {
        const center = map.getCenter()
        setMapInfo({
          lng: Number(center.lng.toFixed(4)),
          lat: Number(center.lat.toFixed(4)),
          zoom: Number(map.getZoom().toFixed(2)),
          pitch: Number(map.getPitch().toFixed(2)),
          bearing: Number(map.getBearing().toFixed(2)),
        })
      })

      map.on('click', handleMapClick)

      // Enable rotation
      map.dragRotate.enable()

      mapInstance.current = map
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove()
        mapInstance.current = null
      }
    }
  }, [latitude, longitude, zoom, pitch, bearing, handleMapClick])

  // Touch event listeners for mobile long press
  useEffect(() => {
    const container = mapContainer.current
    if (!container || !isMobile) return

    container.addEventListener('touchstart', handleTouchStart, {
      passive: true,
    })
    container.addEventListener('touchmove', handleTouchMove, { passive: true })
    container.addEventListener('touchend', handleTouchEnd)
    container.addEventListener('touchcancel', handleTouchEnd)

    return () => {
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
      container.removeEventListener('touchcancel', handleTouchEnd)
    }
  }, [isMobile, handleTouchStart, handleTouchMove, handleTouchEnd])

  // Update map click handler when pin mode changes
  useEffect(() => {
    const map = mapInstance.current
    if (!map) return

    map.off('click', handleMapClick)
    map.on('click', handleMapClick)

    // Change cursor in pin mode
    if (isPinMode) {
      map.getCanvas().style.cursor = 'crosshair'
    } else {
      map.getCanvas().style.cursor = ''
    }
  }, [isPinMode, handleMapClick])

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div ref={mapContainer} className='absolute inset-0' />

      {/* Map info display - hidden on mobile */}
      {!isMobile && (
        <div
          className={`
            absolute top-4 right-16 p-2 text-sm z-10
            ${
              mode === 'dark'
                ? 'dark:bg-gray-700 dark:text-white dark:bg-opacity-70'
                : 'bg-white text-gray-700 bg-opacity-70'
            }
            transition-colors duration-200 opacity-80 rounded-md
          `}
          style={{
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
          }}>
          Longitude: {mapInfo.lng} | Latitude: {mapInfo.lat} | Zoom:{' '}
          {mapInfo.zoom} | Pitch: {mapInfo.pitch} | Bearing: {mapInfo.bearing}
        </div>
      )}

      {/* Mobile UI components */}
      {isMobile && (
        <>
          {/* Pin mode toggle FAB */}
          <MobilePinModeToggle isPinMode={isPinMode} onToggle={togglePinMode} />

          {/* Pin result bottom sheet */}
          <MobilePinResult
            pin={lastPlacedPin}
            onClose={clearLastPlacedPin}
            onDelete={handleDeletePin}
            onUpdateName={updatePinName}
          />

          {/* Search results - only show when no pin result is displayed */}
          {!lastPlacedPin && (
            <MobileSearchResult
              pins={pins}
              onPinSelect={handlePinSelect}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          )}
        </>
      )}

      {/* Desktop pin mode indicator */}
      {!isMobile && isPinMode && (
        <div
          style={{
            position: 'absolute',
            top: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            padding: '8px 16px',
            borderRadius: 20,
            fontWeight: 600,
            fontSize: 14,
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            zIndex: 10,
          }}>
          ピンモード: クリックでピンを追加
        </div>
      )}
    </div>
  )
}
