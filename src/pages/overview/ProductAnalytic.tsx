import { Paper, Stack, Title } from '@mantine/core'

export const ProductAnalytic = () => {
  return (
    <Paper p={40} sx={{ backgroundColor: '#f5f5f5' }}>
      <Stack spacing={20} mr={10}>
        <Title variant='h3' size={24}>
          Phân tích thị trường
        </Title>
      </Stack>
    </Paper>
  )
}
