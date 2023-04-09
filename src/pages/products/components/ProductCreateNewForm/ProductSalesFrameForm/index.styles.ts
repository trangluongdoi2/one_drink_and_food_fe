import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    // height: '1051px'
  },
  child: {
    flex: 1
  },
  title: {
    fontWeight: 700,
    fontSize: '14px',
    marginBottom: '20px'
  },
  childTitle: {
    fontStyle: 'uppercase'
  },
  actionIcon: {
    width: '40px',
    height: '20px',
    '&:active': {
      transform: 'translateY(0) !important'
    }
  },
  titleAdd: {
    width: '100%',
    justifyContent: 'flex-start',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '17px',
    textTransform: 'uppercase',
    color: '#000000',
    marginTop: '20px'
  },
  contentNotice: {
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    color: '#000000'
  }
}))
