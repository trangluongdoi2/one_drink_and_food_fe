import { Box, Flex, Pagination, Text } from '@mantine/core'
import { useStyles } from './index.style'
import { FC } from 'react'

type TTablePaginationProps = {
  total: number
  onChange: (value: number) => void
  active?: number
}

export const TablePagination: FC<TTablePaginationProps> = ({ total, onChange, active = 1 }) => {
  const { classes } = useStyles()
  return (
    <Flex justify='space-between' mt={20}>
      <Box></Box>
      <Pagination
        total={total}
        classNames={{ control: classes.control }}
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
