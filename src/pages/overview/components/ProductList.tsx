import CardItem from '@/components/card'
import ProductCardItem from '@/components/productCard'
import { Grid } from '@mantine/core'

export const ProductList = () => {
  return (
    <Grid grow gutter={19}>
      <Grid.Col span={4}>
        <ProductCardItem />
      </Grid.Col>
      <Grid.Col span={4}>
        <ProductCardItem />
      </Grid.Col>
      <Grid.Col span={4}>
        <ProductCardItem />
      </Grid.Col>
    </Grid>
  )
}
