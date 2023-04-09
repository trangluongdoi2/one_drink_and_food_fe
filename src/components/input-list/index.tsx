import { ActionIcon, Flex, Input, Stack, Text, createStyles } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { AddFillIcon, CloseButton } from '@/assets/icon'
import { ChangeEvent, useEffect, useState } from 'react'

type InputListProps = {
  name: string
  canToggleActive?: boolean
  isActiveInput?: boolean
  iconToggle?: React.ReactNode
  moreOptions?: React.ReactNode
  iconStatus?: React.ReactNode
  updateList: (data: any) => void
}

const useStyles = createStyles(() => ({
  contanter: {
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

export const AppInputList = ({ name, isActiveInput = true, iconToggle, iconStatus, updateList }: InputListProps) => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const initInputItem = {
    value: ''
  }
  const [listInput, setListInput] = useState([initInputItem])
  const addMoreFunction = () => {
    setListInput([...listInput, initInputItem])
  }

  const handleChangeInputFunction = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const newListInput = [...listInput]
    newListInput[index].value = value
    setListInput([...newListInput])
  }

  const removeItemInListInput = (index: number) => {
    const newListInput = [...listInput]
    if (newListInput.length === 1) {
      return
    }
    newListInput.splice(index, 1)
    setListInput([...newListInput])
  }

  useEffect(() => {
    updateList(listInput)
  }, [listInput])

  return (
    <Stack className={classes.contanter}>
      <Flex justify={'space-between'} align={'center'}>
        <Text className={classes.title}>{name}</Text>
        <Flex align={'center'}>
          <>{iconToggle}</>
        </Flex>
      </Flex>
      <Flex direction={'column'} gap={5}>
        {listInput.map((item: any, index: number) => (
          <Flex align={'center'} key={index}>
            {iconStatus}
            <Input
              placeholder={`${t('function', { index: index + 1 })}`}
              className={classes.inputWrapper}
              classNames={{ input: `${classes.input}` }}
              disabled={!isActiveInput}
              value={item.value}
              onChange={handleChangeInputFunction(index)}
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
  )
}
