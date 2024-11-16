import { theme } from '@/theme/theme'
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Search as SearchIcon,
  ViewColumn as ViewColumnIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material'
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  Menu,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import type React from 'react'
import { useEffect, useMemo, useState } from 'react'

interface Column {
  accessor: string
  header: string
  sortable?: boolean
}

interface TableProps {
  columns: Column[]
  data: Array<Record<string, string | number | boolean>>
  showCRUD?: boolean
  onView?: (row: Record<string, string | number | boolean>) => void
  onEdit?: (row: Record<string, string | number | boolean>) => void
  onDelete?: (row: Record<string, string | number | boolean>) => void
  searchable?: boolean
  defaultPageSize?: number
  pageSizeOptions?: number[]
  loading?: boolean
}

type Order = 'asc' | 'desc'
interface SortConfig {
  key: string
  direction: Order
}

// スタイル付きコンポーネント
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&
.$
{
  tableCellClasses.head
}
`]: {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.secondary.dark,
    color: theme.palette.common.white,
    fontSize: '0.75rem',
    fontWeight: theme.typography.fontWeightMedium,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    '& .MuiTableSortLabel-root': {
      color: theme.palette.common.white,
      '&:hover': {
        color: theme.palette.common.white,
      },
      '&.Mui-active': {
        color: theme.palette.common.white,
        '& .MuiTableSortLabel-icon': {
          color: theme.palette.secondary.light,
        },
      },
    },
  },
  [`&
