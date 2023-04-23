import { ActionIcon, Button, Flex, Image, Paper, Stack, Text } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AddFillIcon, DeleteIcon } from '@/assets/icon'
import { ProductCardProps } from '@/pages/products/type'
import { camelToSnakeCase } from '@/utils/string-utils'
import { useStyles } from './index.styles'

export const ProductCard = ({ forNewProduct = false, productSubType, productOverview }: ProductCardProps) => {
  const navigation = useNavigate()
  const { classes } = useStyles()
  const { t } = useTranslation()
  const onCreateNewProduct = () => {
    if (forNewProduct && productSubType) {
      navigation(`/products/juice/${camelToSnakeCase(productSubType)}/create-new`)
      return
    }
  }

  const onDeleteProduct = () => {
    console.log('onDeleteProduct')
  }

  const onEditProduct = () => {
    console.log('onDeleteProduct')
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
            <Image width={250} height={250} radius={10} />
          </Stack>
          <Stack className={classes.container_title}>
            <Stack spacing={0}>
              <Text className={classes.container_mainTitle}>Ổi</Text>
              <Text className={classes.container_childTitle}>#1 Nữ Hoàng Vitamin C</Text>
            </Stack>
            <ActionIcon onClick={onDeleteProduct}>
              <DeleteIcon />
            </ActionIcon>
          </Stack>
          <Stack className={classes.container_price}>
            <Flex align={'flex-end'}>
              <Text className={classes.price_text}>45.000đ</Text>
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
