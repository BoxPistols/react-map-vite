// src/layouts/header/index.tsx
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'

interface HeaderProps {
  toggleDrawer: () => void
  open: boolean
}

export const Header = ({ toggleDrawer, open }: HeaderProps) => {
  return (
    <AppBar
      position='fixed'
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label={open ? 'close drawer' : 'open drawer'}
          onClick={toggleDrawer}
          edge='start'
          sx={{
            marginRight: 2,
            marginLeft: -1,
            transition: 'transform 0.2s ease-in-out',
            transform: open ? 'rotate(0deg)' : 'rotate(-180deg)', // 矢印の向きを調整
          }}>
          <MenuOpenIcon />
        </IconButton>
        <Typography
          variant='h1'
          noWrap
          component='div'
          sx={{
            flexGrow: 1,
            fontWeight: 500,
          }}>
          Map App
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
