import { Typography } from '@mui/material'

import MainGrid from '@/components/MainGrid'
import type { PageProps } from '@/types/type'

const WifiPage = (_props: PageProps) => {
  return (
    <MainGrid overview='Wifi'>
      <Typography>This is Wifi Page</Typography>
    </MainGrid>
  )
}

export default WifiPage
