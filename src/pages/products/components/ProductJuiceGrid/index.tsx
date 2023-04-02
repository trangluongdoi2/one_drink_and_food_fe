import { Paper } from '@mantine/core'
import { ProductPortfolio } from '../ProductPortfolio'

export const ProductJuiceGrid = () => {
  return (
    <Paper pt={40} pl={40} pr={60} sx={{ backgroundColor: '#f5f5f5' }}>
      <p>Nuoc ep</p>
      <ProductPortfolio title='Nước trái cây' />
    </Paper>
  )
}