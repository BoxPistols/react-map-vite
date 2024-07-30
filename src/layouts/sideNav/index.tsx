import { Drawer, DrawerHeader } from '@/layouts/util'

import { colorData } from '@/lib/themes/colorToken'
import { theme } from '@/lib/themes/theme'

import { MoveToInbox as InboxIcon } from '@mui/icons-material'
import ConnectingAirportsSharpIcon from '@mui/icons-material/ConnectingAirportsSharp'
import DashboardIcon from '@mui/icons-material/Dashboard'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined'
import WifiSharpIcon from '@mui/icons-material/WifiSharp'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'

import { Link } from 'react-router-dom'

type SideNavProps = {
  open: boolean
}

export const SideNav = ({ open }: SideNavProps) => {
  const navItems = [
    { to: '/', icon: <DashboardIcon />, text: 'Dashboard' },
    { to: '/map', icon: <RoomOutlinedIcon />, text: 'Map' },
    { to: '/navi', icon: <ConnectingAirportsSharpIcon />, text: 'Navi' },
    { to: '/wifi', icon: <WifiSharpIcon />, text: 'Wifi' },
    { to: '/inbox', icon: <InboxIcon />, text: 'Inbox' },
  ]

  return (
    <Drawer
      variant='permanent'
      open={open}
      sx={{
        '& .MuiDrawer-paper': {
          width: open ? '210px' : '64px',
          backgroundColor: theme.palette.grey[900],
          color: theme.palette.grey[200],
          overflowX: 'hidden',
          overflowY: 'auto',
          transition: 'width 0.3s',
          border: 'none',
        },
      }}>
      <DrawerHeader />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.to}
            component={Link}
            to={item.to}
            sx={{
              '&:hover': {
                backgroundColor: colorData.grey[700],
              },
            }}>
            <ListItemIcon
              sx={{
                minWidth: 'auto',
                marginBottom: '4px',
                color: colorData.grey[300],
              }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                opacity: open ? 1 : 0,
                transition: 'opacity 0.3s',
                marginLeft: '8px',
                '& .MuiListItemText-primary': {
                  fontSize: '0.8rem',
                  textAlign: 'left',
                  fontWeight: theme.typography.fontWeightBold,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
