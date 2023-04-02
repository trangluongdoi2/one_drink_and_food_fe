import { Flex, Paper, Text } from '@mantine/core'
import { ProductPortfolio } from '../ProductPortfolio'
import { ProductGrid } from '../ProductGrid'
import { useStyles } from './index.styles'
import { ProductType } from '@/pages/products/type'

export const ProductJuiceGrid = () => {
  const { classes } = useStyles()
  return (
    <Paper className={classes.container}>
      <Text fz={18} fw={700}>
        {ProductType.JUICE}
      </Text>
      <Flex direction={'column'} gap={20}>
        <ProductPortfolio title='Nước trái cây' />
        <ProductGrid />
      </Flex>
    </Paper>
  )
}
