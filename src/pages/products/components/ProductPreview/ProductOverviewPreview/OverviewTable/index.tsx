import { Box, Button, Flex, Stack, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { useStyles } from './index.styles'
import { ExtraNoteIcon } from '@/assets/icon'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import { useEffect } from 'react'

export const OverviewTable = () => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const { name } = useProductContext()
  const baseSalesList = [
    {
      title: t('main_ingredient'),
      field: 'mainIngredient',
      value: 'Ổi x Mật ong',
      isOption: false
    },
    {
      title: t('choose_size'),
      field: 'size',
      value: '',
      isOption: true
    },
    {
      title: t('ice_content'),
      field: 'iceContent',
      value: '',
      isOption: true
    },
    {
      title: t('sugar_content'),
      field: 'sugarContent',
      value: '',
      isOption: true
    },
    {
      title: t('option_frame_name'),
      field: '',
      value: '',
      isOption: true
    },
    {
      title: t('content_frame_name'),
      field: '',
      value: t('fill_ingredient_product_content'),
      isOption: false
    }
  ]

  return (
    <Flex gap={6} direction={'column'}>
      <Box className={classes.container}>
        {baseSalesList.map((item, index) => (
          <Stack key={index} spacing={0}>
            <Text className={classes.text__title}>{item.title}</Text>
            <Flex className={classes.container__content}>
              {item.isOption ? (
                <Text className={classes.text__content}>{item.value}</Text>
              ) : (
                <Text className={classes.text__content}>{item.value}</Text>
              )}
            </Flex>
          </Stack>
        ))}
      </Box>
      <Box className={`${classes.container} ${classes.container__note}`}>
        <Button className={classes.note__icon}>
          <ExtraNoteIcon />
        </Button>
        <Text className={classes.note__text}>{t('extra_note')}</Text>
      </Box>
      <Box className={`${classes.container} ${classes['container__add-cart']}`}>
        <Text className={classes['text__add-cart']}>
          <span className={classes['text__add-cart--bold']}>45.000đ</span> | {t('add_to_cart')}
        </Text>
      </Box>
    </Flex>
  )
}
