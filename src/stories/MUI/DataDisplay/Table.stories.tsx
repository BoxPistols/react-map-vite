import DeleteIcon from '@mui/icons-material/Delete'
import FilterListIcon from '@mui/icons-material/FilterList'
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Checkbox,
  IconButton,
  Toolbar,
  Typography,
  Tooltip,
  alpha,
} from '@mui/material'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'MUI/Data Display/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

// サンプルデータ
interface Data {
  id: number
  name: string
  calories: number
  fat: number
  carbs: number
  protein: number
}

function createData(
  id: number,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): Data {
  return { id, name, calories, fat, carbs, protein }
}

const rows = [
  createData(1, 'カップケーキ', 305, 3.7, 67, 4.3),
  createData(2, 'ドーナツ', 452, 25.0, 51, 4.9),
  createData(3, 'エクレア', 262, 16.0, 24, 6.0),
  createData(4, 'フローズンヨーグルト', 159, 6.0, 24, 4.0),
  createData(5, 'ジンジャーブレッド', 356, 16.0, 49, 3.9),
  createData(6, 'ハニカムブレッド', 408, 3.2, 87, 6.5),
  createData(7, 'アイスクリームサンド', 237, 9.0, 37, 4.3),
  createData(8, 'ゼリービーン', 375, 0.0, 94, 0.0),
  createData(9, 'ロリポップ', 392, 0.2, 98, 0.0),
  createData(10, 'マシュマロ', 318, 0, 81, 2.0),
  createData(11, 'ヌガー', 360, 19.0, 9, 37.0),
  createData(12, 'オレオ', 437, 18.0, 63, 4.0),
]

