import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  pagination: {
    control: {
      // backgroundColor: 'gray.2',
      '&[data-active]': {
        color: '#000 !important',
        backgroundImage: theme.fn.gradient({ from: 'red', to: 'yellow' })
      }
    }
  }
}))
