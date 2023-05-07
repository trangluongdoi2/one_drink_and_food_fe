import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    background: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)'
  },
  child: {
    flex: 1
  },
  title: {
    fontWeight: 700,
    fontSize: '14px',
    margin: '40px 40px 20px 40px'
  },
  'button-add': {
    padding: '0 40px'
  },
  childTitle: {
    fontStyle: 'uppercase'
  },
  actionIcon: {
    width: '40px',
    height: '20px'
  },
  contentNotice: {
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    color: '#000000'
  }
}))
