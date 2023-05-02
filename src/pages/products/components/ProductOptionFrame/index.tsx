import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ActionIcon, Flex, Paper, Stack, Text } from '@mantine/core'
import {
  DeleteIcon,
  EditIconDark,
  EditIconLight,
  SelectOptionDarkIcon,
  SelectOptionLightIcon,
  TableRowsIcon,
  CloseButton,
  AddFillIcon
} from '@/assets/icon'
import { ToggleButon } from '@/components/button/ToggleButton'
import { AppInput } from '@/components/input'
import { ProductOptionFrameProps } from '@/pages/products/type'
import { useStyles } from './index.styles'

type ProductOptionData = {
  info: string | number
  price?: number
}

export const ProductOptionFrame = ({
  title,
  field,
  defaultPlaceholder,
  isOption = false,
  multiOptions,
  updateSelectMultiOption,
  updateProductOption
}: ProductOptionFrameProps) => {
  const initDataOption: ProductOptionData = {
    info: '',
    price: 0
  }
  const initDataNotOption: ProductOptionData = {
    info: ''
  }
  const { t } = useTranslation()
  const { classes } = useStyles()
  const [canSelectMultiOptions, setCanSelectMultiOptions] = useState(true)
  const [isActive, setIsActive] = useState(true)
  const [optionList, setOptionList] = useState(isOption ? [initDataOption] : [initDataNotOption])

  const toggleSelectMulti = () => {
    setCanSelectMultiOptions(!canSelectMultiOptions)
    updateSelectMultiOption(!canSelectMultiOptions)
  }

  const onToggleStatus = (status: boolean) => {
    setIsActive(status)
  }

  const removeOption = (index: number) => {
    if (optionList.length === 1) {
      return
    }
    const newArray = [...optionList]
    newArray.splice(index, 1)
    setOptionList(newArray)
  }

  const addOption = () => {
    const newArray = [...optionList]
    if (isOption) {
      newArray.push(initDataOption)
    } else {
      newArray.push(initDataNotOption)
    }
    setOptionList(newArray)
  }

  const updateInput = (data: { value: string | number; field: string }, index: number, isPrice = false) => {
    const newArray = [...optionList]
    const newOptionValue = newArray[index]
    if (isOption) {
      const newOptionData = isPrice
        ? { ...newOptionValue, price: (data.value || 0) as number }
        : { ...newOptionValue, info: data.value }
      newArray.splice(index, 1, newOptionData)
      setOptionList(newArray)
      return
    }
    newArray.splice(index, 1, {
      ...newOptionValue,
      info: data.value
    })
    setOptionList(newArray)
  }

  useEffect(() => {
    updateProductOption({ value: optionList, canSelectMultiOptions, isOption, title, field, multiOptions })
  }, [optionList])

  return (
    <Paper className={classes.container}>
      <Stack>
        <Flex justify={'space-between'} align={'center'}>
          <Flex align={'center'} columnGap={12.5}>
            <ActionIcon size={20}>
              <TableRowsIcon />
            </ActionIcon>
            <Text className={classes.title}>{title}</Text>
            <ActionIcon>
              <EditIconLight />
            </ActionIcon>
          </Flex>
          <Flex align={'center'}>
            <ToggleButon onToggleStatus={onToggleStatus} isActive={isActive} />
            <ActionIcon>
              <DeleteIcon />
            </ActionIcon>
          </Flex>
        </Flex>
        <Flex className={isActive ? '' : `${classes['container__input--deactive']}`}>
          {multiOptions && (
            <ActionIcon onClick={toggleSelectMulti} sx={{ paddingTop: '5px', marginRight: '10px' }}>
              {canSelectMultiOptions ? <SelectOptionDarkIcon /> : <SelectOptionLightIcon />}
            </ActionIcon>
          )}
          <Flex gap={12} direction={'column'} sx={{ flex: 1 }}>
            {optionList.map((_, index: number) => (
              <Flex gap={12} align={'center'} key={index}>
                <div style={{ flex: '1' }}>
                  <AppInput
                    field={field}
                    placeholder={defaultPlaceholder}
                    updateInput={(data) => updateInput(data, index)}
                    hiddenToggleIcon={true}
                  />
                </div>
                {isOption && (
                  <div style={{ width: '104px' }}>
                    <AppInput
                      typeInput='number'
                      field={field}
                      placeholder={t('prices')}
                      hiddenToggleIcon={true}
                      updateInput={(data) => updateInput(data, index, true)}
                    />
                  </div>
                )}
                <ActionIcon onClick={() => removeOption(index)}>
                  <CloseButton />
                </ActionIcon>
              </Flex>
            ))}
            <ActionIcon sx={{ width: '100%', justifyContent: 'flex-start' }} onClick={addOption}>
              <AddFillIcon />
              <Text>{t('add_option')}</Text>
            </ActionIcon>
          </Flex>
        </Flex>
      </Stack>
    </Paper>
  )
}
