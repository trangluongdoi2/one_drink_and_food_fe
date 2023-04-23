import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  child: {
    flex: 1
  },
  title: {
    fontWeight: 700,
    fontSize: '14px',
    marginBottom: '20px'
  },
  childTitle: {
    fontStyle: 'uppercase'
  },
  actionIcon: {
    width: '40px',
    height: '20px',
    '&:active': {
      transform: 'translateY(0) !important'
    }
  },
  contentNotice: {
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    color: '#000000'
  }
}))
