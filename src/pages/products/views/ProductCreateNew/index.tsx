import { Paper, Stack, Text } from '@mantine/core'
import { ProductCreateNewForm } from '@/pages/products/components/ProductCreateNewForm'
import { ProductPreview } from '@/pages/products/components/ProductPreview'
import { useStyles } from './index.styles'

export const ProductCreateNew = () => {
  const { classes } = useStyles()
  return (
    <Paper className={classes.container}>
      <Stack>
        <Text mb={25}>Nước ép/ Nước ép ly/ Thêm sản phẩm</Text>
        <Paper className={classes.containerGrid}>
          <div className={classes.container__form}>
            <ProductCreateNewForm />
          </div>
          <div className={classes.container__preview}>
            <ProductPreview />
          </div>
        </Paper>
      </Stack>
    </Paper>
  )
}
