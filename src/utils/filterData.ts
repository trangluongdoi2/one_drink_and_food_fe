import { UserProps } from '@/types/user'
import { keys } from '@mantine/utils'

export const filterData = (data: UserProps[], search: string) => {
  console.log('search', data)

  const filterRange = keys(data[0]).filter((item) => item !== ('dob' || 'fireBaseId'))
  const query = search.toLowerCase().trim()
  return data.filter((item) =>
    filterRange.some((key) => (key !== 'dob' ? item[key].toLowerCase().includes(query) : false))
  )
}
