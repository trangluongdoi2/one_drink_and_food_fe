import { ActiveEditIcon, EditIcon } from '@/assets/icon'
import { TColumnsProps } from '@/components/table/table/type'
import { ActionIcon, Checkbox, Flex, List, Stack } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { Fragment, SetStateAction, useState } from 'react'
import { useStyles } from './index.style'
import { IconCheck, IconX } from '@tabler/icons-react'
import { useCouponFormContext } from '@/pages/coupons/form'

type TRowProps = {
  row: any
  columns?: TColumnsProps[]
  selectedRows: string[]
  onSelectRows: React.Dispatch<SetStateAction<string[]>>
  onSubmitChange: () => void
}

export const Row = ({ row, columns, selectedRows, onSelectRows, onSubmitChange }: TRowProps) => {
  const { fireBaseId: id } = row
  const isSelected = selectedRows.includes(id)
  const { classes } = useStyles({ isSelected })
  const [edit, setEdit] = useState<boolean>(false)
  const form = useCouponFormContext()

  const handleSelectedRow = () => {
    if (!isSelected) {
      onSelectRows([...selectedRows, id])
    } else {
      onSelectRows(selectedRows.filter((row) => row !== id))
    }
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
            <Flex key='action' w='5%' align='flex-end'>
              <ActionIcon color='dark.4' onClick={onSubmitChange}>
                {edit && <IconCheck />}
              </ActionIcon>
              <ActionIcon
                color='dark.4'
                onClick={() => {
                  setEdit(!edit)
                  form.setValues({ selectedCoupon: row })
                }}
              >
                {edit ? <IconX /> : <EditIcon />}
              </ActionIcon>
            </Flex>
          </Flex>
        </List>
      </Flex>
    </Fragment>
  )
}
