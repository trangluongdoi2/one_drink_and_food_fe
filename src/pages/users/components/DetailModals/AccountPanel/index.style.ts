import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  invite: {
    backgroundColor: '#e5e5e5',
    borderRadius: '10px 0 0 10px',
    height: '100%',
    padding: '10px 20px',
    width: '40%'
  },
  code: {
    backgroundColor: '#f5f5f5',
    borderRadius: '0 10px 10px 0',
    height: '100%',
    width: '60%',
    padding: '8px 20px'
  },
  image: {
    border: '2px solid #ccc'
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0
  },
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
