import { Stack, Title, Image, Text, Center, ScrollArea, Grid } from '@mantine/core'
import gradient from '@/assets/image/gradient.png'
import GiftTag from '../GiftTag'
import { useUserFormContext } from '@/context/form-context'
import empty from '@/assets/image/empty.png'

const GiftPanel = () => {
  const form = useUserFormContext()
  const giftList: string[] = form.getInputProps('usedGift').value

  return (
    <Stack spacing={2}>
      <Title size={18}>Quà Đã Đổi</Title>
      <Text size={10} mb={20}>
        Những phần quà bạn đã đổi gần đây
      </Text>
      <Image src={gradient} height={100} sx={{ width: '100%', position: 'absolute', bottom: -20, zIndex: 999 }}></Image>
      <ScrollArea h={300} type='always' offsetScrollbars dir='ltr'>
        {giftList && giftList.length > 0 ? (
          <Grid gutter={20} sx={{ width: '95%' }}>
            {giftList.map((item) => (
              <Grid.Col span={6} key={item}>
                <GiftTag query={item} />
              </Grid.Col>
            ))}
          </Grid>
        ) : (
          <Center mt={30}>
            <Stack justify='center' align='center'>
              <Image src={empty} height={87} width={87} />
              <Text>Bạn chưa có phần quà nào được đổi</Text>
            </Stack>
          </Center>
        )}
      </ScrollArea>
    </Stack>
  )
}

export default GiftPanel
