import { List } from '@mui/material'

import App from '@/App'
import { Drawer, DrawerHeader } from '@/layouts/util'
import { MoveToInbox as InboxIcon } from '@mui/icons-material'
import ConnectingAirportsSharpIcon from '@mui/icons-material/ConnectingAirportsSharp'
import DashboardIcon from '@mui/icons-material/Dashboard'
import WifiSharpIcon from '@mui/icons-material/WifiSharp'

type SideNavProps = {
  open: boolean
}

export const SideNav = ({ open }: SideNavProps) => {
  const classNavi = 'text-white py-2 current pl-4 hover:bg-gray-600'
  const classNaviActive = `${open ? 'ml-2' : 'hidden'}`

  return (
    <>
      <Drawer variant='permanent' open={open}>
        <List>
          <nav className='grid grid-cols-1 gap-1'>
            <a href='#foo' className={classNavi}>
              <DashboardIcon />
              <span className={classNaviActive}>Dashboard</span>
            </a>
            <a href='#foo' className={classNavi}>
              <ConnectingAirportsSharpIcon />
              <span className={classNaviActive}>Navi</span>
            </a>
            <a href='#foo' className={classNavi}>
              <WifiSharpIcon />
              <span className={classNaviActive}>Navi</span>
            </a>
            <a href='#foo' className={classNavi}>
              <InboxIcon />
              <span className={classNaviActive}>Navi</span>
            </a>
          </nav>
        </List>
      </Drawer>
      <DrawerHeader />
      {/* MAP */}
      <App />
      <footer
        className={`fixed bottom-0 bg-gray-800 text-white text-center text-xs py-1 transition-all duration-100 ${
          open
            ? 'ml-[180px] w-[calc(100%-180px)]'
            : 'ml-[64px] w-[calc(100%-64px)]'
        }`}>
        Copy right 2024 by Map App
      </footer>
    </>
  )
}
