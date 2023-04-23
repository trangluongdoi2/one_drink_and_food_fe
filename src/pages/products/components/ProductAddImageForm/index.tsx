import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ActionIcon, Group, Paper, Stack, Text, Image, Box } from '@mantine/core'
import { Dropzone, FileWithPath, MIME_TYPES } from '@mantine/dropzone'
import { AddFillIcon, TableRowsIcon, CloseButton } from '@/assets/icon'
import { useStyles } from './index.styles'

type Props = {
  limitQuantity: number
  hiddenTitle?: boolean
  isActive?: boolean
  options?: Record<string, any>
  updateFilePaths: (data: string[]) => void
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
  updateFilePaths
}: Props) => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const acceptType = [MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.svg]

  const [filePaths, setfilePaths] = useState<string[]>(Array.from({ length: limitQuantity }, () => ''))

  const onUploadFile = (index: number) => (event: FileWithPath[]) => {
    const newFiles = [...filePaths]
    const imageUrl = URL.createObjectURL(event[0] as FileWithPath)
    newFiles[index] = imageUrl
    setfilePaths(newFiles)
  }

  const removeFile = (index: number) => {
    const newFiles = [...filePaths]
    newFiles.splice(index, 1, '')
    setfilePaths(newFiles)
  }

  useEffect(() => {
    updateFilePaths(filePaths)
  }, [filePaths])

  return (
    <Paper className={`${!isActive ? classes.containerDisabled : ''}`}>
      {!hiddenTitle && <Text className={classes.title}>{t('add_image')}</Text>}
      <Paper className={classes.imageContainer}>
        {filePaths?.map((url: string, index: number) => (
          <Stack className={classes.child} key={index}>
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
          </Stack>
        ))}
      </Paper>
    </Paper>
  )
}
