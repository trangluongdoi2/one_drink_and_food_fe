import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, Button, Flex, Modal, Stack, createStyles, Center } from '@mantine/core'
import { AppInput } from '@/components/input'
import { useDisclosure } from '@mantine/hooks'
import { ProductType } from '@/pages/products/type'

type Props = {
  productType: ProductType
  visible: boolean
  isProcessing: boolean
  errorNotify?: string
  success?: () => void
  cancel?: (status: boolean) => void
  updateInput: (data: { field: string; value: string | number }) => void
  confirmAddNewCategory: () => void
}

const useStylesModal = createStyles(() => ({
  header: {
    display: 'none'
  },
  button__cancel: {
    backgroundColor: '#ffffff',
    border: '1px solid #000000',
    color: '#000000',
    '&:hover': {
      backgroundColor: '#ffffff !important'
    }
  },
  button__success: {
    backgroundColor: '#000000',
    '&:hover': {
      backgroundColor: '#000000 !important'
    }
  },
  'text--error': {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    textAlign: 'right',
    color: '#FE5F51'
  }
}))

export const ProductCategoryAddFormModal = ({
  visible,
  productType,
  isProcessing = true,
  errorNotify = '',
  cancel,
  updateInput,
  confirmAddNewCategory
}: Props) => {
  const { classes } = useStylesModal()
  const { t } = useTranslation()
  const [opened, { open, close }] = useDisclosure(visible)

  const closeModal = () => {
    close()
    cancel && cancel(false)
  }

  useEffect(() => {
    if (visible) {
      open()
    } else {
      close()
    }
  }, [visible])

  return (
    <Modal opened={opened} onClose={closeModal} centered classNames={{ header: classes.header }}>
      <Stack>
        <AppInput
          title={`Loại ${t(productType)}`}
          placeholder={`Điền tên loại ${t(productType)}`}
          isImperative={true}
          field='product-sub-type'
          updateInput={updateInput}
          hiddenToggleIcon={true}
        />
        <AppInput
          typeInput='number'
          title={'Số lượng đặt hàng'}
          placeholder={'Điền số lượng đặt hàng'}
          field='order'
          updateInput={updateInput}
          hiddenToggleIcon={true}
        />
        {errorNotify && (
          <Center>
            <Text className={classes['text--error']}>{errorNotify}</Text>
          </Center>
        )}
        <Flex justify={'space-around'} align={'center'}>
          <Button className={classes.button__cancel} onClick={closeModal}>
            Cancel
          </Button>
          <Button className={classes.button__success} onClick={confirmAddNewCategory} loading={isProcessing}>
            Submit
          </Button>
        </Flex>
      </Stack>
    </Modal>
  )
}
