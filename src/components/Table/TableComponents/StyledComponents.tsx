// src/components/Table/components/StyledComponents.tsx
import { TableCell, TableRow, styled } from '@mui/material'
import { tableCellClasses } from '@mui/material/TableCell'

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.secondary.dark,
    color: theme.palette.common.white,
    fontSize: '0.875rem',
    fontWeight: theme.typography.fontWeightMedium,
    // textTransform: 'uppercase',
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
  [`&.${tableCellClasses.body}`]: {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
  },
}))

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
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
  // '&:last-child td, &:last-child th': {
  // border: 0,
  // },
}))
