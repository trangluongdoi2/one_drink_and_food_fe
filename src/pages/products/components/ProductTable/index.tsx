import { useEffect, useState } from 'react'
import { Center, Stack, Text } from '@mantine/core'
import { SearchTable, TableHeader, TablePagination } from '@/components/table'
import { useGetRowPerPage } from '@/hook/useGetRowPerPage'
import { OrderProps } from '@/types/order'
import { productHeader } from '@/constants/header'
import { ProductRow } from '../ProductRow'
import { useOrderContext } from '@/context/OrderContext/OrderContext'
import { setSelectedRow } from '@/reducer/order/action'

interface OrderTableProps {
  data: OrderProps[]
}

const ROW_PER_PAGE = 10

const ProductTable = ({ data }: OrderTableProps) => {
  const [search, setSearch] = useState('')
  const { dispatch } = useOrderContext()

  const { totalItems, active, onChange, slicedData } = useGetRowPerPage<OrderProps>({
    data,
    rowPerPage: ROW_PER_PAGE
  })

  const [sortedData, setSortedData] = useState<OrderProps[]>(slicedData)
  const { selectedRow } = useOrderContext()

  const isSelectedAll = selectedRow.length === data.length
  const allId = data.map((item) => item.fireBaseId)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setSearch(value)
    const filteredData = data.filter((item) =>
      item['recipientName'].toLocaleLowerCase().includes(value.toLocaleLowerCase())
    )

    !value ? setSortedData(slicedData) : setSortedData(filteredData)
  }

  const handleSelectAll = () => {
    !isSelectedAll ? dispatch(setSelectedRow(allId)) : dispatch(setSelectedRow([]))
  }

  useEffect(() => {
    setSortedData(slicedData)
  }, [slicedData])

  return (
    <>
      <SearchTable
        search={search}
        onSearchChange={handleSearchChange}
        onSelectAll={handleSelectAll}
        selectedAll={isSelectedAll}
        placeHolder='Tìm kiếm đơn hàng'
      />

      <Stack spacing={0} mt={15}>
        <TableHeader headerContent={productHeader} />

        <Stack spacing={15}>
          {sortedData && sortedData.length > 0 ? (
            sortedData.map((row: OrderProps) => <ProductRow row={row} key={row.fireBaseId} selectedRow={selectedRow} />)
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

export default ProductTable
