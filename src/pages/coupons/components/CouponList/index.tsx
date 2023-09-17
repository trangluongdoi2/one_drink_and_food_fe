import CouponTag from '@/components/CouponTags'
import { TCouponType } from '@/types/coupon'
import { ScrollArea, SimpleGrid } from '@mantine/core'
import { FC } from 'react'
import AddCouponTag from '../AddCouponTag'
import CouponSkeleton from '../CouponSkeleton'
import { useNavigate } from 'react-router-dom'

type TCouponList = {
  data?: TCouponType[]
  loading: boolean
}

const CouponList: FC<TCouponList> = ({ data, loading }) => {
  const navigate = useNavigate()
  return (
    <ScrollArea h='70vh' type='always' offsetScrollbars dir='ltr'>
      <SimpleGrid cols={2} spacing={20} w='75%'>
        <AddCouponTag />
        {loading && <CouponSkeleton visible={loading || !data} />}
        {data?.map((item) => (
          <div key={item.code}>
            <CouponTag data={item} loading={loading} label='Chỉnh' onClick={() => navigate(`edit/${item._id}`)} />
          </div>
        ))}
      </SimpleGrid>
    </ScrollArea>
  )
}

export default CouponList