export const Basic: Story = {
  render: () => (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>デザート（100gあたり）</TableCell>
            <TableCell align='right'>カロリー</TableCell>
            <TableCell align='right'>脂質&nbsp;(g)</TableCell>
            <TableCell align='right'>炭水化物&nbsp;(g)</TableCell>
            <TableCell align='right'>タンパク質&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(0, 5).map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.calories}</TableCell>
              <TableCell align='right'>{row.fat}</TableCell>
              <TableCell align='right'>{row.carbs}</TableCell>
              <TableCell align='right'>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

export const Dense: Story = {
  render: () => (
    <TableContainer component={Paper}>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>デザート</TableCell>
            <TableCell align='right'>カロリー</TableCell>
            <TableCell align='right'>脂質</TableCell>
            <TableCell align='right'>炭水化物</TableCell>
            <TableCell align='right'>タンパク質</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(0, 5).map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell align='right'>{row.calories}</TableCell>
              <TableCell align='right'>{row.fat}</TableCell>
              <TableCell align='right'>{row.carbs}</TableCell>
              <TableCell align='right'>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

const SortingExample = () => {
  type Order = 'asc' | 'desc'
  type OrderBy = keyof Data

  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<OrderBy>('calories')

  const handleRequestSort = (property: OrderBy) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const sortedRows = [...rows].sort((a, b) => {
    if (order === 'asc') {
      return a[orderBy] < b[orderBy] ? -1 : 1
    }
    return a[orderBy] > b[orderBy] ? -1 : 1
  })

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'name'}
                direction={orderBy === 'name' ? order : 'asc'}
                onClick={() => handleRequestSort('name')}>
                デザート
              </TableSortLabel>
            </TableCell>
            <TableCell align='right'>
              <TableSortLabel
                active={orderBy === 'calories'}
                direction={orderBy === 'calories' ? order : 'asc'}
                onClick={() => handleRequestSort('calories')}>
                カロリー
              </TableSortLabel>
            </TableCell>
            <TableCell align='right'>
              <TableSortLabel
                active={orderBy === 'fat'}
                direction={orderBy === 'fat' ? order : 'asc'}
                onClick={() => handleRequestSort('fat')}>
                脂質
              </TableSortLabel>
            </TableCell>
            <TableCell align='right'>
              <TableSortLabel
                active={orderBy === 'carbs'}
                direction={orderBy === 'carbs' ? order : 'asc'}
                onClick={() => handleRequestSort('carbs')}>
                炭水化物
              </TableSortLabel>
            </TableCell>
            <TableCell align='right'>
              <TableSortLabel
                active={orderBy === 'protein'}
                direction={orderBy === 'protein' ? order : 'asc'}
                onClick={() => handleRequestSort('protein')}>
                タンパク質
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.slice(0, 8).map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell align='right'>{row.calories}</TableCell>
              <TableCell align='right'>{row.fat}</TableCell>
              <TableCell align='right'>{row.carbs}</TableCell>
              <TableCell align='right'>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export const Sorting: Story = {
  render: () => <SortingExample />,
}

const WithSelectionExample = () => {
  const [selected, setSelected] = useState<readonly number[]>([])

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleClick = (id: number) => {
    const selectedIndex = selected.indexOf(id)
    let newSelected: readonly number[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }
    setSelected(newSelected)
  }

  const isSelected = (id: number) => selected.indexOf(id) !== -1

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        {selected.length > 0 && (
          <Toolbar
            sx={{
              pl: { sm: 2 },
              pr: { xs: 1, sm: 1 },
              ...(selected.length > 0 && {
                bgcolor: (theme) =>
                  alpha(
                    theme.palette.primary.main,
                    theme.palette.action.activatedOpacity
                  ),
              }),
            }}>
            <Typography
              sx={{ flex: '1 1 100%' }}
              color='inherit'
              variant='subtitle1'
              component='div'>
              {selected.length} 件選択中
            </Typography>
            <Tooltip title='削除'>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='フィルター'>
              <IconButton>
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        )}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding='checkbox'>
                  <Checkbox
                    color='primary'
                    indeterminate={
                      selected.length > 0 && selected.length < rows.length
                    }
                    checked={rows.length > 0 && selected.length === rows.length}
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
                <TableCell>デザート</TableCell>
                <TableCell align='right'>カロリー</TableCell>
                <TableCell align='right'>脂質</TableCell>
                <TableCell align='right'>炭水化物</TableCell>
                <TableCell align='right'>タンパク質</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(0, 8).map((row) => {
                const isItemSelected = isSelected(row.id)
                return (
                  <TableRow
                    hover
                    onClick={() => handleClick(row.id)}
                    role='checkbox'
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}>
                    <TableCell padding='checkbox'>
                      <Checkbox color='primary' checked={isItemSelected} />
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell align='right'>{row.calories}</TableCell>
                    <TableCell align='right'>{row.fat}</TableCell>
                    <TableCell align='right'>{row.carbs}</TableCell>
                    <TableCell align='right'>{row.protein}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}

export const WithSelection: Story = {
  render: () => <WithSelectionExample />,
}

const WithPaginationExample = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>デザート</TableCell>
              <TableCell align='right'>カロリー</TableCell>
              <TableCell align='right'>脂質</TableCell>
              <TableCell align='right'>炭水化物</TableCell>
              <TableCell align='right'>タンパク質</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align='right'>{row.calories}</TableCell>
                  <TableCell align='right'>{row.fat}</TableCell>
                  <TableCell align='right'>{row.carbs}</TableCell>
                  <TableCell align='right'>{row.protein}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage='ページあたりの行数:'
        labelDisplayedRows={({ from, to, count }) =>
          `${count} 件中 ${from}–${to}`
        }
      />
    </Paper>
  )
}

export const WithPagination: Story = {
  render: () => <WithPaginationExample />,
}

export const Sticky: Story = {
  render: () => (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 300 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>デザート</TableCell>
              <TableCell align='right'>カロリー</TableCell>
              <TableCell align='right'>脂質</TableCell>
              <TableCell align='right'>炭水化物</TableCell>
              <TableCell align='right'>タンパク質</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell align='right'>{row.calories}</TableCell>
                <TableCell align='right'>{row.fat}</TableCell>
                <TableCell align='right'>{row.carbs}</TableCell>
                <TableCell align='right'>{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  ),
}
