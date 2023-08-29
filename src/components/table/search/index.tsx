import { SearchIcon } from '@/assets/icon'
import { Button, Checkbox, Flex, TextInput, Text } from '@mantine/core'
import { useStyles } from './index.style'

type TSearchTableProps = {
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
}: TSearchTableProps) => {
  const { classes } = useStyles()

  return (
    <Flex>
      <Flex gap={20} w='100%' align='center'>
        <Checkbox size='lg' radius={10} checked={selectedAll} color='gray.8' onChange={onSelectAll} />

        <TextInput
          placeholder={placeHolder}
          value={search}
          onChange={onSearchChange}
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
