import { ProductGridProps } from '@/pages/products/type'
import { Paper } from '@mantine/core'
import { useStyles } from './index.styles'
import { ProductCard } from '../ProductCard'
import { ProductPortfolio } from '../ProductPortfolio'
import { useEffect, useState } from 'react'
import { useAllProductQuery } from '../../query/product'

export const ProductGrid = ({ title, productSubType }: ProductGridProps) => {
  const { classes } = useStyles()
  const { data, refetch } = useAllProductQuery({})
  useEffect(() => {
    refetch()
  }, [])

  return (
    <Paper className={classes.container}>
      <ProductPortfolio title={title} />
      <Paper className={classes.containerGrid}>
        <ProductCard forNewProduct={true} productSubType={productSubType} />
        {data?.length &&
          data.map((item: any, index: number) => (
            <div key={index}>
              <ProductCard item={item} />
            </div>
          ))}
      </Paper>
    </Paper>
  )
}
