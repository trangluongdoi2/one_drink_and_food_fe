import { ScrollArea, SimpleGrid } from '@mantine/core'
import React, { FC } from 'react'
import AddCouponTag from '../AddCouponTag'
import CouponSkeleton from '../CouponSkeleton'
import CouponTag from '@/components/CouponTags'
import { TCouponType } from '@/types/coupon'

type TCouponList = {
  data?: TCouponType[]
  loading: boolean
}

const CouponList: FC<TCouponList> = ({ data, loading }) => {
  return (
    <ScrollArea h='70vh' type='always' offsetScrollbars dir='ltr'>
      <SimpleGrid cols={2} spacing={20} w='75%'>
        <AddCouponTag />
        {loading && <CouponSkeleton visible={loading} />}
        {data?.map((item) => (
          <div key={item.couponCode}>
            <CouponTag data={item} loading={loading} label='Chỉnh' />
          </div>
        ))}
      </SimpleGrid>
    </ScrollArea>
  )
}

export default CouponList
