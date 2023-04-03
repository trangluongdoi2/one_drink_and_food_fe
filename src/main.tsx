import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalsProvider>
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
            dark: ['#f5f5f5', '#D9D9D9', '#E5E5E5', '#C4C4C4']
          },
          fontFamily: 'Montserrat, sans-serif',
          fontFamilyMonospace: 'Montserrat, Courier',
          headings: { fontFamily: 'Montserrat, sans-serif' }
        }}
        withNormalizeCSS
        withGlobalStyles
      >
        <Notifications />
        <App />
      </MantineProvider>
    </ModalsProvider>
  </React.StrictMode>
)
