import { createStyles, rem } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  td: {
    input: {
      backgroundColor: theme.colors.dark[3],
      '&:focus-within': {
        borderColor: theme.colors.gray
      }
    }
  }
}))
