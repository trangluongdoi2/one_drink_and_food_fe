import { Flex, Image, Paper, Rating, Stack, Text } from '@mantine/core'
import sample from '@/assets/image/product-item.png'
import { useState } from 'react'
import { ProductRateAndCommentModal } from '@/pages/products/components/ProductRateAndCommentModal'

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
  const [visible, setVisible] = useState<boolean>(false)
  const onOpenModal = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setVisible(true)
  }

  const onCloseModal = (status: boolean) => {
    setVisible(status)
  }

  return (
    <Paper>
      <Paper px={27} py={40} radius={10} shadow='sm' onClick={(event) => onOpenModal(event)}>
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
      <ProductRateAndCommentModal visible={visible} cancel={onCloseModal} />
    </Paper>
  )
}

export default ProductCardItem
