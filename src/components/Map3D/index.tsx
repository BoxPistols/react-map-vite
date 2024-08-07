import maplibregl from 'maplibre-gl'
import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import 'maplibre-gl/dist/maplibre-gl.css'

interface Map3DProps {
  latitude: number
  longitude: number
  zoom: number
}

export const Map3D: React.FC<Map3DProps> = ({
  latitude = 35.6809591,
  longitude = 139.7673068,
  zoom = 9,
}) => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<maplibregl.Map | null>(null)
  const [mapInfo, setMapInfo] = useState({
    lng: longitude,
    lat: latitude,
    zoom: zoom,
    pitch: 60,
    bearing: -20,
  })

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

      map.addControl(
        new maplibregl.TerrainControl({
          source: 'terrainSource',
          exaggeration: 1.5,
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

      // マウスでの回転を有効にする
      map.dragRotate.enable()

      mapInstance.current = map
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove()
        mapInstance.current = null
      }
    }
  }, [latitude, longitude, zoom])

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div
        ref={mapContainer}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '72px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          padding: '5px',
          fontSize: '12px',
          zIndex: 1,
        }}>
        Longitude: {mapInfo.lng} | Latitude: {mapInfo.lat} | Zoom:{' '}
        {mapInfo.zoom} | Pitch: {mapInfo.pitch} | Bearing: {mapInfo.bearing}
      </div>
    </div>
  )
}
