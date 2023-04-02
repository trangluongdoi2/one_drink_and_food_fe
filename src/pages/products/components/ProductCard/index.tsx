import { Paper, Stack } from '@mantine/core'
import { useStyles } from './index.styles'

export const ProductCard = () => {
  const { classes } = useStyles()
  return (
    <Paper className={classes.container}>
      <Stack>Stack 1</Stack>
      <Stack>Stack 2</Stack>
      <Stack>Stack 3</Stack>
    </Paper>
  )
}
