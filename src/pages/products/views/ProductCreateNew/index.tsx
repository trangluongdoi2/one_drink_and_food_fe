import { useTranslation } from 'react-i18next'
import { Anchor, Breadcrumbs, Button, Paper, Stack } from '@mantine/core'
import { v4 as uuidv4 } from 'uuid'
import { clone } from '@/utils/utility'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import { ProductCreateNewForm } from '@/pages/products/components/ProductCreateNewForm'
import { ProductPreview } from '@/pages/products/components/ProductPreview'
import { useStyles } from './index.styles'
import { camelToSnakeCase } from '@/utils/string-utils'
import { useLocation } from 'react-router-dom'
import { TProductCreateNew, ProductInfos } from '../../type'
import ProductsApi from '../../api/product'
import useConverterStateToApiData from '@/pages/products/composables/useConveterStateToApiData'
import CategoryApi from '../../api/category'
import { useProductCreateMutation } from '../../query/product'
import { useEffect, useState } from 'react'

type Props = {
  type: string
  subType: string
}

export const ProductCreateNew = ({ type, subType }: Props) => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const productStateData = useProductContext()
  const splitPath = useLocation().pathname.split('/')
  const [validButton, setValidButton] = useState<boolean>(true)
  // const [productCreateData, setProductCreateData] = useState<TProductCreateNew | undefined>()

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

  const { mutate } = useProductCreateMutation()

  const onSaveProduct = async () => {
    const input: TProductCreateNew = useConverterStateToApiData(productStateData)
    mutate(input)
  }

  const checkValidButton = () => {
    const { productName, auxiliaryName, productPrice, productQuantity } = productStateData
    return !!productName && !!auxiliaryName && !!productPrice && !!productQuantity
  }

  useEffect(() => {
    setValidButton(checkValidButton())
  }, [
    productStateData.productName,
    productStateData.auxiliaryName,
    productStateData.productPrice,
    productStateData.productQuantity
  ])

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
            <Button className={classes.container__button} onClick={onSaveProduct} disabled={!validButton}>
              {t('create_new_product')}
            </Button>
          </div>
        </Paper>
      </Stack>
    </Paper>
  )
}
