import { createStyles, rem } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  th: {
    padding: '0 !important',
    fontSize: 12
  },

  control: {
    width: '100%',
    padding: '15px 0 0 ',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
    }
  },

  icon: {
    width: rem(21),
    height: rem(21),
    borderRadius: rem(21)
  }
}))
