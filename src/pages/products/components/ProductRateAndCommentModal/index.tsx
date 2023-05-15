import { useEffect, useState } from 'react'
import useTranslationMiddleware from '@/i18n/useTranslationMiddleware'
import { Button, Flex, Image, Modal, Stack, Text, createStyles } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { ArrowDownIcon, ArrowUpIcon } from '@/assets/icon'
import { ProductRateOverview } from './ProductRateOverview'
import { ProductCommentDetails } from './ProductCommentDetails'

type Props = {
  visible: boolean
  success?: () => void
  cancel?: (status: boolean) => void
}
const { trans } = useTranslationMiddleware()

const initData = [
  {
    rate: 1,
    content:
      'Thương hiệu mới cũng khá đấy! Sản phẩm ngon, chất lượng, mang lại nhiều giá trị. Website nhìn cũng đỉnh & nhiều chứ món dữ!'
  },
  {
    rate: 2,
    content:
      'Thương hiệu mới cũng khá đấy! Sản phẩm ngon, chất lượng, mang lại nhiều giá trị. Website nhìn cũng đỉnh & nhiều chứ món dữ!'
  },
  {
    rate: 3,
    content:
      'Thương hiệu mới cũng khá đấy! Sản phẩm ngon, chất lượng, mang lại nhiều giá trị. Website nhìn cũng đỉnh & nhiều chứ món dữ!'
  },
  {
    rate: 4,
    content:
      'Thương hiệu mới cũng khá đấy! Sản phẩm ngon, chất lượng, mang lại nhiều giá trị. Website nhìn cũng đỉnh & nhiều chứ món dữ!'
  },
  {
    rate: 4.1,
    content:
      'Thương hiệu mới cũng khá đấy! Sản phẩm ngon, chất lượng, mang lại nhiều giá trị. Website nhìn cũng đỉnh & nhiều chứ món dữ!'
  },
  {
    rate: 4.9,
    content:
      'Thương hiệu mới cũng khá đấy! Sản phẩm ngon, chất lượng, mang lại nhiều giá trị. Website nhìn cũng đỉnh & nhiều chứ món dữ!'
  },
  {
    rate: 4.1,
    content:
      'Thương hiệu mới cũng khá đấy! Sản phẩm ngon, chất lượng, mang lại nhiều giá trị. Website nhìn cũng đỉnh & nhiều chứ món dữ!'
  },
  {
    rate: 4.5,
    content:
      'Thương hiệu mới cũng khá đấy! Sản phẩm ngon, chất lượng, mang lại nhiều giá trị. Website nhìn cũng đỉnh & nhiều chứ món dữ!'
  },
  {
    rate: 4.5,
    content: 'Final comment'
  }
]

const useStylesModal = createStyles(() => ({
  root: {
    overflow: 'hidden !important'
  },
  body: {
    padding: '15px 50px',
    overflow: 'hidden !important'
  },
  header: {
    justifyContent: 'flex-end'
  },
  rate: {
    position: 'relative'
  },
  shortcut: {
    position: 'absolute',
    bottom: '-10px',
    right: 0
  },
  button__root: {
    background: 'none',
    color: '#000000',
    padding: 0,
    '&:hover': {
      background: 'none !important'
    },
    '&:active': {
      transform: 'translateY(0)'
    }
  },
  button__label: {
    fontWeight: 400
  },
  'button__right-icon': {
    padding: 0
  }
}))

export const ProductRateAndCommentModal = ({ visible, cancel }: Props) => {
  const { classes } = useStylesModal()
  const [opened, { open, close }] = useDisclosure(visible)
  const [data, setDatas] = useState(initData)
  const [isShorcut, setIsShorcut] = useState<boolean>(false)

  const closeModal = () => {
    close()
    cancel && cancel(false)
  }

  const toggleShortcut = () => {
    setIsShorcut(!isShorcut)
  }

  useEffect(() => {
    if (visible) {
      open()
    }
  }, [visible])

  return (
    <Modal
      opened={opened}
      onClose={closeModal}
      size={900}
      centered
      classNames={{ body: classes.body, header: classes.header }}
    >
      <Stack>
        <Text style={{ fontSize: '21px', fontWeight: 700, lineHeight: '29px' }}>{trans('rate_and_comment')}</Text>
        <Flex className={classes.rate}>
          <Image width={250} height={250} src={null} withPlaceholder />
          <ProductRateOverview />
          <Button
            className={classes.shortcut}
            rightIcon={isShorcut ? <ArrowDownIcon /> : <ArrowUpIcon />}
            onClick={toggleShortcut}
            classNames={{
              root: classes.button__root,
              label: classes.button__label,
              rightIcon: classes['button__right-icon']
            }}
          >
            {trans('shortcut')}
          </Button>
        </Flex>
        <ProductCommentDetails data={data} />
      </Stack>
    </Modal>
  )
}
