import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  td: {
    input: {
      backgroundColor: theme.colors.dark[3],
      '&:focus-within': {
        borderColor: theme.colors.gray
      },
      width: '90%',
      height: 40,
      fontSize: '12px'
    }
  },

  address: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  }
}))
