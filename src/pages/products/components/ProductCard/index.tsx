import { ActionIcon, Paper, Stack, Text } from '@mantine/core'
import { useStyles } from './index.styles'
import { AddFillIcon } from '@/assets/icon'

export const ProductCard = ({forNewProduct = false}: any) => {
  const { classes } = useStyles()
  const onCreateNewProduct = () => {
    if (forNewProduct) {
      console.log('onCreateNewProduct')
      return
    }
  }
  return (
    <Paper className={classes.container} onClick={onCreateNewProduct}>
      {forNewProduct ? (
        <>
          <Stack >
            <ActionIcon size={52.5} className={classes.icon}>
              <AddFillIcon />
            </ActionIcon>
          </Stack>
          <Text fz={14}>Thêm sản phẩm</Text>
        </>
      ) : (
        <>
          <Stack>Stack 1</Stack>
          <Stack>Stack 2</Stack>
          <Stack>Stack 3</Stack>
        </>
      )}
    </Paper>
  )
}
