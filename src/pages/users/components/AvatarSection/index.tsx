import { Paper, Flex, Image, Text, Stack } from '@mantine/core'

const AvatarSection = () => {
  return (
    <Paper radius={10} shadow='md' p={20}>
      <Flex>
        <Image src='' />
        <Stack>
          <Text fw='bolder'>Chào Tín !</Text>
          <Text>Chúc bạn một ngày tốt lành! </Text>
        </Stack>
      </Flex>
    </Paper>
  )
}

export default AvatarSection
