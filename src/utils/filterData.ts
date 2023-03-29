import { UserProps, SortUserProps } from '@/types/user'
import { keys } from '@mantine/utils'

export const filterData = (data: UserProps[], search: string) => {
  console.log('search', data)
  const newData = data.map((item) => ({
    firstName: item.firstName,
    lastName: item.lastName
  }))

  const filterRange = keys(newData[0])
  const query = search.toLowerCase().trim()

  return data.filter((item) => filterRange.some((key) => item[key].toLowerCase().includes(query)))
}
