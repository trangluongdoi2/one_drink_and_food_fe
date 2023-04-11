import { useState } from 'react'
import { ActionIcon, Paper } from '@mantine/core'
import { useStyles } from './index.styles'
import { useTranslation } from 'react-i18next'
import { AppInput } from '@/components/input'
import { ToggleDarkLgIcon, ToggleLightLgIcon, DoneFillIcon } from '@/assets/icon'

type IconToggleProps = {
  handleClick: (value: boolean) => void
  isActive: boolean
}

const IconToggle = ({handleClick, isActive} : IconToggleProps) => {
  const { classes } = useStyles()
  return (
    <ActionIcon className={classes.actionIcon} onClick={() => handleClick(!isActive)}>
      {isActive ? <ToggleDarkLgIcon /> : <ToggleLightLgIcon />}
    </ActionIcon>
  )
}

export const ProductInfoCategoryForm = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const [isActive, setIsActive] = useState(true)
  const toggleActiveInput = (value: boolean) => {
    setIsActive(value)
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
