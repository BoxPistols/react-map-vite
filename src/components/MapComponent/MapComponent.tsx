// src/components/MapComponent/MapComponent.tsx
import React from 'react';
import { Map as ReactMapGL } from 'react-map-gl';

const MapComponent: React.FC = () => {
    const [viewState, setViewState] = React.useState({
        longitude: 139.6503, // 東京の経度
        latitude: 35.6762,  // 東京の緯度
        zoom: 10
    });

    return (
        <ReactMapGL
            {...viewState}
            width="100%"
            height="90vh"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onMove={evt => setViewState(evt.viewState)}
            mapboxApiAccessToken={import.meta.env.VITE_MAPBOX_TOKEN} // APIキーの設定
        />
    );
};

export default MapComponent;
