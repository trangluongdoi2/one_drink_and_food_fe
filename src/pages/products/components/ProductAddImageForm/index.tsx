import { useEffect, useState } from 'react'
import { GridItem, swap } from 'react-grid-dnd'
import { useTranslation } from 'react-i18next'
import { AddFillIcon, CloseButton, TableRowsIcon } from '@/assets/icon'
import { DragDropGridHandler } from '@/components/DragDropGridHandler'
import { DragDropGridConfigs } from '@/components/DragDropGridHandler/type'
import { ActionIcon, Box, Group, Image, Paper, Text } from '@mantine/core'
import { Dropzone, FileWithPath, MIME_TYPES } from '@mantine/dropzone'
import { useStyles } from './index.styles'

type Props = {
  limitQuantity: number
  hiddenTitle?: boolean
  isActive?: boolean
  options?: Record<string, any>
  updateFilePaths: (data: string[]) => void
  updateFileStores: (data: File[]) => void
}

type PreviewImageZoneProps = {
  fileURL: string
  index: number
  removeFile: (index: number) => void
}

export const PreviewImageZone = ({ fileURL, index, removeFile }: PreviewImageZoneProps) => {
  const { classes } = useStyles()
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const handleMouseEnter = () => {
    setIsHovering(true)
  }
  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <Box className={classes.image_preview} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Image
        src={fileURL}
        imageProps={{ onLoad: () => URL.revokeObjectURL(fileURL) }}
        classNames={{ image: classes.image_preview }}
        width={100}
        height={100}
      />
      {isHovering && (
        <ActionIcon size={16} radius={'50%'} onClick={() => removeFile(index)} className={classes.icon__remove}>
          <CloseButton />
        </ActionIcon>
      )}
    </Box>
  )
}

export const ProductAddImageForm = ({
  limitQuantity,
  hiddenTitle = false,
  isActive = true,
  updateFilePaths,
  updateFileStores
}: Props) => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const acceptType = [MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.svg]
  const configs: DragDropGridConfigs = {
    height: 110,
    boxesPerRow: 4,
    totalItems: limitQuantity
  }

  const [filePaths, setFilePaths] = useState<string[]>(Array.from({ length: limitQuantity }, () => ''))
  const [fileStores, setFileStores] = useState<File[] | any>(Array.from({ length: limitQuantity }, () => null))
  const [dragDropItems, setDragDropItems] = useState<Array<any>>(filePaths)

  const onUploadFile = (index: number) => (event: FileWithPath[]) => {
    const newFilesPath = [...filePaths]
    const newFiles = [...fileStores]
    const imageUrl = URL.createObjectURL(event[0] as FileWithPath)
    newFilesPath[index] = imageUrl
    newFiles[index] = event[0] as FileWithPath
    setFilePaths(newFilesPath)
    setFileStores(newFiles)
  }

  const removeFile = (index: number) => {
    const newFiles = [...filePaths]
    newFiles.splice(index, 1, '')
    setFilePaths(newFiles)
  }

  const onChange = (sourceId: string, sourceIndex: number, targetIndex: number) => {
    const nextState = swap(dragDropItems, sourceIndex, targetIndex)
    setDragDropItems(nextState)
  }

  useEffect(() => {
    updateFilePaths(filePaths)
    updateFileStores(fileStores)
    setDragDropItems(filePaths)
  }, [filePaths, fileStores])

  return (
    <Paper className={`${!isActive ? classes.containerDisabled : ''}`}>
      {!hiddenTitle && <Text className={classes.title}>{t('add_image')}</Text>}
      <DragDropGridHandler configs={configs} onChange={onChange}>
        {filePaths?.map((url: string, index: number) => (
          <GridItem style={{ marginRight: '10px', marginBottom: '10px' }} key={index}>
            <Box className={classes.child}>
              <ActionIcon size={20} className={classes.iconMenu}>
                <TableRowsIcon />
              </ActionIcon>
              <Dropzone accept={acceptType} onDrop={onUploadFile(index)} classNames={{ root: classes.add__zone }}>
                <Group position='center'>
                  <Group className={classes.iconAdd}>
                    <AddFillIcon />
                  </Group>
                </Group>
              </Dropzone>
              {url && <PreviewImageZone fileURL={url} index={index} removeFile={removeFile} />}

            </Box>
          </GridItem>
        ))}
      </DragDropGridHandler>
      <Paper className={classes.imageContainer}></Paper>
    </Paper>
  )
}
