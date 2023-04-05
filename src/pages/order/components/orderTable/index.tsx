import { useEffect, useState } from 'react'
import { Center, Stack, Text } from '@mantine/core'
import { sortData } from '@/utils/sortData'
import { SortUserProps, UserProps } from '@/types/user'
import { useCustomerContext } from '@/context/CustomerContext/CustomerContext'
import { SearchTable, TableHeader, TablePagination, TableRow } from '@/components/table'
import { useGetRowPerPage } from '@/hook/useGetRowPerPage'
import { OrderProps } from '@/types/order'
import { orderContent } from '@/constants/order/header'

interface OrderTableProps {
  data: OrderProps[]
}

const ROW_PER_PAGE = 3

const OrderTable = ({ data }: OrderTableProps) => {
  const [search, setSearch] = useState('')
  const { totalItems, active, onChange, slicedData } = useGetRowPerPage({ data, rowPerPage: ROW_PER_PAGE })

  const [sortedData, setSortedData] = useState(slicedData)
  const { selectedRow } = useCustomerContext()

  const isSelectedAll = selectedRow.length === data.length
  const allId = data.map((item) => item.fireBaseId)

  const setSorting = (field: keyof SortUserProps) => {
    setSortedData(slicedData)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setSearch(value)
    const filteredData = data.filter((item) =>
      item['recipientName'].toLocaleLowerCase().includes(value.toLocaleLowerCase())
    )
    setSortedData(filteredData)
  }
  console.log('order', sortedData)

  useEffect(() => {
    setSortedData(slicedData)
  }, [slicedData])

  if (!data.length)
    return (
      <table style={{ width: '100%', borderSpacing: '0 15px' }}>
        {/* <TableHeader reverseSortDirection setSorting={setSorting} headerContent={orderContent} /> */}
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

      <Stack spacing={0} mt={15}>
        {/* <TableHeader reverseSortDirection setSorting={setSorting} headerContent={orderContent} /> */}
        {/* <Stack spacing={15}>
          {sortedData && sortedData.length > 0 ? (
            sortedData.map((row) => <TableRow row={row} key={row.fireBaseId} selectedRow={selectedRow} />)
          ) : (
            <Center sx={{ height: 200 }}>
              <td colSpan={Object.keys(data[0]).length}>
                <Text weight={500} align='center'>
                  Danh sách khách hàng trống
                </Text>
              </td>
            </Center>
          )}
        </Stack> */}
      </Stack>

      <TablePagination total={totalItems} onChange={onChange} active={active} />
    </>
  )
}

export default OrderTable
