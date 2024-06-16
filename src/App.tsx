import Mapbox from '@/components/MapBox'

const App = () => {
  return (
    <main
      style={{
        marginTop: -20,
      }}>
      <Mapbox latitude={35.6809591} longitude={139.7673068} zoom={9} />
    </main>
  )
}

export default App
