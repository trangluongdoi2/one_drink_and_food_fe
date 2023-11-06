import { ProductGridProps, TProductDetail } from '@/pages/products/type'
import { Paper } from '@mantine/core'
import { ProductCard } from '../ProductCard'
import { ProductPortfolio } from '../ProductPortfolio'
import { useStyles } from './index.styles'

export const ProductGrid = ({ title, productSubType, data }: ProductGridProps) => {
  const { classes } = useStyles()

  return (
    <Paper className={classes.container}>
      <ProductPortfolio title={title} />
      <Paper className={classes.containerGrid}>
        <ProductCard forNewProduct={true} productSubType={productSubType} />
        {data?.length ? (
          data.map((item: TProductDetail, index: number) => (
            <div key={index}>
              <ProductCard item={item} productSubType={productSubType} />
            </div>
          ))
        ) : (
          <div></div>
        )}
      </Paper>
    </Paper>
  )
}
