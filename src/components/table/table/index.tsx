import { useGetRowPerPage } from '@/hook/useGetRowPerPage'
import { Center, Stack, Text } from '@mantine/core'
import { useState } from 'react'
import { TablePagination } from '../pagination'
import { SearchTable } from '../search'

import { TableHeader } from './header'
import { Row } from './row/Row'
import { TTable } from './type'

const Table = ({ data, columns, rowPerPage = 10 }: TTable) => {
  const [search, setSearch] = useState('')
  const { totalItems, active, onChange, slicedData } = useGetRowPerPage<any[]>({
    data,
    rowPerPage: rowPerPage
  })
  const [sortedData, setSortedData] = useState<any[]>(slicedData)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>, key: any) => {
    const { value } = event.currentTarget
    setSearch(value)
    const filteredData = data.filter((item: any) =>
      (item[key] as string).toLocaleLowerCase().includes(value.toLocaleLowerCase())
    )

    setSortedData(!value ? slicedData : filteredData)
  }

  console.log({ sortedData })

  return (
    <>
      <SearchTable
        onSearchChange={(e) => e.stopPropagation()}
        selectedAll={true}
        search={search}
        onSelectAll={() => console.log('')}
      />
      <Stack spacing={0} mt={15}>
        <TableHeader headerContent={columns} />

        <Stack spacing={15}>
          {sortedData && sortedData.length > 0 ? (
            sortedData.map((row: any, index) => <Row row={row} selectedRow={[]} key={index} columns={columns} />)
          ) : (
            <Center sx={{ height: 200 }}>
              <td>
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

export default Table
