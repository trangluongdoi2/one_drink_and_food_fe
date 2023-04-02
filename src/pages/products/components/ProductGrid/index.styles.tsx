import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 300px)',
    gridGap: '20px',
    backgroundColor: '#ffffff',
    padding: '29px 43px 29px 40px'
  }
}))
