import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import AuthApi from '@/features/auth'
import { ProductCreateNewForm } from '@/pages/products/components/ProductCreateNewForm'
import { ProductPreview } from '@/pages/products/components/ProductPreview'
import useConverterStateToApiData from '@/pages/products/composables/useConveterStateToApiData'
import { camelToSnakeCase } from '@/utils/string-utils'
import { Anchor, Breadcrumbs, Button, Paper, Stack } from '@mantine/core'
import { useProductUpdateMutation, useUploadProductThumbsMutation } from '../../query/product'
import { TProductUpdate } from '../../type'
import { useStyles } from './index.styles'

type Props = {
  type: string
  subType: string
}

export const ProductUpdate = ({ type, subType }: Props) => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const productStateData = useProductContext()
  const splitPath = useLocation().pathname.split('/')
  const [validButton, setValidButton] = useState<boolean>(true)
  const [tempPhotoStores, setTempPhotoStores] = useState<File[]>([])
  const [loading, setLoading] = useState<boolean>(false)
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
      productType: type as any,
      productSubType: subType
    })
    const authApi = new AuthApi()
    await authApi.loginAdmin({ username: 'admin', password: '1' })
    setLoading(false)
    // @ts-ignore
    mutateProductUpdate(input)
  }

  const checkValidButton = () => {
    const { productName, auxiliaryName, productPrice, productQuantity } = productStateData
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
