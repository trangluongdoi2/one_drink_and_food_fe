import { ActiveEditIcon, EditIcon } from '@/assets/icon'
import { TColumnsProps } from '@/components/table/table/type'
import { ActionIcon, Checkbox, Flex, List, Stack } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { Fragment, SetStateAction, useState } from 'react'
import { useStyles } from './index.style'

type TRowProps = {
  row: any
  columns?: TColumnsProps[]
  editMode?: boolean
  onChangeEditMode: React.Dispatch<SetStateAction<boolean>>
  selectedRows: string[]
  onSelectRows: React.Dispatch<SetStateAction<string[]>>
}

export const Row = ({ row, columns, editMode, onChangeEditMode, selectedRows, onSelectRows }: TRowProps) => {
  const { fireBaseId: id } = row
  const isSelected = selectedRows.includes(id)
  const { classes } = useStyles({ isSelected })
  const [edit, setEdit] = useState<boolean>(false)

  const handleSelectedRow = () => {
    if (!isSelected) {
      onSelectRows([...selectedRows, id])
    } else {
      onSelectRows(selectedRows.filter((row) => row !== id))
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
          <Flex gap={10} align='center' justify='center' p={20} className={classes.content}>
            {columns?.map((col: TColumnsProps) => (
              <Stack key={col.id} w={col.width} align={col.position}>
                {col && col.render && col.render(row, edit)}
              </Stack>
            ))}
            <Stack key='action' w='5%' align='flex-end'>
              <ActionIcon onClick={() => setEdit(!edit)}>{edit ? <ActiveEditIcon /> : <EditIcon />}</ActionIcon>
            </Stack>
          </Flex>
        </List>
      </Flex>
    </Fragment>
  )
}
