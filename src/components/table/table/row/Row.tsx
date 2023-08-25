import { TColumnsProps } from '@/components/table/table/type'
import { useOrderContext } from '@/context/OrderContext/OrderContext'
import { setSelectedRow } from '@/reducer/order/action'
import { OrderProps } from '@/types/order'
import { Checkbox, Flex, List, Stack, useMantineTheme } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { Fragment, useState } from 'react'
import { useStyles } from './index.style'

type TRowProps = {
  row: any
  selectedRow: string[]
  columns?: TColumnsProps[]
}

export const Row = ({ row, selectedRow, columns }: TRowProps) => {
  const { dispatch } = useOrderContext()
  const { fireBaseId: id } = row
  const [edit, setEdit] = useState<boolean>(false)
  const isSelected = selectedRow.includes(id)
  const theme = useMantineTheme()
  const { classes } = useStyles({ isSelected })

  const handleSelectedRow = () => {
    if (!selectedRow.includes(id)) {
      dispatch(setSelectedRow([...selectedRow, id]))
    } else {
      dispatch(setSelectedRow(selectedRow.filter((row) => row !== id)))
    }
  }

  const successNotification = () => {
    notifications.show({
      title: 'Chỉnh sửa thành công',
      message: 'Thông tin đơn hàng đã được cập nhật',
      autoClose: 3000,
      color: 'green',
      withCloseButton: true
    })
  }

  return (
    <Fragment>
      <Flex className={classes.container}>
        <List className={classes.checkbox}>
          <Checkbox checked={isSelected} color='gray.8' size='lg' radius={10} onChange={handleSelectedRow} />
        </List>
        <List className={classes.list}>
          <Flex gap={10} align='center' justify='left' p={20} className={classes.content}>
            {columns?.map((col: TColumnsProps) => (
              <Stack key={col.id} w={col.width}>
                {col.render}
              </Stack>
            ))}
          </Flex>
        </List>
      </Flex>
    </Fragment>
  )
}
