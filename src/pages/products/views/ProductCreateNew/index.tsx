import { Flex, Paper, Stack, Text } from '@mantine/core'
import { useStyles } from './index.styles'
import { ProductCreateNewForm } from '@/pages/products/components/ProductCreateNewForm'
import { ProductPreView } from '../../components'

export const ProductCreateNew = () => {
  const { classes } = useStyles()
  return (
    <Paper className={classes.container}>
      <Stack>
        <Text mb={25}>Nước ép/ Nước ép ly/ Thêm sản phẩm</Text>
        <Paper className={classes.containerGrid}>
          <ProductCreateNewForm />
          <ProductPreView />
        </Paper>
      </Stack>
    </Paper>
  )
}
