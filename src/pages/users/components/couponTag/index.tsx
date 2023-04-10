import { Flex, Paper, Image, Divider, Stack, Text, Skeleton } from '@mantine/core'
import { DeleteIcon } from '@/assets/icon'
import { useFetchOne } from '@/hook/useFetchOne'
import { FIREBASE_COLLECTION } from '@/firebase/collection'

const CouponTag = ({ query }: { query: string }) => {
  const { data, loading } = useFetchOne(FIREBASE_COLLECTION.DISCOUNT, query)

  if (!data || loading) {
    return <Skeleton visible={loading} width='100%' height={100}></Skeleton>
  }

  const { couponTitle, couponCode, couponEndDate, image } = data

  return (
    <Paper p={10} shadow='md'>
      <Flex gap={10} justify='space-between'>
        <Image src={image} width={100} height={100} radius={10} />
        <Divider variant='dashed' size={2} orientation='vertical' />
        <Stack spacing={3} mt={10} sx={{ maxWidth: 200 }}>
          <Text fw='bold' lh={1.4}>
            {couponTitle ?? ''}
          </Text>
          <Text size={14}>MÃ: {couponCode}</Text>
          <Text size={12}>
            {couponEndDate.date} {couponEndDate.time}
          </Text>
        </Stack>
        <DeleteIcon />
      </Flex>
    </Paper>
  )
}

export default CouponTag
