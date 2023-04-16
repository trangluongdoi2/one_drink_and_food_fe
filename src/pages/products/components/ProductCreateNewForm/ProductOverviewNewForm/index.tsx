import { Flex, Paper, Text } from '@mantine/core'
import { useStyles } from './index.styles'
import { AppInput } from '@/components/input'
import { AppInputList } from '@/components/input-list'
import { useTranslation } from 'react-i18next'
import { DoneOutlineIcon } from '@/assets/icon'
import { useState } from 'react'
import { ProductAddImageForm } from '@/pages/products/components/ProductAddImageForm'
import { ToggleButon } from '@/components/button/ToggleButton'

const IncludePrices = () => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const [isActive, setIsActive] = useState(true)
  const onToggleStatus = (status: boolean) => {
    setIsActive(status)
  }
  return (
    <Flex align={'center'} columnGap={5}>
      <Text className={classes.textIncludesVAT}>{t('include_VAT')}</Text>
      <ToggleButon onToggleStatus={onToggleStatus} isActive={isActive} />
    </Flex>
  )
}

export const ProductOverviewNewForm = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const [isActive, setIsActive] = useState(true)
  const [listFunction, setListFunction] = useState([])

  const toggleActiveInput = (value: boolean) => {
    setIsActive(value)
  }

  const updateFunctionList = (data: any) => {
    console.log(data, 'data parent')
    setListFunction([...data] as any)
  }

  return (
    <Paper className={`${classes.container} create-new-product-card__container`}>
      <ProductAddImageForm limitQuantity={8}/>
      <AppInput name={t('product_name')} isImperative={true} placeHolder={t('fill_product_name')} />
      <AppInput
        name={t('auxiliary_name')}
        placeHolder={t('fill_product_auxiliary_name')}
        iconToggle={<ToggleButon onToggleStatus={toggleActiveInput} isActive={isActive} />}
        isActiveInput={isActive}
      />
      <AppInput
        name={t('prices')}
        isImperative={true}
        placeHolder={t('fill_product_prices')}
        moreOptions={<IncludePrices />}
      />
      <AppInputList
        name={t('typical_function')}
        iconStatus={<DoneOutlineIcon />}
        updateList={updateFunctionList}
      ></AppInputList>
      <AppInput
        name={t('introduction')}
        placeHolder={t('fill_product_introduction')}
        isTextArea={true}
        iconToggle={<ToggleButon onToggleStatus={toggleActiveInput} isActive={isActive} />}
        isActiveInput={isActive}
      />
    </Paper>
  )
}
