import { useEffect, useState } from 'react'
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
import { useStyles } from './index.styles'
import { ProductOptionFrameProps } from '@/pages/products/type'
import { ToggleButon } from '@/components/button/ToggleButton'
import { useTranslation } from 'react-i18next'
import { AppInput } from '@/components/input'

export const ProductOptionFrame = ({
  title,
  defaultPlaceholder,
  canSelectMultiOptions = false,
  isOption = false,
  field
}: ProductOptionFrameProps) => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const [canSelectMultiOptionsTest, setCanSelectMultiOptionsTest] = useState(true)
  const [isActive, setIsActive] = useState(true)
  const [optionData, setOptionData] = useState({ info: '', price: 0 })
  const toggleSelectMulti = () => {
    setCanSelectMultiOptionsTest(!canSelectMultiOptionsTest)
  }

  const onToggleStatus = (status: boolean) => {
    setIsActive(status)
  }
  const removeOption = () => {
    console.log('removeOption')
  }
  const updateInput = (data: { value: string | number; field: string }) => {
    if (typeof data === 'string') {
      setOptionData({
        ...optionData,
        info: data
      })
      return
    } else if (typeof data === 'number') {
      setOptionData({
        ...optionData,
        price: data
      })
    }
  }

  useEffect(() => {
    console.log(optionData, 'optionData')
  }, [optionData])
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
          <ActionIcon onClick={toggleSelectMulti} sx={{ paddingTop: '5px', marginRight: '10px' }}>
            {canSelectMultiOptionsTest ? <SelectOptionDarkIcon /> : <SelectOptionLightIcon />}
          </ActionIcon>
          <Flex gap={12} direction={'column'} sx={{ flex: 1 }}>
            <Flex gap={12} align={'center'}>
              <div style={{ flex: '1' }}>
                <AppInput
                  field={field}
                  placeholder={defaultPlaceholder}
                  updateInput={updateInput}
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
                    updateInput={updateInput}
                  />
                </div>
              )}
              <ActionIcon onClick={removeOption}>
                <CloseButton />
              </ActionIcon>
            </Flex>
            <ActionIcon sx={{ width: '100%', justifyContent: 'flex-start' }}>
              <AddFillIcon />
              <Text>{t('add_option')}</Text>
            </ActionIcon>
          </Flex>
        </Flex>
      </Stack>
    </Paper>
  )
}
