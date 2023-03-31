import { Box, Flex, Pagination, Text } from '@mantine/core'
import { useStyles } from './index.style'

interface TablePaginationProps {
  total: number
}

export const TablePagination = ({ total }: TablePaginationProps) => {
  const { classes } = useStyles()
  return (
    <Flex justify='space-between' mt={20}>
      <Box></Box>
      <Pagination total={total} color='dark.1' radius={10} className={classes.pagination} />
      <Text fw={500} size={12}>
        Trang 1/10
      </Text>
    </Flex>
  )
}
