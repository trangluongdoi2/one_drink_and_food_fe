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
  },
  textIncludesVAT: {
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    color: '#000000'
  }
}))