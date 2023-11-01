import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useParams } from 'react-router-dom'
import { Anchor, Breadcrumbs, Button, Paper, Stack } from '@mantine/core'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import { ProductCreateNewForm } from '@/pages/products/components/ProductCreateNewForm'
import { ProductPreview } from '@/pages/products/components/ProductPreview'
import useConverterStateToApiData from '@/pages/products/composables/useConveterStateToApiData'
import { setProductDirty } from '@/reducer/product/action'
import {
  useProductCreateMutation,
  usePublishProductByIdMutation,
  useUploadProductThumbsMutation
} from '../../query/product'
import { TProductCreateNew } from '../../type'
import { useStyles } from './index.styles'

export const ProductCreateNew = () => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const productStateData = useProductContext()
  const { productType, productSubType } = useParams()
  const splitPath = useLocation().pathname.split('/')
  const [validButton, setValidButton] = useState<boolean>(true)
  const [tempPhotoStores, setTempPhotoStores] = useState<File[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const items = [
    { title: t(productType ?? ''), href: `products/${productType}`, currentPath: productType },
    { title: productSubType, href: `products/${productType}`, currentPath: productSubType },
    {
      title: t('add_product'),
      href: `products/${productType}/${productSubType ?? ''}/create-new`,
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

  const {
    mutate: mutateProductCreateNew,
    data: createdProduct,
    isSuccess: isSuccessProductCreateNew
  } = useProductCreateMutation()
  const { mutate: mutateProductUploadThumbs, isSuccess: isSuccessProductUploadThumbs } =
    useUploadProductThumbsMutation()

  const { mutate: mutateProductPublishById, isSuccess: isSuccessProductPublishById } = usePublishProductByIdMutation()

  const onCreateProduct = async () => {
    if (productStateData.dirty) {
      return
    }
    setLoading(true)
    setTempPhotoStores(productStateData.tempPhotoThumbs as File[])
    const input: TProductCreateNew = await useConverterStateToApiData(productStateData, {
      productType: productType as any,
      productSubType: productSubType as any
    })
    mutateProductCreateNew(input)
    productStateData.dispatch(setProductDirty(false))
  }

  const checkValidButton = () => {
    const { productName, productPrice, productQuantity } = productStateData
    return !!productName && !!productPrice && !!productQuantity
  }

  useEffect(() => {
    setValidButton(checkValidButton())
  }, [productStateData.productName, productStateData.productPrice, productStateData.productQuantity])

  useEffect(() => {
    if (isSuccessProductCreateNew) {
      const productId = createdProduct._id
      mutateProductPublishById(productId)
    }
  }, [isSuccessProductCreateNew])

  useEffect(() => {
    if (isSuccessProductPublishById) {
      const formData = new FormData()
      if (tempPhotoStores?.length) {
        for (let i = 0; i < tempPhotoStores.length; i++) {
          formData.append(`thumb${i + 1}`, tempPhotoStores[i] as any)
        }
      }
      const productId = createdProduct._id
      mutateProductUploadThumbs({ id: productId, thumbs: formData })
    }
  }, [isSuccessProductPublishById])

  useEffect(() => {
    if (isSuccessProductCreateNew && isSuccessProductPublishById && isSuccessProductUploadThumbs) {
      setLoading(false)
    }
  }, [isSuccessProductCreateNew, isSuccessProductPublishById, isSuccessProductUploadThumbs])

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
            <Button
              className={classes.container__button}
              disabled={!validButton}
              loading={loading}
              onClick={onCreateProduct}
            >
              {t('create_new_product')}
            </Button>
          </div>
        </Paper>
      </Stack>
    </Paper>
  )
}
