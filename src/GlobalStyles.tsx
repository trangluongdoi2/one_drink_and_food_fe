import { Global } from '@mantine/core'

export const GlobalStyles = () => {
  return (
    <Global
      styles={() => ({
        '*, *::before, *::after': { boxSizing: 'border-box' },
        '.create-new-product-card__container': {
          background: '#ffffff',
          borderRadius: '10px',
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
          padding: '40px'
        }
      })}
    />
  )
}
