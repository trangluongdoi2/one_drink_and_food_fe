import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    position: 'relative',
    width: 374,
    maxHeight: 120,
    zIndex: 100,
    padding: 10,
    borderRadius: 10,
    boxShadow: '1px 1px 10px #E5E5E5, -1px -1px 10px #E5E5E5',

    '&:hover': {
      transform: 'scale(1.01)'
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
    justifyContent: 'center',
    cursor: 'pointer'
  },
  text: {
    // // display: 'inline',
    // display: '-webkit-box',
    // '-webkit-line-clamp': 2,
    // '-webkit-box-orient': 'vertical',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}))
