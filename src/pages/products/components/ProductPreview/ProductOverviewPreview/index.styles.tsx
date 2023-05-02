import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  'text__name--empty': {
    fontWeight: 700,
    fontSize: '20px',
    textTransform: 'uppercase',
    lineHeight: '24px',
    color: '#c4c4c4'
  },
  text__name: {
    fontWeight: 700,
    fontSize: '20px'
  },
  'text__auxiliary--empty': {
    fontWeight: 400,
    fontSize: '10px',
    lineHeight: '12px',
    color: '#c4c4c4'
  },
  text__auxiliary: {
    fontWeight: 400,
    fontSize: '10px',
    lineHeight: '12px'
  },
  text__count: {
    fontSize: '20px'
  },
  text__price: {
    fontStyle: 'italic',
    fontSize: '10px'
  }
}))
