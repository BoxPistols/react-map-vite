import { Header } from '@/layouts/header'
import { SideNav } from '@/layouts/sideNav'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import {
  Box,
  ClickAwayListener,
  FormControlLabel,
  IconButton,
  MenuItem,
  Select,
  Switch,
  useMediaQuery,
  useTheme as useMuiTheme,
} from '@mui/material'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import 'maplibre-gl/dist/maplibre-gl.css'
import { useTheme as hookUseTheme } from '@/hooks/useTheme'
import { useEffect, useRef, useState } from 'react'
import DashboardPage from './pages/DashboardPage'
import InboxPage from './pages/InboxPage'
import MapPage from './pages/MapPage'
import NaviPage from './pages/NaviPage'
import WifiPage from './pages/WifiPage'

const App = () => {
  const { mode, setMode, effectiveMode, config, setThemeConfig } =
    hookUseTheme()
  const muiTheme = useMuiTheme()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const [open, setOpen] = useState<boolean>(true)
  const [selectOpen, setSelectOpen] = useState(false)
  const iconButtonRef = useRef<HTMLButtonElement>(null)

  // デバッグ用のuseEffect
  useEffect(() => {
    console.log('Current config:', config)
    console.log(
      'localStorage themeConfig:',
      localStorage.getItem('themeConfig')
    )
  }, [config])

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
            <div className={`${commonClassName} whitespace-nowrap`}>
              OS / {prefersDarkMode ? 'Dark' : 'Light'}
            </div>
          </>
        )
    }
  }

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
                zIndex: muiTheme.zIndex.appBar,
                border: '1px solid',
                borderColor: muiTheme.palette.grey[600],
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
              <MenuItem value='light'>Light</MenuItem>
              <MenuItem value='dark' disabled={!config.allowDarkMode}>
                Dark
              </MenuItem>
              <MenuItem value='system' disabled={!config.allowDarkMode}>
                {prefersDarkMode ? 'Dark' : 'Light'} / OS Setting
              </MenuItem>
              <MenuItem>
                <FormControlLabel
                  control={
                    <Switch
                      checked={config.allowDarkMode}
                      onChange={(e) => {
                        setThemeConfig({ allowDarkMode: e.target.checked })
                        if (!e.target.checked && mode !== 'light') {
                          setMode('light')
                        }
                      }}
                    />
                  }
                  label='Dark Modeの許可'
                />
              </MenuItem>{' '}
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
