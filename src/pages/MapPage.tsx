import { Map3D } from '@/components/Map3D'
import { Box } from '@mui/material'

const MapPage = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 64,
        left: 0,
        right: 0,
        bottom: 0,
        height: '100vh',
        width: '100vw',
      }}>
      <Map3D
        latitude={35.6809591}
        longitude={139.7673068}
        zoom={9}
        pitch={60}
        bearing={-20}
      />
    </Box>
  )
}

export default MapPage
