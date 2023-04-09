import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    height: '1006px'
  },
  actionIcon: {
    '&:active': {
      transform: 'translateY(0) !important'
    }
  }
}))
