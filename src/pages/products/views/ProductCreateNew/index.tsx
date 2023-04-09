import { Flex, Paper, Stack, Text } from '@mantine/core'
import { useStyles } from './index.styles'
import { ProductCreateNewForm } from '@/pages/products/components/ProductCreateNewForm'

export const ProductCreateNew = () => {
  const { classes } = useStyles()
  return (
    <Paper className={classes.container}>
      <Stack>
        <Text mb={25}>Nước ép/ Nước ép ly/ Thêm sản phẩm</Text>
        <Paper className={classes.containerGrid}>
          <ProductCreateNewForm />
          <ProductCreateNewForm />
        </Paper>
      </Stack>
    </Paper>
  )
}
