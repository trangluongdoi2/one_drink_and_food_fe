import { EditIcon, XIcon } from '@/assets/icon'
import { Box, Text, Flex, Stack, ThemeIcon } from '@mantine/core'

const OrderOption = () => {
  return (
    <Flex gap={2} justify='space-between'>
      <Box
        px={20}
        py={12}
        w='100%'
        sx={(theme) => ({ borderRadius: '10px 0 0 10px', backgroundColor: theme.colors.dark[0] })}
      >
        <Flex justify='space-between' fw='bold'>
          <Text size='lg'> 1 x Dưa Hấu</Text>
          <Text size='lg'> 70.000 đ</Text>
        </Flex>

        <Flex justify='space-between'>
          <Text> 1 x Dưa Hấu</Text>
          <Text> 70.000 đ</Text>
        </Flex>

        <Flex justify='space-between'>
          <Text> 1 x Dưa Hấu</Text>
          <Text> 70.000 đ</Text>
        </Flex>

        <Flex justify='space-between'>
          <Text> 1 x Dưa Hấu</Text>
          <Text> 70.000 đ</Text>
        </Flex>
      </Box>
      <Stack spacing={2}>
        <ThemeIcon color='dark.2' w={70} h='50%' sx={{ borderRadius: '0 10px 0 0' }}>
          <EditIcon />
        </ThemeIcon>
        <ThemeIcon color='dark.2' w={70} h='50%' sx={{ borderRadius: '0 0 10px 0' }}>
          <XIcon />
        </ThemeIcon>
      </Stack>
    </Flex>
  )
}

export default OrderOption
