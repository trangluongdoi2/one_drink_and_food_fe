import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    // height: '135px',
    padding: '15px 0'
  },
  ['container__input--deactive']: {
    opacity: 0.5,
    pointerEvents: 'none'
  },
  title: {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '17px',
    color: '#000000',
    textTransform: 'uppercase'
  },
  toggleIcon: {
    width: '40px',
    height: '20px'
  },
  input: {
    background: '#f5f5f5f5'
  },
  rightSection: {
    display: 'none'
  }
}))
