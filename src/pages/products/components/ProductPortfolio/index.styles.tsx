import { createStyles, getStylesRef } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    height: '80px',
    padding: '29px 43px 29px 40px',
    [`.${getStylesRef('child')}`]: {
      flex: 1
    }
  },
  child: {
    ref: getStylesRef('child'),
    flex: 1
  }
}))
