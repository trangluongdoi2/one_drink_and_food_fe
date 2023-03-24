import CardItem from '@/components/card'
import { Grid } from '@mantine/core'

const data = [
  {
    title1: 'Giao dịch trong (tháng này)',
    content1: '1000',
    title2: 'Giao dịch trong (tháng này)',
    content2: '200'
  },
  {
    title1: 'Giao dịch trong (tháng này)',
    content1: '1000',
    title2: 'Giao dịch trong (tháng này)',
    content2: '200'
  },
  {
    title1: 'Giao dịch trong (tháng này)',
    content1: '1000',
    title2: 'Giao dịch trong (tháng này)',
    content2: '200'
  },
  {
    title1: 'Giao dịch trong (tháng này)',
    content1: '1000',
    title2: 'Giao dịch trong (tháng này)',
    content2: '200'
  },
  {
    title1: 'Giao dịch trong (tháng này)',
    content1: '1000',
    title2: 'Giao dịch trong (tháng này)',
    content2: '200'
  },
  {
    title1: 'Giao dịch trong (tháng này)',
    content1: '1000',
    title2: 'Giao dịch trong (tháng này)',
    content2: '200'
  }
]

export const GridCard = () => {
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
