import { Paper, Rating, Stack, Title, Text, Flex } from '@mantine/core'
import { GridCard } from '../../components'
import { ProductList } from '../../components/ProductList'

const data = [
  {
    title1: 'Tổng sản phẩm đã bán',
    content1: '8000',
    title2: 'Sản phẩm đã bán (tháng này)',
    content2: '2000'
  },
  {
    title1: 'Danh mục được ưa chuộng',
    content1: 'Nước ép ly',
    title2: 'Tổng sản phẩm thất bại',
    content2: '100'
  },
  {
    title1: 'Điểm đánh giá trung bình',
    content1: (
      <Flex gap={2}>
        <Rating value={4.1} fractions={2} readOnly />
        <Text size={12} color='dark' fw={300}>
          4.1
        </Text>
      </Flex>
    ),
    title2: 'Tổng lượt đánh giá & bình luận',
    content2: '383'
  }
]

export const ProductAnalytic = () => {
  return (
    <Paper p={40} sx={{ backgroundColor: '#f5f5f5' }}>
      <Stack spacing={20} mr={10}>
        <Title variant='h3' size={24}>
          Dữ liệu sản phẩm
        </Title>
        <GridCard data={data} />
        <ProductList />
      </Stack>
    </Paper>
  )
}
