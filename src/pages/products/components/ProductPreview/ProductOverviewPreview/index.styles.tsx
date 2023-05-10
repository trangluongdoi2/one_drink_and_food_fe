import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  'text__name--empty': {
    fontWeight: 700,
    fontSize: '20px',
    textTransform: 'uppercase',
    lineHeight: '24px',
    color: '#c4c4c4'
  },
  text__name: {
    fontWeight: 700,
    fontSize: '20px'
  },
  'text__auxiliary--empty': {
    fontWeight: 400,
    fontSize: '10px',
    lineHeight: '12px',
    color: '#c4c4c4'
  },
  text__auxiliary: {
    fontWeight: 400,
    fontSize: '10px',
    lineHeight: '12px'
  },
  text__count: {
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '20px'
  },
  text__price: {
    fontStyle: 'italic',
    fontSize: '10px'
  },
  'text__add-cart': {
    color: '#ffffff',
    fontSize: '10px',
    fontWeight: 400,
    lineHeight: '12px'
  },
  'text__add-cart--bold': {
    fontWeight: 700
  },
  container: {
    borderRadius: '5px',
    border: '1px solid #c4c4c4',
    marginTop: '6px'
  },
  container__content: {
    padding: '9px 14px'
  },
  container__note: {
    height: '24px',
    display: 'flex'
  },
  note__icon: {
    height: '22px',
    background: '#e5e5e5',
    borderRadius: '5px 0 0 5px',
    pointerEvents: 'none'
  },
  note__text: {
    padding: '7px 10px',
    fontSize: '8px',
    lineHeight: '10px',
    color: '#c4c4c4'
  },
  'container__add-cart': {
    height: '30px',
    background: '#000000',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none'
  },
}))
