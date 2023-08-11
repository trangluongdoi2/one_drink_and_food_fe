import { AppContext } from './context/AppContext'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import ErrorBoundary, { ErrorFallback } from './components/errorBoundary'
import '@/firebase/config'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './configs/react-query'
function App() {
  return (
    <ErrorBoundary>
      <AppContext>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} fallbackElement={<ErrorFallback />} />
        </QueryClientProvider>
      </AppContext>
    </ErrorBoundary>
  )
}

export default App
