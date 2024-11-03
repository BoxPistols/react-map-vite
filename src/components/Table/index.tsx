import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Search as SearchIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material'
import {
  Box,
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  tableCellClasses,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { useEffect, useState } from 'react'

interface Column {
  accessor: string
  header: string
}

interface TableProps {
  columns: Column[]
  data: Array<Record<string, string | number | boolean>>
  showCRUD?: boolean
  onView?: (row: Record<string, string | number | boolean>) => void
  onEdit?: (row: Record<string, string | number | boolean>) => void
  onDelete?: (row: Record<string, string | number | boolean>) => void
  searchable?: boolean
}

// スタイル付きのテーブルセル
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: '0.75rem',
    fontWeight: theme.typography.fontWeightMedium,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
  },
}))

// スタイル付きのテーブル行
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[800]
        : theme.palette.grey[50],
  },
  '&:hover': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[700]
        : theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

export const CustomTable = ({
  columns = [],
  data = [],
  showCRUD = false,
  onView = () => {
    // Default onView handler
  },
  onEdit = () => {
    // Default onEdit handler
  },
  onDelete = () => {
    // Default onDelete handler
  },
  searchable = false,
}: TableProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState(data)

  useEffect(() => {
    setFilteredData(data)
  }, [data])

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    if (typeof value === 'string' && !value.trim()) {
      setFilteredData(data)
      return
    }

    const filtered = data.filter((item) =>
      Object.values(item).some((val) =>
        val?.toString().toLowerCase().includes(value.toLowerCase())
      )
    )
    setFilteredData(filtered)
  }

  if (!data || data.length === 0) {
    return (
      <Box sx={{ width: '100%', textAlign: 'center', py: 2 }}>
        <Typography variant='body2' color='text.secondary'>
          No data available
        </Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ width: '100%' }}>
      {searchable && (
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            size='small'
            placeholder='Search...'
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon fontSize='small' color='action' />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      )}

      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 1,
          border: (theme) => `1px solid ${theme.palette.divider}`,
        }}>
        <Table sx={{ minWidth: '100%' }} aria-label='custom table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell key={column.accessor}>
                  {column.header}
                </StyledTableCell>
              ))}
              {showCRUD && (
                <StyledTableCell align='right'>Actions</StyledTableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <StyledTableRow key={String(row.id)}>
                {columns.map((column) => (
                  <StyledTableCell key={column.accessor}>
                    {row[column.accessor]}
                  </StyledTableCell>
                ))}
                {showCRUD && (
                  <StyledTableCell align='right'>
                    <IconButton
                      size='small'
                      onClick={() => onView(row)}
                      color='info'
                      title='View'
                      sx={{ mr: 1 }}>
                      <VisibilityIcon fontSize='small' />
                    </IconButton>
                    <IconButton
                      size='small'
                      onClick={() => onEdit(row)}
                      color='warning'
                      title='Edit'
                      sx={{ mr: 1 }}>
                      <EditIcon fontSize='small' />
                    </IconButton>
                    <IconButton
                      size='small'
                      onClick={() => onDelete(row)}
                      color='error'
                      title='Delete'>
                      <DeleteIcon fontSize='small' />
                    </IconButton>
                  </StyledTableCell>
                )}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
