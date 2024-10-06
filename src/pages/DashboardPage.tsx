import MainGrid from '@/components/MainGrid'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'

const DashboardPage = () => {
  return (
    <>
      <MainGrid overview='Dashboard'>
        <Typography>This is Dashboard Page</Typography>
        <Box display={{ xs: 'block', sm: 'flex' }} gap={4}>
          <Button>Click me</Button>
          <Button variant='contained' color='secondary'>
            Click me
          </Button>
        </Box>
      </MainGrid>
    </>
  )
}

export default DashboardPage
