import { useTranslation } from 'react-i18next'
import { ActionIcon, Box, Checkbox, CheckboxProps, Flex, Radio, Stack, Text } from '@mantine/core'
import { CircleFillIcon } from '@/assets/icon'
import { clone, cloneMap } from '@/utils/utility'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import { TProductAttributeOption, TProductCreateNewAtribute } from '@/pages/products/type'
import { useStyles } from './index.styles'
import { useEffect, useState } from 'react'
import { cloneDeep } from 'lodash'

type Props = {
  updateSaleOption: (input: any) => void
}

const CheckboxIcon: CheckboxProps['icon'] = ({ className }: any) => (
  <ActionIcon className={className} size={6}>
    <CircleFillIcon />
  </ActionIcon>
)

export const OverviewTable = ({ updateSaleOption }: Props) => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const { attributes, productMainIngredients } = useProductContext()
  const [mapChoicesOptions, setMapChoicesOptions] = useState<Map<string, TProductAttributeOption[]>>(new Map())

  const changeEnableValueUniqueOption = (optionField: string, data: TProductCreateNewAtribute) => {
    const currentOption = data.options?.filter((item: any) => item.text === optionField)
    if (currentOption?.length) {
      const newMap = cloneDeep(mapChoicesOptions)
      newMap.set(data.value, currentOption)
      setMapChoicesOptions(newMap)
    }
  }

  const changeEnableValueMultiOptions = (optionFields: Array<string | number>, data: TProductCreateNewAtribute) => {
    const currentOptions = data.options?.filter((option: TProductAttributeOption) => optionFields.includes(option.text))
    if (currentOptions?.length) {
      const newMap = cloneDeep(mapChoicesOptions)
      newMap.set(data.value, currentOptions)
      setMapChoicesOptions(newMap)
    }
  }

  useEffect(() => {
    updateSaleOption(mapChoicesOptions)
  }, [mapChoicesOptions])

  return (
    <Flex gap={6} direction={'column'}>
      <Box className={classes.container}>
        <Box>
          <Stack spacing={0}>
            <Text className={classes.text__title}>{t('main_ingredient')}</Text>
            <Text className={classes.text__content} style={{ height: '22px', padding: '7px 10px' }}>
              {productMainIngredients ? productMainIngredients : t('main_ingredient')}
            </Text>
          </Stack>
        </Box>
        {attributes.map((item, index) => (
          <Box key={index}>
            {item.appear && (
              <Stack key={index} spacing={0}>
                <Text className={classes.text__title}>{item.value}</Text>
                <Flex className={classes.container__content}>
                  <Stack sx={{ width: '100%' }}>
                    {!item.manyChoices ? (
                      <Radio.Group
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          rowGap: '10px'
                        }}
                        onChange={(event) => changeEnableValueUniqueOption(event, item)}
                      >
                        {item.options?.length &&
                          item.options.map((data: TProductAttributeOption, childIndex: number) => (
                            <Flex key={childIndex} align={'center'} rowGap={10}>
                              <Radio
                                value={data.text}
                                label={data.text || t('option', { index: childIndex + 1 })}
                                sx={{ flex: '1' }}
                                classNames={{
                                  label: classes.text__content,
                                  labelWrapper: classes['label-wrapper'],
                                  radio: classes['radio-input'],
                                  inner: classes['radio-inner'],
                                  icon: classes['radio-inner']
                                }}
                              />
                              <Text className={classes['text__content-price']}>(+{data.price}đ)</Text>
                            </Flex>
                          ))}
                      </Radio.Group>
                    ) : (
                      <Checkbox.Group
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          rowGap: '10px'
                        }}
                        onChange={(event) => changeEnableValueMultiOptions(event, item)}
                      >
                        {item.options?.length &&
                          item.options.map((data: TProductAttributeOption, childIndex: number) => (
                            <Flex key={childIndex} align={'center'} rowGap={10}>
                              <Checkbox
                                value={data.text}
                                label={data.text || t('option', { index: childIndex + 1 })}
                                sx={{ flex: '1', alignItems: 'center' }}
                                classNames={{
                                  label: classes.text__content,
                                  labelWrapper: classes['label-wrapper'],
                                  inner: classes['checkbox-inner'],
                                  input: classes['checkbox-input'],
                                  icon: classes['checkbox-inner']
                                }}
                                icon={CheckboxIcon}
                              />
                              <Text className={classes['text__content-price']}>(+{data.price}đ)</Text>
                            </Flex>
                          ))}
                      </Checkbox.Group>
                    )}
                  </Stack>
                </Flex>
              </Stack>
            )}
          </Box>
        ))}
      </Box>
    </Flex>
  )
}
