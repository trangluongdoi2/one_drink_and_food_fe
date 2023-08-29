import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  title: {
    fontWeight: 700,
    fontSize: '14px',
    marginBottom: '20px'
  },
  topic: {
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '17px',
    color: '#000000',
    maxWidth: '200px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'break-spaces'
  },
  actionIcon: {
    width: '40px',
    height: '20px'
  },
  input__title: {
    height: '28px',
    minHeight: '28px',
    maxHeight: '28px',
    maxWidth: '200px',
    borderRadius: '3px',
    textTransform: 'uppercase',
    padding: '1px 2px',
    fontWeight: 700
  }
}))
