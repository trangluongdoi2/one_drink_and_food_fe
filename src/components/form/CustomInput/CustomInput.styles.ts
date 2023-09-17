import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  '.text__title': {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '17px',
    color: '#000000'
  },
  'text--imperative': {
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    textAlign: 'right',
    color: '#FE5F51'
  },
  input: {
    background: '#f5f5f5',
    borderRadius: '10px',
    '&:focus': {
      borderColor: '#000000'
    }
  },
  inputText: {
    height: '40px',
    fontSize: '12px'
  },
  inputArea: {
    minHeight: '180px'
  },
  rightSection: {
    display: 'none'
  },
  activeRightSection: {
    display: 'flex',
    alignItems: 'center'
  },
  label: {
    color: 'black',
    height: 38
  }
}))
