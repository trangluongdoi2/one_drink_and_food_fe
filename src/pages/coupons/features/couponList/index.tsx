import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { useFetchAll } from '@/hook/useFetchAll'
import { TCouponType } from '@/types/coupon'
import { Center, Loader, Paper, Stack, Title } from '@mantine/core'
import CouponTable from '../../components/CouponTable'
import ScreenLoader from '@/components/screenLoader'

const CouponList = () => {
  const { data, loading } = useFetchAll<TCouponType[]>(FIREBASE_COLLECTION.DISCOUNT)

  if (loading) return <ScreenLoader visible={loading} />

  return (
    <Paper p={40} bg='dark.0'>
      <Stack spacing={20}>
        <Title variant='h3' size={24}>
          Thêm mã khuyến mãi
        </Title>
        <Paper p={40} radius={10} shadow='md'>
          <CouponTable data={data ?? []} />
        </Paper>
      </Stack>
    </Paper>
  )
}

export default CouponList
