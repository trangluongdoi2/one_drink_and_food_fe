import CardItem from '@/components/card'
import { Grid } from '@mantine/core'

export interface ICardProps {
  title1: string
  content1: string | React.ReactNode
  title2: string
  content2: string | React.ReactNode
}

export interface IGridCardProps {
  data: ICardProps[]
}

export const GridCard = ({ data }: IGridCardProps) => {
  return (
    <Grid grow gutter={19}>
      {data.map((content, index) => (
        <Grid.Col span={4} key={index}>
          <CardItem {...content} />
        </Grid.Col>
      ))}
    </Grid>
  )
}
