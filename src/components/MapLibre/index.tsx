import maplibregl from 'maplibre-gl'
import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import 'maplibre-gl/dist/maplibre-gl.css'

interface MapLibreProps {
  latitude?: number
  longitude?: number
  zoom?: number
}

const MapLibre: React.FC<MapLibreProps> = ({
  latitude = 35.6814,
  longitude = 139.767,
  zoom = 9,
}) => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<maplibregl.Map | null>(null)
  const [lng, setLng] = useState(longitude)
  const [lat, setLat] = useState(latitude)
  const [zoomLevel, setZoomLevel] = useState(zoom)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (map.current) return // マップが既に初期化されている場合は何もしない
    if (mapContainer.current) {
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: 'https://demotiles.maplibre.org/style.json', // デモタイルのスタイルを使用
        center: [longitude, latitude],
        zoom: zoom,
      })

      map.current.on('move', () => {
        if (map.current) {
          const center = map.current.getCenter()
          setLng(Number(center.lng.toFixed(4)))
          setLat(Number(center.lat.toFixed(4)))
          setZoomLevel(Number(map.current.getZoom().toFixed(2)))
        }
      })
    }
  }, []) // 初期化時のみ実行

  useEffect(() => {
    if (map.current) {
      map.current.setCenter([longitude, latitude])
      map.current.setZoom(zoom)
    }
    setLng(longitude)
    setLat(latitude)
    setZoomLevel(zoom)
  }, [latitude, longitude, zoom]) // propsの変更を監視

  return (
    <div>
      <div ref={mapContainer} style={{ width: '100vw', height: '100vh' }} />
      <div
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          padding: '10px',
          borderRadius: '4px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '14px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}>
        Longitude: {lng.toFixed(4)} | Latitude: {lat.toFixed(4)} | Zoom:{' '}
        {zoomLevel.toFixed(2)}
      </div>
    </div>
  )
}

export default MapLibre
