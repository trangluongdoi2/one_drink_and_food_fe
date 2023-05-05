import { Button, Paper, Stack, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'
import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { FirebaseService } from '@/firebase/handler'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import { ProductCreateNewForm } from '@/pages/products/components/ProductCreateNewForm'
import { ProductPreview } from '@/pages/products/components/ProductPreview'
import { productAddTest } from '@/pages/products/composables/useStaticData'
import { useStyles } from './index.styles'
import { clone } from '@/utils/utility'

export const ProductCreateNew = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const productData = useProductContext()
  const { createWithCustomKey } = FirebaseService

  const onSaveProduct = () => {
    const id = uuidv4()
    createWithCustomKey(FIREBASE_COLLECTION.PRODUCTS_TEST, clone(productData), id)
    console.log(productData, 'productData')
  }
  return (
    <Paper className={classes.container}>
      <Stack>
        <Text mb={25}>Nước ép/ Nước ép ly/ Thêm sản phẩm</Text>
        <Paper className={classes.containerGrid}>
          <div className={classes.container__form}>
            <ProductCreateNewForm />
          </div>
          <div className={classes.container__preview}>
            <ProductPreview />
            <Button className={classes.container__button} onClick={onSaveProduct}>
              {t('create_new_product')}
            </Button>
          </div>
        </Paper>
      </Stack>
    </Paper>
  )
}
