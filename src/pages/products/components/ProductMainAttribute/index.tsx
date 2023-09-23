import { AddFillIcon, CloseButton, DeleteIcon, EditIconDark, EditIconLight } from '@/assets/icon'
import { ToggleButon } from '@/components/button/ToggleButton'
import { AppInput } from '@/components/input'
import { ActionIcon, Box, Flex, Paper, Stack, Text } from '@mantine/core'
import { useClickOutside } from '@mantine/hooks'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TProductAttributeOption } from '../../type'
import { useStyles } from './index.styles'

type TProductOptionComponentProps = {
  optionDatas: any
  defaultPlaceholder: string
  updateInput: (data: any, index?: number, isPrice?: boolean) => void
  setIsFocused: (status: boolean) => void
  removeOption: (index: number) => void
  addOption: () => void
}

type TProductMainAttributeProps = {
  title: string
  defaultPlaceholder: string
  isOption: boolean
  manyChoices?: boolean
  atLeastOne?: boolean
  optionsAttribute?: TProductAttributeOption[]
  blockDraggable: any
  attribute?: any
  updateAttributeName?: (data: string) => void
  updateAttributeOptions?: (data: TProductAttributeOption[]) => void
  updateContentValue?: (data: string | number) => void
  removeAttributeOption?: (data: string) => void
  setManyChoices?: (data: boolean) => void
  setEnabled: (data: boolean) => void
}

export const ProductMainAttribute = ({
  title,
  defaultPlaceholder,
  appear = true,
  updateAttributeName,
  updateContentValue,
  removeAttributeOption,
  setEnabled,
  blockDraggable
}: any) => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const [isActive, setIsActive] = useState<boolean>(appear)
  const [isEditable, setIsEditable] = useState<boolean>(false)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const ref = useClickOutside(() => setIsEditable(false))

  const onToggleStatus = (status: boolean) => {
    setIsActive(status)
    setEnabled(status)
  }

  const onUpdateAttributeName = (data: string) => {
    updateAttributeName && updateAttributeName(data)
  }

  const onRemoveAttributeOption = (data: string) => {
    removeAttributeOption && removeAttributeOption(data)
  }

  const onFocus = () => {
    setIsEditable(!isEditable)
  }

  const updateInput = (data: { value: string | number; field: keyof TProductAttributeOption }, index = 0) => {
    updateContentValue && updateContentValue(data.value)
  }

  return (
    <Paper
      ref={ref}
      className={isFocused ? `${classes.container} ${classes['container--focused']}` : classes.container}
    >
      <Stack>
        <Flex justify={'space-between'} align={'center'}>
          <Flex align={'center'} columnGap={12.5}>
            {blockDraggable}
            {isEditable ? (
              <AppInput
                placeholder={t('fill_information_of_title')}
                field='title'
                updateInput={(data: Record<string, any>) => onUpdateAttributeName(data.value)}
                value={title}
                classInput={classes.input__title}
                checkIsFocused={setIsFocused}
              />
            ) : (
              <Text className={classes.title}>{title}</Text>
            )}
            <ActionIcon onClick={onFocus}>{isEditable ? <EditIconDark /> : <EditIconLight />}</ActionIcon>
          </Flex>
          <Flex align={'center'}>
            <ToggleButon onToggleStatus={onToggleStatus} isActive={isActive} />
            <ActionIcon onClick={() => onRemoveAttributeOption(title)}>
              <DeleteIcon />
            </ActionIcon>
          </Flex>
        </Flex>
        <Flex className={isActive ? '' : `${classes['container__input--deactive']}`}>
          <Box sx={{ flex: 1 }}>
            <AppInput
              field={'content'}
              placeholder={defaultPlaceholder}
              updateInput={(data) => updateInput(data)}
              hiddenToggleIcon={true}
              checkIsFocused={setIsFocused}
            />
          </Box>
        </Flex>
        <div className={classes.border}></div>
      </Stack>
    </Paper>
  )
}
