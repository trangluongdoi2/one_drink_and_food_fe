import { createStyles } from '@mantine/core'

export const useStyles = createStyles(() => ({
  tab: {
    display: 'flex',
    justifyContent: 'space-between'
    // boxShadow: activeTab === value ? `0px 0px 20px rgba(0, 0, 0, 0.1)` : ''
  },
  shadow: {
    boxShadow: `0px 0px 20px rgba(0, 0, 0, 0.1)`
  }
}))
