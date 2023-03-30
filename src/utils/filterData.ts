import { UserProps } from '@/types/user'
import { keys } from '@mantine/utils'

export const filterData = (data: UserProps[], search: string) => {
  const newData = data.map((item) => ({
    firstName: item.firstName,
    lastName: item.lastName
  }))

  const filterRange = keys(newData[0])
  const query = search.toLowerCase().trim()

  return data.filter((item) => filterRange.some((key) => item[key].toLowerCase().includes(query)))
}
