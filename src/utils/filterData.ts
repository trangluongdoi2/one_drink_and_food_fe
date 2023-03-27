import { HeaderProps } from '@/types/table'
import { UserProps } from '@/types/user'
import { keys } from '@mantine/utils'

export const filterData = (data: UserProps[], search: string) => {
  console.log('search', keys(data[0]))
  const query = search.toLowerCase().trim()
  return data.filter((item) => keys(data[0]).some((key) => item[key].toLowerCase().includes(query)))
}
