import { ActionIcon, Paper, Stack, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { ProductOverviewNewForm } from './ProductOverviewNewForm'
import { ProductSalesFrameForm } from './ProductSalesFrameForm'
import { ProductInformationForm } from './ProductInformationForm'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import { TProductCreateNewInformation } from '../../type'
import { addProductInfoItem } from '@/reducer/product/action'
export const ProductCreateNewForm = () => {
  const { t } = useTranslation()
  const { listInformation, dispatch } = useProductContext()
  const onAddProductInfoItem = () => {
    const pureProductInforItem: TProductCreateNewInformation = {
      title: '',
      order: 0,
      appear: true,
      informationItems: [
        {
          text: ''
        }
      ]
    }
    dispatch(addProductInfoItem(pureProductInforItem))
  }
  return (
    <Paper sx={{ background: 'transparent' }}>
      <Stack>
        <ProductOverviewNewForm />
        <ProductSalesFrameForm />
        {listInformation?.length &&
          listInformation.map((item: TProductCreateNewInformation, index) => (
            <ProductInformationForm key={index} infoItem={item} index={index} />
          ))}
        <Paper className='create-new-product-card__container'>
          <ActionIcon className='title-add' sx={{ marginTop: '0 !important' }} onClick={onAddProductInfoItem}>
            <Text>+{t('create_information_category')}</Text>
          </ActionIcon>
        </Paper>
      </Stack>
    </Paper>
  )
}
