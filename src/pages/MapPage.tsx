import MapLibre from '@/components/MapLibre'
// import Mapbox from '@/components/MapBox'

const MapPage = () => {
  return (
    <main
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: '100vh',
        height: '100vh',
      }}>
      <MapLibre />
      {/* <Mapbox latitude={35.6809591} longitude={139.7673068} zoom={9} /> */}
    </main>
  )
}

export default MapPage
