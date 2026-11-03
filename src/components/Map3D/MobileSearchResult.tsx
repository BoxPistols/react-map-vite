import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PlaceIcon from '@mui/icons-material/Place'
import SearchIcon from '@mui/icons-material/Search'
import {
  Badge,
  Box,
  Card,
  CardContent,
  Collapse,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import { useState } from 'react'
import type React from 'react'

import type { PinLocation } from '@/hooks/usePinPlacementMode'

interface MobileSearchResultProps {
  pins: PinLocation[]
  onPinSelect: (pin: PinLocation) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

/**
 * Mobile-optimized search results component
 * Collapsible bottom sheet with search and pin list
 */
export const MobileSearchResult: React.FC<MobileSearchResultProps> = ({
  pins,
  onPinSelect,
  searchQuery,
  onSearchChange,
}) => {
  const theme = useTheme()
  const [isExpanded, setIsExpanded] = useState(false)

  const filteredPins = pins.filter(
    (pin) =>
      !searchQuery ||
      pin.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pin.lat.toString().includes(searchQuery) ||
      pin.lng.toString().includes(searchQuery)
  )

  const hasResults = filteredPins.length > 0

  return (
    <Card
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        borderRadius: '16px 16px 0 0',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        maxHeight: isExpanded ? '60vh' : 'auto',
      }}>
      {/* Collapsed header - always visible */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 1.5,
          cursor: 'pointer',
          borderBottom: isExpanded
            ? `1px solid ${theme.palette.divider}`
            : 'none',
        }}
        onClick={() => setIsExpanded(!isExpanded)}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Badge badgeContent={pins.length} color='primary'>
            <PlaceIcon color='action' />
          </Badge>
          <Typography variant='body2' fontWeight={500}>
            {pins.length > 0 ? `${pins.length}件のピン` : '検索結果'}
          </Typography>
        </Box>
        <IconButton size='small'>
          {isExpanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </IconButton>
      </Box>

      {/* Expanded content */}
      <Collapse in={isExpanded}>
        <CardContent sx={{ pt: 1 }}>
          {/* Search input */}
          <TextField
            size='small'
            fullWidth
            placeholder='ピンを検索...'
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon fontSize='small' color='action' />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 1 }}
          />

          {/* Results list */}
          {hasResults ? (
            <List
              sx={{
                maxHeight: '35vh',
                overflow: 'auto',
                '& .MuiListItemButton-root': {
                  borderRadius: 1,
                  mb: 0.5,
                },
              }}
              dense>
              {filteredPins.map((pin) => (
                <ListItemButton
                  key={pin.id}
                  onClick={() => {
                    onPinSelect(pin)
                    setIsExpanded(false)
                  }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <PlaceIcon color='primary' fontSize='small' />
                  </ListItemIcon>
                  <ListItemText
                    primary={pin.name || `ピン ${pin.id.slice(-6)}`}
                    secondary={`${pin.lat.toFixed(4)}, ${pin.lng.toFixed(4)}`}
                    primaryTypographyProps={{ variant: 'body2' }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItemButton>
              ))}
            </List>
          ) : (
            <Box
              sx={{
                py: 3,
                textAlign: 'center',
                color: 'text.secondary',
              }}>
              <Typography variant='body2'>
                {searchQuery ? '該当するピンがありません' : 'ピンがありません'}
              </Typography>
              <Typography variant='caption'>
                長押しでピンを追加できます
              </Typography>
            </Box>
          )}
        </CardContent>
      </Collapse>
    </Card>
  )
}
