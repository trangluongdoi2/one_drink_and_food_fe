import { ToggleDarkLgIcon, ToggleLightLgIcon } from '@/assets/icon'

import { ActionIcon, Flex, NumberInput, Text } from '@mantine/core'
import { t } from 'i18next'
import { useStyles } from './index.style'
import { FC, useState } from 'react'

type TImageMotionProps = {
  motionValue: number
  active: boolean
  onChangeActive: (active: boolean) => void
  onMotionChange: (value: number) => void
}

const ImageMotion: FC<TImageMotionProps> = ({ motionValue, onMotionChange, onChangeActive, active = false }) => {
  const { classes } = useStyles()
  const [toggle, setToggle] = useState<boolean>(active)

  const changeMotionDelays = (event: React.FocusEvent<HTMLInputElement>) => {
    const { value } = event.target
    onMotionChange(Number(value))
  }

  const handleToggleChange = () => {
    setToggle(!toggle)
    onChangeActive
  }

  return (
    <Flex mt={8} justify={'space-between'}>
      <Flex align={'center'}>
        <Text size='sm' fw='bolder' mr={10}>
          {t('motion_images')}
        </Text>
        <ActionIcon className={classes.iconToggle} onClick={handleToggleChange}>
          {toggle ? <ToggleDarkLgIcon /> : <ToggleLightLgIcon />}
        </ActionIcon>
      </Flex>
      <NumberInput
        placeholder={t('fill_time_value') || ''}
        defaultValue={1000}
        classNames={{ input: classes.inputMotionTime, rightSection: classes.rightSection }}
        sx={{ flex: '1', marginLeft: '10px' }}
        disabled={!motionValue}
        onBlur={changeMotionDelays}
      />
    </Flex>
  )
}

export default ImageMotion
