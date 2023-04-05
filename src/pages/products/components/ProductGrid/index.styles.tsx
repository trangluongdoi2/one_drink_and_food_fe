import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  container: {
    background: 'transparent',
  },
  containerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 300px)',
    gridGap: '20px',
    backgroundColor: '#ffffff',
    marginTop: '20px',
    padding: '29px 43px 29px 40px',
    borderRadius: '10px'
  }
}))
