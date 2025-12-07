import CloseIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import PlaceIcon from '@mui/icons-material/Place'
import SaveIcon from '@mui/icons-material/Save'
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Slide,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import { useState } from 'react'
import type React from 'react'

import type { PinLocation } from '@/hooks/usePinPlacementMode'

interface MobilePinResultProps {
  pin: PinLocation | null
  onClose: () => void
  onDelete: (id: string) => void
  onUpdateName: (id: string, name: string) => void
}

/**
 * Bottom sheet showing the result of a pin placement
 * Displays coordinates and allows naming the pin
 */
export const MobilePinResult: React.FC<MobilePinResultProps> = ({
  pin,
  onClose,
  onDelete,
  onUpdateName,
}) => {
  const theme = useTheme()
  const [isEditing, setIsEditing] = useState(false)
  const [editName, setEditName] = useState('')

  if (!pin) return null

  const handleStartEdit = () => {
    setEditName(pin.name || '')
    setIsEditing(true)
  }

  const handleSave = () => {
    onUpdateName(pin.id, editName)
    setIsEditing(false)
  }

  const handleDelete = () => {
    onDelete(pin.id)
    onClose()
  }

  return (
    <Slide direction='up' in={!!pin} mountOnEnter unmountOnExit>
      <Card
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          borderRadius: '16px 16px 0 0',
          boxShadow: '0 -4px 20px rgba(0,0,0,0.15)',
          maxHeight: '40vh',
          overflow: 'auto',
        }}>
        {/* Handle bar for drag gesture hint */}
        <Box
          sx={{
            width: 40,
            height: 4,
            backgroundColor: theme.palette.grey[300],
            borderRadius: 2,
            mx: 'auto',
            mt: 1,
          }}
        />

        <CardContent sx={{ pb: 3 }}>
          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 2,
            }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PlaceIcon color='primary' />
              <Typography variant='subtitle1' fontWeight={600}>
                ピンを追加しました
              </Typography>
            </Box>
            <IconButton size='small' onClick={onClose} aria-label='閉じる'>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Pin name / edit */}
          <Box sx={{ mb: 2 }}>
            {isEditing ? (
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <TextField
                  size='small'
                  fullWidth
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder='ピンの名前を入力'
                  autoFocus
                />
                <IconButton color='primary' onClick={handleSave}>
                  <SaveIcon />
                </IconButton>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant='body1'>
                  {pin.name || '(名前なし)'}
                </Typography>
                <IconButton size='small' onClick={handleStartEdit}>
                  <EditIcon fontSize='small' />
                </IconButton>
              </Box>
            )}
          </Box>

          {/* Coordinates */}
          <Box
            sx={{
              backgroundColor: theme.palette.grey[100],
              p: 1.5,
              borderRadius: 1,
              mb: 2,
            }}>
            <Typography variant='caption' color='text.secondary'>
              座標
            </Typography>
            <Typography variant='body2' fontFamily='monospace'>
              緯度: {pin.lat.toFixed(6)}
            </Typography>
            <Typography variant='body2' fontFamily='monospace'>
              経度: {pin.lng.toFixed(6)}
            </Typography>
          </Box>

          {/* Actions */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton
              color='error'
              onClick={handleDelete}
              aria-label='ピンを削除'>
              <DeleteIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Slide>
  )
}
