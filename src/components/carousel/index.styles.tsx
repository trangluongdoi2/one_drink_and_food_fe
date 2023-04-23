import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  embla: {
    // background: 'red'
  },
  embla__viewport: {
    overflow: 'hidden'
  },
  embla__container: {
    display: 'flex',
    flexDirection: 'row'
  },
  embla__slide: {
    flex: '0 0 100%'
  },
  embla__slide__img: {
    objectFit: 'cover',
    borderRadius: '10px'
  },
  'embla__slide__img--empty': {
    width: '225px',
    height: '225px',
    borderRadius: '10px',
    background: '#f5f5f5'
  },
  'embla-thumbs': {
    marginTop: '14px'
  },
  'embla-thumbs__viewport': {
    overflow: 'hidden'
  },
  'embla-thumbs__container': {
    display: 'flex',
    flexDirection: 'row'
  },
  'embla-thumbs__slide': {
    flex: '0 0 33.3333%',
    minWidth: 0
  },
  'embla-thumbs__slide__img': {
    display: 'block',
    objectFit: 'cover',
    borderRadius: '10px',
    width: '66px',
    height: '66px',
    margin: '0 4px',
    opacity: 0.5
  },
  'embla-thumbs__slide__img--selected': {
    opacity: 1
  },
  'embla-thumbs__slide__img--empty': {
    width: '66px',
    height: '66px',
    background: '#f5f5f5',
    borderRadius: '10px',
    margin: '0 4px',
    opacity: 0.5
  },
  'embla-thumbs__slide__img--emptySelected': {
    opacity: 1,
    border: '1px solid #ced4da'
  }
}))
