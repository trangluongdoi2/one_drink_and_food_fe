import { Paper, Stack, Title } from '@mantine/core'
import { GridCard, AnalysisChart, SaleChart } from '../../components'
const data = [
  {
    title1: 'Giao dịch trong (tháng này)',
    content1: '1000',
    title2: 'Giao dịch trong (tháng này)',
    content2: '200'
  },
  {
    title1: 'Tổng số đơn hàng trong',
    content1: '3000',
    title2: 'Tổng số đơn hàng ngoài',
    content2: '800'
  },
  {
    title1: 'Doanh số tháng này',
    content1: '238.000.000 VNĐ',
    title2: 'Tổng doanh số mua bán',
    content2: '1.628.000.000 VNĐ'
  },
  {
    title1: 'Tổng số giao dịch đơn hàng',
    content1: '1000',
    title2: 'Tổng số thành viên',
    content2: '1400'
  },
  {
    title1: 'Tổng số lượng quà đã đổi',
    content1: '1000',
    title2: 'Tổng số mã đã sử dụng',
    content2: '600'
  },
  {
    title1: 'Tỉ lệ đơn hàng thành công',
    content1: '88%',
    title2: 'Tỉ lệ đơn hàng thất bại',
    content2: '12%'
  }
]

export const MarketAnalytic = () => {
  return (
    <Paper p={40} sx={(theme) => ({ backgroundColor: theme.colors.dark[0] })}>
      <Stack spacing={20} mr={10}>
        <Title variant='h3' size={24}>
          Phân tích thị trường
        </Title>
        <GridCard data={data} />
        <SaleChart />
        <AnalysisChart />
      </Stack>
    </Paper>
  )
}
