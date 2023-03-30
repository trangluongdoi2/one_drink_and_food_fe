import { useState } from 'react'
import { Text } from '@mantine/core'
import { headerContent } from '@/constants/user/header'
import { sortData } from '@/utils/sortData'
import { SortUserProps, UserProps } from '@/types/user'
import { useCustomerContext } from '@/context/CustomerContext/CustomerContext'
import { SearchTable, TableHeader, TablePagination, TableRow } from '@/components/table'
interface CustomTableProps {
  data: UserProps[]
}

const CustomerTable = ({ data }: CustomTableProps) => {
  const [search, setSearch] = useState('')
  const [sortedData, setSortedData] = useState(data)
  const [sortBy, setSortBy] = useState<keyof SortUserProps | null>(null)
  const [reverseSortDirection, setReverseSortDirection] = useState(false)
  const { selectedRow } = useCustomerContext()

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

  if (!data.length)
    return (
      <table style={{ width: '100%', borderSpacing: '0 15px' }}>
        <TableHeader reverseSortDirection setSorting={setSorting} header={headerContent} />
        <tbody>
          <tr>
            <td colSpan={Object.keys(data[0]).length}>
              <Text weight={500} align='center'>
                Danh sách khách hàng trống
              </Text>
            </td>
          </tr>
        </tbody>
      </table>
    )

  return (
    <>
      <SearchTable search={search} handleSearchChange={handleSearchChange} selectedAll={isSelectedAll} allId={allId} />

      <table style={{ width: '100%', borderSpacing: '0 15px' }}>
        <TableHeader reverseSortDirection setSorting={setSorting} header={headerContent} />
        <tbody>
          {sortedData && sortedData.length > 0 ? (
            sortedData.map((row) => <TableRow row={row} key={row.fireBaseId} selectedRow={selectedRow} />)
          ) : (
            <tr>
              <td colSpan={Object.keys(data[0]).length}>
                <Text weight={500} align='center'>
                  Danh sách khách hàng trống
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

export default CustomerTable
