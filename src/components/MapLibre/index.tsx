import maplibregl from 'maplibre-gl'
import { useEffect, useRef, useState } from 'react'
import 'maplibre-gl/dist/maplibre-gl.css'

interface MapLibreProps {
  latitude?: number
  longitude?: number
  zoom?: number
}

// biome-ignore lint/correctness/noUndeclaredVariables: <explanation>
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
        center: [lng, lat],
        zoom: zoomLevel,
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
  }, [])

  useEffect(() => {
    if (map.current) {
      map.current.setCenter([longitude, latitude])
      map.current.setZoom(zoom)
    }
  }, [latitude, longitude, zoom])

  return (
    <div>
      <div ref={mapContainer} style={{ width: '100vw', height: '100vh' }} />
      <div
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          backgroundColor: 'white',
          padding: '5px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '12px',
        }}>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoomLevel}
      </div>
    </div>
  )
}

export default MapLibre
