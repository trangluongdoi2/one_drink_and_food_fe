import { useGetRowPerPage } from '@/hook/useGetRowPerPage'
import { Center, Loader, Stack, Text } from '@mantine/core'
import { SetStateAction, useEffect, useState } from 'react'
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
  selectedRows: string[]
  searchKey: string
  onSelectRows: React.Dispatch<SetStateAction<string[]>>
  onSubmitChange: () => void
  onEdit?: (value: any) => void
  onRowClick?: (value: any) => void
  loading?: boolean
}

const Table = ({
  data,
  columns,
  rowPerPage = 10,
  selectedRows,
  searchKey,
  onSelectRows,
  onSubmitChange,
  onEdit,
  onRowClick,
  loading = false
}: TTableProps) => {
  const [searchValue, setSearch] = useState('')

  const { totalItems, active, slicedData, onChange } = useGetRowPerPage<any[]>({
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

  useEffect(() => {
    setSortedData(slicedData)
  }, [slicedData])

  if (loading || !data || !data.length)
    return (
      <Center>
        <Loader variant='dots' color='dark' />
      </Center>
    )

  return (
    <>
      <SearchTable
        onSearchChange={(e) => handleSearchChange(e, searchKey)}
        selectedAll={isSelectedAll}
        search={searchValue}
        onSelectAll={handleSelectAll}
      />
      <Stack spacing={0} mt={15}>
        <Header headerContent={columns} />

        <Stack spacing={15}>
          {!sortedData.length ? (
            <Center h={200}>
              <Text weight={500} align='center'>
                Danh sách trống
              </Text>
            </Center>
          ) : (
            sortedData.map((row: any, index) => (
              <Row
                row={row}
                key={index}
                columns={columns}
                selectedRows={selectedRows}
                onSelectRows={onSelectRows}
                onSubmitChange={onSubmitChange}
                onEdit={onEdit}
                onRowClick={onRowClick}
              />
            ))
          )}
        </Stack>
      </Stack>
      <TablePagination total={totalItems} onChange={onChange} active={active} />
    </>
  )
}

export default Table
