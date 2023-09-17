import { CloseButton } from '@/assets/icon'
import { ActionIcon, Box, Image, Paper } from '@mantine/core'
import { FC, useState } from 'react'
import { useStyles } from './index.style'
import { FileWithPath } from '@mantine/dropzone'

type TImageImportProps = {
  fileURL: FileWithPath
  index: string
  removeFile: (index: string) => void
}

export const ImportedImage: FC<TImageImportProps> = ({ fileURL, index, removeFile }) => {
  const { classes } = useStyles()
  const url = URL.createObjectURL(fileURL)

  const [isHovering, setIsHovering] = useState<boolean>(false)
  const handleMouseEnter = () => {
    setIsHovering(true)
  }
  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <Paper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Image
        src={url}
        imageProps={{ onLoad: () => URL.revokeObjectURL(url) }}
        classNames={{ image: classes.image_preview }}
        width={100}
        height={100}
      />
      {isHovering && (
        <ActionIcon size={16} radius={'50%'} onClick={() => removeFile(index)} className={classes.icon__remove}>
          <CloseButton />
        </ActionIcon>
      )}
    </Paper>
  )
}
