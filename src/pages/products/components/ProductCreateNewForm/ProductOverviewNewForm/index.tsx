import { ActionIcon, Paper } from '@mantine/core'
import { useStyles } from './index.styles'
import { AppInput } from '@/components/input'
import { AppInputList } from '@/components/input-list'
import { useTranslation } from 'react-i18next'
import { ToggleDarkLgIcon, ToggleLightLgIcon, DoneFillIcon } from '@/assets/icon'
import { useState } from 'react'

type IconToggleProps = {
  handleClick: (value: boolean) => void
  isActive: boolean
}

const IconToggle = ({handleClick, isActive} : IconToggleProps) => {
  const { classes } = useStyles()
  return (
    <ActionIcon size={40} className={classes.actionIcon} onClick={() => handleClick(!isActive)}>
      {isActive ? <ToggleDarkLgIcon /> : <ToggleLightLgIcon />}
    </ActionIcon>
  )
}

export const ProductOverviewNewForm = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const [isActive, setIsActive] = useState(true)
  const [listFunction, setListFunction] = useState<any>([])

  const toggleActiveInput = (value: boolean) => {
    setIsActive(value)
  }

  const updateFunctionList = (data: any) => {
    console.log(data, 'data parent')
    setListFunction([...data])
  }

  return (
    <Paper className={`${classes.container} create-new-product-card__container`}>
      <AppInput name={t('product_name')} isImperative={true} placeHolder={t('fill_product_name')} />
      <AppInput
        name={t('auxiliary_name')}
        placeHolder={t('fill_product_auxiliary_name')}
        iconToggle={<IconToggle handleClick={toggleActiveInput} isActive={isActive} />}
        isActiveInput={isActive}
      />
      <AppInput name={t('prices')} isImperative={true} placeHolder={t('fill_product_prices')} />
      <AppInputList
        name={t('typical_function')}
        iconStatus={<DoneFillIcon />}
        updateList={updateFunctionList}
      ></AppInputList>
      <AppInput
        name={t('introduction')}
        placeHolder={t('fill_product_introduction')}
        isTextArea={true}
        iconToggle={<IconToggle handleClick={toggleActiveInput} isActive={isActive} />}
        isActiveInput={isActive}
      />
    </Paper>
  )
}
