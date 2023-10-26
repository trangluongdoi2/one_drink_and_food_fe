import { useTranslation } from 'react-i18next'
import { useLocation, useParams } from 'react-router-dom'
import { Anchor, Breadcrumbs, Flex, Paper, Stack } from '@mantine/core'
import { ProductPortfolio } from '../../components/ProductPortfolio'
import { ProductGrid } from '../../components/ProductGrid'
import useGetProductTypeAndSubtype from '../../composables/useGetProductTypeAndSubtype'
import { useStyles } from './index.styles'

export const ProdctBaseThroughType = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const splitPath = useLocation().pathname.split('/')
  const { productType } = useParams() as unknown as any
  const { productSubTypeList } = useGetProductTypeAndSubtype(productType)

  const items = [{ title: t(productType), href: `products/${productType}`, currentPath: productType }].map(
    (item, index) => (
      <Anchor
        href={item.href}
        key={index}
        sx={{ color: splitPath[splitPath.length - 1] === item.currentPath ? '#000000' : '' }}
      >
        {item.title}
      </Anchor>
    )
  )

  return (
    <Paper className={classes.container}>
      <Breadcrumbs className={classes.containerText}>{items}</Breadcrumbs>
      <Stack spacing={20}>
        <ProductPortfolio isBasePortfolio={true} />
        <Flex direction={'column'} gap={20}>
          {productSubTypeList?.length ? (
            productSubTypeList.map((item: any, index: number) => (
              <ProductGrid key={index} title={item} productSubType={item} />
            ))
          ) : (
            <div></div>
          )}
        </Flex>
      </Stack>
    </Paper>
  )
}
