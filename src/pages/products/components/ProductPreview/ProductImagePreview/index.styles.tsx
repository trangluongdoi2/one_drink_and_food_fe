import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    gap: '15px',
    height: '100%'
  },
  image: {
    width: '225px',
    height: '225px',
    background: '#f5f5f5',
    borderRadius: '10px'
  },
  image__carousel: {
    maxWidth: '225px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  'image__carousel-child': {
    height: '66px',
    width: '66px',
    background: '#f5f5f5',
    borderRadius: '10px',
    textAlign: 'center'
  },
  text__content: {
    fontWeight: 400,
    fontSize: '8px',
    lineHeight: '10px'
  },
  text__function: {
    color: '#c4c4c4'
  },
  text__introduction: {
    fontWeight: 700,
    fontSize: '8px',
    lineHeight: '12px',
    textTransform: 'uppercase'
  }
}))
