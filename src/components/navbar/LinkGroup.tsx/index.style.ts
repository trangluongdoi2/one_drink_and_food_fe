import { createStyles, rem } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.dark[3],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black
    }
  },

  link: {
    fontWeight: 500,
    backgroundColor: theme.colors.dark[0],
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    paddingLeft: rem(64),
    height: 40,
    fontSize: 12,
    // marginRight: rem(10),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    borderLeft: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,

    '&:hover': {
      backgroundColor: theme.colors.dark[3],
      color: 'white'
    }
  },

  chevron: {
    transition: 'transform 200ms ease'
  },

  navbar: {
    transition: 'all 0.4s ease-in-out'
  }
}))
