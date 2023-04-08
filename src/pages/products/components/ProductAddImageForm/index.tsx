import { RefObject, createRef, useState } from 'react'
import { useStyles } from './index.styles'
import { ActionIcon, Paper, Stack, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { AddFillIcon, TableRowsIcon } from '@/assets/icon'

export const ProductAddImageForm = () => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const onUploadImage = () => {
    refInput.current?.click()
  }
  const refInput = createRef() as RefObject<HTMLInputElement>
  const [listImageProduct, setListImageProduct] = useState([
    {
      name: '1'
    },
    {
      name: '1'
    },
    {
      name: '1'
    },
    {
      name: '1'
    },
    {
      name: '1'
    },
    {
      name: '1'
    },
    {
      name: '1'
    },
    {
      name: '1'
    }
  ])
  return (
    <Paper>
      <Text className={classes.title}>{t('add_image')}</Text>
      <Paper className={classes.imageContainer}>
        {listImageProduct.map((image: Record<string, any>, index: number) => (
          <Stack className={classes.child} key={index} onClick={() => onUploadImage()}>
            <ActionIcon size={20} className={classes.iconMenu}>
              <TableRowsIcon />
            </ActionIcon>
            <ActionIcon className={classes.iconAdd}>
              <AddFillIcon />
            </ActionIcon>
            <input type='file' accept='image/png' ref={refInput} className={classes.input}/>
          </Stack>
        ))}
      </Paper>
    </Paper>
  )
}
