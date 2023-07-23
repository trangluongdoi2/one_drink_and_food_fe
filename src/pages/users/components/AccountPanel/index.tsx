import { Grid, Stack } from '@mantine/core'
import AvatarSection from '../AvatarSection'
import InforSection from '../InforSection'
import AddressSection from '../AddressSection'

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
