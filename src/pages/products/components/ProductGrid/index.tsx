import { ProductGridProps } from '@/pages/products/type'
import { Paper } from '@mantine/core'
import { useStyles } from './index.styles'
import { ProductCard } from '../ProductCard'
import { ProductPortfolio } from '../ProductPortfolio'
import { useEffect } from 'react'
import { useAllProductQuery } from '../../query'
import ProductsApi from '../../api'

export const ProductGrid = ({ title, productSubType }: ProductGridProps) => {
  const { classes } = useStyles()
  const { data, refetch } = useAllProductQuery({})
  // useEffect(() => {
  //   refetch()
  // }, [])

  const test = async () => {
    refetch()
    console.log(data, 'data')
    // const productApi = new ProductsApi()
    // const data = await productApi.getAllProducts()
    // console.log(data, 'data...')
  }

  return (
    <Paper className={classes.container}>
      {JSON.stringify(data)}
      <button onClick={test}>All products</button>
      <ProductPortfolio title={title} />
      <Paper className={classes.containerGrid}>
        <ProductCard forNewProduct={true} productSubType={productSubType} />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Paper>
    </Paper>
  )
}
