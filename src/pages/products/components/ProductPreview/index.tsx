import { Paper } from '@mantine/core'
import { useStyles } from './index.styles'
import { ProductImagePreview } from '@/pages/products/components/ProductPreview/ProductImagePreview'
import { ProductOverviewPreview } from '@/pages/products/components/ProductPreview/ProductOverviewPreview'
import { ProductInfoPreview } from '@/pages/products/components/ProductPreview/ProductInfoPreview'

export const ProductPreview = () => {
  const { classes } = useStyles()
  return (
    <Paper className='create-new-product-card__container'>
      <Paper className={classes.container}>
        <div className={classes.container__image}>
          <ProductImagePreview />
        </div>
        <div className={classes.container__overview}>
          <ProductOverviewPreview />
        </div>
        <div className={classes.container__info}>
          <ProductInfoPreview />
        </div>
      </Paper>
    </Paper>
  )
}
