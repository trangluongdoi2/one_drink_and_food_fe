import './i18n/i18n'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { GlobalStyles } from './GlobalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  // </React.StrictMode>
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
          dark: ['#f5f5f5', '#D9D9D9', '#E5E5E5', '#C4C4C4', '#000', '#000', '#000', '#000']
        },
        fontFamily: 'Montserrat, sans-serif',
        fontFamilyMonospace: 'Montserrat, Courier',
        headings: { fontFamily: 'Montserrat, sans-serif' },
        components: {
          Breadcrumbs: {
            styles: () => ({
              breadcrumb: {
                color: '#C4C4C4',
                textDecoration: 'unset !important',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '24px',
                cursor: 'pointer'
              },
              separator: {
                margin: '0 1px',
                color: '#C4C4C4',
                fontSize: '20px'
              }
            })
          },
          TextInput: {
            styles: (theme) => ({
              input: {
                backgroundColor: theme.colors.dark[3],
                '&:focus-within': {
                  borderColor: theme.colors.gray,
                  backgroundColor: theme.colors.dark[3]
                },
                fontSize: 12
              }
            })
          },
          PasswordInput: {
            styles: (theme) => ({
              input: {
                backgroundColor: theme.colors.dark[0]
              },
              '.mantine-PasswordInput-input': {
                '&:focus-within': {
                  borderColor: theme.colors.gray
                }
              }
            })
          },
          ActionIcon: {
            styles: () => ({
              root: {
                // transform: 'translateY(0) !important',
                '&:hover': {
                  background: 'transparent'
                }
              }
            })
          },
          Checkbox: {
            styles: (theme) => ({
              input: {
                backgroundColor: theme.colors.dark[0]
              }
            })
          }
        }
      }}
      withNormalizeCSS
      withGlobalStyles
    >
      <GlobalStyles />
      <Notifications />
      <App />
    </MantineProvider>
  </ModalsProvider>
)
