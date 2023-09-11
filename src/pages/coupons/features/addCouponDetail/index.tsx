import { Paper, SimpleGrid, Stack } from '@mantine/core'
import { useState } from 'react'
import { CreateCouponForm, PreviewCoupon } from '../../components/CouponDetail'
import CouponHeader from '../../components/CouponHeader'
import { CreateCouponFormProvider, defaultCoupon, useCreateCouponForm } from '../../form'
import { useGetCoupon } from '../../services/hook'

const AddCouponDetail = () => {
  const [active, setActive] = useState<boolean>(false)

  const form = useCreateCouponForm({ initialValues: defaultCoupon })
  return (
    <CreateCouponFormProvider form={form}>
      <Paper p={40} sx={(theme) => ({ backgroundColor: theme.colors.dark[0], zIndex: 1 })}>
        <Stack spacing={20}>
          <CouponHeader title='Thêm mã khuyến mãi' withToolbar active={active} onActive={(value) => setActive(value)} />

          <SimpleGrid cols={2} spacing={20}>
            <CreateCouponForm />
            <PreviewCoupon />
          </SimpleGrid>
        </Stack>
      </Paper>
    </CreateCouponFormProvider>
  )
}

export default AddCouponDetail
