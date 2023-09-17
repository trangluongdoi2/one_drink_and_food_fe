import { NumberInput, NumberInputProps, TextInput, Textarea, clsx } from '@mantine/core'
import { FC } from 'react'
import { CustomInputProps } from '.'
import { useStyles } from './CustomInput.styles'

type TypeInputProps = Omit<CustomInputProps, 'moreOptions' | 'title' | 'placeholder'> & {
  placeholder?: string
}

export const TypeInput: FC<TypeInputProps> = ({
  typeInput,
  isActiveInput,
  classInput,
  placeholder,
  value,
  onChange,
  error,
  rightSection,
  ...props
}) => {
  const { classes } = useStyles()

  switch (typeInput) {
    case 'number':
      return (
        <NumberInput
          placeholder={placeholder}
          classNames={{
            input: clsx(classes.input, classes.inputText),
            rightSection: clsx(!rightSection ? classes.rightSection : classes.activeRightSection)
          }}
          disabled={!isActiveInput}
          value={value as NumberInputProps['value']}
          onChange={(value) => onChange(value)}
          rightSection={rightSection}
          {...props}
        />
      )
    case 'area':
      return (
        <Textarea
          placeholder={placeholder}
          classNames={{ input: `${classes.input} ${classes.inputArea} ${classInput}` }}
          disabled={!isActiveInput}
          value={value}
          onChange={({ currentTarget }) => onChange(currentTarget.value)}
          {...props}
        />
      )
    default:
      return (
        <TextInput
          placeholder={placeholder}
          classNames={{ input: `${classes.input} ${classes.inputText} ${classInput}` }}
          disabled={!isActiveInput}
          value={value}
          defaultValue={value}
          onChange={({ currentTarget }) => onChange(currentTarget.value)}
          error={error}
          {...props}
        />
      )
  }
}
