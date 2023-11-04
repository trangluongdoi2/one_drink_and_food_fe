import { EditIconDark, EditIconLight } from '@/assets/icon'
import { ToggleButon } from '@/components/button/ToggleButton'
import { AppInput } from '@/components/input'
import { ActionIcon, Box, Flex, Stack, Text } from '@mantine/core'
import { useClickOutside } from '@mantine/hooks'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TProductAttributeOption } from '../../type'
import { useStyles } from './index.styles'
import { useProductContext } from '@/context/ProductContext/ProductContext'

type TProductMainAttributeProps = {
  title: string
  defaultPlaceholder: string
  appear: boolean
  blockDraggable?: any
  updateAttributeName?: (data: string) => void
  updateContentValue?: (data: string | number) => void
  setEnabled: (data: boolean) => void
}

export const ProductMainAttribute = ({
  title,
  defaultPlaceholder,
  appear = true,
  blockDraggable,
  updateAttributeName,
  updateContentValue,
  setEnabled
}: TProductMainAttributeProps) => {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const [isActive, setIsActive] = useState<boolean>(appear)
  const [isEditable, setIsEditable] = useState<boolean>(false)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const ref = useClickOutside(() => setIsEditable(false))
  const { productMainIngredients } = useProductContext()

  const onToggleStatus = (status: boolean) => {
    setIsActive(status)
    setEnabled(status)
  }

  const onUpdateAttributeName = (data: string) => {
    updateAttributeName && updateAttributeName(data)
  }

  const onFocus = () => {
    setIsEditable(!isEditable)
  }

  const updateInput = (data: { value: string | number; field: keyof TProductAttributeOption }, index = 0) => {
    updateContentValue && updateContentValue(data.value)
  }

  return (
    <Box ref={ref} className={isFocused ? `${classes.container} ${classes['container--focused']}` : classes.container}>
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
                classNames={classes.input__title}
                checkIsFocused={setIsFocused}
              />
            ) : (
              <Text className={classes.title}>{title}</Text>
            )}
            <ActionIcon onClick={onFocus}>{isEditable ? <EditIconDark /> : <EditIconLight />}</ActionIcon>
          </Flex>
          <Flex align={'center'}>
            <ToggleButon onToggleStatus={onToggleStatus} isActive={isActive} />
          </Flex>
        </Flex>
        <Flex className={isActive ? '' : `${classes['container__input--deactive']}`}>
          <Box sx={{ flex: 1 }}>
            <AppInput
              field={'content'}
              value={productMainIngredients}
              placeholder={defaultPlaceholder}
              updateInput={(data) => updateInput(data)}
              hiddenToggleIcon={true}
              checkIsFocused={setIsFocused}
            />
          </Box>
        </Flex>
        <div className={classes.border}></div>
      </Stack>
    </Box>
  )
}
