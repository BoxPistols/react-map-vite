// src/components/MainGrid.tsx
import { LAYOUT_CONSTANTS, getLayoutValue } from '@/constants/layout'
import { useSidebarState } from '@/hooks/useSidebarState'
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar'
import {
  Box,
  Button,
  Container,
  Drawer,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { type ReactNode, useMemo, useState } from 'react'

const WorkDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: getLayoutValue(LAYOUT_CONSTANTS.SETTING_DRAWER.WIDTH),
    // height: `calc(100% - ${getLayoutValue(LAYOUT_CONSTANTS.HEADER.HEIGHT)})`,
    top: getLayoutValue(LAYOUT_CONSTANTS.HEADER.HEIGHT),
    left: getLayoutValue(LAYOUT_CONSTANTS.SIDEBAR.WIDTH_OPENED) ? '240px' : '0',
    borderLeft: `1px solid ${theme.palette.divider}`,
    backdropFilter: 'blur(6px)',
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(18, 18, 18, 0.7)'
        : 'rgba(255, 255, 255, 0.6)',
    transition: 'all 0.3s ease-in-out',
  },
}))

interface MainGridProps {
  children?: ReactNode
  overview?: string
  drawerContent?: ReactNode
}

export default function MainGrid({
  children,
  overview,
  drawerContent,
}: MainGridProps) {
  const theme = useTheme()
  const { open: sidebarOpen } = useSidebarState(true)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  const drawerLeft = useMemo(() => {
    return sidebarOpen
      ? LAYOUT_CONSTANTS.SIDEBAR.WIDTH_OPENED
      : LAYOUT_CONSTANTS.SIDEBAR.WIDTH_CLOSED
  }, [sidebarOpen])

  console.log(drawerLeft)

  return (
    <Container
      sx={{
        width: 'auto',
        height: `calc(100vh - ${getLayoutValue(LAYOUT_CONSTANTS.HEADER.HEIGHT)})`,
        marginTop: `${LAYOUT_CONSTANTS.HEADER.HEIGHT}px`,
        paddingTop: 4,
        paddingLeft: drawerLeft ? 24 : 0,
        transition: 'padding 0.3s ease-in-out',
        // left: getLayoutValue(LAYOUT_CONSTANTS.SIDEBAR.WIDTH_OPENED),
      }}>
      <Box
        sx={{
          position: 'relative',
          p: 4,
          pr: 8,
        }}>
        <Box>
          <Typography variant='h2'>{overview}</Typography>
        </Box>

        <Box sx={{ position: 'relative' }}>
          {children}

          {drawerContent && (
            <>
              <Tooltip title={drawerOpen ? 'SettingClose' : 'Setting Open'}>
                <Box
                  sx={{
                    zIndex: theme.zIndex.drawer + 1,
                    pb: 2,
                  }}>
                  <Button
                    variant='contained'
                    onClick={toggleDrawer}
                    sx={{
                      position: 'fixed',
                      top: 12,
                      left: getLayoutValue(
                        LAYOUT_CONSTANTS.SIDEBAR.WIDTH_CLOSED + 120
                      ),
                      zIndex: theme.zIndex.drawer + 1,
                    }}>
                    <Typography variant='caption' color='white' pr={2}>
                      {overview} Setting
                    </Typography>
                    <ViewSidebarIcon />
                  </Button>
                </Box>
              </Tooltip>

              <WorkDrawer
                variant='persistent'
                anchor='left'
                open={drawerOpen}
                sx={{
                  '& .MuiDrawer-paper': {
                    position: 'fixed',
                    left: `${LAYOUT_CONSTANTS.SIDEBAR.WIDTH_CLOSED}px`,
                    width: `${LAYOUT_CONSTANTS.SETTING_DRAWER.WIDTH}px`,
                    top: `${LAYOUT_CONSTANTS.HEADER.HEIGHT}px`,
                    py: 8,
                    px: 4,
                    boxShadow: theme.shadows[4],
                  },
                }}>
                <Box sx={{ p: 3 }}>{drawerContent}</Box>
              </WorkDrawer>
            </>
          )}
        </Box>
      </Box>
    </Container>
  )
}
