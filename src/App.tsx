import { Header } from '@/layouts/header'
import { SideNav } from '@/layouts/sideNav'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import {
  Box,
  ClickAwayListener,
  IconButton,
  MenuItem,
  Select,
  useTheme,
} from '@mui/material'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import 'maplibre-gl/dist/maplibre-gl.css'
import { useSynchronizedTheme } from '@/hooks/useTheme'
// import { useColorScheme } from '@mui/material/styles'
import { useRef, useState } from 'react'
import DashboardPage from './pages/DashboardPage'
import InboxPage from './pages/InboxPage'
import MapPage from './pages/MapPage'
import NaviPage from './pages/NaviPage'
import WifiPage from './pages/WifiPage'

const App = () => {
  const { mode, setMode, effectiveMode } = useSynchronizedTheme()
  const [open, setOpen] = useState<boolean>(true)
  const [selectOpen, setSelectOpen] = useState(false)
  const iconButtonRef = useRef<HTMLButtonElement>(null)

  const toggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const toggleSelect = () => {
    setSelectOpen((prev) => !prev)
  }

  const handleClickAway = () => {
    setSelectOpen(false)
  }

  const InnerWidth = open ? '240px' : '96px'

  // 下記の className='text-white ml-2 text-xs font-semibold hidden sm:inline-block'　を共通化
  const commonClassName =
    'text-white ml-2 text-xs font-semibold hidden sm:inline-block'

  const getThemeIcon = () => {
    switch (mode) {
      case 'light':
        return (
          <>
            <Brightness7Icon className='text-white' fontSize='small' />
            <div className={commonClassName}>Light</div>
          </>
        )
      case 'dark':
        return (
          <>
            <Brightness4Icon className='text-white' fontSize='small' />
            <div className={commonClassName}>Dark</div>
          </>
        )
      case 'system':
        return (
          <>
            <SettingsBrightnessIcon className='text-white' fontSize='small' />
            <div className={commonClassName}>System</div>
          </>
        )
    }
  }

  const theme = useTheme()

  return (
    <Router>
      <SideNav open={open} />
      <Header toggleDrawer={toggleDrawer} />
      <Box
        sx={{
          paddingLeft: InnerWidth,
          marginTop: 12,
          transition: 'padding 0.3s',
        }}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box>
            <IconButton
              className={`fixed top-3 right-3 z-100 rounded-md
                ${
                  effectiveMode === 'dark'
                    ? 'bg-white bg-opacity-10 hover:bg-opacity-20'
                    : 'bg-black bg-opacity-10 hover:bg-opacity-20'
                }`}
              ref={iconButtonRef}
              onClick={toggleSelect}
              sx={{
                zIndex: theme.zIndex.appBar,
                border: '1px solid',
                borderColor: theme.palette.grey[600],
                width: '100px',
              }}>
              {getThemeIcon()}
            </IconButton>
            <Select
              open={selectOpen}
              onClose={() => setSelectOpen(false)}
              value={mode}
              onChange={(event) => {
                setMode(event.target.value as 'system' | 'light' | 'dark')
                setSelectOpen(false)
              }}
              sx={{ display: 'none' }}
              MenuProps={{
                anchorEl: iconButtonRef.current,
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'right',
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
              }}>
              <MenuItem value='system'>System</MenuItem>
              <MenuItem value='light'>Light</MenuItem>
              <MenuItem value='dark'>Dark</MenuItem>
            </Select>
          </Box>
        </ClickAwayListener>
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/map' element={<MapPage />} />
          <Route path='/navi' element={<NaviPage />} />
          <Route path='/wifi' element={<WifiPage />} />
          <Route path='/inbox' element={<InboxPage />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App
