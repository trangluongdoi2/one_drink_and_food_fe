import { Box, Flex, Pagination, Text } from '@mantine/core'

interface TablePaginationProps {
  total: number
  onChange: (value: number) => void
  active: number
}

export const TablePagination = ({ total, onChange, active }: TablePaginationProps) => {
  return (
    <Flex justify='space-between' mt={20}>
      <Box></Box>
      <Pagination
        total={total}
        styles={(theme) => ({
          control: {
            backgroundColor: '#f5f5f5',
            '&[data-active]': {
              backgroundImage: theme.fn.gradient({ from: 'black', to: 'black' })
            }
          }
        })}
        position='center'
        radius={10}
        defaultValue={1}
        onChange={onChange}
      />
      <Text fw={500} size={12}>
        Trang {active} / {total}
      </Text>
    </Flex>
  )
}
