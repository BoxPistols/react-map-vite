import { LAYOUT_CONSTANTS, getLayoutValue } from '@/constants/layout'
// import { useSidebarState } from '@/hooks/useSidebarState'
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar'
// src/components/MainGrid.tsx
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { type ReactNode, useState } from 'react'

const WorkDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: getLayoutValue(LAYOUT_CONSTANTS.RIGHT_DRAWER.WIDTH),
    height: '100%',
    left: 64,
    top: getLayoutValue(LAYOUT_CONSTANTS.HEADER.HEIGHT),
    borderLeft: `1px solid ${theme.palette.divider}`,
    backdropFilter: 'blur(8px)',
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(18, 18, 18, 0.8)'
        : 'rgba(255, 255, 255, 0.8)',
  },
}))

interface MainGridProps {
  children?: ReactNode
  overview?: string
  drawerContent?: ReactNode // ドロワーに表示するコンテンツ
}

export default function MainGrid({
  children,
  overview,
  drawerContent,
}: MainGridProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  // FIXME: SideBarと連動させる
  // const { open, setOpen } = useSidebarState(true) // カスタム

  return (
    <Box
      sx={{
        width: '100%',
        paddingTop: 24,
        paddingLeft: isDrawerOpen ? 64 : 32,
        maxWidth: { sm: '100%', md: '1700px' },
        minHeight: 'calc(100vh)',
        overflow: 'hidden',
      }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 2,
        }}>
        <Typography variant='h2'>{overview}</Typography>
        {drawerContent && (
          <Box sx={{}}>
            <Tooltip title={isDrawerOpen ? 'Close' : 'Open'}>
              <IconButton
                onClick={toggleDrawer}
                size='large'
                sx={{
                  color: 'white',
                  position: 'absolute',
                  // left: isDrawerOpen ? 72 : 72,
                  left: 4,
                  bottom: 0,
                  zIndex: 10001,
                  transition: 'transform 0.1s',
                  transform: isDrawerOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}>
                <ViewSidebarIcon />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      </Box>

      <Grid
        container
        spacing={2}
        columns={12}
        sx={{
          mb: (theme) => theme.spacing(2),
          transition: 'margin-right 0.3s ease-in-out',
          marginRight: isDrawerOpen
            ? getLayoutValue(LAYOUT_CONSTANTS.RIGHT_DRAWER.WIDTH)
            : 0,
        }}>
        <Grid item xs={12} sm={6} lg={3}>
          {children}
        </Grid>
      </Grid>

      {drawerContent && (
        <WorkDrawer
          variant='persistent'
          anchor='left'
          open={isDrawerOpen}
          sx={{
            transition: 'margin 0.3s ease-in-out',
          }}>
          <Box sx={{ p: 8 }}>{drawerContent}</Box>
        </WorkDrawer>
      )}
    </Box>
  )
}
