import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

const Mapbox = () => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const [lng, _setLng] = useState(139.7673068); // 初期経度
    const [lat, _setLat] = useState(35.6809591); // 初期緯度
    const [zoom, _setZoom] = useState(9); // 初期ズームレベル

    useEffect(() => {
        if (mapContainer.current) {
            mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [lng, lat],
                zoom: zoom,
            });

            // マップコントロールを追加
            map.addControl(new mapboxgl.NavigationControl());

            // マップの初期化後の処理をここに追加
            // 例: マーカーの追加、イベントリスナーの設定など

            // クリーンアップ関数
            return () => {
                map.remove();
            };
        }
    }, [lng, lat, zoom]);

    return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
};

export default Mapbox;