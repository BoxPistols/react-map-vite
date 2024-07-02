// import Mapbox from '@/components/MapBox'
import MapLibre from '@/components/MapLibre'

const MapPage = () => {
  return (
    <main
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        minWidth: '100vh',
        minHeight: '100vh',
      }}>
      {/* <Mapbox latitude={35.6809591} longitude={139.7673068} zoom={9} /> */}
      <MapLibre />
    </main>
  )
}

export default MapPage
