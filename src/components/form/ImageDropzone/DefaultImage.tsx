import { AddFillIcon, TableRowsIcon } from '@/assets/icon'
import { ActionIcon, Group, Paper, Stack } from '@mantine/core'
import { Dropzone, FileWithPath, MIME_TYPES } from '@mantine/dropzone'
import { useStyles } from './index.style'
import { FC } from 'react'

const ACCEPT_TYPE = [MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.svg]

type TDefaultImageImportProps = {
  onUploadFile: (file: FileWithPath[]) => void
  acceptType?: []
}

const DefaultImage: FC<TDefaultImageImportProps> = ({ onUploadFile, acceptType }) => {
  const { classes } = useStyles()
  return (
    <Stack className={classes.child}>
      <ActionIcon size={20} className={classes.iconMenu}>
        <TableRowsIcon />
      </ActionIcon>
      <Dropzone accept={acceptType ?? ACCEPT_TYPE} onDrop={onUploadFile} classNames={{ root: classes.add__zone }}>
        <Group position='center'>
          <Group className={classes.iconAdd}>
            <AddFillIcon />
          </Group>
        </Group>
      </Dropzone>
    </Stack>
  )
}

export default DefaultImage
