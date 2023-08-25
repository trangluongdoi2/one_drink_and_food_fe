import empty from '@/assets/image/empty.png'
import gradient from '@/assets/image/gradient.png'
import CouponTag from '@/components/CouponTags'
import { FIREBASE_COLLECTION } from '@/firebase/collection'
import { useFetchAll } from '@/hook/useFetchAll'
import { TCouponType } from '@/types/coupon'
import { Center, Grid, Image, ScrollArea, Stack, Text, Title } from '@mantine/core'

const CouponPanel = () => {
  const { data, loading } = useFetchAll<TCouponType[]>(FIREBASE_COLLECTION.DISCOUNT)

  return (
    <Stack spacing={2}>
      <Title size={18}>Mã Đã Sử Dụng</Title>
      <Text size={10} mb={20}>
        Những phần quà bạn đã đổi gần đây
      </Text>
      <Image src={gradient} height={100} sx={{ width: '100%', position: 'absolute', bottom: -20, zIndex: 999 }} />
      <ScrollArea h={300} type='always' offsetScrollbars dir='ltr'>
        {data && data?.length > 0 ? (
          <Grid gutter={20} sx={{ width: '95%' }}>
            {data.map((item) => (
              <Grid.Col span={6} key={item?.couponCode}>
                <CouponTag data={item} loading={loading} />
              </Grid.Col>
            ))}
          </Grid>
        ) : (
          <Center mt={30}>
            <Stack justify='center' align='center'>
              <Image src={empty} height={87} width={87} />
              <Text>Không có mã khuyến mãi nào được sử dụng</Text>
            </Stack>
          </Center>
        )}
      </ScrollArea>
    </Stack>
  )
}

export default CouponPanel
