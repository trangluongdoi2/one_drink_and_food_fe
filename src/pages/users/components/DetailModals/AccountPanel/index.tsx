import { Grid, Stack } from '@mantine/core'
import AddressSection from './AddressSection'
import AvatarSection from './AvatarSection'
import InforSection from './InforSection'

const AccountPanel = () => {
  return (
    <Grid gutter={20}>
      <Grid.Col span={6}>
        <Stack spacing={20} w='100%'>
          <AvatarSection />
          <InforSection />
        </Stack>
      </Grid.Col>
      <Grid.Col span={6}>
        <AddressSection />
      </Grid.Col>
    </Grid>
  )
}

export default AccountPanel
