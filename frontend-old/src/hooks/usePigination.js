import { useState } from 'react'

export function usePagination ({ itemsPerPage = 4 }) {
  const [page, setPage] = useState(1)

  const nextPage = () => setPage(p => p + 1)
  const prevPage = () => setPage(p => Math.max(p - 1, 1))
  const resetPage = () => setPage(1)

  const offset = (page - 1) * itemsPerPage

  return {
    page,
    offset,
    setPage,
    nextPage,
    prevPage,
    resetPage
  }
}
