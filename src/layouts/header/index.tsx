// import { useTheme } from '@emotion/react'
import { theme } from '@/lib/themes/theme'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'

type HeaderProps = {
  toggleDrawer?: () => void
}

export const Header = ({ toggleDrawer }: HeaderProps) => {
  // const theme = useTheme()
  return (
    <AppBar
      position='fixed'
      sx={{
        backgroundColor: theme.palette.grey[800],
        zIndex: theme.zIndex.drawer,
      }}>
      <Toolbar sx={{ ml: 2 }}>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Typography variant='lg' ml={2} noWrap>
          Map App
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
