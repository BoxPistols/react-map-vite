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
  // Switch,
  // FormControlLabel,
  useMediaQuery,
} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { useEffect, useRef, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import InboxPage from './pages/InboxPage'
import MapPage from './pages/MapPage'
import NaviPage from './pages/NaviPage'
import WifiPage from './pages/WifiPage'
import 'maplibre-gl/dist/maplibre-gl.css'

const App = () => {
  // const { mode, setMode, config, setThemeConfig, theme } = hookUseTheme()
  const { mode, setMode, config, theme } = hookUseTheme()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const [open, setOpen] = useState<boolean>(true)
  const [selectOpen, setSelectOpen] = useState(false)
  const iconButtonRef = useRef<HTMLButtonElement>(null)

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <SideNav open={open} />
        <Header toggleDrawer={toggleDrawer} />
        <Box
          sx={{
            paddingLeft: InnerWidth,
            // marginTop: 24,
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
                  borderColor: theme.palette.grey[600],
                  width: '100px',
                  backgroundColor:
                    theme.palette.mode === 'dark'
                      ? 'rgba(255,255,255,0.1)'
                      : 'rgba(0,0,0,0.1)',
                  '&:hover': {
                    backgroundColor:
                      theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.2)'
                        : 'rgba(0,0,0,0.2)',
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
                <MenuItem value='dark' disabled={!config.allowDarkMode}>
                  Dark
                </MenuItem>
                <MenuItem value='system' disabled={!config.allowDarkMode}>
                  {theme.palette.mode === 'dark' ? 'Dark' : 'Light'} / OS
                  Setting
                </MenuItem>
                {/* <MenuItem>
                  <FormControlLabel
                    control={
                      <div aria-hidden='true'>
                        <Switch
                          checked={config.allowDarkMode}
                          onChange={(e) => {
                            setThemeConfig({ allowDarkMode: e.target.checked })
                            if (!e.target.checked && mode !== 'light') {
                              setMode('light')
                            }
                          }}
                          color='secondary'
                          sx={{
                            '& .MuiSwitch-thumb': {
                              color: theme.palette.common.white,
                            },
                          }}
                        />
                      </div>
                    }
                    label='Dark Modeの許可'
                  />
                </MenuItem> */}
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
