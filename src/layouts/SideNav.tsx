import { Drawer, DrawerHeader } from '@/layouts/util'
import { MoveToInbox as InboxIcon } from '@mui/icons-material'
import ConnectingAirportsSharpIcon from '@mui/icons-material/ConnectingAirportsSharp'
import DashboardIcon from '@mui/icons-material/Dashboard'
import HomeIcon from '@mui/icons-material/Home'
import WifiSharpIcon from '@mui/icons-material/WifiSharp'
import { List } from '@mui/material'

import { Link } from 'react-router-dom'

type SideNavProps = {
  open: boolean
}

export const SideNav = ({ open }: SideNavProps) => {
  const classNavi = 'text-white py-2 current pl-4 hover:bg-gray-600'
  const classNaviActive = `${open ? 'ml-2' : 'hidden'}`

  return (
    <>
      <Drawer
        variant='permanent'
        open={open}
        sx={{
          '& .MuiDrawer-paper': {
            width: open ? '240px' : '64px',
            transition: 'width 0.3s',
          },
        }}>
        <List>
          <nav className='grid grid-cols-1 gap-1'>
            <Link to='/' className={classNavi}>
              <HomeIcon />
              <span className={classNaviActive}>Home</span>
            </Link>
            <Link to='/dashboard' className={classNavi}>
              <DashboardIcon />
              <span className={classNaviActive}>Dashboard</span>
            </Link>
            <Link to='/navi' className={classNavi}>
              <ConnectingAirportsSharpIcon />
              <span className={classNaviActive}>Navi</span>
            </Link>
            <Link to='/wifi' className={classNavi}>
              <WifiSharpIcon />
              <span className={classNaviActive}>Wifi</span>
            </Link>
            <Link to='/inbox' className={classNavi}>
              <InboxIcon />
              <span className={classNaviActive}>Inbox</span>
            </Link>
          </nav>
        </List>
      </Drawer>
      <DrawerHeader />
    </>
  )
}
