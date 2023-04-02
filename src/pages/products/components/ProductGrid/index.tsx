import { ProductGridProps } from '@/pages/products/type'
import { Paper } from '@mantine/core'
import { useStyles } from './index.styles'
import { ProductCard } from '../ProductCard'

export const ProductGrid = ({ type }: ProductGridProps) => {
  const { classes } = useStyles()
  return (
    <Paper className={classes.container}>
      <ProductCard forNewProduct={true} />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Paper>
  )
}
