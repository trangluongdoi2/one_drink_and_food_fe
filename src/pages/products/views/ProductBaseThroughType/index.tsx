import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useParams } from 'react-router-dom'
import { Anchor, Box, Breadcrumbs, Flex, Paper, Skeleton, Stack } from '@mantine/core'
import useGetProductTypeAndSubtype from '@/pages/products/composables/useGetProductTypeAndSubtype'
import { ProductPortfolio } from '@/pages/products/components/ProductPortfolio'
import { ProductGrid } from '@/pages/products/components/ProductGrid'
import { useStyles } from './index.styles'
import { ProductCard } from '@/pages/products/components/ProductCard'
import { ProductTypeEnum } from '@/pages/products/type'
import { ProductAnalytic } from '@/pages/overview/features/ProductAnalytic'

export const ProductBaseThroughType = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const splitPath = useLocation().pathname.split('/')
  const { productType } = useParams() as unknown as any
  const { productData, subTypeArrays, isFetching } = useGetProductTypeAndSubtype(productType)

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

  const Loader = () => {
    const styleLoader = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 'calc(100% - 60px)'
    }

    const styleLoaderGrid = {
      padding: '40px',
      display: 'grid',
      gridTemplateColumns: 'auto auto auto',
      gridAutoRows: 'auto auto auto',
      gap: '10px',
      backgroundColor: '#FFFFFF'
    }

    return (
      <Box style={styleLoader}>
        <Stack spacing={20}>
          <Skeleton width={1100} height={80} radius={10}></Skeleton>
          <Skeleton width={1100} height={80} radius={10}></Skeleton>
          <Box style={styleLoaderGrid}>
            {Array(6)
              .fill(0)
              .map((_, index: number) => (
                <Skeleton key={index} height={380} width={300} radius={10}></Skeleton>
              ))}
          </Box>
        </Stack>
      </Box>
    )
  }

  return (
    <Paper className={classes.container}>
      {isFetching ? (
        <Loader />
      ) : (
        <div>
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
        </div>
      )}
    </Paper>
  )
}
