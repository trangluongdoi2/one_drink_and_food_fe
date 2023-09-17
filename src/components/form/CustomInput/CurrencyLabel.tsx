import { TDiscountType } from '@/types/coupon'
import { Button } from '@mantine/core'
import { FC } from 'react'
import { useStyles } from './CustomInput.styles'

type TCurrencyLabelProps = {
  type?: TDiscountType
  onChange?: (value: TDiscountType) => void
}

const CurrencyLabel: FC<TCurrencyLabelProps> = ({ type = 'percent', onChange }) => {
  const isPercentType = type === 'percent'
  const { classes } = useStyles()

  const labelStyles = (type: boolean) =>
    type ? { color: 'dark.1', variant: 'filled' } : { color: 'dark.0', variant: 'outlined' }

  const handleTypeChange = () => {
    onChange && onChange(isPercentType ? 'fixed' : 'percent')
  }

  return (
    <Button.Group onClick={handleTypeChange}>
      <Button className={classes.label} w={50} radius={0} {...labelStyles(!isPercentType)}>
        Đ
      </Button>
      <Button className={classes.label} radius={10} {...labelStyles(isPercentType)} mr={2}>
        %
      </Button>
    </Button.Group>
  )
}

export default CurrencyLabel
