import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { MantineProvider } from '@mantine/core'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        colors: {
          'ocean-blue': [
            '#7AD1DD',
            '#5FCCDB',
            '#44CADC',
            '#2AC9DE',
            '#1AC2D9',
            '#11B7CD',
            '#09ADC3',
            '#0E99AC',
            '#128797',
            '#147885'
          ],
          dark: ['#f5f5f5', '#D9D9D9', '#E5E5E5', '#000']
        },
        fontFamily: 'Montserrat, sans-serif',
        fontFamilyMonospace: 'Montserrat, Courier, monospace',
        headings: { fontFamily: 'Montserrat, sans-serif' }
      }}
      withNormalizeCSS
      withGlobalStyles
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
)
