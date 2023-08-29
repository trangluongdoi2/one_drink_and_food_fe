import { useGetRowPerPage } from '@/hook/useGetRowPerPage'
import { Center, Stack, Text } from '@mantine/core'
import { SetStateAction, useState } from 'react'
import { TablePagination } from '../pagination'
import { SearchTable } from '../search'

import { Header } from './header'
import { Row } from './row/Row'
import { TColumnsProps } from './type'

export type TTableProps = {
  data: any[]
  columns: TColumnsProps[]
  searchValue?: string
  rowPerPage?: number
  editMode?: boolean
  onChangeEditMode: React.Dispatch<SetStateAction<boolean>>
  selectedRows: string[]
  onSelectRows: React.Dispatch<SetStateAction<string[]>>
}

const Table = ({
  data,
  columns,
  rowPerPage = 10,
  editMode = false,
  onChangeEditMode,
  selectedRows,
  onSelectRows
}: TTableProps) => {
  const [searchValue, setSearch] = useState('')

  const { totalItems, active, onChange, slicedData } = useGetRowPerPage<any[]>({
    data,
    rowPerPage: rowPerPage
  })
  const [sortedData, setSortedData] = useState<any[]>(slicedData)
  const isSelectedAll = selectedRows.length === data.length

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>, key: any) => {
    const { value } = event.currentTarget
    setSearch(value)
    const filteredData = data.filter((item: any) =>
      (item[key] as string).toLocaleLowerCase().includes(value.toLocaleLowerCase())
    )
    setSortedData(!value ? slicedData : filteredData)
  }

  const handleSelectAll = () => {
    !isSelectedAll ? onSelectRows(data.map((item) => item.fireBaseId)) : onSelectRows([])
  }

  return (
    <>
      <SearchTable
        onSearchChange={(e) => handleSearchChange(e, 'couponCode')}
        selectedAll={isSelectedAll}
        search={searchValue}
        onSelectAll={handleSelectAll}
      />
      <Stack spacing={0} mt={15}>
        <Header headerContent={columns} />

        <Stack spacing={15}>
          {sortedData && sortedData.length > 0 ? (
            sortedData.map((row: any, index) => (
              <Row
                row={row}
                key={index}
                columns={columns}
                editMode={editMode}
                onChangeEditMode={onChangeEditMode}
                selectedRows={selectedRows}
                onSelectRows={onSelectRows}
              />
            ))
          ) : (
            <Center h={200}>
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
