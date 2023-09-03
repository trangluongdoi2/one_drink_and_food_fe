import { Grid, Paper } from '@mantine/core'
import CouponHeader from '../CouponHeader'

const PreviewCoupon = () => {
  return (
    <Grid gutter={55}>
      <Grid.Col>
        <Paper p={40} radius={10} shadow='md'>
          <CouponHeader title='Giao diện hiển thị xem trước' size='sm' />
        </Paper>
      </Grid.Col>
      <Grid.Col>
        <Paper p={40} radius={10} shadow='md'>
          <CouponHeader title='Thêm hình ảnh' size='sm' />
        </Paper>
      </Grid.Col>
    </Grid>
  )
}

export default PreviewCoupon
