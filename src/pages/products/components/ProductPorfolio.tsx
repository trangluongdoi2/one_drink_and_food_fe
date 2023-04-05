import { Button, Paper } from '@mantine/core'

export const ProductPortfolio = ({ title, hiddenIcon}: any) => {
  return (
    <Paper shadow='sm' p='sm'>
      <p>DANH MỤC | {title}</p>
      <Button>Click</Button>
    </Paper>
  )
}