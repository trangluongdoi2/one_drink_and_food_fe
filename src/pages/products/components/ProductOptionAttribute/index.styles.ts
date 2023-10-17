import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    padding: '8px 40px',
    marginBottom: '16px'
  },
  ['container__input']: {
    minHeight: '40px',
    maxHeight: '80px'
  },
  ['container--focused']: {
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)'
  },
  ['container__input--deactive']: {
    opacity: 0.5,
    pointerEvents: 'none'
  },
  border: {
    width: '460px',
    height: '1px',
    background: '#F5F5F5'
  },
  title: {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '17px',
    color: '#000000',
    textTransform: 'uppercase'
  },
  toggleIcon: {
    width: '40px',
    height: '20px'
  },
  input: {
    background: '#f5f5f5f5'
  },
  input__title: {
    height: '28px',
    minHeight: '28px',
    maxHeight: '28px',
    maxWidth: '200px',
    borderRadius: '3px',
    textTransform: 'uppercase',
    padding: '1px 2px',
    fontWeight: 700
  },
  rightSection: {
    display: 'none'
  }
}))
