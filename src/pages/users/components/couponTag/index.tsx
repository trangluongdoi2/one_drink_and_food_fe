import { Flex, Paper, Image, Divider, Stack, Text } from '@mantine/core'
import sample from '@/assets/image/avatart.png'
import { DeleteIcon } from '@/assets/icon'

const CouponTag = () => {
  return (
    <Paper p={10} shadow='md'>
      <Flex gap={10} justify='space-between'>
        <Image src={sample} width={100} height={100} radius={10} />
        <Divider variant='dashed' size={2} orientation='vertical' />
        <Stack spacing={3} mt={10} sx={{ maxWidth: 200 }}>
          <Text fw='bold' lh={1.4}>
            Giảm 50% phí ship trong khu vực TP. Hồ Chí Minh
          </Text>
          <Text size={14}>MÃ: GIAM50SHIP</Text>
          <Text size={12}>06/01/2023 15:25</Text>
        </Stack>
        <DeleteIcon />
      </Flex>
    </Paper>
  )
}

export default CouponTag
