import { MantineThemeOverride } from '@mantine/core'

export const mantineTheme: MantineThemeOverride = {
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
            borderColor: theme.colors.gray
            // backgroundColor: theme.colors.dark[3]
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
    },
    Paper: {
      styles: (theme) => ({
        root: {
          boxShadow: `1px 1px 10px ${theme.colors.dark[2]},
           -1px -1px 10px ${theme.colors.dark[2]}`
        }
      })
    }
  }
}
