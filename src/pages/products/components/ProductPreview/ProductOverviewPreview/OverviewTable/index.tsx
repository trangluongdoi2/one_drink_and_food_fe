import { useTranslation } from 'react-i18next'
import { ActionIcon, Box, Checkbox, CheckboxProps, Flex, Radio, Stack, Text } from '@mantine/core'
import { CircleFillIcon } from '@/assets/icon'
import { clone } from '@/utils/utility'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import { updateSaleOption } from '@/reducer/product/action'
import { useStyles } from './index.styles'

type SaleOption = {
  info: string | number
  price?: number
}

// eslint-disable-next-line react/prop-types
const CheckboxIcon: CheckboxProps['icon'] = ({ className }) => (
  <ActionIcon className={className} size={6}>
    <CircleFillIcon />
  </ActionIcon>
)

export const OverviewTable = ({ updateSaleOption }: any) => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const { saleOptions, dispatch } = useProductContext()

  const convertUpdateData = (data: string[] | string, index: number) => {
    const cloneSaleOptions = clone(saleOptions)
    const updateData = [...cloneSaleOptions[index].value]
    return updateData.filter((item: SaleOption) => data.includes(item.info as string))
  }

  const changeEnableValueMultiOptions = (data: string[], index: number) => {
    const convertedData = convertUpdateData(data, index)
    updateSaleOption({ data: convertedData, index })
    // dispatch(updateSaleOption({ data: convertedData, index }))
  }

  const changeEnableValueUniqueOption = (data: string, index: number) => {
    const convertedData = convertUpdateData(data, index)
    updateSaleOption({ data: convertedData, index })
    // dispatch(updateSaleOption({ data: convertedData, index }))
  }

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
                    <Radio.Group
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        rowGap: '10px'
                      }}
                      onChange={(event) => changeEnableValueUniqueOption(event, index)}
                    >
                      {item.value.map((data: SaleOption, childIndex: number) => (
                        <Flex key={childIndex} align={'center'} rowGap={10}>
                          <Radio
                            value={data.info}
                            label={data.info || t('option', { index: childIndex + 1 })}
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
                      onChange={(event) => changeEnableValueMultiOptions(event, index)}
                    >
                      {item.value.map((data: SaleOption, childIndex: number) => (
                        <Flex key={childIndex} align={'center'} rowGap={10}>
                          <Checkbox
                            value={data.info}
                            label={data.info || t('option', { index: childIndex + 1 })}
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
    </Flex>
  )
}
