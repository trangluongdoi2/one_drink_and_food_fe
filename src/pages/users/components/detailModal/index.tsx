import { Grid, Modal, Paper, Stack } from '@mantine/core'
import AvatarSection from '../avatarSection'
import InforSection from '../inforSection'
import AddressSection from '../addressSection'
import { useUserFormContext } from '@/context/form-context'
import CustomModal from '@/components/modal'

interface DetailModalProps {
  opened: boolean
  close: () => void
}

const DetailModal = ({ opened, close }: DetailModalProps) => {
  const form = useUserFormContext()

  // Modal check saved state, if not reset state and close modal
  const openNotSubmitModal = () =>
    CustomModal({
      title: 'Thông báo',
      content: 'Bạn chưa cập nhật những thay đổi',
      labels: { confirm: 'Tiếp tục', cancel: 'Trở về' },
      onConfirm: () => {
        close()
        form.reset()
      }
    })

  return (
    <Modal
      opened={opened}
      onClose={() => {
        // Check any changes are already saved, if not open modal
        form.isDirty() ? openNotSubmitModal() : close()
      }}
      centered
      padding={0}
      size='75%'
      withCloseButton={false}
      radius={10}
      shadow='md'
    >
      <Paper p={50}>
        {/* ---------- ACCOUNT TAB ---------- */}
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

        {/* ---------- MEMBER ------------- */}

        {/* ---------- HISTORY ------------- */}

        {/* ---------- GIFT ------------- */}

        {/* ---------- COUPON ------------- */}

      </Paper>
    </Modal>
  )
}

export default DetailModal
