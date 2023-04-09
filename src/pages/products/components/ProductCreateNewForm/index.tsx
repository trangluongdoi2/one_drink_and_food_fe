import { Paper, Stack } from '@mantine/core'
import { ProductOverviewNewForm } from './ProductOverviewNewForm'
import { ProductSalesFrameFrom } from './ProductSalesFrameForm'

export const ProductCreateNewForm = () => {
  return (
    <Paper>
      <Stack>
        <ProductOverviewNewForm />
        <ProductSalesFrameFrom />
      </Stack>
    </Paper>
  )
}
