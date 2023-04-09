import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  container: {
    padding: '40px',
    background: '#f5f5f5f5'
  },
  containerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 50%)',
    gap: '20px',
    background: 'transparent'
  }
}))
