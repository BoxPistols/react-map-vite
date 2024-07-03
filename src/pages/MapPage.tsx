// import MapLibre from '@/components/MapLibre'
// import Mapbox from '@/components/MapBox'

import Map3D from '@/components/Map3D'
import { Box } from '@mui/material'

const MapPage = () => {
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: '54px',
          left: 0,
          width: '100%',
          height: '100vh',
        }}>
        {/* <MapLibre /> */}
        {/* <Mapbox latitude={35.6809591} longitude={139.7673068} zoom={9} /> */}
        <Map3D />
      </Box>
    </>
  )
}

export default MapPage
