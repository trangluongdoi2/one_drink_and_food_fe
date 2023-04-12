import { TableRowsIcon, ToggleDarkLgIcon, ToggleLightLgIcon } from '@/assets/icon'
import { Paper, Flex, Text, ActionIcon } from '@mantine/core'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface CustomCheckBoxProps {
  active?: boolean
  title: string
  value: string
  selectedOption: string[]
  setSelectedOption: Dispatch<SetStateAction<string[]>>
}

const CustomCheckBox = ({ title, value, selectedOption, setSelectedOption }: CustomCheckBoxProps) => {
  const [check, setCheck] = useState(selectedOption.includes(value))
  const onHandleCheck = () => {
    console.log('click')
    setCheck(!check)
  }

  useEffect(() => {
    check
      ? setSelectedOption([...selectedOption, value])
      : setSelectedOption([...selectedOption.filter((option) => option !== value)])
  }, [check])

  return (
    <Paper px={40} py={10} radius={10}>
      <Flex justify='space-between' align='center'>
        <Flex gap={10}>
          <TableRowsIcon />
          <Text size={18} fw='bolder' tt='uppercase'>
            {title}
          </Text>
        </Flex>

        <ActionIcon onClick={onHandleCheck} size={60} name={value}>
          {check ? <ToggleDarkLgIcon /> : <ToggleLightLgIcon />}
        </ActionIcon>
      </Flex>
    </Paper>
  )
}

export default CustomCheckBox
