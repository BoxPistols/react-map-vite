import maplibregl from 'maplibre-gl'
import { useEffect, useRef, useState } from 'react'

interface Map3DProps {
  latitude?: number
  longitude?: number
  zoom?: number
}

export const Map3D = ({
  latitude = 35.658581,
  longitude = 139.745433,
  zoom = 15,
}: Map3DProps) => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<maplibregl.Map | null>(null)
  const [mapCenter, setMapCenter] = useState<[number, number]>([
    longitude,
    latitude,
  ])
  const [mapZoom, setMapZoom] = useState(zoom)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (mapContainer.current && !map.current) {
      map.current = new maplibregl.Map({
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
            exaggeration: 1,
          },
          sky: {},
        },
        center: mapCenter,
        zoom: mapZoom,
        pitch: 70,
        hash: true,
        maxZoom: 18,
        maxPitch: 85,
      })

      map.current.addControl(
        new maplibregl.NavigationControl({
          visualizePitch: true,
          showZoom: true,
          showCompass: true,
        })
      )

      map.current.addControl(
        new maplibregl.TerrainControl({
          source: 'terrainSource',
          exaggeration: 1,
        })
      )

      map.current.on('move', () => {
        if (map.current) {
          const center = map.current.getCenter()
          setMapCenter([center.lng, center.lat])
          setMapZoom(map.current.getZoom())
        }
      })
    }

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (map.current) {
      map.current.setCenter([longitude, latitude])
      map.current.setZoom(zoom)
    }
  }, [latitude, longitude, zoom])

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div
        ref={mapContainer}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '54px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '8px 12px',
          borderRadius: '4px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          fontSize: '14px',
          fontFamily: 'Arial, sans-serif',
          zIndex: 1000,
        }}>
        <div>Longitude: {mapCenter[0].toFixed(4)}</div>
        <div>Latitude: {mapCenter[1].toFixed(4)}</div>
        <div>Zoom: {mapZoom.toFixed(2)}</div>
      </div>
    </div>
  )
}
