import { Typography } from '@mui/material'

import MainGrid from '@/components/MainGrid'

type WifiPageProps = object

const WifiPage: React.FC<WifiPageProps> = () => {
  return (
    <MainGrid overview='Wifi'>
      <Typography>This is Wifi Page</Typography>
    </MainGrid>
  )
}

export default WifiPage
