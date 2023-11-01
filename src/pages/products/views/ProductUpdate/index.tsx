import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useParams } from 'react-router-dom'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import { ProductCreateNewForm } from '@/pages/products/components/ProductCreateNewForm'
import { ProductPreview } from '@/pages/products/components/ProductPreview'
import useConverterStateToApiData from '@/pages/products/composables/useConveterStateToApiData'
import { Anchor, Breadcrumbs, Button, Paper, Stack } from '@mantine/core'
import { useProductUpdateMutation, useUploadProductThumbsMutation } from '../../query/product'
import { TProductUpdate } from '../../type'
import { useStyles } from './index.styles'

export const ProductUpdate = () => {
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
    mutate: mutateProductUpdate,
    data: updatedProduct,
    isSuccess: isSuccessProductUpdate
  } = useProductUpdateMutation()

  const {
    mutate: mutateProductUploadThumbs,
    data: dataImageUpload,
    isSuccess: isSuccessProductUploadThumbs
  } = useUploadProductThumbsMutation()

  const onUpdateProduct = async () => {
    setLoading(true)
    setTempPhotoStores(productStateData.tempPhotoThumbs as File[])
    const input: TProductUpdate = await useConverterStateToApiData(productStateData, {
      productType: productType as any,
      productSubType: productSubType as any
    })
    setLoading(false)
    // @ts-ignore
    mutateProductUpdate(input)
  }

  const checkValidButton = () => {
    const { productName, productPrice, productQuantity } = productStateData
    return !!productName && !!productPrice && !!productQuantity
  }

  useEffect(() => {
    setValidButton(checkValidButton())
  }, [productStateData.productName, productStateData.productPrice, productStateData.productQuantity])

  useEffect(() => {
    if (isSuccessProductUpdate) {
      const formData = new FormData()
      if (tempPhotoStores?.length) {
        for (let i = 0; i < tempPhotoStores.length; i++) {
          formData.append(`thumb${i + 1}`, tempPhotoStores[i] as any)
        }
      }
      const productId = updatedProduct._id
      mutateProductUploadThumbs({ id: productId, thumbs: formData })
    }
  }, [isSuccessProductUpdate])

  useEffect(() => {
    if (isSuccessProductUpdate && isSuccessProductUploadThumbs) {
      setLoading(false)
    }
  }, [isSuccessProductUpdate, isSuccessProductUploadThumbs])

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
              onClick={onUpdateProduct}
              disabled={!validButton}
              loading={loading}
            >
              {t('update_product')}
            </Button>
          </div>
        </Paper>
      </Stack>
    </Paper>
  )
}
