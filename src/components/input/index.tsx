import { ToggleButon } from '@/components/button/ToggleButton'
import { useProductContext } from '@/context/ProductContext/ProductContext'
import { UserFormProvider, useUserForm, useUserFormContext } from '@/context/form-context'
import { setProductDirty } from '@/reducer/product/action'
import { ProductDetailProps } from '@/types/product'
import { snakeCaseToUnderscore } from '@/utils/string-utils'
import { Box, Flex, NumberInput, Text, TextInput, Textarea, createStyles } from '@mantine/core'
import { useFocusWithin } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

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
    height: '40px',
    maxHeight: '80px',
    fontSize: '12px'
  },
  inputArea: {
    minHeight: '180px'
  },
  rightSection: {
    display: 'none'
  },
  ['input--invalid']: {
    maxHeight: '80px',
    background: 'red'
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
  classNames?: string
  checkIsFocused?: (data: boolean) => void
  updateInput: (data: { value: string | number; field: any }) => void
  setInvalidInput?: (data: boolean) => void
}

type TypeInputProps = Pick<
  InputProps,
  | 'typeInput'
  | 'placeholder'
  | 'field'
  | 'isActiveInput'
  | 'updateInput'
  | 'classNames'
  | 'isImperative'
  | 'setInvalidInput'
>

const listFieldInvalid = ['']

export const TypeInput = ({
  typeInput,
  placeholder,
  field,
  isActiveInput,
  classNames,
  isImperative,
  updateInput,
  setInvalidInput
}: TypeInputProps) => {
  const { classes } = useStyles()
  const form = useUserFormContext()
  const { t } = useTranslation()
  const { dirty, dispatch } = useProductContext()

  const [isInvalid, setIsInvalid] = useState<boolean>(!!form.errors[field])

  const listCheckValidInput = ['text', 'price']

  const useConvertField = (field: string) => {
    return snakeCaseToUnderscore(field)
  }

  const onUpdateInput = () => {
    if (isImperative && !form.getInputProps(field).value) {
      form.setFieldError(field, t('un_valid', { field: t(useConvertField(field)) }))
      return
    }
    updateInput({
      value: field === 'price' ? Number(form.getInputProps(field)?.value) : form.getInputProps(field)?.value,
      field
    })
    dispatch(setProductDirty(false))
  }

  useEffect(() => {
    if (dirty === false) {
      listCheckValidInput.forEach((field: string) => {
        if (form.getInputProps(field).value === '') {
          form.setFieldError(field, t('un_valid_value'))
          dispatch(setProductDirty(true))
        }
      })
    }
  }, [dirty])

  useEffect(() => {
    setIsInvalid(!!form.errors[field])
    setInvalidInput && setInvalidInput(!!form.errors[field])
  }, [form.errors[field]])

  switch (typeInput) {
    case 'number':
      return (
        <TextInput
          type='number'
          placeholder={placeholder}
          classNames={{
            input: `${classes.input} ${classes.inputText} ${classNames}`
          }}
          disabled={!isActiveInput}
          {...form.getInputProps(field)}
          onBlur={onUpdateInput}
        />
      )
    case 'area':
      return (
        <Textarea
          placeholder={placeholder}
          classNames={{ input: `${classes.input} ${classes.inputArea} ${classNames}` }}
          disabled={!isActiveInput}
          {...form.getInputProps(field)}
          onBlur={onUpdateInput}
        />
      )
    default:
      return (
        <TextInput
          placeholder={placeholder}
          classNames={{
            input: `${classes.input} ${classes.inputText} ${classNames}`
          }}
          disabled={!isActiveInput}
          {...form.getInputProps(field)}
          onBlur={onUpdateInput}
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
  classNames,
  checkIsFocused,
  updateInput,
  setInvalidInput
}: InputProps) => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const { ref, focused } = useFocusWithin()
  const [isActive, setIsActive] = useState<boolean>(true)

  const form = useUserForm({
    initialValues: {
      [field]: typeof field === 'string' ? value ?? '' : value ?? 0
    } as Partial<ProductDetailProps>
  })

  const changeParentInput = (data: { value: string | number; field: any }) => {
    updateInput(data)
  }

  useEffect(() => {
    checkIsFocused && checkIsFocused(focused)
  }, [focused])

  useEffect(() => {
    form.setFieldValue(field, value)
  }, [value])

  return (
    <UserFormProvider form={form}>
      <form>
        <Box ref={ref}>
          {title && (
            <Flex justify='space-between' align={'flex-end'} sx={{ margin: '20px 0 10px 0' }}>
              <Text className={classes['.text__title']}>{title}</Text>
              <Flex align={'center'}>
                {!hiddenToggleIcon && <ToggleButon isActive={isActive} onToggleStatus={() => setIsActive(!isActive)} />}
                {isImperative && <Text className={classes['text--imperative']}>*{t('required_field')}</Text>}
              </Flex>
            </Flex>
          )}
          <TypeInput
            typeInput={typeInput}
            placeholder={placeholder}
            field={field}
            isActiveInput={isActive}
            classNames={classNames}
            isImperative={isImperative}
            updateInput={changeParentInput}
            setInvalidInput={setInvalidInput}
          />
          {moreOptions}
        </Box>
      </form>
    </UserFormProvider>
  )
}
