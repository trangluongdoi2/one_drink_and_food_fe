import { useTranslation } from 'react-i18next'
import { ActionIcon, Paper, Text, Divider, Stack, Flex } from '@mantine/core'
import { SelectOptionDarkIcon, SelectOptionLightIcon } from '@/assets/icon'
import { ProductOptionFrame } from '@/pages/products/components/ProductOptionFrame'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import {
  setEnabledProductInfo,
  setManyChoices,
  setTitleProductInfo,
  setProductName,
  updateProductAttributeOption,
  updateProductAttributeOptionName,
  updateProductMainIngredients
} from '@/reducer/product/action'
import { ProductSaleOptionsContent, TProductAttributeOption, TProductCreateNewAtribute } from '@/pages/products/type'
import { useStyles } from './index.styles'
import { useEffect } from 'react'
import { ProductOptionAttribute } from '../../ProductOptionAttribute'

export const ProductSalesFrameForm = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const { dispatch, attributes } = useProductContext()

  const addProductOptionItem = (isOption: boolean) => {
    // const length = attributes.length
    // const initProductSaleOption: ProductSaleOptionsContent = {
    //   title: (isOption ? t('option_name') : t('content_name')) as string,
    //   field: isOption ? `option${length + 1}` : `content${length + 1}`,
    //   value: [],
    //   isOption,
    //   canSelectMultiOptions: true,
    //   manyChoices: isOption,
    //   enable: true
    // }
    // dispatch(addProductSaleOption(initProductSaleOption))
  }

  const updateAttributeName = (data: string, index: number) => {
    dispatch(updateProductAttributeOptionName({ data, index }))
  }

  const updateAttributeOptions = (input: { attrVal: string; options: TProductAttributeOption[] }) => {
    dispatch(updateProductAttributeOption(input))
  }

  const updateMainIngredients = (input: { attrVal: string; data: string | number }) => {
    dispatch(updateProductMainIngredients(input))
  }

  // const removeOption = (data: string) => {
  //   dispatch(removeAttributeOption(data))
  // }

  const removeAttributeOption = (data: string) => {
    console.log('removeAttributeOption')
  }

  return (
    <Paper className={classes.container}>
      <Text className={classes.title}>{t('sale_frame')}</Text>
      <ProductOptionAttribute
        title={'Thành phần chính'}
        defaultPlaceholder={t('fill_ingredient_product_content')}
        updateContentValue={(data: string | number) => updateMainIngredients({ attrVal: 'mainIngredients', data })}
        isOption={false}
        optionsAttribute={undefined}
      />
      {attributes.map((attribute: TProductCreateNewAtribute, index: number) => (
        <ProductOptionAttribute
          key={index}
          title={attribute.value}
          defaultPlaceholder={t('fill_selected_information')}
          atLeastOne={attribute.atLeastOne}
          manyChoices={attribute.manyChoices}
          optionsAttribute={attribute.options}
          isOption={true}
          updateAttributeOptions={(data: TProductAttributeOption[]) =>
            updateAttributeOptions({ attrVal: attribute.value, options: data })
          }
          updateAttributeName={(data: string) => updateAttributeName(data, index)}
          removeAttributeOption={removeAttributeOption}
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
