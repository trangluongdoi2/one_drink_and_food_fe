import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  inputField: {
    input: {
      backgroundColor: theme.colors.dark[0],
      '&:focus-within': {
        borderColor: theme.colors.gray
      },
      height: 40,
      alignItems: 'center',
      borderRadius: '10px 0 0 10px'
    },
    width: '100%'
  },
  button: {
    input: {
      backgroundColor: theme.colors.dark[0]
    },
    height: 40,
    width: 200,
    borderRadius: '0 10px 10px 0'
  }
}))
