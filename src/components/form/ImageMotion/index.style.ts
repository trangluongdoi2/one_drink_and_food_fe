import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  inputMotionTime: {
    background: theme.colors.dark[0],
    borderRadius: '10px',
    '&:focus': {
      borderColor: 'black'
    }
  },
  rightSection: {
    display: 'none'
  },
  titleMotionTime: {
    marginBottom: '0'
  },
  iconToggle: {
    width: '40px',
    height: '20px',
    ':hover': {
      background: 'transparent'
    }
  }
}))
