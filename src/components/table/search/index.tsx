import { SearchIcon } from '@/assets/icon'
import { Button, Checkbox, Flex, TextInput, Text } from '@mantine/core'
import { useStyles } from './index.style'
import { useState } from 'react'
import { useCustomerContext } from '@/context/CustomerContext/CustomerContext'
import { setSelectedRow } from '@/reducer/customer/action'

interface SearchTableProps {
  search: string
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  selectedAll: boolean
  allId: string[]
}

export const SearchTable = ({ search, handleSearchChange, selectedAll, allId }: SearchTableProps) => {
  const { classes } = useStyles()
  const [checked, setChecked] = useState<boolean>(false)
  const { dispatch } = useCustomerContext()

  const handleSelectAll = () => {
    setChecked(!checked)
    !selectedAll ? dispatch(setSelectedRow(allId)) : dispatch(setSelectedRow([]))
  }

  return (
    <Flex>
      <Flex gap={20} sx={{ width: '100%' }} align='center'>
        <Checkbox
          size='lg'
          radius={10}
          checked={selectedAll}
          sx={{ input: { backgroundColor: '#f5f5f5' } }}
          color='gray.8'
          onChange={handleSelectAll}
        />

        <TextInput
          placeholder='Tìm kiếm thông tin khách hàng'
          value={search}
          onChange={handleSearchChange}
          label=''
          className={classes.inputField}
          icon={<SearchIcon />}
        />
      </Flex>
      <Button color='dark.2' fullWidth className={classes.button}>
        <Text size={14} color='gray.8' fw={300}>
          Tìm kiếm
        </Text>
      </Button>
    </Flex>
  )
}
