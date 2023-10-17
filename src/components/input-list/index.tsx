import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ActionIcon, Flex, Stack, Text, TextInput, createStyles } from '@mantine/core'
import { AddFillIcon, CloseButton } from '@/assets/icon'
import { InputListFormProvider, initInputListForm, useInputListForm } from './form'

type InputListProps = {
  title: string
  field: string
  value: any
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
  value,
  isActiveInput = true,
  iconToggle,
  iconStatus,
  updateList
}: InputListProps) => {
  const { classes } = useStyles()
  const { t } = useTranslation()

  const form = useInputListForm({
    initialValues: initInputListForm
  })
  const [listInput, setListInput] = useState(value?.length ? value : [])

  const addMoreFunction = () => {
    setListInput([...listInput, undefined])
  }

  const removeItemInListInput = (index: number) => {
    const newListInput = [...listInput]
    if (newListInput.length === 1) {
      return
    }
    newListInput.splice(index, 1)
    setListInput([...newListInput])
  }

  const onUpdateInputListForm = () => {
    updateList(form.values.data)
  }

  const onUpdateInputItem = (event: any, index: number) => {
    const newListInput = [...listInput]
    newListInput.splice(index, 1, event?.target?.value ?? '');
    setListInput([...newListInput])
  }

  useEffect(() => {
    form.setValues({ data: listInput })
  }, [listInput])

  return (
    <InputListFormProvider form={form}>
      <form>
        <Stack className={classes.container}>
          <Flex justify={'space-between'} align={'center'}>
            <Text className={classes.title}>{title}</Text>
            <Flex align={'center'}>
              <>{iconToggle}</>
            </Flex>
          </Flex>
          <Flex direction={'column'} gap={5}>
            {listInput?.length &&
              listInput.map((_: any, index: number) => (
                <Flex align={'center'} key={index}>
                  {iconStatus}
                  <TextInput
                    placeholder={`${t('function', { index: index + 1 })}`}
                    className={classes.inputWrapper}
                    classNames={{ input: `${classes.input}` }}
                    disabled={!isActiveInput}
                    value={_ ?? ''}
                    onBlur={onUpdateInputListForm}
                    onChange={(evt: any) => onUpdateInputItem(evt, index)}
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
    </InputListFormProvider>
  )
}
