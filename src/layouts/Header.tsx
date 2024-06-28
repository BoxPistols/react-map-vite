import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import type React from 'react'

type HeaderProps = {
  toggleDrawer: () => void
}

const Header: React.FC<HeaderProps> = ({ toggleDrawer }) => {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap>
          Map App
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
