import { SearchIcon } from '@/assets/icon'
import { Button, Checkbox, Flex, TextInput, Text } from '@mantine/core'
import { useStyles } from './index.style'

interface SearchTableProps {
  search: string
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  selectedAll: boolean
  onSelectAll: () => void
  placeHolder?: string
}

export const SearchTable = ({
  search,
  onSearchChange,
  selectedAll,
  onSelectAll,
  placeHolder = 'Tìm kiếm thông tin'
}: SearchTableProps) => {
  const { classes } = useStyles()

  return (
    <Flex>
      <Flex gap={20} sx={{ width: '100%' }} align='center'>
        <Checkbox
          size='lg'
          radius={10}
          checked={selectedAll}
          sx={{ input: { backgroundColor: '#f5f5f5' } }}
          color='gray.8'
          onChange={onSelectAll}
        />

        <TextInput
          placeholder={placeHolder}
          value={search}
          onChange={onSearchChange}
          label=''
          className={classes.inputField}
          icon={<SearchIcon />}
        />
      </Flex>
      <Button color='dark.2' fullWidth className={classes.button}>
        <Text size={14} color='gray.8' fw={400}>
          Tìm kiếm
        </Text>
      </Button>
    </Flex>
  )
}
