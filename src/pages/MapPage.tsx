import MainGrid from '@/components/MainGrid'
import { Map3D } from '@/components/Map3D'
import { Box } from '@mui/material'
import { Button, TextField, Typography } from '@mui/material'
const MapPage = () => {
  // ドロワーに表示するフォームコンテンツ
  const formContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant='h6'>Add New Item</Typography>
      <TextField label='Name' fullWidth />
      <TextField label='Description' fullWidth multiline rows={4} />
      <Button variant='contained' color='primary'>
        Submit
      </Button>
    </Box>
  )

  return (
    <MainGrid overview='Map' drawerContent={formContent}>
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
    </MainGrid>
  )
}

export default MapPage
