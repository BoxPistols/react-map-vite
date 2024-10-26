import MainGrid from '@/components/MainGrid'
import type { PageProps } from '@/types/PageProps'
import { Typography } from '@mui/material'

const WifiPage = (_props: PageProps) => {
  return (
    <MainGrid overview='Wifi'>
      <Typography>This is Wifi Page</Typography>
    </MainGrid>
  )
}

export default WifiPage
