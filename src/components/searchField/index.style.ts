import { MantineTheme, createStyles } from '@mantine/core'

export const useStyles = createStyles((theme: MantineTheme) => ({
  select: {
    input: {
      backgroundColor: theme.colors.dark[0],
      borderRadius: '10px 0 0 10px',
      '&:focus-within': {
        borderWidth: 1,
        borderColor: theme.colors.gray
      },
      height: 40,
      borderWidth: 0
    },
    width: 590
  },
  button: {
    input: {
      backgroundColor: theme.colors.dark[0]
    },
    borderRadius: '0 10px 10px 0',
    height: 40,
    width: 176,
    marginLeft: 2
  }
}))
