// src/components/MainGrid.tsx
// import { SettingDrawer } from '@/components/SettingDrawer'
import { LAYOUT_CONSTANTS, getLayoutValue } from '@/constants/layout'
import { useSidebarState } from '@/hooks/useSidebarState'
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar'
import {
  Box,
  Button,
  Container,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material'
import { type ReactNode, useMemo, useState } from 'react'

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

  return (
    <Container
      sx={{
        width: 'auto',
        height: `calc(100vh - ${getLayoutValue(LAYOUT_CONSTANTS.HEADER.HEIGHT)})`,
        marginTop: `${LAYOUT_CONSTANTS.HEADER.HEIGHT}px`,
        paddingTop: 4,
        paddingLeft: drawerLeft ? 24 : 0,
        transition: 'padding 0.3s ease-in-out',
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
            </>
          )}
        </Box>
      </Box>
    </Container>
  )
}
