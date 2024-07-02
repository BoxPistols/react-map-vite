import maplibregl from 'maplibre-gl'
import { useEffect, useRef, useState } from 'react'
import 'maplibre-gl/dist/maplibre-gl.css'

const MapLibre = () => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<maplibregl.Map | null>(null)
  const [lng] = useState(139.767)
  const [lat] = useState(35.6814)
  const [zoom] = useState(9)

  useEffect(() => {
    if (map.current) return // マップが既に初期化されている場合は何もしない
    if (mapContainer.current) {
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: 'https://demotiles.maplibre.org/style.json', // デモタイルのスタイルを使用
        center: [lng, lat],
        zoom: zoom,
      })
    }
  }, [lng, lat, zoom])

  return <div ref={mapContainer} style={{ width: '100vw', height: '100vh' }} />
}

export default MapLibre
