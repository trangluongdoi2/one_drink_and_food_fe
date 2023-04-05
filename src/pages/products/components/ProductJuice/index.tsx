import { Flex, Paper, Stack, Text } from '@mantine/core'
import { ProductPortfolio } from '../ProductPortfolio'
import { ProductGrid } from '../ProductGrid'
import { useStyles } from './index.styles'
import { ProductType } from '@/pages/products/type'

export const ProductJuiceGrid = () => {
  const { classes } = useStyles()
  return (
    <Paper className={classes.container}>
      <Text fz={18} fw={700} className={classes.containerText}>
        {ProductType.JUICE}
      </Text>
      <Stack spacing={20}>
        <ProductPortfolio isBasePortfolio={true}/>
        <Flex direction={'column'} gap={20}>
          <ProductGrid title='Nước ép ly' />
          <ProductGrid title='Nước ép đóng chai' />
        </Flex>
      </Stack>
    </Paper>
  )
}
