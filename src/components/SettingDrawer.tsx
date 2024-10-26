// SettingDrawer.tsx
import { Box, Drawer } from '@mui/material'
import type { ReactNode } from 'react'

interface SettingDrawerProps {
  drawerOpen: boolean
  width?: number
  left?: number
  top?: number
  isOverlay?: boolean // 上から覆いかぶせるスタイルかどうか
  children: ReactNode
}

export const SettingDrawer = ({
  drawerOpen,
  children,
  width = 300,
  left = 0,
  top = 64,
  isOverlay = false,
}: SettingDrawerProps) => {
  return (
    <Drawer
      variant='persistent'
      anchor='left'
      open={drawerOpen}
      sx={{
        '& .MuiDrawer-paper': {
          position: isOverlay ? 'absolute' : 'fixed',
          py: 8,
          px: 4,
          width: width,
          left: left,
          top: top,
          opacity: 0.9,
          transition: 'left 0.3s',
          ...(isOverlay && { zIndex: 1200 }), // isOverlayの時のみzIndexを設定
        },
      }}>
      <Box sx={{ p: 3 }}>{children}</Box>
    </Drawer>
  )
}
