import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { useFetchAll } from '@/hook/useFetchAll'
import { TCouponType } from '@/types/coupon'
import { Paper, Stack, Title } from '@mantine/core'
import CouponList from '../../components/CouponList'
import CouponHeader from '../../components/CouponHeader'

const AddCouponList = () => {
  const { data, loading } = useFetchAll<TCouponType[]>(FIREBASE_COLLECTION.DISCOUNT)

  return (
    <Paper p={40} sx={(theme) => ({ backgroundColor: theme.colors.dark[0], zIndex: 1 })}>
      <Stack spacing={20}>
        <CouponHeader title='Thêm mã khuyến mãi' />

        <Paper p={40} radius={10} shadow='md'>
          <CouponList data={data} loading={loading} />
        </Paper>
      </Stack>
    </Paper>
  )
}

export default AddCouponList
