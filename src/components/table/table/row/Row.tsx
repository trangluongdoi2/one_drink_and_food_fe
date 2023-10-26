import { EditIcon } from '@/assets/icon'
import { TColumnsProps } from '@/components/table/table/type'
import { ActionIcon, Checkbox, Flex, List, Stack } from '@mantine/core'
import { IconCheck, IconX } from '@tabler/icons-react'
import { Fragment, SetStateAction, useState } from 'react'
import { useStyles } from './index.style'

type TRowProps = {
  row: any
  columns?: TColumnsProps[]
  selectedRows: string[]
  onSelectRows: React.Dispatch<SetStateAction<string[]>>
  onSubmitChange: () => void
  onEdit?: (value: any) => void
}

export const Row = ({ row, columns, selectedRows, onSelectRows, onSubmitChange, onEdit }: TRowProps) => {
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

  const handleEditRow = () => {
    setEdit(!edit)
    onEdit && !edit && onEdit(row)
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
              <Stack key={col.id} w={col.width} align={col.position} className={classes.column}>
                {col && col.render && col.render(row, edit)}
              </Stack>
            ))}
            <Flex key='action' w='5%' align='flex-end'>
              <ActionIcon
                color='dark.4'
                onClick={() => {
                  onSubmitChange()
                  setEdit(false)
                }}
              >
                {edit && <IconCheck />}
              </ActionIcon>
              <ActionIcon color='dark.4' onClick={handleEditRow}>
                {edit ? <IconX /> : <EditIcon />}
              </ActionIcon>
            </Flex>
          </Flex>
        </List>
      </Flex>
    </Fragment>
  )
}
