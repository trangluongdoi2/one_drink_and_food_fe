import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.fn.primaryColor()
  },

  title: {
    color: theme.fn.rgba(theme.white, 0.65)
  },

  stats: {
    color: theme.white
  },

  progressBar: {
    backgroundColor: theme.white
  },

  progressTrack: {
    backgroundColor: theme.fn.rgba(theme.white, 0.4)
  }
}))
