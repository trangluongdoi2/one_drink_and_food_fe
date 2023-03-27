import { useState } from 'react'
import { Text } from '@mantine/core'
import { headerContent } from '@/constants/user/header'
import TableHeader from './header'
import { TableRow } from './row'
import SearchTable from './search'
import { sortData } from '@/utils/sortData'
import { UserProps } from '@/types/user'
import { TablePagination } from './pagination'
interface CustomTableProps {
  data: UserProps[]
}

const CustomTable = ({ data }: CustomTableProps) => {
  const [search, setSearch] = useState('')
  const [sortedData, setSortedData] = useState(data)
  const [sortBy, setSortBy] = useState<keyof UserProps | null>(null)
  const [reverseSortDirection, setReverseSortDirection] = useState(false)
  const [selectedRow, setSelectedRow] = useState<string[]>([])
  const totalItems = Math.floor(data.length / 10) > 0 ? Math.floor(data.length / 10) : 1
  console.log('sorted', sortedData)
  console.log('selected', selectedRow)

  const setSorting = (field: keyof UserProps) => {
    const reversed = field === sortBy ? !reverseSortDirection : false
    setReverseSortDirection(reversed)
    setSortBy(field)
    setSortedData(sortData(data, { sortBy: field, reversed, search }))
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setSearch(value)
    setSortedData(sortData(data, { sortBy: sortBy, reversed: reverseSortDirection, search: value }))
  }

  return (
    <>
      <SearchTable search={search} handleSearchChange={handleSearchChange} />

      <table style={{ width: '100%', borderSpacing: '0 15px' }}>
        <TableHeader sortBy={sortBy} reverseSortDirection setSorting={setSorting} header={headerContent} />
        <tbody>
          {sortedData && sortedData.length > 0 ? (
            sortedData.map((row) => (
              <TableRow row={row} key={row.fireBaseId} setSelectedRow={setSelectedRow} selectedRow={selectedRow} />
            ))
          ) : (
            <tr>
              <td colSpan={Object.keys(data[0]).length}>
                <Text weight={500} align='center'>
                  Nothing found
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <TablePagination total={totalItems} />
    </>
  )
}

export default CustomTable
