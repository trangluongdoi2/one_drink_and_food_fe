import { ActionIcon, Paper, Text, Divider, Stack, Flex } from '@mantine/core'
import { useStyles } from './index.styles'
import { useTranslation } from 'react-i18next'
import { SelectOptionDarkIcon, SelectOptionLightIcon } from '@/assets/icon'
import { ProductOptionFrame } from '@/pages/products/components/ProductOptionFrame'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import { setProductSaleOptions, setSelectMultiOption } from '@/reducer/product/action'
import { ProductSaleOptionsContent } from '@/pages/products/type'

export const ProductSalesFrameFrom = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const { dispatch, saleOptions } = useProductContext()
  // console.log(saleOptions, 'saleOptions')

  const updateProductOption = (data: ProductSaleOptionsContent, index: number) => {
    dispatch(setProductSaleOptions({ data, index }))
  }

  const updateSelectMultiOption = (data: boolean, index: number) => {
    dispatch(setSelectMultiOption({ data, index }))
  }

  return (
    <Paper className='create-new-product-card__container'>
      <Text className={classes.title}>{t('sale_frame')}</Text>
      <Divider />
      {saleOptions.map((option: ProductSaleOptionsContent, index: number) => (
        <ProductOptionFrame
          key={index}
          field={option.field}
          title={option.title}
          isOption={option.isOption}
          multiOptions={option.multiOptions}
          defaultPlaceholder={t('fill_selected_information')}
          updateSelectMultiOption={(data) => updateSelectMultiOption(data, index)}
          updateProductOption={(data) => updateProductOption(data, index)}
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
