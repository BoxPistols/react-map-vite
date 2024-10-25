import { Box, Drawer } from '@mui/material'
import type { ReactNode } from 'react'

interface SettingDrawerProps {
  drawerOpen: boolean
  width?: number
  left?: number
  top?: number
  children: ReactNode
}

export const SettingDrawer = ({
  drawerOpen,
  children,
  width = 300,
  left,
  top = 64,
}: SettingDrawerProps) => {
  return (
    <Drawer
      variant='persistent'
      anchor='left'
      open={drawerOpen}
      sx={{
        '& .MuiDrawer-paper': {
          position: 'fixed',
          py: 8,
          px: 4,
          width: width,
          left: left,
          top: top,
          opacity: 0.9,
        },
      }}>
      <Box sx={{ p: 3 }}>{children}</Box>
    </Drawer>
  )
}
