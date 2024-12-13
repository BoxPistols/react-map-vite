import { Header } from '@/layouts/header'
import { SideNav } from '@/layouts/sideNav'
import { Box } from '@mui/material'

type LayoutProps = {
  open?: boolean
  onToggle?: () => void
  sideNavWidth?: number
}

const Layout = ({
  open = false,
  onToggle,
  sideNavWidth = 160,
}: LayoutProps) => {
  const handleToggle = onToggle || (() => console.log('Drawer toggled'))

  return (
    <Box sx={{ display: 'flex' }}>
      <Header toggleDrawer={handleToggle} open={false} />
      <SideNav open={open} width={sideNavWidth} />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: open ? '32px' : 0,
          marginTop: '64px',
          // transition: 'margin-left 0.3s',
        }}>
        Main Content Area
      </Box>
    </Box>
  )
}

export default Layout
