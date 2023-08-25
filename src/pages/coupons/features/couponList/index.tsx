import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { useFetchAll } from '@/hook/useFetchAll'
import { TCouponType } from '@/types/coupon'
import { Loader, Paper, Stack, Title } from '@mantine/core'
import CouponTable from '../../components/CouponTable'

const mock = [
  {
    couponCode: 'abc',
    couponTitle: 'Coupon 1',
    couponEndDate: {
      date: '',
      time: ''
    },
    couponFreeShipping: false,
    couponNote: '',
    couponOptions: '',
    couponProductDetails: '',
    couponProductType: [],
    couponQuantity: 0,
    couponStartDate: {
      date: '',
      time: ''
    },
    couponValue: 0,
    image: ''
  },
  {
    couponCode: 'abccd',
    couponTitle: 'Coupon 2',
    couponEndDate: {
      date: '',
      time: ''
    },
    couponFreeShipping: false,
    couponNote: '',
    couponOptions: '',
    couponProductDetails: '',
    couponProductType: [],
    couponQuantity: 0,
    couponStartDate: {
      date: '',
      time: ''
    },
    couponValue: 0,
    image: ''
  }
]

const CouponList = () => {
  const { data, loading } = useFetchAll<TCouponType[]>(FIREBASE_COLLECTION.DISCOUNT)

  return (
    <Paper p={40} sx={(theme) => ({ backgroundColor: theme.colors.dark[0], zIndex: 1 })}>
      <Stack spacing={20}>
        <Title variant='h3' size={24}>
          Thêm mã khuyến mãi
        </Title>
        {loading ? (
          <Loader />
        ) : (
          <Paper p={40} radius={10} shadow='md'>
            <CouponTable data={data ?? []} />
          </Paper>
        )}
      </Stack>
    </Paper>
  )
}

export default CouponList
