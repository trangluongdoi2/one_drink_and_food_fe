import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  title: {
    backgroundColor: theme.colors.dark[1],
    padding: '10px 20px',
    borderRadius: '10px 0 0 10px'
  },

  content: {
    backgroundColor: theme.colors.dark[0],
    padding: '10px 20px',
    borderRadius: '0 10px 10px 0'
  }
}))
