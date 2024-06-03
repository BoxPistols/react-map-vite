import mapboxgl from 'mapbox-gl'
import { useEffect, useRef } from 'react'

type MapboxProps = {
  latitude: number // 緯度
  longitude: number // 経度
  zoom: number // ズームレベル
}

const Mapbox = ({ latitude, longitude, zoom }: MapboxProps) => {
  const mapContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mapContainer.current) {
      mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: zoom,
      })

      // マップコントロールを追加
      map.addControl(new mapboxgl.NavigationControl())

      // マップの初期化後の処理をここに追加
      // 例: マーカーの追加、イベントリスナーの設定など

      // クリーンアップ関数
      return () => {
        map.remove()
      }
    }
  }, [latitude, longitude, zoom])

  return (
    <div
      ref={mapContainer}
      id="mapContainer"
      style={{ width: '100vw', height: '100vh' }}
    />
  )
}

export default Mapbox
