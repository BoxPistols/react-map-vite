import { LAYOUT_CONSTANTS, getLayoutValue } from '@/constants/layout'
import { useSidebarState } from '@/hooks/useSidebarState' // 新しく追加
import { hookUseTheme } from '@/hooks/useTheme'
import { Header } from '@/layouts/header'
import { SideNav } from '@/layouts/sideNav'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import {
  Box,
  Button,
  ClickAwayListener,
  IconButton,
  MenuItem,
  Select,
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
import { SettingDrawer } from './components/SettingDrawer'

const App = () => {
  const { mode, setMode, theme } = hookUseTheme()
  const { open, toggleDrawer } = useSidebarState(true) // カスタムフック
  const [isSettingDrawerOpen, setIsSettingDrawerOpen] = useState(false) // SettingDrawer の開閉状態

  const [selectOpen, setSelectOpen] = useState(false)
  const iconButtonRef = useRef<HTMLButtonElement>(null)

  // トリガーボタンのクリックで SettingDrawer の開閉を切り替える
  const toggleSettingDrawer = () => {
    setIsSettingDrawerOpen(!isSettingDrawerOpen)
  }

  // サイドナビの横幅を計算
  const sideNavWidth = open
    ? LAYOUT_CONSTANTS.SIDEBAR.WIDTH_OPENED
    : LAYOUT_CONSTANTS.SIDEBAR.WIDTH_CLOSED

  // SettingDrawer の横幅
  const settingDrawerWidth = LAYOUT_CONSTANTS.SETTING_DRAWER.WIDTH

  // サイドナビと SettingDrawer の横幅の合計
  const totalDrawerWidth =
    sideNavWidth + (isSettingDrawerOpen ? settingDrawerWidth : 0)

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
            <div className={`${commonClassName} whitespace-nowrap`}>OS</div>
          </>
        )
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <SideNav open={open} width={sideNavWidth} />

        <Header toggleDrawer={toggleDrawer} open={open} />

        <SettingDrawer
          drawerOpen={isSettingDrawerOpen}
          width={settingDrawerWidth}
          left={sideNavWidth}
          top={LAYOUT_CONSTANTS.HEADER.HEIGHT}>
          {/* SettingDrawer の内容 */}
          <Box>
            <h2>Setting Drawer Content</h2>
            {/* 他のコンテンツ */}
          </Box>
        </SettingDrawer>

        {/* トリガーボタン */}
        <Button
          variant='contained'
          color='primary'
          onClick={toggleSettingDrawer}
          size='small'
          sx={{
            position: 'fixed',
            top: LAYOUT_CONSTANTS.HEADER.HEIGHT + 8,
            left: totalDrawerWidth - 8,
            zIndex: theme.zIndex.drawer + 1,
            minWidth: '24px !important',
            height: '44px !important',
          }}>
          {isSettingDrawerOpen ? '＜' : '＞'}
        </Button>

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
