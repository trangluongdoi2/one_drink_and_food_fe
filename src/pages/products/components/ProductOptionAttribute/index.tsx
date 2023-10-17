import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ActionIcon, Flex, Paper, Stack, Text } from '@mantine/core'
import {
  DeleteIcon,
  EditIconDark,
  EditIconLight,
  SelectOptionDarkIcon,
  SelectOptionLightIcon,
  CloseButton,
  AddFillIcon
} from '@/assets/icon'
import { ToggleButon } from '@/components/button/ToggleButton'
import { AppInput } from '@/components/input'
import { useClickOutside } from '@mantine/hooks'
import { TProductAttributeOption, TProductCreateNewAtribute } from '../../type'
import { useStyles } from './index.styles'

type TProductOptionComponentProps = {
  optionDatas: TProductAttributeOption[]
  defaultPlaceholder: string
  updateInput: (data: any, index?: number, isPrice?: boolean) => void
  setIsFocused: (status: boolean) => void
  removeOption: (index: number) => void
  addOption: () => void
}

type TProductOptionAttributeProps = {
  defaultPlaceholder: string
  attribute: TProductCreateNewAtribute
  blockDraggable: any
  updateAttributeName?: (data: string) => void
  updateAttributeOptions?: (data: TProductAttributeOption[]) => void
  updateContentValue?: (data: string | number) => void
  removeAttributeOption?: (data: string) => void
  setManyChoices?: (data: boolean) => void
  setEnabled: (data: boolean) => void
}

export const ProductOptionComponent = ({
  optionDatas,
  defaultPlaceholder,
  updateInput,
  setIsFocused,
  removeOption,
  addOption
}: TProductOptionComponentProps) => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const [isInvalidText, setIsInvalidText] = useState<boolean>(false)
  const [isInvalidPrice, setIsInvalidPrice] = useState<boolean>(false)
  const [isInvalid, setInvalid] = useState<boolean>(isInvalidText || isInvalidPrice)

  useEffect(() => {
    setInvalid(isInvalidText || isInvalidPrice)
  }, [isInvalidText, isInvalidPrice])

  return (
    <div>
      {optionDatas.length &&
        optionDatas.map((option: TProductAttributeOption, index: number) => (
          <Flex gap={12} align={isInvalid ? 'flex-start' : 'center'} key={index}>
            <div style={{ flex: '1' }}>
              <AppInput
                field={'text'}
                placeholder={defaultPlaceholder}
                hiddenToggleIcon={true}
                value={option.text}
                updateInput={(data) => updateInput(data, index)}
                checkIsFocused={setIsFocused}
                setInvalidInput={setIsInvalidText}
              />
            </div>
            <div style={{ width: '104px' }}>
              <AppInput
                typeInput='number'
                field={'price'}
                placeholder={t('prices')}
                hiddenToggleIcon={true}
                value={option.price}
                updateInput={(data) => updateInput(data, index, true)}
                checkIsFocused={setIsFocused}
                setInvalidInput={setIsInvalidPrice}
              />
            </div>
            <ActionIcon onClick={() => removeOption(index)}>
              <CloseButton />
            </ActionIcon>
          </Flex>
        ))}
      <ActionIcon sx={{ width: '100%', justifyContent: 'flex-start', marginTop: '10px' }} onClick={addOption}>
        <AddFillIcon />
        <Text>{t('add_option')}</Text>
      </ActionIcon>
    </div>
  )
}

export const ProductOptionAttribute = ({
  defaultPlaceholder,
  attribute,
  blockDraggable,
  updateAttributeName,
  updateAttributeOptions,
  setManyChoices,
  removeAttributeOption,
  setEnabled
}: TProductOptionAttributeProps) => {
  const initAttributeDataOption: TProductAttributeOption = {
    text: '',
    price: 0
  }
  const initAttributeDataNotOption: TProductAttributeOption = {
    text: ''
  }

  const { t } = useTranslation()
  const { classes } = useStyles()
  const [activeManyChoices, setActiveManyChoices] = useState(attribute.manyChoices)
  const [isActive, setIsActive] = useState<boolean>(attribute.appear)
  const [isEditable, setIsEditable] = useState<boolean>(false)
  const [optionList, setOptionList] = useState<any>(attribute.options)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isOption, setIsOption] = useState<boolean>(attribute.manyChoices || attribute.atLeastOne)
  const ref = useClickOutside(() => setIsEditable(false))

  const toggleManyChoices = () => {
    setActiveManyChoices(!activeManyChoices)
    setManyChoices && setManyChoices(!activeManyChoices)
  }

  const onToggleStatus = (status: boolean) => {
    setIsActive(status)
    setEnabled(status)
  }

  const removeOption = (index: number) => {
    if (optionList.length === 1) {
      return
    }
    const newArray = [...optionList]
    newArray.splice(index, 1)
    setOptionList(newArray)
    updateAttributeOptions && updateAttributeOptions(newArray)
  }

  const addOption = () => {
    const newArray = [...optionList]
    newArray.push(isOption ? initAttributeDataNotOption : initAttributeDataOption)
    setOptionList(newArray)
    updateAttributeOptions && updateAttributeOptions(newArray)
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
    const newOptionList = optionList.slice()
    const newAttributeOption = newOptionList[index]
    newAttributeOption[data.field] = data.value as any
    setOptionList(newOptionList)
    updateAttributeOptions && updateAttributeOptions(newOptionList)
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
                value={attribute.value}
                classNames={classes.input__title}
                checkIsFocused={setIsFocused}
              />
            ) : (
              <Text className={classes.title}>{attribute.value}</Text>
            )}
            <ActionIcon onClick={onFocus}>{isEditable ? <EditIconDark /> : <EditIconLight />}</ActionIcon>
          </Flex>
          <Flex align={'center'}>
            <ToggleButon onToggleStatus={onToggleStatus} isActive={isActive} />
            <ActionIcon onClick={() => onRemoveAttributeOption(attribute.value)}>
              <DeleteIcon />
            </ActionIcon>
          </Flex>
        </Flex>
        <Flex className={isActive ? '' : `${classes['container__input--deactive']}`}>
          {isOption && (
            <ActionIcon onClick={toggleManyChoices} sx={{ paddingTop: '5px', marginRight: '10px' }}>
              {activeManyChoices ? <SelectOptionDarkIcon /> : <SelectOptionLightIcon />}
            </ActionIcon>
          )}
          <Flex gap={12} direction={'column'} sx={{ flex: 1 }}>
            {isOption ? (
              <ProductOptionComponent
                optionDatas={optionList}
                defaultPlaceholder={defaultPlaceholder}
                updateInput={updateInput}
                setIsFocused={setIsFocused}
                removeOption={removeOption}
                addOption={addOption}
              />
            ) : (
              <AppInput
                field={'text'}
                placeholder={defaultPlaceholder}
                value={optionList[0].text}
                hiddenToggleIcon={true}
                updateInput={(data) => updateInput(data)}
                checkIsFocused={setIsFocused}
              />
            )}
          </Flex>
        </Flex>
        <div className={classes.border}></div>
      </Stack>
    </Paper>
  )
}
