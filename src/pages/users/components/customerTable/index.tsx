import { useEffect, useState } from 'react'
import { Center, Stack, Text } from '@mantine/core'
import { sortData } from '@/utils/sortData'
import { SortUserProps, UserProps } from '@/types/user'
import { useCustomerContext } from '@/context/CustomerContext/CustomerContext'
import { SearchTable, TableHeader, TablePagination } from '@/components/table'
import { useGetRowPerPage } from '@/hook/useGetRowPerPage'
import { userHeader } from '@/constants/header'
import { setSelectedRow } from '@/reducer/customer/action'
import { CustomerRow } from '../CustomerRow'

interface CustomTableProps {
  data: UserProps[]
}

const ROW_PER_PAGE = 10

const CustomerTable = ({ data }: CustomTableProps) => {
  const [search, setSearch] = useState('')
  const { totalItems, active, onChange, slicedData } = useGetRowPerPage<UserProps>({ data, rowPerPage: ROW_PER_PAGE })

  const [sortedData, setSortedData] = useState(slicedData)
  const [sortBy, setSortBy] = useState<keyof SortUserProps | null>(null)
  const [reverseSortDirection, setReverseSortDirection] = useState(false)
  const { selectedRow } = useCustomerContext()

  const isSelectedAll = selectedRow.length === data.length
  const allId = data.map((item) => item.fireBaseId)

  const { dispatch } = useCustomerContext()

  // const setSorting = (field: keyof SortUserProps) => {
  //   const reversed = field === sortBy ? !reverseSortDirection : false
  //   const sortedArray = sortData(slicedData, { sortBy: field, reversed, search })
  //   setReverseSortDirection(reversed)
  //   setSortBy(field)
  //   setSortedData(sortedArray)
  // }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setSearch(value)
    setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }))
  }
  const handleSelectAll = () => {
    !isSelectedAll ? dispatch(setSelectedRow(allId)) : dispatch(setSelectedRow([]))
  }

  useEffect(() => {
    setSortedData(sortData(slicedData, { sortBy, reversed: reverseSortDirection, search }))
  }, [reverseSortDirection, search, slicedData, sortBy])

  return (
    <>
      <SearchTable
        search={search}
        onSelectAll={handleSelectAll}
        onSearchChange={handleSearchChange}
        selectedAll={isSelectedAll}
        placeHolder='Tìm kiếm thông tin khách hàng'
      />

      <Stack spacing={0} mt={15}>
        <TableHeader headerContent={userHeader} />
        <Stack spacing={15}>
          {sortedData && sortedData.length > 0 ? (
            sortedData.map((row: UserProps) => <CustomerRow row={row} key={row.fireBaseId} selectedRow={selectedRow} />)
          ) : (
            <Center sx={{ height: 200 }}>
              <td colSpan={Object.keys(data[0]).length}>
                <Text weight={500} align='center'>
                  Danh sách khách hàng trống
                </Text>
              </td>
            </Center>
          )}
        </Stack>
      </Stack>

      <TablePagination total={totalItems} onChange={onChange} active={active} />
    </>
  )
}

export default CustomerTable
