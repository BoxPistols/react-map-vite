import { useSidebarState } from '@/hooks/useSidebarState' // 新しく追加
import { hookUseTheme } from '@/hooks/useTheme'
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
  // useMediaQuery,
} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { useRef, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import InboxPage from './pages/InboxPage'
import MapPage from './pages/MapPage'
import NaviPage from './pages/NaviPage'
import WifiPage from './pages/WifiPage'
import 'maplibre-gl/dist/maplibre-gl.css'
import { LAYOUT_CONSTANTS, getLayoutValue } from '@/constants/layout'

const App = () => {
  const { mode, setMode, theme } = hookUseTheme()
  const { open, toggleDrawer } = useSidebarState(true) // カスタムフックを使用
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const [selectOpen, setSelectOpen] = useState(false)
  const iconButtonRef = useRef<HTMLButtonElement>(null)

  const toggleSelect = () => {
    setSelectOpen((prev) => !prev)
  }

  const handleClickAway = () => {
    setSelectOpen(false)
  }

  const InnerWidth = open
    ? getLayoutValue(LAYOUT_CONSTANTS.SIDEBAR.WIDTH_OPENED)
    : 20

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
            <div className={`${commonClassName} whitespace-nowrap`}>
              {/* OS / {prefersDarkMode ? 'Dark' : 'Light'} */}
              OS
            </div>
          </>
        )
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <SideNav open={open} />
        <Header toggleDrawer={toggleDrawer} open={open} />
        <Box
          sx={{
            paddingLeft: InnerWidth,
            transition: 'padding 0.3s',
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          }}>
          <ClickAwayListener onClickAway={handleClickAway}>
            <Box>
              <IconButton
                className='fixed top-3 right-3 z-100 rounded-md'
                ref={iconButtonRef}
                onClick={toggleSelect}
                sx={{
                  zIndex: theme.zIndex.appBar,
                  border: '1px solid',
                  // borderColor: theme.palette.grey[600],
                  borderColor: theme.palette.text.primary,
                  width: '100px',
                  color: theme.palette.text.primary,
                  backgroundColor: theme.palette.background.paper,
                  // hover
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
                <MenuItem value='system'>
                  {/* {theme.palette.mode === 'dark' ? 'Dark' : 'Light'} / OS
                  Setting */}
                  OS System
                </MenuItem>
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
    </ThemeProvider>
  )
}

export default App
