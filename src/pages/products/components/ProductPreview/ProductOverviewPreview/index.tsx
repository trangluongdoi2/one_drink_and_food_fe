import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ActionIcon, Box, Button, Flex, Stack, Text } from '@mantine/core'
import { clone } from '@/utils/utility'
import { ProductSaleOptionsContent, SaleOptionValue } from '@/pages/products/type'
import { AddCircleLightIcon, DoNotDisturbLightIcon, ExtraNoteIcon } from '@/assets/icon'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import { OverviewTable } from './OverviewTable'
import { useStyles } from './index.styles'

export const ProductOverviewPreview = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const { productName, auxiliaryName, productPrice, saleOptions, isVAT } = useProductContext()
  const [realPrices, setRealPrices] = useState<number>(productPrice)
  const [countProduct, setCountProduct] = useState<number>(1)
  const [saleOptionsData, setSaleOptionsData] = useState<ProductSaleOptionsContent[]>(saleOptions)

  const caculateRealPrices = () => {
    let sum = 0
    saleOptionsData.forEach((option: ProductSaleOptionsContent) => {
      if (option.isOption) {
        sum += option.value.reduce((a: number, b: SaleOptionValue) => a + (b?.price || 0), 0)
      }
    })
    setRealPrices((sum + productPrice) * countProduct)
  }

  const updateSaleOption = (input: { data: SaleOptionValue[]; index: number }) => {
    const { data, index } = input
    const newSaleOptionsData = [...saleOptionsData]
    newSaleOptionsData[index].value = data
    setSaleOptionsData(newSaleOptionsData)
  }

  useEffect(() => {
    caculateRealPrices()
  }, [countProduct, productPrice, saleOptionsData])

  useEffect(() => {
    setSaleOptionsData(clone(saleOptions))
  }, [saleOptions])

  return (
    <Stack spacing={0}>
      <Text className={productName ? classes.text__name : classes['text__name--empty']}>
        {productName ? productName : t('product_name')}
      </Text>
      <Text className={auxiliaryName ? classes.text__auxiliary : classes['text__auxiliary--empty']}>
        {auxiliaryName ? auxiliaryName : t('fill_product_auxiliary_name')}
      </Text>
      <Flex justify={'space-between'} align={'center'}>
        <Flex justify={'space-between'} align={'center'} columnGap={7}>
          <Text className={productPrice ? classes.text__auxiliary : classes['text__auxiliary--empty']}>
            {productPrice ? productPrice : t('prices')}
          </Text>
          <Text className={classes.text__price}>({isVAT ? t('include_VAT') : t('no_include_VAT')})</Text>
        </Flex>
        <Flex align={'center'} columnGap={15}>
          <ActionIcon size={18} onClick={() => setCountProduct(countProduct - 1 > 0 ? countProduct - 1 : 1)}>
            <DoNotDisturbLightIcon />
          </ActionIcon>
          <Text className={classes.text__count}>{countProduct}</Text>
          <ActionIcon size={18} onClick={() => setCountProduct(countProduct + 1)}>
            <AddCircleLightIcon />
          </ActionIcon>
        </Flex>
      </Flex>
      <OverviewTable updateSaleOption={updateSaleOption} />
      <Box className={`${classes.container} ${classes.container__note}`}>
        <Button className={classes.note__icon}>
          <ExtraNoteIcon />
        </Button>
        <Text className={classes.note__text}>{t('extra_note')}</Text>
      </Box>
      <Box className={`${classes.container} ${classes['container__add-cart']}`}>
        <Text className={classes['text__add-cart']}>
          <span className={classes['text__add-cart--bold']}>{realPrices || 0}đ</span> | {t('add_to_cart')}
        </Text>
      </Box>
    </Stack>
  )
}
