import { HeaderProps } from '@/types/table'
import { filterData } from './filterData'
import { UserProps } from '@/types/user'

export const sortData = (
  data: UserProps[],
  payload: { sortBy: keyof UserProps | null; reversed: boolean; search: string }
) => {
  const { sortBy } = payload

  console.log('sortBy', !sortBy)

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
