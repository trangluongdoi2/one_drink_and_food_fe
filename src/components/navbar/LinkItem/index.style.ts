import { createStyles, rem } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  link: {
    fontWeight: 'normal',
    backgroundColor: theme.colors.dark[0],
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    paddingLeft: rem(64),
    height: 40,
    fontSize: 12,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    borderLeft: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,

    '&:hover': {
      backgroundColor: theme.colors.dark[3],
      color: 'white',
      transition: 'all 0.4s'
    }
  },

  selected: {
    backgroundColor: 'black',
    color: 'white'
  }
}))
