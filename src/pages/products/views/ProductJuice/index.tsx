import { Flex, Paper, Stack, Text } from '@mantine/core'
import { ProductPortfolio } from '../../components/ProductPortfolio'
import { ProductGrid } from '../../components/ProductGrid'
import { useStyles } from './index.styles'
import { ProductType, JuiceType } from '@/pages/products/type'

export const ProductJuiceGrid = () => {
  const { classes } = useStyles()
  return (
    <Paper className={classes.container}>
      <Text fz={18} fw={700} className={classes.containerText}>
        {ProductType.JUICE}
      </Text>
      <Stack spacing={20}>
        <ProductPortfolio isBasePortfolio={true} />
        <Flex direction={'column'} gap={20}>
          <ProductGrid title={JuiceType.JUICE_GLASS} productSubType={JuiceType.JUICE_GLASS} />
          <ProductGrid title={JuiceType.JUICE_BOTTLED} productSubType={JuiceType.JUICE_BOTTLED} />
        </Flex>
      </Stack>
    </Paper>
  )
}
