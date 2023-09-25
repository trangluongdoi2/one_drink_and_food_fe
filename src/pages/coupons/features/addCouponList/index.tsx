import { Paper, Stack } from '@mantine/core'
import CouponHeader from '../../components/CouponHeader'
import CouponList from '../../components/CouponList'
import { useGetCoupon } from '../../services/hook'

const AddCouponList = () => {
  const { data, isLoading } = useGetCoupon()

  return (
    <Paper p={40} sx={(theme) => ({ backgroundColor: theme.colors.dark[0], zIndex: 1 })}>
      <Stack spacing={20}>
        <CouponHeader title='Thêm mã khuyến mãi' />

        <Paper radius={10} shadow='md'>
          <CouponList data={data} loading={isLoading} />
        </Paper>
      </Stack>
    </Paper>
  )
}

export default AddCouponList
