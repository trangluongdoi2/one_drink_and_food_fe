import { ProductGridProps } from '@/pages/products/type'
import { Paper } from '@mantine/core'
import { useStyles } from './index.styles'
import { ProductCard } from '../ProductCard'
import { ProductPortfolio } from '../ProductPortfolio'

export const ProductGrid = ({ title, type }: ProductGridProps) => {
  const { classes } = useStyles()
  return (
    <Paper className={classes.container}>
      <ProductPortfolio title={title} />
      <Paper className={classes.containerGrid}>
        <ProductCard forNewProduct={true} />
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
