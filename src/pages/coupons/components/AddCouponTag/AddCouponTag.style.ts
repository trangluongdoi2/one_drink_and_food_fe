import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.02)'
    }
  }
}))
