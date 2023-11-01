import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  actionIcon: {
    width: '40px',
    height: '20px'
  },
  textIncludesVAT: {
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    color: '#000000'
  },
  moreOption: {
    marginTop: '8px'
  },
  title: {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '17px',
    color: '#000000',
    marginBottom: '20px'
  },
  inputMotionTime: {
    background: '#f5f5f5f5',
    borderRadius: '10px',
    '&:focus': {
      borderColor: '#000000'
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
