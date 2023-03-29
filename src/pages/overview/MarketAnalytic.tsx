import { Paper, Stack, Title } from '@mantine/core'
import { GridCard, AnalysisChart, SaleChart } from './components'

export const MarketAnalytic = () => {
  console.log('adjflka')
  return (
    <Paper p={40} sx={{ backgroundColor: '#f5f5f5' }}>
      <Stack spacing={20} mr={10}>
        <Title variant='h3' size={24}>
          Phân tích thị trường
        </Title>
        <GridCard />
        <SaleChart />

        <AnalysisChart />
      </Stack>
    </Paper>
  )
}
