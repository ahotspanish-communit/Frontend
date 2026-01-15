'use client'

import * as React from 'react'
import { PaginationBar } from '@/shared/ui/pagination/Pagination'

export default function PaginationTestPage() {
  const [page, setPage] = React.useState(1)

  return (
    <div className="flex min-h-screen items-center justify-center">
      <PaginationBar page={page} totalPages={10} onChangePage={setPage} />
    </div>
  )
}
