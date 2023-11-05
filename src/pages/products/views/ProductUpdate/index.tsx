import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useParams } from 'react-router-dom'
import { Anchor, Breadcrumbs, Button, Paper, Stack } from '@mantine/core'
import { Notifications, notifications } from '@mantine/notifications'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import { ProductCreateNewForm } from '@/pages/products/components/ProductCreateNewForm'
import { ProductPreview } from '@/pages/products/components/ProductPreview'
import useConverterStateToApiDataUpdate from '@/pages/products/composables/useConverterStateToApiDataUpdate'
import {
  useProductUpdateMutation,
  usePublishProductByIdMutation,
  useUploadProductThumbsMutation
} from '@/pages/products/query/product'
import { ProductType, ProductTypeEnum, TProductUpdate } from '@/pages/products/type'
import { useStyles } from './index.styles'

export const ProductUpdate = () => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const productStateData = useProductContext()
  const { productType, productSubType } = useParams()
  const splitPath = useLocation().pathname.split('/')
  const [validButton, setValidButton] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)

  const items = [
    { title: t(productType ?? ''), href: `products/${productType}`, currentPath: productType },
    { title: productSubType, href: `products/${productType}`, currentPath: productSubType },
    {
      title: t('update_product'),
      href: `products/${productType}/${productSubType ?? ''}/update`,
      currentPath: 'update'
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

  const { mutate: mutateProductUpdate, isSuccess: isSuccessProductUpdate } = useProductUpdateMutation()

  const { mutate: mutateProductUploadThumbs, isSuccess: isSuccessProductUploadThumbs } =
    useUploadProductThumbsMutation()

  const { mutate: mutateProductPublishById, isSuccess: isSuccessProductPublishById } = usePublishProductByIdMutation()

  const onUpdateProduct = async () => {
    setLoading(true)
    mutateProductPublishById(productStateData._id as string)
  }

  const checkValidButton = () => {
    const { productName, productPrice, productQuantity } = productStateData
    return !!productName && !!productPrice && !!productQuantity
  }

  useEffect(() => {
    if (isSuccessProductPublishById) {
      const formData = new FormData()
      if (productStateData.tempPhotoThumbs?.length) {
        for (let i = 0; i < productStateData.tempPhotoThumbs.length; i++) {
          formData.append(`thumb${i + 1}`, productStateData.tempPhotoThumbs[i] as any)
        }
      }
      const productId = productStateData._id
      mutateProductUploadThumbs({ id: productId, thumbs: formData })
      const input: TProductUpdate = useConverterStateToApiDataUpdate(productStateData)
      mutateProductUpdate({ data: input, productType: (productType ?? ProductTypeEnum.JUICE) as ProductType })
    }
  }, [isSuccessProductPublishById])

  useEffect(() => {
    setValidButton(checkValidButton())
  }, [productStateData.productName, productStateData.productPrice, productStateData.productQuantity])

  useEffect(() => {
    if (isSuccessProductUpdate && isSuccessProductUploadThumbs) {
      setLoading(false)
      notifications.show({
        color: 'lime',
        message: t('update_product_success'),
        style: { backgroundColor: '#12B886' },
        autoClose: 3000
      })
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
      <Notifications position='top-center' />
    </Paper>
  )
}
