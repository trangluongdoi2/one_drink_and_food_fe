import { useRef, useState } from 'react'
import { useStyles } from './index.styles'
import { ActionIcon, Flex, NumberInput, Paper, Stack, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { AddFillIcon, TableRowsIcon, ToggleDarkLgIcon, ToggleLightLgIcon } from '@/assets/icon'

const getInitImageList = (quantity: number) => {
  const result = [];
  for (let i = 0; i < quantity; i++) {
    result.push({
      name: '1'
    });
  }
  return result;
}

type Props = {
  limitQuantity: number
  hiddenTitle?: boolean
  isActive?: boolean
}
export const ProductAddImageForm = ({limitQuantity, hiddenTitle = false, isActive = true}: Props) => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const [isActiveMotionInput, setIsActiveMotionInput] = useState(true)
  const refInput = useRef<HTMLInputElement>(null)
  const onUploadImage = () => {
    refInput.current?.click()
  }
  const [listImageProduct, setListImageProduct] = useState(getInitImageList(limitQuantity))
  const toggleAttributes = () => {
    setIsActiveMotionInput(!isActiveMotionInput)
  }
  return (
    <Paper className={`${!isActive ? classes.containerDisabled : ''}`}>
      {!hiddenTitle && <Text className={classes.title}>{t('add_image')}</Text>}
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
