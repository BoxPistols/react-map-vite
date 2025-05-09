// src/components/Table/components/TableHeader.tsx
import { TableHead, TableRow, TableSortLabel } from '@mui/material'
import type React from 'react'

import { StyledTableCell } from '@/components/Table/TableComponents/StyledComponents'
import type { Column, SortConfig } from '@/types/type'

interface TableHeaderProps {
  columns: Column[]
  visibleColumns: Set<string>
  sortConfig: SortConfig
  showCRUD: boolean
  onSort: (accessor: string) => void
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  columns,
  visibleColumns,
  sortConfig,
  showCRUD,
  onSort,
}) => (
  <TableHead>
    <TableRow>
      {columns
        .filter((col) => visibleColumns.has(col.accessor))
        .map((column) => (
          <StyledTableCell key={column.accessor} align={column.align}>
            {column.sortable !== false ? (
              <TableSortLabel
                active={sortConfig.key === column.accessor}
                direction={
                  sortConfig.key === column.accessor
                    ? sortConfig.direction
                    : 'asc'
                }
                onClick={() => onSort(column.accessor)}>
                {column.header}
              </TableSortLabel>
            ) : (
              column.header
            )}
          </StyledTableCell>
        ))}
      {showCRUD && <StyledTableCell align='right'>Actions</StyledTableCell>}
    </TableRow>
  </TableHead>
)
