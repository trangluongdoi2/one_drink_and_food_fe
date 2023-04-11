import { ActionIcon, Paper, Text, Divider, Stack, Flex } from '@mantine/core'
import { useStyles } from './index.styles'
import { useTranslation } from 'react-i18next'
import { SelectOptionDarkIcon, SelectOptionLightIcon } from '@/assets/icon'
import { ProductOptionFrame } from '@/pages/products/components/ProductOptionFrame'

export const ProductSalesFrameFrom = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()

  const baseSalesList = [
    {
      title: t('main_ingredient'),
      field: 'mainIngredient',
      content: '',
      hasPrice: false
    },
    {
      title: t('choose_size'),
      field: 'size',
      content: '',
      hasPrice: true
    },
    {
      title: t('ice_content'),
      field: 'iceContent',
      content: '',
      hasPrice: true
    },
    {
      title: t('sugar_content'),
      field: 'sugarContent',
      content: '',
      hasPrice: true
    }
  ]
  return (
    <Paper className='create-new-product-card__container'>
      <Text className={classes.title}>{t('sale_frame')}</Text>
      <Divider />
      {baseSalesList.map((option: Record<string, any>, index: number) => (
        <ProductOptionFrame
          key={index}
          title={option.title}
          hasPrice={option.hasPrice}
          defaultPlaceholder={t('fill_selected_information')}
        />
      ))}
      <ActionIcon className='title-add'>
        <Text>+{t('add_option_frame')}</Text>
      </ActionIcon>
      <ActionIcon className='title-add'>
        <Text>+{t('add_content_frame')}</Text>
      </ActionIcon>
      <Stack sx={{ marginTop: '20px' }}>
        <Text className={classes.contentNotice}>{t('notice_production_sales_frame')}</Text>
        <Flex gap={10}>
          <SelectOptionDarkIcon />
          <Text className={classes.contentNotice}>{t('open_multi_select_guide')}</Text>
        </Flex>
        <Flex gap={10}>
          <SelectOptionLightIcon />
          <Text className={classes.contentNotice}>{t('close_multi_select_guide')}</Text>
        </Flex>
      </Stack>
    </Paper>
  )
}
