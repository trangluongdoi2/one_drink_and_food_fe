import { useTranslation } from 'react-i18next'
import { Anchor, Breadcrumbs, Button, Paper, Stack } from '@mantine/core'
import { v4 as uuidv4 } from 'uuid'
import { clone } from '@/utils/utility'
import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { FirebaseService } from '@/firebase/handler'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import { ProductCreateNewForm } from '@/pages/products/components/ProductCreateNewForm'
import { ProductPreview } from '@/pages/products/components/ProductPreview'
import { useStyles } from './index.styles'
import { camelToSnakeCase } from '@/utils/string-utils'
import { useLocation } from 'react-router-dom'

type Props = {
  type: string
  subType: string
}

export const ProductCreateNew = ({ type, subType }: Props) => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const productData = useProductContext()
  const { createWithCustomKey } = FirebaseService
  const splitPath = useLocation().pathname.split('/')

  const items = [
    { title: t(type), href: `products/${type}`, currentPath: type },
    { title: t(subType), href: `products/${type}`, currentPath: subType },
    {
      title: t('add_product'),
      href: `products/${type}/${camelToSnakeCase(subType)}/create-new`,
      currentPath: 'create-new'
    }
  ].map((item, index) => (
    <Anchor
      href={item.href}
      key={index}
      sx={{ color: splitPath[splitPath.length - 1] === item.currentPath ? '#000000' : '' }}
    >
      {item.title}
    </Anchor>
  ))

  const onSaveProduct = () => {
    const id = uuidv4()
    createWithCustomKey(FIREBASE_COLLECTION.PRODUCTS_TEST, clone(productData), id)
    console.log(productData, 'productData')
  }

  return (
    <Paper className={classes.container}>
      <Stack>
        <Breadcrumbs mb={25}>{items}</Breadcrumbs>
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
