import { Modal, Paper, Tabs } from '@mantine/core'
import { useUserFormContext } from '@/context/form-context'
import CustomModal from '@/components/modal'
import { useState } from 'react'
import { useStyles } from './index.style'
import { clsx } from '@mantine/core'
import CouponPanel from '../CouponPanel'
import GiftPanel from '../GiftPanel'
import AccountPanel from '../AccountPanel'
import { tabList } from '@/constants/tabList'
import HistoryPanel from '../HistoryPanel'

interface DetailModalProps {
  opened: boolean
  close: () => void
}

const DetailModal = ({ opened, close }: DetailModalProps) => {
  const form = useUserFormContext()
  const [activeTab, setActiveTab] = useState<string | null>('account')
  const { classes } = useStyles()

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
      <Paper px={50} pt={7} pb={50}>
        {/* ---------- ACCOUNT TAB ---------- */}
        <Tabs color='dark' radius='md' defaultValue='account' value={activeTab} onTabChange={setActiveTab}>
          <Tabs.List mb={30} position='center'>
            {tabList.map(({ title, value }, index) => (
              <Tabs.Tab
                value={value}
                p={20}
                key={index}
                className={clsx(classes.normal, { [classes.active]: activeTab === value })}
              >
                {title}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {/* ------------ ACCOUNT ------------- */}
          <Tabs.Panel value='account'>
            <AccountPanel />
          </Tabs.Panel>

          {/* ---------- MEMBER ------------- */}
          <Tabs.Panel value='member'>MEMBER</Tabs.Panel>

          {/* ---------- HISTORY ------------- */}
          <Tabs.Panel value='history'>
            <HistoryPanel />
          </Tabs.Panel>

          {/* ---------- GIFT ------------- */}
          <Tabs.Panel value='gift' sx={{ position: 'relative' }}>
            <GiftPanel />
          </Tabs.Panel>

          {/* ---------- COUPON ------------- */}
          <Tabs.Panel value='coupon' sx={{ position: 'relative' }}>
            <CouponPanel />
          </Tabs.Panel>
        </Tabs>
      </Paper>
    </Modal>
  )
}

export default DetailModal
