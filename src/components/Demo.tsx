import { MoveToInbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material'

import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material'
import { useEffect, useState } from 'react'

const closedWidth = 60
const openWidth = 240
const settingDrawerWidth = 300

const SideNavDrawer = styled(Drawer)(({ theme }) => ({
  flexShrink: 0,
  whiteSpace: 'nowrap',
  '& .MuiDrawer-paper': {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: closedWidth,
  },
  '&.open .MuiDrawer-paper': {
    width: openWidth,
  },
}))

const SettingDrawerStyled = styled(Drawer)(({ theme }) => ({
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: settingDrawerWidth,
    position: 'fixed',
    transition: theme.transitions.create(['transform', 'left'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}))

export default function AggregatedDrawer() {
  const [isSideNavOpen, setSideNavOpen] = useState(false)
  const [isSettingDrawerOpen, setSettingDrawerOpen] = useState(false)
  const [sideNavWidth, setSideNavWidth] = useState(closedWidth)

  useEffect(() => {
    setSideNavWidth(isSideNavOpen ? openWidth : closedWidth)
  }, [isSideNavOpen])

  const totalDrawerWidth =
    sideNavWidth + (isSettingDrawerOpen ? settingDrawerWidth : 0)

  const toggleSideNav = () => {
    setSideNavOpen(!isSideNavOpen)
  }

  const toggleSettingDrawer = () => {
    setSettingDrawerOpen(!isSettingDrawerOpen)
  }

  const sideNavList = (
    <Box>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: isSideNavOpen ? 'initial' : 'center',
                px: 2.5,
              }}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isSideNavOpen ? 3 : 'auto',
                  justifyContent: 'center',
                }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              {isSideNavOpen && <ListItemText primary={text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const settingDrawerContent = (
    <Box>
      {/* 設定ドロワーの内容 */}
      <h2>設定ドロワー</h2>
      {/* フォームやその他のコンテンツをここに配置 */}
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      {/* サイドナビ */}
      <SideNavDrawer
        variant='permanent'
        className={isSideNavOpen ? 'open' : ''}
        PaperProps={{
          style: { width: sideNavWidth },
        }}>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          p={1}>
          <Button onClick={toggleSideNav}>
            {isSideNavOpen ? '閉じる' : '開く'}
          </Button>
        </Box>
        <Divider />
        {sideNavList}
      </SideNavDrawer>

      {/* 設定ドロワー */}
      {isSettingDrawerOpen && (
        <SettingDrawerStyled
          variant='persistent'
          anchor='left'
          open={isSettingDrawerOpen}
          PaperProps={{
            style: { left: sideNavWidth },
          }}>
          {settingDrawerContent}
        </SettingDrawerStyled>
      )}

      {/* 設定ドロワーのトリガーボタン */}
      <Button
        onClick={toggleSettingDrawer}
        sx={{
          position: 'fixed',
          left: sideNavWidth + (isSettingDrawerOpen ? settingDrawerWidth : 0),
          top: 0,
          zIndex: 1300,
        }}>
        {isSettingDrawerOpen ? '設定を隠す' : '設定を表示'}
      </Button>

      {/* メインコンテンツ */}
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: `${totalDrawerWidth}px`,
          transition: (theme) =>
            theme.transitions.create('margin-left', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
        }}>
        <h1>メインコンテンツエリア</h1>
        {/* 他のコンテンツをここに配置 */}
      </Box>
    </Box>
  )
}
