import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    gap: '15px',
    height: '100%'
  },
  container__carousel: {
    width: '225px'
    // height: '225px'
  },
  'container__carousel-child': {
    width: '225px',
    height: '66px'
  },
  image: {
    borderRadius: '10px'
  },
  image__emtpy: {
    width: '225px',
    height: '225px',
    background: '#f5f5f5',
    borderRadius: '10px'
  },
  'image__empty-child': {
    height: '66px',
    background: '#f5f5f5',
    borderRadius: '10px'
  },
  'image__carousel-child': {
    height: '66px',
    background: '#f5f5f5',
    borderRadius: '10px'
  },
  text__content: {
    fontWeight: 400,
    fontSize: '8px',
    lineHeight: '10px'
  },
  'text__function--empty': {
    color: '#c4c4c4'
  },
  text__introduction: {
    fontWeight: 700,
    fontSize: '8px',
    lineHeight: '12px',
    textTransform: 'uppercase'
  }
}))
