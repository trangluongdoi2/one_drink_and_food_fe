import { useTranslation } from 'react-i18next'
import { ActionIcon, Paper, Text, Stack, Flex } from '@mantine/core'
import { SelectOptionDarkIcon, SelectOptionLightIcon } from '@/assets/icon'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import {
  setManyChoices,
  updateProductAttributeOption,
  updateProductAttributeOptionName,
  updateProductMainIngredients,
  addAttributeOption,
  removeAttributeOption,
  setAppearAttributeOption
} from '@/reducer/product/action'
import { TProductAttributeOption, TProductCreateNewAtribute } from '@/pages/products/type'
import { ProductOptionAttribute } from '../../ProductOptionAttribute'
import { useStyles } from './index.styles'

export const ProductSalesFrameForm = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const { dispatch, attributes } = useProductContext()

  const onAddAttributeOption = (isOption = true) => {
    const length = attributes.length
    const pureAttributeOption: TProductCreateNewAtribute = {
      value: isOption ? `Option ${length + 1}` : `Nội dung ${length + 1}`,
      order: 0,
      manyChoices: isOption ? true : false,
      atLeastOne: false,
      appear: true,
      options: []
    }
    dispatch(addAttributeOption(pureAttributeOption))
  }

  const updateAttributeOptions = (input: { attrVal: string; options: TProductAttributeOption[] }) => {
    dispatch(updateProductAttributeOption(input))
  }

  const updateMainIngredients = (input: { attrVal: string; data: string | number }) => {
    dispatch(updateProductMainIngredients(input))
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
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        setEnabled={() => {}}
      />
      {attributes.map((attribute: TProductCreateNewAtribute, index: number) => (
        <ProductOptionAttribute
          key={index}
          title={attribute.value}
          defaultPlaceholder={t('fill_selected_information')}
          atLeastOne={attribute.atLeastOne}
          manyChoices={attribute.manyChoices}
          optionsAttribute={attribute.options}
          isOption={attribute.atLeastOne || attribute.manyChoices}
          updateAttributeOptions={(data: TProductAttributeOption[]) =>
            updateAttributeOptions({ attrVal: attribute.value, options: data })
          }
          updateAttributeName={(data: string) => dispatch(updateProductAttributeOptionName({ data, index }))}
          removeAttributeOption={(data: string) => dispatch(removeAttributeOption(data))}
          setManyChoices={(data: boolean) => dispatch(setManyChoices({ data, index }))}
          setEnabled={(data: boolean) => dispatch(setAppearAttributeOption({ data, index }))}
        />
      ))}
      <ActionIcon className={`title-add ${classes['button-add']}`} onClick={() => onAddAttributeOption(true)}>
        <Text>+{t('add_option_frame')}</Text>
      </ActionIcon>
      <ActionIcon className={`title-add ${classes['button-add']}`} onClick={() => onAddAttributeOption(false)}>
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
