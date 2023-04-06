import { Image, Paper, Stack, Text } from '@mantine/core'
import sample from '@/assets/image/product-item.png'

const ProductCardItem = () => {
  return (
    <Paper px={27} py={40} radius={10} shadow='sm' sx={{ minWidth: 354 }}>
      <Stack spacing={0}>
        <Stack spacing={10} p={13}>
          <Text size={14}>Bán chạy nhất (tháng này)</Text>
        </Stack>
        <Paper p={25} radius={10} shadow='md'>
          <Stack spacing={12}>
            <Image src={sample}></Image>
            <Stack spacing={0} p={0} m={0}>
              <Text size={20} fw={700} lh={1.1}>
                Sapoche
              </Text>
              <Text size={10} ml={3}>
                Sinh tố ly
              </Text>
            </Stack>
            <Text size={16} fw={700} lh={1.1}>
              Đã bán: 283
            </Text>
          </Stack>
        </Paper>
      </Stack>
    </Paper>
  )
}

export default ProductCardItem
