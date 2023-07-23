import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
    boxShadow: '1px 0px 10px #ccc',
    zIndex: 1,
    position: 'sticky',
    top: 0
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl
  },

  icon: {
    position: 'absolute',
    top: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 80,
    display: 'flex',
    alignItems: 'center'
  },
  accordion: { padding: 0 },
  control: { backgroundColor: 'white' }
}))
