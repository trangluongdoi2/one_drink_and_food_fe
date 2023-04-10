import { Stack, Title, Image, ScrollArea, Grid, Text, Center } from '@mantine/core'
import gradient from '@/assets/image/gradient.png'
import { useUserFormContext } from '@/context/form-context'
import empty from '@/assets/image/empty.png'
import CouponTag from '@/pages/users/components/CouponTags'

const CouponPanel = () => {
  const form = useUserFormContext()
  const couponList: string[] = form.getInputProps('usedCoupon').value

  return (
    <Stack spacing={2}>
      <Title size={18}>Mã Đã Sử Dụng</Title>
      <Text size={10} mb={20}>
        Những phần quà bạn đã đổi gần đây
      </Text>
      <Image src={gradient} height={100} sx={{ width: '100%', position: 'absolute', bottom: -20, zIndex: 999 }}></Image>
      <ScrollArea h={300} type='always' offsetScrollbars dir='ltr'>
        {couponList && couponList.length > 0 ? (
          <Grid gutter={20} sx={{ width: '95%' }}>
            {couponList.map((item) => (
              <Grid.Col span={6} key={item}>
                <CouponTag query={item} />
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
