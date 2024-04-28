import Mapbox from "./components/MapBox";

function App() {
  return (
    <>
      <header>
        <h1
          className="text-2xl 
        px-4 
         font-bold py-2
          bg-gray-800
          text-white
          "
        >
          Map App
        </h1>
      </header>
      <Mapbox latitude={35.6809591} longitude={139.7673068} zoom={9} />
    </>
  );
}

export default App;
