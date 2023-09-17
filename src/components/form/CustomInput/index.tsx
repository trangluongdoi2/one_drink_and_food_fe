import { ToggleButon } from '@/components/button/ToggleButton'
import { Flex, InputProps, Text } from '@mantine/core'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useStyles } from './CustomInput.styles'
import { TypeInput } from './TypeInput'

export interface CustomInputProps extends InputProps {
  title?: string | null
  isImperative?: boolean
  isActiveInput?: boolean
  typeInput?: string
  hiddenToggleIcon?: boolean
  moreOptions?: React.ReactNode
  classInput?: string
  value: string | number
  onChange: (value: string | number) => void
  placeholder?: string | null
  error?: string
}

export const CustomInput: FC<CustomInputProps> = ({
  title,
  placeholder = '',
  typeInput = 'text',
  isImperative = false,
  hiddenToggleIcon = false,
  moreOptions,
  classInput,
  value,
  onChange,
  error,
  ...props
}) => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const [isActive, setIsActive] = useState<boolean>(true)

  return (
    <>
      {title && (
        <Flex justify='space-between' align={'flex-end'} mt={20} mb={10}>
          <Text className={classes['.text__title']}>{title}</Text>
          <Flex align={'center'}>
            {!hiddenToggleIcon && <ToggleButon isActive={isActive} onToggleStatus={() => setIsActive(!isActive)} />}
            {isImperative && <Text className={classes['text--imperative']}>*{t('required_field')}</Text>}
          </Flex>
        </Flex>
      )}
      <TypeInput
        typeInput={typeInput}
        isActiveInput={isActive}
        classInput={classInput}
        isImperative={isImperative}
        placeholder={placeholder ?? ''}
        value={value}
        onChange={onChange}
        error={error}
        {...props}
      />
      {moreOptions}
    </>
  )
}
