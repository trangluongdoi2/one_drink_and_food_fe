import { createStyles, getStylesRef } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    backgroundColor: '#f0f0f0',
    width: '300px',
    height: '380px',
    padding: '24px 25px 20px 25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    background: '#ffffff',
    '&:active': {
      transform: 'translateY(4px)'
    }
  },
  icon: {
    '> svg': {
      width: '100%',
      height: '100%'
    },
    '&:hover': {
      background: '#ffffff',
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
      borderRadius: '50%'
    }
  }
}))
