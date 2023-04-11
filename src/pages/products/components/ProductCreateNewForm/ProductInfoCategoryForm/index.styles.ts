import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    height: '1006px'
  },
  actionIcon: {
    width: '40px',
    height: '20px',
    '&:active': {
      transform: 'translateY(0) !important'
    }
  }
}))
