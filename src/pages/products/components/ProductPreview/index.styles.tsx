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
    gridTemplateColumns: '225px 50%',
    // gridTemplateColumns: '50% 50%',
    gridTemplateAreas: `
      'image overview'
      'info info'
    `,
    columnGap: '30px'
  }
}))
