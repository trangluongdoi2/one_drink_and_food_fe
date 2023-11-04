import { MantineStyleSystemProps, Text, TextInput, TextProps } from '@mantine/core'
import { FC, useState } from 'react'

type TRowInputProps = {
  isEditing?: boolean
  name?: string
  value: string
  onChange?: (value: string) => void
  textStyle?: MantineStyleSystemProps
}
const RowInput: FC<TRowInputProps> = ({ isEditing, name, value, onChange, textStyle }) => {
  const [inputValue, setInputValue] = useState(value)
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setInputValue(value)
    onChange && onChange(value)
  }
  return isEditing ? (
    <TextInput name={name} onChange={handleInputChange} value={inputValue} {...textStyle} />
  ) : (
    <Text lh={1.4} {...textStyle}>
      {value}
    </Text>
  )
}

export default RowInput
