import { SearchIcon } from '@/assets/icon'
import { Button, Checkbox, Flex, TextInput, Text } from '@mantine/core'
import { useStyles } from './index.style'

interface SearchTableProps {
  search: string
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchTable = ({ search, handleSearchChange }: SearchTableProps) => {
  const { classes } = useStyles()
  return (
    <Flex>
      <Flex gap={20} sx={{ width: '100%' }} align='center'>
        <Checkbox color='dark' size='lg' radius={10} />

        <TextInput
          placeholder='Search by any field'
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

export default SearchTable
