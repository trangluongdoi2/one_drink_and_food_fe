import { Paper } from '@mantine/core'
import { useStyles } from './index.styles'

export const ProductOverviewNewForm = () => {
  const { classes } = useStyles()
  return (
    <Paper className={`${classes.container} create-new-product-card__container`}>
      <div></div>
      Hello ProductOverviewNewForm
    </Paper>
  )
}
