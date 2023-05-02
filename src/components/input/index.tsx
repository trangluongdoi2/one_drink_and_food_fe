import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Flex, NumberInput, Text, TextInput, Textarea, createStyles } from '@mantine/core'
import { UserFormProvider, useUserForm, useUserFormContext } from '@/context/form-context'
import { ProductDetailProps } from '@/types/product'
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
  isImperative?: boolean
  canToggleActive?: boolean
  isActiveInput?: boolean
  typeInput?: string
  hiddenToggleIcon?: boolean
  moreOptions?: React.ReactNode
  updateInput: (data: { value: string | number; field: string }) => void
}

type TypeInputProps = Pick<InputProps, 'typeInput' | 'placeholder' | 'field' | 'isActiveInput' | 'updateInput'>

export const TypeInput = ({ typeInput, placeholder, field, isActiveInput, updateInput }: TypeInputProps) => {
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
          classNames={{ input: `${classes.input} ${classes.inputArea}` }}
          disabled={!isActiveInput}
          {...form.getInputProps(field)}
        />
      )
    default:
      return (
        <TextInput
          placeholder={placeholder}
          classNames={{ input: `${classes.input} ${classes.inputText}` }}
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
  updateInput
}: InputProps) => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const [isActive, setIsActive] = useState<boolean>(true)
  const form = useUserForm({
    initialValues: {
      [field]: typeof field === 'string' ? '' : 0
    } as Partial<ProductDetailProps>
  })

  const changeParentInput = (data: { value: string | number; field: string }) => {
    updateInput(data)
  }

  const test = (event: any) => {
    console.log(event, 'event')
  }

  return (
    <UserFormProvider form={form}>
      <form onSubmit={form.onSubmit(() => test)}>
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
          />
          {moreOptions}
        </Box>
      </form>
    </UserFormProvider>
  )
}
