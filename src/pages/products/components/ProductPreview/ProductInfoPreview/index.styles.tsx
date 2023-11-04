import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    gap: '15px',
    marginTop: '33px'
  },
  container__category: {
    '> div:nth-of-type(odd)': {
      textAlign: 'right'
    },
    '> div:nth-of-type(even)': {
      flexDirection: 'row-reverse'
    }
  },
  container__carousel: {
    width: '225px'
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
    lineHeight: '24px',
    maxWidth: '300px',
    wordWrap: 'break-word'
  },
  'text__category-content': {
    fontWeight: 400,
    fontSize: '8px',
    lineHeight: '10px',
    color: '#c4c4c4',
    maxWidth: '300px',
    wordWrap: 'break-word'
  }
}))
