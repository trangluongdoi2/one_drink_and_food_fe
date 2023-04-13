import { Flex, Image, Paper, Rating, Stack, Text } from '@mantine/core'
import sample from '@/assets/image/product-item.png'

interface IProductCardItemProps {
  image: string
  title: string
  name: string
  group: string
  withRating: boolean
  totalSale: number
  vote?: number
}

const ProductCardItem = ({ title, name, group, totalSale, vote }: IProductCardItemProps) => {
  return (
    <Paper px={27} py={40} radius={10} shadow='sm'>
      <Stack spacing={0}>
        <Stack spacing={10} p={13}>
          <Text size={14}>{title}</Text>
        </Stack>
        <Paper p={25} radius={10} shadow='md'>
          <Stack spacing={12}>
            <Image src={sample}></Image>
            <Stack spacing={0} p={0} m={0}>
              <Text size={20} fw={700} lh={1.1}>
                {name}
              </Text>
              <Text size={10} ml={3}>
                {group}
              </Text>
            </Stack>
            {!vote ? (
              <Text size={16} fw={700} lh={1.1}>
                Đã bán: {totalSale}
              </Text>
            ) : (
              <Flex gap={2}>
                <Rating value={4.1} fractions={2} readOnly />
                <Text size={12} color='dark' fw={300}>
                  {vote} / 480 lượt
                </Text>
              </Flex>
            )}
          </Stack>
        </Paper>
      </Stack>
    </Paper>
  )
}

export default ProductCardItem
