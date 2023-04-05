import { createStyles, getStylesRef } from '@mantine/core'

export const useStyles = createStyles(() => ({
  container: {
    backgroundColor: '#f0f0f0',
    width: '300px',
    height: '380px',
    padding: '24px 25px 20px 25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    background: '#ffffff'
  },
  icon: {
    '> svg': {
      width: '100%',
      height: '100%'
    },
    '&:hover': {
      background: '#ffffff',
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
      borderRadius: '50%'
    }
  },
  container_mainTitle: {
    ref: getStylesRef('mainTitle'),
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '24px',
    color: '#000000'
  },
  container_childTitle: {
    ref: getStylesRef('childTitle'),
    fontWeight: 400,
    fontSize: '10px',
    lineHeight: '12px',
    color: '#000000'
  },
  container_title: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginTop: '18px',
    paddingLeft: '10px'
  },
  container_price: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginTop: '2px',
    paddingLeft: '10px'
  },
  price_text: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '20px',
    color: '#000000'
  },
  price_button: {
    width: '100px',
    height: '30px',
    background: 'linear-gradient(270deg, #000000 0%, #434343 100%)',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '50px'
  }
}))
