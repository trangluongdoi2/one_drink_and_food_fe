import { Center, Pagination } from '@mantine/core'
import { useStyles } from './index.style'

interface TablePaginationProps {
  total: number
}

export const TablePagination = ({ total }: TablePaginationProps) => {
  const { classes } = useStyles()
  return (
    <Center>
      <Pagination total={total} color='dark.1' radius={10} className={classes.pagination} />
    </Center>
  )
}
