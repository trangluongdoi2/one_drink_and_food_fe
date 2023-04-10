import { Text, Grid, Modal, Paper, Stack, Tabs, Title, ScrollArea, Box, Image } from '@mantine/core'
import AvatarSection from '../avatarSection'
import InforSection from '../inforSection'
import AddressSection from '../addressSection'
import { useUserFormContext } from '@/context/form-context'
import CustomModal from '@/components/modal'
import { useState } from 'react'
import CouponTag from '../couponTag'
import gradient from '@/assets/image/gradient.png'

interface DetailModalProps {
  opened: boolean
  close: () => void
}

const DetailModal = ({ opened, close }: DetailModalProps) => {
  const form = useUserFormContext()
  const [activeTab, setActiveTab] = useState<string | null>('account')

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
  const tabStyle = (e: React.ChangeEvent<HTMLInputElement>, activeTab: string) => {
    const { name } = e.target
    if (name === activeTab)
      return {
        fontWeight: 'bold',
        borderWidth: 5
      }
    return {
      fontWeight: 500
    }
  }

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
      <Paper px={50} pt={7} pb={50}>
        {/* ---------- ACCOUNT TAB ---------- */}
        <Tabs color='dark' radius='md' defaultValue='account' value={activeTab} onTabChange={setActiveTab}>
          <Tabs.List mb={30} position='center'>
            <Tabs.Tab
              value='account'
              p={20}
              sx={activeTab === 'account' ? { fontWeight: 700, borderWidth: 5 } : { fontWeight: 500 }}
            >
              Tài khoản
            </Tabs.Tab>
            <Tabs.Tab
              value='member'
              sx={activeTab === 'member' ? { fontWeight: 700, borderWidth: 5 } : { fontWeight: 500 }}
            >
              Thành viên
            </Tabs.Tab>
            <Tabs.Tab
              value='history'
              sx={activeTab === 'history' ? { fontWeight: 700, borderWidth: 5 } : { fontWeight: 500 }}
            >
              Lịch sử
            </Tabs.Tab>
            <Tabs.Tab
              value='gift'
              sx={activeTab === 'gift' ? { fontWeight: 700, borderWidth: 5 } : { fontWeight: 500 }}
            >
              Đổi thưởng
            </Tabs.Tab>
            <Tabs.Tab
              value='coupon'
              sx={activeTab === 'coupon' ? { fontWeight: 700, borderWidth: 5 } : { fontWeight: 500 }}
            >
              Mã khuyến mãi
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value='account'>
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
          </Tabs.Panel>

          {/* ---------- MEMBER ------------- */}
          <Tabs.Panel value='coupon'>
            <Stack spacing={2}>
              <Title size={18}>Mã Đã Sử Dụng</Title>
              <Text size={10} mb={20}>
                Những phần quà bạn đã đổi gần đây
              </Text>
              <ScrollArea h={300} type='always' offsetScrollbars dir='ltr'>
                <Grid gutter={20} sx={{ width: '95%' }}>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                </Grid>
              </ScrollArea>
            </Stack>
          </Tabs.Panel>

          {/* ---------- GIFT ------------- */}
          <Tabs.Panel value='gift' sx={{ position: 'relative' }}>
            <Stack spacing={2}>
              <Title size={18}>Quà Đã Đổi</Title>
              <Text size={10} mb={20}>
                Những phần quà bạn đã đổi gần đây
              </Text>
              <Image
                src={gradient}
                height={100}
                sx={{ width: '100%', position: 'absolute', bottom: -20, zIndex: 999 }}
              ></Image>
              <ScrollArea h={500} type='always' offsetScrollbars dir='ltr'>
                <Grid gutter={20} sx={{ width: '95%' }}>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <CouponTag />
                  </Grid.Col>
                </Grid>
              </ScrollArea>
            </Stack>
          </Tabs.Panel>
          {/* ---------- HISTORY ------------- */}
          <Tabs.Panel value='history'>Second panel</Tabs.Panel>
          {/* ---------- COUPON ------------- */}
          <Tabs.Panel value='member'>Second panel</Tabs.Panel>
        </Tabs>
      </Paper>
    </Modal>
  )
}

export default DetailModal
