// src/components/Table/hooks/useTableSearch.ts
import { useEffect, useState } from 'react'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const useTableSearch = (data: Array<Record<string, any>>) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState(data)

  useEffect(() => {
    setFilteredData(data)
  }, [data])

  const handleSearch = (value: string) => {
    setSearchTerm(value)

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

  return { searchTerm, filteredData, handleSearch }
}
