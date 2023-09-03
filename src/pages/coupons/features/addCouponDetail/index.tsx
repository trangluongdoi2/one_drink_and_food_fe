import { Grid, Paper, SimpleGrid, Stack } from '@mantine/core'
import CouponHeader from '../../components/CouponHeader'
import { useState } from 'react'
import PreviewCoupon from '../../components/CouponDetail/PreviewCoupon'
import CreateCouponForm from '../../components/CouponDetail/CreateCouponForm'

const AddCouponDetail = () => {
  const [active, setActive] = useState<boolean>(false)
  return (
    <Paper p={40} sx={(theme) => ({ backgroundColor: theme.colors.dark[0], zIndex: 1 })}>
      <Stack spacing={20}>
        <CouponHeader title='Thêm mã khuyến mãi' withToolbar active={active} onActive={(value) => setActive(value)} />

        <SimpleGrid cols={2} spacing={20}>
          <CreateCouponForm />
          <PreviewCoupon />
        </SimpleGrid>
      </Stack>
    </Paper>
  )
}

export default AddCouponDetail
