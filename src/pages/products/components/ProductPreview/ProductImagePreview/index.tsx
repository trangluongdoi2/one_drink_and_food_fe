import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ActionIcon, Flex, Stack, Text } from '@mantine/core'
import { DoneOutlineIcon } from '@/assets/icon'
import { useStyles } from './index.styles'

export const ProductImagePreview = () => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const [listFunction, setListFunction] = useState([
    {
      value: 'Chức năng 1'
    }
  ])
  return (
    <Stack className={classes.container}>
      <div className={classes.image}></div>
      <Flex className={classes.image__carousel}>
        <div className={classes['image__carousel-child']}></div>
        <div className={classes['image__carousel-child']}></div>
        <div className={classes['image__carousel-child']}></div>
      </Flex>
      <Stack>
        {listFunction.map((item, index) => (
          <Flex key={index} columnGap={6}>
            <ActionIcon size={10}>
              <DoneOutlineIcon />
            </ActionIcon>
            <Text className={`${classes.text__content} ${classes.text__function}`}>{item.value}</Text>
          </Flex>
        ))}
      </Stack>
      <Stack spacing={1}>
        <Text className={classes.text__introduction}>{t('introduction')}</Text>
        <Text className={`${classes.text__content} ${classes.text__function}`}>{t('fill_product_introduction')}</Text>
      </Stack>
    </Stack>
  )
}
