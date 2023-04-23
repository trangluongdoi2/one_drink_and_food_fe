import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    padding: '40px',
    background: '#f5f5f5f5'
  },
  containerGrid: {
    display: 'grid',
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
  }
}))
