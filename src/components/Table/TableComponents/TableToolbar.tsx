import {
  Search as SearchIcon,
  ViewColumn as ViewColumnIcon,
} from '@mui/icons-material'
import { Box, Button, InputAdornment, TextField } from '@mui/material'
// src/components/Table/components/TableToolbar.tsx
import type React from 'react'

interface TableToolbarProps {
  searchable: boolean
  searchTerm: string
  onSearch: (value: string) => void
  onColumnMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
}

export const TableToolbar: React.FC<TableToolbarProps> = ({
  searchable,
  searchTerm,
  onSearch,
  onColumnMenuOpen,
}) => (
  <Box
    sx={{
      mb: 2,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
    {searchable && (
      <TextField
        size='small'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        sx={{ width: 300 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon fontSize='small' color='primary' />
            </InputAdornment>
          ),
        }}
      />
    )}
    <Button
      size='small'
      startIcon={<ViewColumnIcon />}
      onClick={onColumnMenuOpen}>
      Columns
    </Button>
  </Box>
)
