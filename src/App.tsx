import { LAYOUT_CONSTANTS, getLayoutValue } from '@/constants/layout'
import { useSidebarState } from '@/hooks/useSidebarState'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import {
  Box,
  ClickAwayListener,
  IconButton,
  MenuItem,
  Select,
} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

import 'maplibre-gl/dist/maplibre-gl.css'
import ThemeProvider from '@mui/system/ThemeProvider/ThemeProvider'
import { useEffect, useRef, useState } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom'

import DashboardPage from './pages/DashboardPage'
import InboxPage from './pages/InboxPage'
import MapPage from './pages/MapPage'
import NaviPage from './pages/NaviPage'
import WifiPage from './pages/WifiPage'

import { hookUseTheme } from '@/hooks/useTheme'
import { Header } from '@/layouts/header'
import { SideNav } from '@/layouts/sideNav'

const AppContent = () => {
  const { mode, setMode, theme } = hookUseTheme()
  const { open: sideNavOpen, toggleDrawer } = useSidebarState(true)
  const [isSettingDrawerOpen, setIsSettingDrawerOpen] = useState(false)

  const [selectOpen, setSelectOpen] = useState(false)
  const iconButtonRef = useRef<HTMLButtonElement>(null)

  const location = useLocation()

  useEffect(() => {
    // ページが変わるたびにDrawerを閉じる
    setIsSettingDrawerOpen(false)
  }, [location])

  // サイドナビの横幅を計算
  const sideNavWidth = sideNavOpen
    ? LAYOUT_CONSTANTS.SIDEBAR.WIDTH_OPENED
    : LAYOUT_CONSTANTS.SIDEBAR.WIDTH_CLOSED

  // SettingDrawer の横幅
  const settingDrawerWidth = LAYOUT_CONSTANTS.SETTING_DRAWER.WIDTH

  // サイドナビと SettingDrawer の横幅の合計
  const totalDrawerWidth =
    sideNavWidth + (isSettingDrawerOpen ? settingDrawerWidth : 0)

  const handleClickAway = () => {
    setSelectOpen(false)
  }

  const commonClassName = 'ml-2 text-xs font-semibold hidden sm:inline-block'

  const getThemeIcon = () => {
    switch (mode) {
      case 'light':
        return (
          <>
            <Brightness7Icon fontSize='small' />
            <div className={commonClassName}>Light</div>
          </>
        )
      case 'dark':
        return (
          <>
            <Brightness4Icon fontSize='small' />
            <div className={commonClassName}>Dark</div>
          </>
        )
      case 'system':
        return (
          <>
            <SettingsBrightnessIcon fontSize='small' />
            <div className={`${commonClassName} whitespace-nowrap`}>OS</div>
          </>
        )
      default:
        return null
    }
  }

  const sharedProps = {
    sideNavWidth,
    settingDrawerWidth,
    isSettingDrawerOpen,
    toggleSettingDrawer: () => setIsSettingDrawerOpen(!isSettingDrawerOpen),
    totalDrawerWidth,
    sideNavOpen,
  }

  return (
    <>
      <SideNav open={sideNavOpen} width={sideNavWidth} />

      <Header toggleDrawer={toggleDrawer} open={sideNavOpen} />

      <Box
        sx={{
          paddingLeft: getLayoutValue(totalDrawerWidth),
          transition: 'padding-left 0.3s',
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box>
            <IconButton
              className='fixed top-3 right-3 z-100 rounded-md'
              ref={iconButtonRef}
              onClick={() => setSelectOpen(!selectOpen)}
              sx={{
                zIndex: theme.zIndex.appBar,
                border: '1px solid',
                borderColor: theme.palette.text.primary,
                width: '100px',
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.paper,
                '&:hover': {
                  opacity: 0.8,
                  transition: '0.3s',
                },
              }}>
              {getThemeIcon()}
            </IconButton>
            <Select
              open={selectOpen}
              onClose={() => setSelectOpen(false)}
              value={mode || 'light'}
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
              <MenuItem value='light'>Light</MenuItem>
              <MenuItem value='dark'>Dark</MenuItem>
              <MenuItem value='system'>OS System</MenuItem>
            </Select>
          </Box>
        </ClickAwayListener>

        <Routes>
          <Route path='/' element={<DashboardPage {...sharedProps} />} />
          <Route path='/map' element={<MapPage {...sharedProps} />} />
          <Route path='/navi' element={<NaviPage {...sharedProps} />} />
          <Route path='/wifi' element={<WifiPage {...sharedProps} />} />
          <Route path='/inbox' element={<InboxPage {...sharedProps} />} />
        </Routes>
      </Box>
    </>
  )
}

const App = () => {
  const { theme } = hookUseTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}

export default App
