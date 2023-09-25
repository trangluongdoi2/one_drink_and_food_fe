import './i18n/i18n'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { GlobalStyles } from './GlobalStyles'
import { mantineTheme } from './configs/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  // </React.StrictMode>
  <ModalsProvider>
    <MantineProvider theme={mantineTheme} withNormalizeCSS withGlobalStyles>
      <GlobalStyles />
      <Notifications />
      <App />
    </MantineProvider>
  </ModalsProvider>
)
