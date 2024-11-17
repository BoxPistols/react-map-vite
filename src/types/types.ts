// src/components/Table/types.ts
import type { TableCellProps } from '@mui/material'

export interface Column {
  accessor: string
  header: string
  sortable?: boolean
  align?: TableCellProps['align']
}

export interface TableProps {
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

export type Order = 'asc' | 'desc'

export interface SortConfig {
  key: string
  direction: Order
}
