import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme, { isSelected }: { isSelected: boolean }) => ({
  container: {
    margin: 0,
    padding: 0,
    width: '100%',
    fontSize: 12
  },

  checkbox: {
    float: 'left',
    marginRight: 20,
    alignItems: 'center',
    display: 'flex'
  },
  list: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    display: 'flex',
    backgroundColor: isSelected ? theme.white : theme.colors.dark[0],
    boxShadow: isSelected ? '2px 2px 10px 1px #ccc' : '',
    borderRadius: 10
  },
  content: {
    width: '100%',
    fontSize: 12
  },
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
