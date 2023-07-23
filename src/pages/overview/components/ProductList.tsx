import ProductCardItem from '@/components/productCard'
import { Grid } from '@mantine/core'

export interface IProductCardItemProps {
  image: string
  title: string
  name: string
  group: string
  withRating: boolean
  totalSale: number
  vote?: number
}

interface IProductListProps {
  data: IProductCardItemProps[]
}
export const ProductList = ({ data }: IProductListProps) => {
  return (
    <Grid grow gutter={19} columns={9}>
      {data.map((item, index) => (
        <Grid.Col span={3} key={index}>
          <ProductCardItem {...item} />
        </Grid.Col>
      ))}
    </Grid>
  )
}