.$
{
  tableCellClasses.body
}
;`]: {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
  },
}))

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
  // '&:last-child td, &:last-child th': {...
}))

// セルの値のフォーマット
const formatCellValue = (value: unknown): React.ReactNode => {
  if (value === null || value === undefined) {
    return '-'
  }

  if (typeof value === 'boolean') {
    return (
      <Box
        component='span'
        sx={{
          px: 2,
          py: 0.5,
          borderRadius: 1,
          fontSize: '0.75rem',
          fontWeight: 'medium',
          bgcolor: value ? 'success.lighter' : 'error.lighter',
          color: theme.palette.common.black,
        }}>
        {value ? 'Active' : 'Inactive'}
      </Box>
    )
  }

  return String(value)
}

// テーブル行コンポーネント
const TableRows = ({
  visibleData,
  columns,
  visibleColumns,
  showCRUD,
  // biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
  onView = () => {},
  // biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
  onEdit = () => {},
  // biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
  onDelete = () => {},
}: {
  visibleData: Array<Record<string, string | number | boolean>>
  columns: Column[]
  visibleColumns: Set<string>
  showCRUD: boolean
  onView: (row: Record<string, string | number | boolean>) => void
  onEdit: (row: Record<string, string | number | boolean>) => void
  onDelete: (row: Record<string, string | number | boolean>) => void
}) => (
  <>
    {visibleData.map((row) => (
      <StyledTableRow key={String(row.id)}>
        {columns
          .filter((col) => visibleColumns.has(col.accessor))
          .map((column) => (
            <StyledTableCell key={column.accessor}>
              {formatCellValue(row[column.accessor])}
            </StyledTableCell>
          ))}
        {showCRUD && (
          <StyledTableCell
            align='right'
            sx={{
              whiteSpace: 'nowrap',
            }}>
            <Tooltip arrow title='View'>
              <IconButton
                size='small'
                onClick={() => onView(row)}
                color='secondary'
                title='View'
                sx={{ mr: 1 }}>
                <VisibilityIcon fontSize='small' />
              </IconButton>
            </Tooltip>
            <Tooltip arrow title='Edit'>
              <IconButton
                size='small'
                onClick={() => onEdit(row)}
                color='secondary'
                title='Edit'
                sx={{ mr: 1 }}>
                <EditIcon fontSize='small' />
              </IconButton>
            </Tooltip>
            <Tooltip arrow title='Delete'>
              <IconButton
                size='small'
                onClick={() => onDelete(row)}
                color='secondary'
                title='Delete'>
                <DeleteIcon fontSize='small' />
              </IconButton>
            </Tooltip>
          </StyledTableCell>
        )}
      </StyledTableRow>
    ))}
  </>
)

// メインのテーブルコンポーネント
export const CustomTable = ({
  columns = [],
  data = [],
  showCRUD = false,
  // biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
  onView = () => {},
  // biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
  onEdit = () => {},
  // biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
  onDelete = () => {},
  searchable = false,
  defaultPageSize = 10,
  pageSizeOptions = [5, 10, 25, 50],
  loading = false,
}: TableProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState(data)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(defaultPageSize)
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: '',
    direction: 'asc',
  })
  const [visibleColumns, setVisibleColumns] = useState<Set<string>>(
    new Set(columns.map((col) => col.accessor))
  )
  const [columnMenuAnchor, setColumnMenuAnchor] = useState<null | HTMLElement>(
    null
  )

  useEffect(() => {
    setFilteredData(data)
  }, [data])

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    setPage(0)

    if (!value.trim()) {
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

  const handleSort = (accessor: string) => {
    const newDirection: Order =
      sortConfig.key === accessor && sortConfig.direction === 'asc'
        ? 'desc'
        : 'asc'

    setSortConfig({ key: accessor, direction: newDirection })
  }

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key]
      const bValue = b[sortConfig.key]

      if (aValue === bValue) return 0

      if (sortConfig.direction === 'asc') {
        return aValue < bValue ? -1 : 1
      }
      return aValue > bValue ? -1 : 1
    })
  }, [filteredData, sortConfig])

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(Number.parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleColumnVisibilityChange = (accessor: string) => {
    const newVisibleColumns = new Set(visibleColumns)
    if (newVisibleColumns.has(accessor)) {
      newVisibleColumns.delete(accessor)
    } else {
      newVisibleColumns.add(accessor)
    }
    setVisibleColumns(newVisibleColumns)
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
  // Loading...UI
  if (loading) {
    return (
      <Box sx={{ width: '100%' }}>
        {searchable && (
          <Box sx={{ mb: 2 }}>
            <Skeleton variant='rectangular' width={300} height={40} />
          </Box>
        )}
        <TableContainer component={Paper}>
          <Table>
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
              {filteredData.slice(0, defaultPageSize).map((row) => (
                <StyledTableRow key={String(row.id)}>
                  {columns.map((column) => (
                    <StyledTableCell key={column.accessor}>
                      <Skeleton />
                    </StyledTableCell>
                  ))}
                  {showCRUD && (
                    <StyledTableCell align='right'>
                      <Skeleton width={120} />
                    </StyledTableCell>
                  )}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ mt: 2 }}>
          <Skeleton variant='rectangular' width='100%' height={52} />
        </Box>
      </Box>
    )
  }

  const visibleData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  )

  return (
    <Box sx={{ width: '100%' }}>
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
            onChange={(e) => handleSearch(e.target.value)}
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
          onClick={(e) => setColumnMenuAnchor(e.currentTarget)}>
          Columns
        </Button>
      </Box>

      <Menu
        anchorEl={columnMenuAnchor}
        open={Boolean(columnMenuAnchor)}
        onClose={() => setColumnMenuAnchor(null)}>
        <Box sx={{ p: 1 }}>
          <FormGroup>
            {columns.map((column) => (
              <FormControlLabel
                key={column.accessor}
                control={
                  <Checkbox
                    checked={visibleColumns.has(column.accessor)}
                    onChange={() =>
                      handleColumnVisibilityChange(column.accessor)
                    }
                    size='small'
                  />
                }
                label={column.header}
              />
            ))}
          </FormGroup>
        </Box>
      </Menu>

      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 1,
          border: (theme) => `1px solid ${theme.palette.divider};`,
        }}>
        <Table sx={{ minWidth: '100%' }} aria-label='custom table'>
          <TableHead>
            <TableRow>
              {columns
                .filter((col) => visibleColumns.has(col.accessor))
                .map((column) => (
                  <StyledTableCell key={column.accessor}>
                    {column.sortable !== false ? (
                      <TableSortLabel
                        active={sortConfig.key === column.accessor}
                        direction={
                          sortConfig.key === column.accessor
                            ? sortConfig.direction
                            : 'asc'
                        }
                        onClick={() => handleSort(column.accessor)}>
                        {column.header}
                      </TableSortLabel>
                    ) : (
                      column.header
                    )}
                  </StyledTableCell>
                ))}
              {showCRUD && (
                <StyledTableCell align='right'>Actions</StyledTableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRows
              visibleData={visibleData}
              columns={columns}
              visibleColumns={visibleColumns}
              showCRUD={showCRUD}
              onView={onView}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={pageSizeOptions}
        component='div'
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  )
}
