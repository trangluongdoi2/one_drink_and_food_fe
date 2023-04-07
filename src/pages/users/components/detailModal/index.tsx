import { Grid, Modal, Paper, Stack, Text } from '@mantine/core'
import AvatarSection from '../AvatarSection'
import InforSection from '../InforSection'
import AddressSection from '../AddressSection'

interface DetailModalProps {
  opened: boolean
  close: () => void
}

const DetailModal = ({ opened, close }: DetailModalProps) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      centered
      padding={0}
      size={948}
      withCloseButton={false}
      radius={10}
      shadow='md'
    >
      <Paper p={50}>
        <Grid gutter={20}>
          <Grid.Col span={6}>
            <Stack spacing={20} sx={{ width: '100%' }}>
              <AvatarSection />
              <InforSection />
            </Stack>
          </Grid.Col>
          <Grid.Col span={6}>
            <AddressSection />
          </Grid.Col>
        </Grid>
      </Paper>
    </Modal>
  )
}

export default DetailModal
