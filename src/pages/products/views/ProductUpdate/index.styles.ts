import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    padding: '40px',
    background: '#f5f5f5f5',
    overflowX: 'hidden'
  },
  containerGrid: {
    display: 'grid',
    gridTemplateColumns: '540px auto',
    gridTemplateAreas: `
      'form preview';
      'form .'; 
    `,
    gap: '20px',
    background: 'transparent'
  },
  container__form: {
    gridArea: 'form'
  },
  container__preview: {
    gridArea: 'preview'
  },
  container__button: {
    width: '100%',
    height: '40px',
    borderRadius: '10px',
    background: '#000000',
    color: '#ffffff',
    textTransform: 'uppercase',
    marginTop: '20px',
    '&:hover': {
      background: '#000000 !important'
    }
  }
}))
