import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Flex, NumberInput, Text, TextInput, Textarea, createStyles } from '@mantine/core'
import { ProductDetailProps } from '@/types/product'
import { UserFormProvider, useUserForm, useUserFormContext } from '@/context/form-context'
import { ToggleButon } from '@/components/button/ToggleButton'

const useStyles = createStyles(() => ({
  '.text__title': {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '17px',
    color: '#000000'
  },
  'text--imperative': {
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    textAlign: 'right',
    color: '#FE5F51'
  },
  input: {
    background: '#f5f5f5',
    borderRadius: '10px',
    '&:focus': {
      borderColor: '#000000'
    }
  },
  inputText: {
    height: '40px'
  },
  inputArea: {
    minHeight: '180px'
  },
  rightSection: {
    display: 'none'
  }
}))
export interface InputProps {
  title?: string
  field: keyof ProductDetailProps | any
  placeholder: string
  value?: string | number
  isImperative?: boolean
  canToggleActive?: boolean
  isActiveInput?: boolean
  typeInput?: string
  hiddenToggleIcon?: boolean
  moreOptions?: React.ReactNode
  classInput?: string
  updateInput: (data: { value: string | number; field: string }) => void
}

type TypeInputProps = Pick<
  InputProps,
  'typeInput' | 'placeholder' | 'field' | 'isActiveInput' | 'updateInput' | 'classInput'
>

export const TypeInput = ({
  typeInput,
  placeholder,
  field,
  isActiveInput,
  classInput,
  updateInput
}: TypeInputProps) => {
  const { classes } = useStyles()
  const form = useUserFormContext()

  useEffect(() => {
    updateInput({ value: form.getInputProps(field)?.value, field })
  }, [form.values])

  switch (typeInput) {
    case 'number':
      return (
        <NumberInput
          placeholder={placeholder}
          classNames={{ input: `${classes.input} ${classes.inputText}`, rightSection: `${classes.rightSection}` }}
          disabled={!isActiveInput}
          {...form.getInputProps(field)}
        />
      )
    case 'area':
      return (
        <Textarea
          placeholder={placeholder}
          classNames={{ input: `${classes.input} ${classes.inputArea} ${classInput}` }}
          disabled={!isActiveInput}
          {...form.getInputProps(field)}
        />
      )
    default:
      return (
        <TextInput
          placeholder={placeholder}
          classNames={{ input: `${classes.input} ${classes.inputText} ${classInput}` }}
          disabled={!isActiveInput}
          {...form.getInputProps(field)}
        />
      )
  }
}

export const AppInput = ({
  title,
  field,
  placeholder = '',
  typeInput = 'text',
  isImperative = false,
  hiddenToggleIcon = false,
  moreOptions,
  value,
  classInput,
  updateInput
}: InputProps) => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const [isActive, setIsActive] = useState<boolean>(true)
  const form = useUserForm({
    initialValues: {
      [field]: typeof field === 'string' ? value ?? '' : 0
    } as Partial<ProductDetailProps>
  })

  const changeParentInput = (data: { value: string | number; field: string }) => {
    updateInput(data)
  }

  return (
    <UserFormProvider form={form}>
      <form>
        <Box>
          {title && (
            <Flex justify='space-between' align={'flex-end'} sx={{ marginTop: '20px', marginBottom: '10px' }}>
              <Text className={classes['.text__title']}>{title}</Text>
              <Flex align={'center'}>
                {isImperative && <Text className={classes['text--imperative']}>*{t('required_field')}</Text>}
                {!hiddenToggleIcon && <ToggleButon isActive={isActive} onToggleStatus={() => setIsActive(!isActive)} />}
              </Flex>
            </Flex>
          )}
          <TypeInput
            typeInput={typeInput}
            placeholder={placeholder}
            field={field}
            isActiveInput={isActive}
            updateInput={changeParentInput}
            classInput={classInput}
          />
          {moreOptions}
        </Box>
      </form>
    </UserFormProvider>
  )
}
