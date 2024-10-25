import MainGrid from '@/components/MainGrid'
import type { PageProps } from '@/types/PageProps'
import { Typography } from '@mui/material'

const NaviPage = (_props: PageProps) => {
  return (
    <MainGrid overview='Navi'>
      <Typography>This is Navi Page</Typography>
    </MainGrid>
  )
}

export default NaviPage
