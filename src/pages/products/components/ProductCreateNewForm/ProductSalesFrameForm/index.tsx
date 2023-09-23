import { useEffect } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { useTranslation } from 'react-i18next'
import { SelectOptionDarkIcon, SelectOptionLightIcon } from '@/assets/icon'
import { DragDropBlock } from '@/components/DragDropBlock'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import { TProductAttributeOption, TProductCreateNewAtribute } from '@/pages/products/type'
import {
  addAttributeOption,
  removeAttributeOption,
  reorderProductAttributesList,
  setAppearAttributeOption,
  setManyChoices,
  updateProductAttributeOption,
  updateProductAttributeOptionName,
  updateProductMainIngredients
} from '@/reducer/product/action'
import { ActionIcon, Center, Flex, Paper, Stack, Text } from '@mantine/core'
import { useListState } from '@mantine/hooks'
import { ProductOptionAttribute } from '../../ProductOptionAttribute'
import { ProductMainAttribute } from '../../ProductMainAttribute'
import { useStyles } from './index.styles'
import { DragDropListHandler } from '@/components/DragDropListHandler'

export const ProductSalesFrameForm = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const { dispatch, attributes } = useProductContext()
  const [dragDropAttributesList, handlers] = useListState(attributes)

  const onAddAttributeOption = (isOption = true) => {
    const length = attributes.length
    const pureOptionContent = isOption
      ? {
          text: '',
          price: 0
        }
      : { text: '' }
    const pureAttributeOption: TProductCreateNewAtribute = {
      value: isOption ? `Lựa chọn ${length + 1}` : `Nội dung ${length + 1}`,
      order: 0,
      manyChoices: isOption ? true : false,
      atLeastOne: false,
      appear: true,
      options: [pureOptionContent]
    }
    dispatch(addAttributeOption(pureAttributeOption))
  }

  const updateAttributeOptions = (input: { attrVal: string; options: TProductAttributeOption[] }) => {
    dispatch(updateProductAttributeOption(input))
  }

  const updateMainIngredients = (input: { attrVal: string; data: string | number }) => {
    dispatch(updateProductMainIngredients(input))
  }

  const onDragEnd = (data: { from: number; to: number }) => {
    handlers.reorder(data)
    dispatch(reorderProductAttributesList(data))
  }

  useEffect(() => {
    handlers.setState(attributes)
  }, [attributes])

  return (
    <Paper className={classes.container}>
      <Text className={classes.title}>{t('sale_frame')}</Text>
      <Center>
        <div className={classes.border}></div>
      </Center>
      <ProductMainAttribute
        title={'Thành phần chính'}
        defaultPlaceholder={t('fill_ingredient_product_content')}
        updateContentValue={(data: string | number) => updateMainIngredients({ attrVal: 'mainIngredients', data })}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        setEnabled={() => {}}
      />
      <DragDropListHandler onDragEnd={onDragEnd}>
        {dragDropAttributesList.map((attribute: TProductCreateNewAtribute, index: number) => (
          <Draggable key={attribute.value} index={index} draggableId={attribute.value}>
            {(provided: any, snapshot: any) => (
              <div ref={provided.innerRef} {...provided.draggableProps}>
                <ProductOptionAttribute
                  key={index}
                  defaultPlaceholder={t('fill_selected_information')}
                  attribute={attribute}
                  updateAttributeOptions={(data: TProductAttributeOption[]) =>
                    updateAttributeOptions({ attrVal: attribute.value, options: data })
                  }
                  updateAttributeName={(data: string) => dispatch(updateProductAttributeOptionName({ data, index }))}
                  removeAttributeOption={(data: string) => dispatch(removeAttributeOption(data))}
                  setManyChoices={(data: boolean) => dispatch(setManyChoices({ data, index }))}
                  setEnabled={(data: boolean) => dispatch(setAppearAttributeOption({ data, index }))}
                  blockDraggable={<DragDropBlock provided={provided} />}
                />
              </div>
            )}
          </Draggable>
        ))}
      </DragDropListHandler>
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
