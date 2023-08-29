import { ActionIcon, Paper, Stack, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { ProductOverviewNewForm } from './ProductOverviewNewForm'
import { ProductSalesFrameForm } from './ProductSalesFrameForm'
import { ProductInformationForm } from './ProductInformationForm'

export const ProductCreateNewForm = () => {
  const { t } = useTranslation()
  return (
    <Paper sx={{ background: 'transparent' }}>
      <Stack>
        <ProductOverviewNewForm />
        <ProductSalesFrameForm />
        <ProductInformationForm />
        <Paper className='create-new-product-card__container'>
          <ActionIcon className='title-add' sx={{ marginTop: '0 !important' }}>
            <Text>+{t('create_information_category')}</Text>
          </ActionIcon>
        </Paper>
      </Stack>
    </Paper>
  )
}
