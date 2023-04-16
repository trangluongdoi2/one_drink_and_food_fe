import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    gap: '15px',
    marginTop: '33px'
  },
  container__category: {
    '&:nth-of-type(even)': {
      display: 'flex',
      flexDirection: 'row-reverse',
      textAlign: 'right'
    }
  },
  image: {
    background: '#f5f5f5',
    width: '225px',
    height: '225px',
    borderRadius: '10px'
  },
  text__title: {
    fontWeight: 700,
    fontSize: '14px',
    textTransform: 'uppercase',
    lineHeight: '17px',
    textAlign: 'center'
  },
  text__category: {
    fontWeight: 700,
    fontSize: '20px',
    textTransform: 'uppercase',
    lineHeight: '24px'
  },
  'text__category-content': {
    fontWeight: 400,
    fontSize: '8px',
    lineHeight: '10px',
    color: '#c4c4c4'
  }
}))
