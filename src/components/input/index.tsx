import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Flex, NumberInput, Text, TextInput, Textarea, createStyles } from '@mantine/core'
import { ProductDetailProps } from '@/types/product'
import { UserFormProvider, useUserForm, useUserFormContext } from '@/context/form-context'
import { ToggleButon } from '@/components/button/ToggleButton'
import { useFocusWithin } from '@mantine/hooks'
import { camelToSnakeCase, snakeCaseToUnderscore } from '@/utils/string-utils'
import { TProductAttributeOption } from '@/pages/products/type'

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
  checkIsFocused?: (data: boolean) => void
  updateInput: (data: { value: string | number; field: any }) => void
}

type TypeInputProps = Pick<
  InputProps,
  'typeInput' | 'placeholder' | 'field' | 'isActiveInput' | 'updateInput' | 'classInput' | 'isImperative'
>

export const TypeInput = ({
  typeInput,
  placeholder,
  field,
  isActiveInput,
  classInput,
  isImperative,
  updateInput
}: TypeInputProps) => {
  const { classes } = useStyles()
  const form = useUserFormContext()
  const { t } = useTranslation()

  const useConvertField = (field: string) => {
    return snakeCaseToUnderscore(field)
  }

  const onUpdateInput = () => {
    if (isImperative && !form.getInputProps(field).value) {
      form.setFieldError(field, t('un_valid', { field: t(useConvertField(field)) }))
    }
    updateInput({ value: form.getInputProps(field)?.value, field })
  }

  switch (typeInput) {
    case 'number':
      return (
        <NumberInput
          placeholder={placeholder}
          classNames={{ input: `${classes.input} ${classes.inputText}`, rightSection: `${classes.rightSection}` }}
          disabled={!isActiveInput}
          {...form.getInputProps(field)}
          onBlur={onUpdateInput}
        />
      )
    case 'area':
      return (
        <Textarea
          placeholder={placeholder}
          classNames={{ input: `${classes.input} ${classes.inputArea} ${classInput}` }}
          disabled={!isActiveInput}
          {...form.getInputProps(field)}
          onBlur={onUpdateInput}
        />
      )
    default:
      return (
        <TextInput
          placeholder={placeholder}
          classNames={{ input: `${classes.input} ${classes.inputText} ${classInput}` }}
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
  classInput,
  checkIsFocused,
  updateInput
}: InputProps) => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const { ref, focused } = useFocusWithin()
  const [isActive, setIsActive] = useState<boolean>(true)

  const form = useUserForm({
    initialValues: {
      [field]: typeof field === 'string' ? value ?? '' : 0
    } as Partial<ProductDetailProps>
  })

  const changeParentInput = (data: { value: string | number; field: any }) => {
    updateInput(data)
  }

  useEffect(() => {
    checkIsFocused && checkIsFocused(focused)
  }, [focused])

  return (
    <UserFormProvider form={form}>
      <form>
        <Box ref={ref}>
          {title && (
            <Flex justify='space-between' align={'flex-end'} sx={{ marginTop: '20px', marginBottom: '10px' }}>
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
            classInput={classInput}
            isImperative={isImperative}
            updateInput={changeParentInput}
          />
          {moreOptions}
        </Box>
      </form>
    </UserFormProvider>
  )
}
