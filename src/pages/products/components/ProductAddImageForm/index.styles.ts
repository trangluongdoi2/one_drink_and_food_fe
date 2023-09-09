import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  containerDisabled: {
    opacity: '0.3',
    pointerEvents: 'none'
  },
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
    gridTemplateRows: 'auto auto',
    gap: '10px'
  },
  child: {
    background: '#f5f5f5f5',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100px',
    height: '100px'
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
  add__zone: {
    borderRadius: '50%',
    border: 'none',
    background: 'transparent'
  },
  image_preview: {
    position: 'absolute',
    top: 0,
    objectFit: 'contain',
    zIndex: 2,
    borderRadius: '10px'
  },
  image_detail: {
    borderRadius: '10px',
    pointerEvents: 'none'
  },
  icon__remove: {
    position: 'absolute',
    zIndex: 3,
    right: 5,
    top: 5,
    background: '#ffffff'
  }
}))
