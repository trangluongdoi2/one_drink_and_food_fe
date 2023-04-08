import { ActionIcon, Paper, Text } from '@mantine/core'
import { useStyles } from './index.styles'
import { AppInput } from '@/components/input'
import { useTranslation } from 'react-i18next'

export const ProductOverviewNewForm = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  return (
    <Paper className={`${classes.container} create-new-product-card__container`}>
      <AppInput name={t('product_name')} isImperative={true} placeHolder={t('fill_product_name')} />
      <AppInput name={t('auxiliary_name')} placeHolder={t('fill_product_auxiliary_name')} />
      <AppInput name={t('prices')} isImperative={true} placeHolder={t('fill_product_prices')} />
    </Paper>
  )
}
