import { useTranslation } from 'react-i18next'
import { ActionIcon, Paper, Text, Divider, Stack, Flex } from '@mantine/core'
import { SelectOptionDarkIcon, SelectOptionLightIcon } from '@/assets/icon'
import { ProductOptionFrame } from '@/pages/products/components/ProductOptionFrame'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import {
  addProductSaleOption,
  removeProductSaleOption,
  setEnabledProductInfo,
  setProductSaleOptions,
  setSelectMultiOption,
  setTitleProductInfo
} from '@/reducer/product/action'
import { ProductSaleOptionsContent } from '@/pages/products/type'
import { useStyles } from './index.styles'

export const ProductSalesFrameFrom = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const { dispatch, saleOptions } = useProductContext()

  const updateProductOption = (data: ProductSaleOptionsContent, index: number) => {
    dispatch(setProductSaleOptions({ data, index }))
  }

  const updateSelectMultiOption = (data: boolean, index: number) => {
    dispatch(setSelectMultiOption({ data, index }))
  }

  const updateEnable = (data: boolean, index: number) => {
    dispatch(setEnabledProductInfo({ data, index }))
  }

  const updateTitle = (data: string, index: number) => {
    dispatch(setTitleProductInfo({ data, index }))
  }

  const addProductOptionItem = (isOption: boolean) => {
    const length = saleOptions.length
    const initProductSaleOption: ProductSaleOptionsContent = {
      title: (isOption ? t('option_name') : t('content_name')) as string,
      field: isOption ? `option${length + 1}` : `content${length + 1}`,
      value: [],
      isOption,
      canSelectMultiOptions: true,
      multiOptions: isOption,
      enable: true
    }
    dispatch(addProductSaleOption(initProductSaleOption))
  }

  const removeProductOptionItem = (index: number) => {
    dispatch(removeProductSaleOption(index))
  }

  return (
    <Paper className={classes.container} >
      <Text className={classes.title}>{t('sale_frame')}</Text>
      <Divider />
      {saleOptions.map((option: ProductSaleOptionsContent, index: number) => (
        <ProductOptionFrame
          key={index}
          field={option.field}
          title={option.title}
          isOption={option.isOption}
          multiOptions={option.multiOptions}
          enable={option.enable}
          defaultPlaceholder={t('fill_selected_information')}
          updateTitle={(data) => updateTitle(data, index)}
          updateEnable={(data) => updateEnable(data, index)}
          updateSelectMultiOption={(data) => updateSelectMultiOption(data, index)}
          updateProductOption={(data) => updateProductOption(data, index)}
          removeProductOptionItem={() => removeProductOptionItem(index)}
        />
      ))}
      <ActionIcon className={`title-add ${classes['button-add']}`} onClick={() => addProductOptionItem(true)}>
        <Text>+{t('add_option_frame')}</Text>
      </ActionIcon>
      <ActionIcon className={`title-add ${classes['button-add']}`} onClick={() => addProductOptionItem(false)}>
        <Text>+{t('add_content_frame')}</Text>
      </ActionIcon>
      <Stack sx={{ marginTop: '20px', padding: '0 40px 40px 40px' }}>
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
