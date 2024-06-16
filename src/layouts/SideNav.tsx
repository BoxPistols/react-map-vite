import { List } from '@mui/material'

import App from '@/App'
import { MoveToInbox as InboxIcon } from '@mui/icons-material'
import { Drawer, DrawerHeader } from './util'

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
              <InboxIcon />
              <span className={classNaviActive}>Dashboard</span>
            </a>
            <a href='#foo' className={classNavi}>
              <InboxIcon />
              <span className={classNaviActive}>Navi</span>
            </a>
            <a href='#foo' className={classNavi}>
              <InboxIcon />
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
        className='fixed bottom-0 w-full bg-gray-800 text-white
      text-center text-xs py-1
      '>
        Copy right 2024 by Map App
      </footer>
    </>
  )
}
