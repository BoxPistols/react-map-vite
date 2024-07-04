import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'

type HeaderProps = {
  toggleDrawer: () => void
}

const Header = ({ toggleDrawer }: HeaderProps) => {
  return (
    <AppBar position='fixed'>
      <Toolbar sx={{ ml: 2 }}>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Typography variant='lg' ml={4} noWrap>
          Map App
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
