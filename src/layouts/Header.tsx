import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'

type HeaderProps = {
  toggleDrawer: () => void
}

const Header = ({ toggleDrawer }: HeaderProps) => {
  return (
    <AppBar position='fixed'>
      <Toolbar sx={{ ml: 1.5 }}>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          onClick={toggleDrawer}>
          <MenuIcon sx={{ fontSize: 28 }} />
        </IconButton>
        <Typography variant='lg' noWrap>
          Map App
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
