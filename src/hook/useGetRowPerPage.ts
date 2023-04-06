import { OrderProps } from '@/types/order'
import { UserProps } from '@/types/user'
import { usePagination } from '@mantine/hooks'
import { useEffect, useState } from 'react'

interface UseGetRowPerPageProps<T> {
  data: T[]
  rowPerPage: number
  total?: number
}

const getPageTotal = ({ total, rowPerPage }: { total: number; rowPerPage: number }) => {
  if (!total) return 1

  if (total > 0) {
    const odd = total % rowPerPage
    const col = Math.floor(total / rowPerPage)

    return odd > 0 ? col + 1 : col
  }

  return 1
}

export const useGetRowPerPage = <T>({ data, rowPerPage }: UseGetRowPerPageProps<T>) => {
  const [page, onChange] = useState(1)
  const [slicedData, setSlicedData] = useState(data.slice(0, rowPerPage))
  const totalItems = getPageTotal({ total: data.length, rowPerPage: rowPerPage })

  const pagination = usePagination({ total: totalItems, page, onChange })
  const { active } = pagination

  useEffect(() => {
    const lastIndex = active * rowPerPage
    const firstIndex = lastIndex - rowPerPage
    const newData = data.slice(firstIndex, lastIndex)
    setSlicedData(newData)
  }, [active, data, rowPerPage])

  return {
    totalItems,
    slicedData,
    active,
    onChange
  }
}
