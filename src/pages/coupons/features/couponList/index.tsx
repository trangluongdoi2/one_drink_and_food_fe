import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { useFetchAll } from '@/hook/useFetchAll'
import { TCouponType } from '@/types/coupon'
import { Center, Loader, Paper, Stack, Title } from '@mantine/core'
import CouponTable from '../../components/CouponTable'
import ScreenLoader from '@/components/screenLoader'
import { CouponFormProvider, defaultCoupon, useCouponForm } from '../../form'
import CouponHeader from '../../components/CouponHeader'

const CouponList = () => {
  const { data, loading } = useFetchAll<TCouponType[]>(FIREBASE_COLLECTION.DISCOUNT)
  const form = useCouponForm({
    initialValues: {
      selectedCoupon: defaultCoupon,
      couponData: []
    }
  })

  if (loading) return <ScreenLoader visible={loading} />

  return (
    <CouponFormProvider form={form}>
      <Paper p={40} bg='dark.0'>
        <Stack spacing={20}>
          <CouponHeader title='Thêm mã khuyến mãi' />
          <Paper p={40} radius={10} shadow='md'>
            <CouponTable data={data ?? []} />
          </Paper>
        </Stack>
      </Paper>
    </CouponFormProvider>
  )
}

export default CouponList
