import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  control: {
    backgroundColor: theme.colors.dark[0],
    '&[data-active]': {
      backgroundImage: theme.fn.gradient({ from: 'black', to: 'black' })
    }
  }
}))
