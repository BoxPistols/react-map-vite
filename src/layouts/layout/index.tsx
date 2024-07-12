import { Header } from '@/layouts/header'
import { SideNav } from '@/layouts/sideNav'
import { Box } from '@mui/material'

type LayoutProps = {
  open?: boolean
  onToggle?: () => void
}

const Layout = ({ open = false, onToggle }: LayoutProps) => {
  const handleToggle = onToggle || (() => console.log('Drawer toggled'))

  return (
    <Box sx={{ display: 'flex' }}>
      <Header toggleDrawer={handleToggle} />
      <SideNav open={open} />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: open ? '210px' : '64px',
          marginTop: '64px',
          transition: 'margin-left 0.3s',
        }}>
        Main Content Area
      </Box>
    </Box>
  )
}

export default Layout
