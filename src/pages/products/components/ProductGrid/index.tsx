import { ProductGridProps } from '@/pages/products/type'
import { Paper } from '@mantine/core'
import { useStyles } from './index.styles'
import { ProductCard } from '../ProductCard'
import { ProductPortfolio } from '../ProductPortfolio'

export const ProductGrid = ({ title, productSubType }: ProductGridProps) => {
  const { classes } = useStyles()
  return (
    <Paper className={classes.container}>
      <ProductPortfolio title={title} />
      <Paper className={classes.containerGrid}>
        <ProductCard forNewProduct={true} productSubType={productSubType}/>
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
