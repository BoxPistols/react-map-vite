import type { SortConfig } from '@/types/types'
import { useMemo, useState } from 'react'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const useTableSort = (data: Array<Record<string, any>>) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: '',
    direction: 'asc',
  })

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key]
      const bValue = b[sortConfig.key]

      if (aValue === bValue) return 0
      if (sortConfig.direction === 'asc') {
        return aValue < bValue ? -1 : 1
      }
      return aValue > bValue ? -1 : 1
    })
  }, [data, sortConfig])

  const handleSort = (accessor: string) => {
    const newDirection =
      sortConfig.key === accessor && sortConfig.direction === 'asc'
        ? 'desc'
        : 'asc'
    setSortConfig({ key: accessor, direction: newDirection })
  }

  return { sortedData, sortConfig, handleSort }
}
