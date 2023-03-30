import { filterData } from './filterData'
import { UserProps, SortUserProps } from '@/types/user'

export const sortData = (
  data: UserProps[],
  payload: { sortBy: keyof SortUserProps | null; reversed: boolean; search: string }
) => {
  const { sortBy } = payload

  if (!sortBy) {
    return filterData(data, payload.search)
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy])
      }

      return a[sortBy].localeCompare(b[sortBy])
    }),
    payload.search
  )
}
