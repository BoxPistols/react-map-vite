import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { Header } from '@/layouts/header'
import { SideNav } from '@/layouts/sideNav'
import DashboardPage from '@/pages/DashboardPage'
import InboxPage from '@/pages/InboxPage'
import MapPage from '@/pages/MapPage'
import NaviPage from '@/pages/NaviPage'
import WifiPage from '@/pages/WifiPage'

import { Box, Typography } from '@mui/material'
import { theme } from './lib/themes/theme'

import 'maplibre-gl/dist/maplibre-gl.css'

const App = () => {
  // TODO: LocalStorageで永続化
  const [open, setOpen] = useState<boolean>(true)

  const toggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const InnerWidth = open ? '240px' : '96px'

  return (
    <>
      <Router>
        <SideNav open={open} />
        <Header toggleDrawer={toggleDrawer} />
        <Box
          sx={{
            paddingLeft: InnerWidth,
            marginTop: 20,
          }}>
          <main>
            <Routes>
              <Route path='/' element={<DashboardPage />} />
              <Route path='/map' element={<MapPage />} />
              <Route path='/navi' element={<NaviPage />} />
              <Route path='/wifi' element={<WifiPage />} />
              <Route path='/inbox' element={<InboxPage />} />
            </Routes>
          </main>
        </Box>
      </Router>
      <Box
        sx={{
          position: 'fixed',
          overflowY: 'hidden',
          bottom: 0,
          width: '100%',
          textAlign: 'center',
          backgroundColor: theme.palette.grey[900],
          color: theme.palette.grey[500],
          p: 0.5,
        }}>
        <footer>
          <Typography variant='xxs'>Copy right 2024 by Map App</Typography>
        </footer>
      </Box>
    </>
  )
}

export default App
