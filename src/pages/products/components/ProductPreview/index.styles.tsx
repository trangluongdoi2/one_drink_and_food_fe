import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container__image: {
    gridArea: 'image'
  },
  container__overview: {
    gridArea: 'overview'
  },
  container__info: {
    gridArea: 'info'
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridTemplateAreas: `
      'image overview'
      'info info'
    `
  }
}))
