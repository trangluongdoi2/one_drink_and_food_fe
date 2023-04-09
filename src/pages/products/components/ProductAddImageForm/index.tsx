import { useRef, useState } from 'react'
import { useStyles } from './index.styles'
import { ActionIcon, Flex, NumberInput, Paper, Stack, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { AddFillIcon, TableRowsIcon, ToggleDarkLgIcon, ToggleLightLgIcon } from '@/assets/icon'

export const ProductAddImageForm = () => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const [isActiveMotionInput, setIsActiveMotionInput] = useState(true)
  const refInput = useRef<HTMLInputElement>(null)
  const onUploadImage = () => {
    refInput.current?.click()
  }
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
  const toggleAttributes = () => {
    setIsActiveMotionInput(!isActiveMotionInput)
  }
  return (
    <Paper>
      <Text className={classes.title}>{t('add_image')}</Text>
      <Paper className={classes.imageContainer}>
        {listImageProduct.map((image: Record<string, any>, index: number) => (
          <Stack className={classes.child} key={index} onClick={onUploadImage}>
            <ActionIcon size={20} className={classes.iconMenu}>
              <TableRowsIcon />
            </ActionIcon>
            <ActionIcon className={classes.iconAdd}>
              <AddFillIcon />
            </ActionIcon>
            <input type='file' accept='image/png' ref={refInput} className={classes.input} />
          </Stack>
        ))}
      </Paper>
      <Flex className={classes.moreOption} justify={'space-between'}>
        <Flex align={'center'}>
          <Text className={classes.title} sx={{ marginBottom: '0', marginRight: '10px' }}>
            {t('motion_images')}
          </Text>
          <ActionIcon className={classes.iconToggle} onClick={toggleAttributes}>
            {isActiveMotionInput ? <ToggleDarkLgIcon /> : <ToggleLightLgIcon />}
          </ActionIcon>
        </Flex>
        <NumberInput
          placeholder={t('fill_time_value') || ''}
          classNames={{ input: classes.inputMotionTime, rightSection: classes.rightSection }}
          sx={{ flex: '1', marginLeft: '10px' }}
          disabled={!isActiveMotionInput}
        />
      </Flex>
    </Paper>
  )
}
