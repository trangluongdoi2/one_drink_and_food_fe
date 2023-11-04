import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { ActionIcon, Button, Flex, Image, Paper, Stack, Text } from '@mantine/core'
import { ProductCardProps } from '@/pages/products/type'
import { AddFillIcon, DeleteIcon } from '@/assets/icon'
import { useStyles } from './index.styles'

export const ProductCard = ({ forNewProduct = false, productSubType, item }: ProductCardProps) => {
  const navigation = useNavigate()
  const { classes } = useStyles()
  const { t } = useTranslation()
  const { productType } = useParams()
  const [subType, setSubType] = useState<string>(
    productSubType ?? productSubType ?? `${productType ?? +Math.floor(Math.random() * 10)}`
  )
  const onCreateNewProduct = () => {
    if (forNewProduct) {
      navigation(`/products/${productType}/${subType}/create-new`)
      return
    }
  }

  const onDeleteProduct = () => {
    console.log('onDeleteProduct')
  }

  const onEditProduct = () => {
    const productId = item._id as string
    navigation(`/products/${productType}/${subType}/${productId}`)
  }

  return (
    <Paper className={classes.container} onClick={onCreateNewProduct}>
      {forNewProduct ? (
        <>
          <Stack>
            <ActionIcon size={52.5} className={classes.icon}>
              <AddFillIcon />
            </ActionIcon>
          </Stack>
          <Text fz={14}>{t('add_product')}</Text>
        </>
      ) : (
        <>
          <Stack>
            <Image width={250} height={250} radius={10} src={item.productThumbs[0]?.url} />
          </Stack>
          <Stack className={classes.container_title}>
            <Stack spacing={0}>
              <Text className={classes.container_mainTitle}>{item.productName}</Text>
              <Text className={classes.container_childTitle}>{item.auxiliaryName}</Text>
            </Stack>
            <ActionIcon onClick={onDeleteProduct}>
              <DeleteIcon />
            </ActionIcon>
          </Stack>
          <Stack className={classes.container_price}>
            <Flex align={'flex-end'}>
              <Text className={classes.price_text}>{item.productPrice}</Text>
            </Flex>
            <Button className={classes.price_button} onClick={onEditProduct}>
              {t('edit')}
            </Button>
          </Stack>
        </>
      )}
    </Paper>
  )
}
