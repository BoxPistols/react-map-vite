import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt'
import LocationOffIcon from '@mui/icons-material/LocationOff'
import { Box, Fab, Typography, Zoom, useTheme } from '@mui/material'
import type React from 'react'

interface MobilePinModeToggleProps {
  isPinMode: boolean
  onToggle: () => void
}

/**
 * Floating action button to toggle pin placement mode
 * Shows clear visual indicator when pin mode is active
 */
export const MobilePinModeToggle: React.FC<MobilePinModeToggleProps> = ({
  isPinMode,
  onToggle,
}) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 90,
        right: 16,
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
      }}>
      {/* Mode indicator label */}
      <Zoom in={isPinMode}>
        <Typography
          variant='caption'
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            px: 1.5,
            py: 0.5,
            borderRadius: 2,
            fontWeight: 600,
            boxShadow: 2,
          }}>
          ピンモード ON
        </Typography>
      </Zoom>

      {/* Toggle button */}
      <Fab
        color={isPinMode ? 'primary' : 'default'}
        onClick={onToggle}
        sx={{
          boxShadow: isPinMode ? 6 : 3,
          transition: 'all 0.3s ease',
          transform: isPinMode ? 'scale(1.1)' : 'scale(1)',
          '&:active': {
            transform: 'scale(0.95)',
          },
        }}
        aria-label={isPinMode ? 'ピンモード解除' : 'ピンモード開始'}>
        {isPinMode ? <LocationOffIcon /> : <AddLocationAltIcon />}
      </Fab>

      {/* Help text when not in pin mode */}
      {!isPinMode && (
        <Typography
          variant='caption'
          sx={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            color: 'white',
            px: 1,
            py: 0.5,
            borderRadius: 1,
            fontSize: '0.7rem',
          }}>
          長押しでピン追加
        </Typography>
      )}
    </Box>
  )
}
