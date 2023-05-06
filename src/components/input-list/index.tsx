import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ActionIcon, Flex, Stack, Text, TextInput, createStyles } from '@mantine/core'
import { ProductDetailProps } from '@/types/product'
import { AddFillIcon, CloseButton } from '@/assets/icon'
import { UserFormProvider, useUserForm } from '@/context/form-context'

type InputListProps = {
  title: string
  field: keyof ProductDetailProps
  canToggleActive?: boolean
  isActiveInput?: boolean
  iconToggle?: React.ReactNode
  moreOptions?: React.ReactNode
  iconStatus?: React.ReactNode
  updateList: (data: string[]) => void
}

const useStyles = createStyles(() => ({
  container: {
    gap: '10px',
    margin: '10px 0'
  },
  title: {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '17px',
    color: '#000000'
  },
  inputWrapper: {
    flex: 1
  },
  input: {
    height: '40px',
    background: '#f5f5f5',
    borderRadius: '10px',
    flex: 1,
    '&:focus': {
      borderColor: '#000000'
    }
  },
  actionIcon: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start'
  }
}))

export const AppInputList = ({
  title,
  field,
  isActiveInput = true,
  iconToggle,
  iconStatus,
  updateList
}: InputListProps) => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const form = useUserForm({
    initialValues: {
      [field]: ['']
    }
  })
  const initInputItem = {
    value: ''
  }
  const [listInput, setListInput] = useState([initInputItem])

  const addMoreFunction = () => {
    setListInput([...listInput, initInputItem])
    const len = form.getInputProps(field).value.length
    form.insertListItem(field, '', len)
  }

  const removeItemInListInput = (index: number) => {
    const newListInput = [...listInput]
    if (newListInput.length === 1) {
      return
    }
    newListInput.splice(index, 1)
    setListInput([...newListInput])
    form.removeListItem(field, index)
  }

  useEffect(() => {
    updateList(form.getInputProps(field).value)
  }, [form.values])

  return (
    <UserFormProvider form={form}>
      <form>
        <Stack className={classes.container}>
          <Flex justify={'space-between'} align={'center'}>
            <Text className={classes.title}>{title}</Text>
            <Flex align={'center'}>
              <>{iconToggle}</>
            </Flex>
          </Flex>
          <Flex direction={'column'} gap={5}>
            {listInput.map((item, index: number) => (
              <Flex align={'center'} key={index}>
                {iconStatus}
                <TextInput
                  placeholder={`${t('function', { index: index + 1 })}`}
                  className={classes.inputWrapper}
                  classNames={{ input: `${classes.input}` }}
                  disabled={!isActiveInput}
                  {...form.getInputProps(`${field}.${index}`)}
                />
                <ActionIcon onClick={() => removeItemInListInput(index)}>
                  <CloseButton />
                </ActionIcon>
              </Flex>
            ))}
          </Flex>
          <Flex>
            <ActionIcon onClick={() => addMoreFunction()} className={classes.actionIcon}>
              <>
                <AddFillIcon />
                <Text className={classes.title} sx={{ fontWeight: 'normal' }}>
                  {t('add_function')}
                </Text>
              </>
            </ActionIcon>
          </Flex>
        </Stack>
      </form>
    </UserFormProvider>
  )
}
