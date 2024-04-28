import './App.css';
import Mapbox from './components/MapBox';

function App() {

  return (
    <>
      <h1 className="text-4xl font-bold mb-8">React Mapbox GL</h1>
      <Mapbox
        latitude={35.6809591}
        longitude={139.7673068}
        zoom={9}
      />
    </>

  );
}

export default App; 