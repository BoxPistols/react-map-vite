// src/components/MainGrid.tsx
import { LAYOUT_CONSTANTS, getLayoutValue } from '@/constants/layout'
import { useSidebarState } from '@/hooks/useSidebarState'
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar'
import {
  Box,
  Drawer,
  // Grid,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { type ReactNode, useMemo, useState } from 'react'

const WorkDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: getLayoutValue(LAYOUT_CONSTANTS.RIGHT_DRAWER.WIDTH),
    // height: `calc(100% - ${getLayoutValue(LAYOUT_CONSTANTS.HEADER.HEIGHT)})`,
    top: getLayoutValue(LAYOUT_CONSTANTS.HEADER.HEIGHT),
    left: getLayoutValue(LAYOUT_CONSTANTS.SIDEBAR.WIDTH_OPENED) ? '240px' : '0',
    borderLeft: `1px solid ${theme.palette.divider}`,
    backdropFilter: 'blur(8px)',
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(18, 18, 18, 0.75)'
        : 'rgba(255, 255, 255, 0.7)',
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
    <Box
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
              <Tooltip title={drawerOpen ? 'Close drawer' : 'Open drawer'}>
                <IconButton
                  onClick={toggleDrawer}
                  size='large'
                  sx={{
                    position: 'fixed',
                    left: 4,
                    bottom: theme.spacing(3),
                    zIndex: theme.zIndex.drawer + 1,
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    transition: 'all 0.3s ease-in-out',
                    transform: drawerOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                    boxShadow: theme.shadows[2],
                  }}>
                  <ViewSidebarIcon />
                </IconButton>
              </Tooltip>

              <WorkDrawer
                variant='persistent'
                anchor='left'
                open={drawerOpen}
                sx={{
                  '& .MuiDrawer-paper': {
                    position: 'fixed',
                    // left: `${drawerLeft}px`,
                    left: `${LAYOUT_CONSTANTS.SIDEBAR.WIDTH_CLOSED}px`,
                    width: `${LAYOUT_CONSTANTS.RIGHT_DRAWER.WIDTH}px`,
                    top: `${LAYOUT_CONSTANTS.HEADER.HEIGHT}px`,
                    boxShadow: theme.shadows[4],
                    p: 4,
                    // backgroundColor: 'teal',
                  },
                }}>
                <Box sx={{ p: 3 }}>{drawerContent}</Box>
              </WorkDrawer>
            </>
          )}
        </Box>
      </Box>
    </Box>
  )
}
