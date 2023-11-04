import { useTranslation } from 'react-i18next'
import { useLocation, useParams } from 'react-router-dom'
import { Anchor, Breadcrumbs, Flex, Paper, Stack } from '@mantine/core'
import useGetProductTypeAndSubtype from '@/pages/products/composables/useGetProductTypeAndSubtype'
import { ProductPortfolio } from '@/pages/products/components/ProductPortfolio'
import { ProductGrid } from '@/pages/products/components/ProductGrid'
import { useStyles } from './index.styles'
import { ProductCard } from '../../components/ProductCard'
import { ProductTypeEnum } from '../../type'
import { ProductAnalytic } from '@/pages/overview/features/ProductAnalytic'

export const ProductBaseThroughType = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const splitPath = useLocation().pathname.split('/')
  const { productType } = useParams() as unknown as any
  const { productData, subTypeArrays } = useGetProductTypeAndSubtype(productType)

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

  if (productType !== ProductTypeEnum.JUICE) {
    return <ProductAnalytic />
  }

  return (
    <Paper className={classes.container}>
      <Breadcrumbs className={classes.containerText}>{items}</Breadcrumbs>
      <Stack spacing={20}>
        <ProductPortfolio isBasePortfolio={true} />
        <Flex direction={'column'} gap={20}>
          {subTypeArrays?.length ? (
            subTypeArrays.map((subType: string, index: number) => (
              <div key={index}>
                <ProductGrid
                  key={index}
                  productSubType={subType}
                  title={subType}
                  data={productData[productType].get(subType)}
                />
              </div>
            ))
          ) : (
            <ProductCard forNewProduct={true} />
          )}
        </Flex>
      </Stack>
    </Paper>
  )
}
