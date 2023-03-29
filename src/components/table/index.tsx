import { useState } from 'react'
import { Text } from '@mantine/core'
import { headerContent } from '@/constants/user/header'
import TableHeader from './header'
import { TableRow } from './row'
import SearchTable from './search'
import { sortData } from '@/utils/sortData'
import { SortUserProps, UserProps } from '@/types/user'
import { TablePagination } from './pagination'
import { useUserContext } from '@/context/UserContext/UserContext'
interface CustomTableProps {
  data: UserProps[]
}

const CustomTable = ({ data }: CustomTableProps) => {
  const [search, setSearch] = useState('')
  const [sortedData, setSortedData] = useState(data)
  const [sortBy, setSortBy] = useState<keyof SortUserProps | null>(null)
  const [reverseSortDirection, setReverseSortDirection] = useState(false)
  // const [selectedRow, setSelectedRow] = useState<string[]>([])
  const { selectedRow, setSelectedRow } = useUserContext()

  console.log('selectedRow: ', selectedRow)

  const totalItems = Math.floor(data.length / 10) > 0 ? Math.floor(data.length / 10) : 1
  const isSelectedAll = selectedRow.length === data.length
  const allId = data.map((item) => item.fireBaseId)

  const setSorting = (field: keyof SortUserProps) => {
    const reversed = field === sortBy ? !reverseSortDirection : false
    const sortedArray = sortData(data, { sortBy: field, reversed, search })
    setReverseSortDirection(reversed)
    setSortBy(field)
    setSortedData(sortedArray)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setSearch(value)
    setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }))
  }

  return (
    <>
      <SearchTable
        search={search}
        handleSearchChange={handleSearchChange}
        selectedAll={isSelectedAll}
        allId={allId}
        setSelectedRow={setSelectedRow}
      />

      <table style={{ width: '100%', borderSpacing: '0 15px' }}>
        <TableHeader reverseSortDirection setSorting={setSorting} header={headerContent} />
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
