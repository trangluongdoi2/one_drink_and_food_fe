import { Paper, Stack } from '@mantine/core'
import { ProductOverviewNewForm } from './ProductOverviewNewForm'
import { ProductSalesFrameFrom } from './ProductSalesFrameForm'
import { ProductInfoCategoryForm } from './ProductInfoCategoryForm'

export const ProductCreateNewForm = () => {
  return (
    <Paper>
      <Stack>
        <ProductOverviewNewForm />
        <ProductSalesFrameFrom />
        <ProductInfoCategoryForm />
      </Stack>
    </Paper>
  )
}
