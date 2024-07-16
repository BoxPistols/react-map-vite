import { Header } from '@/layouts/header'
import { SideNav } from '@/layouts/sideNav'
import DashboardPage from '@/pages/DashboardPage'
import InboxPage from '@/pages/InboxPage'
import MapPage from '@/pages/MapPage'
import NaviPage from '@/pages/NaviPage'
import WifiPage from '@/pages/WifiPage'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { Box, IconButton, type Theme, Typography } from '@mui/material'
import type React from 'react'
import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import 'maplibre-gl/dist/maplibre-gl.css'

interface AppProps {
  currentTheme: Theme
  toggleTheme: () => void
}

const App: React.FC<AppProps> = ({ currentTheme, toggleTheme }) => {
  const [open, setOpen] = useState<boolean>(true)

  const toggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const InnerWidth = open ? '240px' : '96px'

  return (
    <Router>
      <SideNav open={open} />
      <Header toggleDrawer={toggleDrawer} />
      <Box
        sx={{
          paddingLeft: InnerWidth,
          marginTop: 20,
        }}>
        <main>
          <IconButton
            onClick={toggleTheme}
            sx={{
              position: 'fixed',
              top: 10,
              right: 10,
              zIndex: 10000,
              bgcolor:
                currentTheme.palette.mode === 'dark'
                  ? 'rgba(255,255,255,0.1)'
                  : 'rgba(0,0,0,0.1)',
              '&:hover': {
                bgcolor:
                  currentTheme.palette.mode === 'dark'
                    ? 'rgba(255,255,255,0.2)'
                    : 'rgba(0,0,0,0.2)',
              },
            }}>
            {currentTheme.palette.mode === 'dark' ? (
              <Brightness7Icon
                sx={{ color: currentTheme.palette.common.white }}
              />
            ) : (
              <Brightness4Icon
                sx={{ color: currentTheme.palette.common.white }}
              />
            )}
          </IconButton>
          <Routes>
            <Route path='/' element={<DashboardPage />} />
            <Route path='/map' element={<MapPage />} />
            <Route path='/navi' element={<NaviPage />} />
            <Route path='/wifi' element={<WifiPage />} />
            <Route path='/inbox' element={<InboxPage />} />
          </Routes>
        </main>
      </Box>
      <Box
        sx={{
          position: 'fixed',
          overflowY: 'hidden',
          bottom: 0,
          width: '100%',
          textAlign: 'center',
          backgroundColor: currentTheme.palette.grey[900],
          color: currentTheme.palette.grey[500],
          p: 0.5,
        }}>
        <footer>
          <Typography variant='xxs'>Copy right 2024 by Map App</Typography>
        </footer>
      </Box>
    </Router>
  )
}

export default App
