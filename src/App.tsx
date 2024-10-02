import { Header } from '@/layouts/header'
import { SideNav } from '@/layouts/sideNav'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { Box, IconButton, MenuItem, Select } from '@mui/material' // Select, MenuItemを追加
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import 'maplibre-gl/dist/maplibre-gl.css'
import { useColorScheme } from '@mui/material/styles' // useColorSchemeをインポート
import { useRef, useState } from 'react' // useRef と useState を使用
import DashboardPage from './pages/DashboardPage'
import InboxPage from './pages/InboxPage'
import MapPage from './pages/MapPage'
import NaviPage from './pages/NaviPage'
import WifiPage from './pages/WifiPage'

const App = () => {
  const { mode, setMode } = useColorScheme()
  const [open, setOpen] = useState<boolean>(true)
  const [selectOpen, setSelectOpen] = useState(false) // Select の開閉状態を管理
  const iconButtonRef = useRef<HTMLButtonElement>(null) // IconButton の位置を参照するための useRef

  const toggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const toggleSelect = () => {
    setSelectOpen((prev) => !prev) // Select の開閉状態をトグル
  }

  const InnerWidth = open ? '240px' : '96px'

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
        {/* テーマモードの選択UI */}
        <Box>
          {/* アイコンもテーマに応じて変更 */}
          <IconButton
            ref={iconButtonRef} // IconButton の位置を参照
            onClick={toggleSelect}
            sx={{
              position: 'fixed',
              top: 10,
              right: 10,
              zIndex: 10000,

              bgcolor:
                mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
              '&:hover': {
                bgcolor:
                  mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
              },
            }}>
            {mode === 'dark' ? (
              <Brightness7Icon sx={{ color: 'white' }} />
            ) : (
              <Brightness4Icon sx={{ color: 'white' }} />
            )}

            <Select
              open={selectOpen} // open 状態を制御
              onClose={() => setSelectOpen(false)} // 選択後に閉じる
              value={mode}
              onChange={(event) => {
                setMode(event.target.value as 'system' | 'light' | 'dark')
                setSelectOpen(false) // 選択後にメニューを閉じる
              }}
              sx={{ display: 'none' }} // 表示はさせないがプログラム的に開く
              MenuProps={{
                anchorEl: iconButtonRef.current, // IconButton をアンカーとして指定
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
          </IconButton>
        </Box>
        {/* Routes */}
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
