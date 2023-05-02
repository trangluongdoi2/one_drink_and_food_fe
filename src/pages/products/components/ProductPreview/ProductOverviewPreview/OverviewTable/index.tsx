import { Box, Button, Checkbox, Flex, Radio, Stack, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { useStyles } from './index.styles'
import { ExtraNoteIcon } from '@/assets/icon'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import { useEffect, useState } from 'react'
import { ProductSaleOptionsContent } from '@/pages/products/type'
import { clone } from '@/utils/utility'
import { updateSaleOption } from '@/reducer/product/action'

type SaleOption = {
  info: string | number
  price?: number
}

export const OverviewTable = () => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const { saleOptions, dispatch } = useProductContext()
  const [enableValueMultiOptions, setEnableValueMultiOptions] = useState<string[]>([])
  const [enableValueUniqueOption, setEnableValueUniqueOption] = useState<any>()

  const changeEnableValueMultOptions = (data: string[], index: number) => {
    const cloneSaleOptions = clone(saleOptions)
    let updateData = [...cloneSaleOptions[index].value]
    updateData = updateData.filter((item: any) => data.includes(item.info))
    console.log(updateData, 'updateData')
    // dispatch(updateSaleOption({ data: updateData, index }))
  }

  const changeEnableValueUniqueOption = (data: any, index: number) => {
    // console.log(data, index, 'data, index')
    // dispatch(updateSaleOption({ data, index }))
  }

  // useEffect(() => {
  //   console.log(enableValueMultiOptions, 'enableValueMultiOptions')
  // }, [enableValueMultiOptions])

  // useEffect(() => {
  //   console.log(enableValueUniqueOption, 'enableValueUniqueOption')
  // }, [enableValueUniqueOption])

  return (
    <Flex gap={6} direction={'column'}>
      <Box className={classes.container}>
        {saleOptions.map((item, index) => (
          <Stack key={index} spacing={0}>
            <Text className={classes.text__title}>{item.title}</Text>
            <Flex className={classes.container__content}>
              {item.isOption ? (
                <Stack sx={{ width: '100%' }}>
                  {!item.canSelectMultiOptions ? (
                    // <Radio.Group
                    //   sx={{ justifyContent: 'center', alignItems: 'center' }}
                    //   onChange={(event) => changeEnableValueUniqueOption(event, index)}
                    // >
                    //   {item.value.map((data: SaleOption, childIndex: number) => (
                    //     <Flex key={childIndex} align={'center'}>
                    //       <Radio
                    //         value={data.info}
                    //         label={data.info}
                    //         sx={{ flex: '1' }}
                    //         classNames={{ label: classes.text__content, labelWrapper: classes['label-wrapper'] }}
                    //       />
                    //       <Text className={classes['text__content-price']}>(+{data.price}đ)</Text>
                    //     </Flex>
                    //   ))}
                    // </Radio.Group>
                    <Text>Nooo</Text>
                  ) : (
                    <Checkbox.Group
                      sx={{ justifyContent: 'center', alignItems: 'center' }}
                      onChange={(event) => changeEnableValueMultOptions(event, index)}
                    >
                      {item.value.map((data: SaleOption, childIndex: number) => (
                        <Flex key={childIndex} align={'center'}>
                          <Checkbox
                            value={data.info}
                            label={data.info || t('option', { index: childIndex + 1 })}
                            sx={{ flex: '1', alignItems: 'center' }}
                            classNames={{
                              label: classes.text__content,
                              labelWrapper: classes['label-wrapper'],
                              input: classes['checkbox-input']
                            }}
                          />
                          <Text className={classes['text__content-price']}>(+{data.price}đ)</Text>
                        </Flex>
                      ))}
                    </Checkbox.Group>
                  )}
                </Stack>
              ) : (
                <Stack>
                  {item.value.map((data: SaleOption, childIndex: number) => (
                    <Text key={childIndex} className={classes.text__content}>
                      {data.info}
                    </Text>
                  ))}
                </Stack>
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
