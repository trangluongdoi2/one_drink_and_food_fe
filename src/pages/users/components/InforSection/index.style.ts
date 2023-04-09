import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  input: {
    width: '100%',
    input: {
      backgroundColor: theme.colors.dark[0],
      height: 40,
      borderRadius: 10,
      '&:focus-within': {
        borderColor: theme.colors.gray,
        backgroundColor: theme.colors.dark[1]
      }
    }
  }
}))
