import { Divider, Paper, Title, TextInput, Stack, Center, Button } from '@mantine/core'

const InforSection = () => {
  return (
    <Paper radius={10} p={20} shadow='md'>
      <Center>
        <Title size={20} mb={16}>
          Thông tin cá nhân
        </Title>
      </Center>
      <Stack spacing={20}>
        <Divider />
        <Stack spacing={15}>
          <TextInput
            radius={10}
            sx={{
              width: '100%',
              input: {
                backgroundColor: '#f5f5f5'
              }
            }}
            size='md'
          ></TextInput>
          <TextInput
            radius={10}
            sx={{
              width: '100%',
              input: {
                backgroundColor: '#f5f5f5'
              }
            }}
            size='md'
          ></TextInput>
          <TextInput
            radius={10}
            sx={{
              width: '100%',
              input: {
                backgroundColor: '#f5f5f5'
              }
            }}
            size='md'
          ></TextInput>
          <TextInput
            radius={10}
            sx={{
              width: '100%',
              input: {
                backgroundColor: '#f5f5f5'
              }
            }}
            size='md'
          ></TextInput>
          <TextInput
            radius={10}
            sx={{
              width: '100%',
              input: {
                backgroundColor: '#f5f5f5'
              }
            }}
            size='md'
          ></TextInput>
          <TextInput
            radius={10}
            sx={{
              width: '100%',
              input: {
                backgroundColor: '#f5f5f5'
              }
            }}
            size='md'
          ></TextInput>
          <Button radius={10} size='md' color='dark.4' fw={300}>
            Cập nhật
          </Button>
        </Stack>
      </Stack>
    </Paper>
  )
}

export default InforSection
