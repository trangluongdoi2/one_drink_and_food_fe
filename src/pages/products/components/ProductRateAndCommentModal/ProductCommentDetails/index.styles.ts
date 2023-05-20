import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    // overflowY: 'auto'
  },
  comments: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gap: '20px',
    overflowY: 'auto',
    overflowX: 'hidden',
    maxHeight: '400px'
  },
  comments__input: {
    border: 'none',
    padding: 0,
    position: 'relative',
    fontSize: '14px',
    lineHeight: '17px'
  },
  comments__dropdown: {
    width: '392px !important',
    left: '50px !important'
  },
  item: {
    '&:hover': {
      background: '#f5f5f5'
    }
  }
}))
