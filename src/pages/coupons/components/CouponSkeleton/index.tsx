import { Skeleton } from '@mantine/core'
import { FC } from 'react'

type TCouponSkeleton = {
  visible: boolean
}

const CouponSkeleton: FC<TCouponSkeleton> = ({ visible }) => {
  return (
    <>
      <Skeleton visible={visible} height={120} w={374} />
      <Skeleton visible={visible} height={120} w={374} />
      <Skeleton visible={visible} height={120} w={374} />
      <Skeleton visible={visible} height={120} w={374} />
    </>
  )
}

export default CouponSkeleton
