import ScreenLoader from '@/components/screenLoader'
import { Paper, Stack } from '@mantine/core'
import CouponHeader from '../../components/CouponHeader'
import CouponTable from '../../components/CouponTable'
import { CouponFormProvider, defaultCoupon, useCouponForm } from '../../form'
import { useGetCoupon } from '../../services/hook'

const CouponList = () => {
  const { data, isLoading } = useGetCoupon()
  const form = useCouponForm({
    initialValues: {
      selectedDataRow: defaultCoupon,
      dataForm: []
    }
  })

  if (isLoading) return <ScreenLoader visible={isLoading} />

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
