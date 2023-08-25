import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    position: 'relative',
    maxWidth: 374,
    zIndex: 100,
    cursor: 'pointer',

    '&:hover': {
      transform: 'scale(1.02)'
    }
  },
  tag: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#000',
    width: 120,
    height: 35,
    borderRadius: '10px 0 10px 0',
    justifyContent: 'center'
  }
}))
