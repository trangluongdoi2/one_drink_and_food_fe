import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    borderRadius: '5px',
    border: '1px solid #c4c4c4'
  },
  container__content: {
    padding: '9px 14px'
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
    width: '12px',
    height: '12px',
    '&:checked': {
      background: '#ffffff',
      borderColor: '#000000'
    },
    '&:checked+.___ref-icon': {
      color: '#000000',
      background: '#000000',
      transform: 'scale(0.5) '
    }
  },
  'checkbox-inner': {
    width: '12px',
    height: '12px',
    borderRadius: '50%'
  },
  'radio-input': {
    width: '12px',
    height: '12px',
    '&:checked': {
      background: '#ffffff',
      borderColor: '#000000'
    },
    '&:checked+.___ref-icon': {
      transform: 'scale(0.75)'
    }
  },
  'radio-inner': {
    'svg > path': {
      fill: '#000000'
    }
  },
  'checkbox-input__label-wrapper': {
    justifyContent: 'center'
  }
}))
