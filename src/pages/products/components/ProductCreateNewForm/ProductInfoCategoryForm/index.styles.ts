import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  title: {
    fontWeight: 700,
    fontSize: '14px',
    marginBottom: '20px'
  },
  topic: {
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '17px',
    color: '#000000'
  },
  actionIcon: {
    width: '40px',
    height: '20px',
    '&:active': {
      transform: 'translateY(0) !important'
    }
  }
}))
