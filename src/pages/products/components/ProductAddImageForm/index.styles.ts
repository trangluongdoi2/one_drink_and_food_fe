import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  title: {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '17px',
    color: '#000000',
    marginBottom: '20px'
  },
  imageContainer: {
    background: '#ffffff',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 100px)',
    gridTemplateRows: '100px 100px',
    gap: '10px'
  },
  child: {
    background: '#f5f5f5f5',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  iconMenu: {
    position: 'absolute',
    top: '10px',
    left: '10px'
  },
  iconAdd: {
    width: '23.33px',
    height: '23.33px',
    borderRadius: '50%',
    'svg > path': {
      fill: '#c4c4c4c4'
    }
  },
  input: {
    display: 'none'
  }
}))
