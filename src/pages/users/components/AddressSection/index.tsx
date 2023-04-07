import { Divider, Paper, Stack, Text, TextInput } from '@mantine/core'

const InputRow = () => {
  return (
    <Stack>
      <Text>Tên người nhận</Text>
      <TextInput
        radius={10}
        sx={{
          width: '100%',
          input: {
            backgroundColor: '#f5f5f5'
          }
        }}
        size='md'
      />
    </Stack>
  )
}

const AddressSection = () => {
  return (
    <Paper radius={10} shadow='md' p={18}>
      <Stack>
        <Text>Thêm địa chỉ nhà</Text>
        <Divider />
        <InputRow />
        <InputRow />
        <InputRow />
        <InputRow />
      </Stack>
    </Paper>
  )
}

export default AddressSection
