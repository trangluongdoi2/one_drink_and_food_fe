import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    borderRadius: '5px',
    border: '1px solid #c4c4c4'
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
  text__title: {
    fontWeight: 700,
    fontSize: '8px',
    lineHeight: '10px',
    textTransform: 'uppercase',
    background: '#e5e5e5',
    padding: '7px 14px',
    height: '24px'
  },
  text__content: {
    fontWeight: 400,
    fontSize: '8px',
    lineHeight: '10px'
  },
  'text__content-price': {
    fontWeight: 700,
    fontSize: '8px',
    lineHeight: '10px'
  },
  'label-wrapper': {
    justifyContent: 'center'
  },
  'checkbox-input': {
    borderRadius: '50%',
    '&:checked': {
      background: '#000000',
      borderColor: '#000000'
    }
  },
  'checkbox-input__label-wrapper': {
    justifyContent: 'center'
  },
  'text__add-cart': {
    color: '#ffffff',
    fontSize: '10px',
    fontWeight: 400,
    lineHeight: '12px'
  },
  'text__add-cart--bold': {
    fontWeight: 700
  }
}))
