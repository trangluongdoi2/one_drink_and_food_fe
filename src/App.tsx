import { AppContext } from './context/AppContext'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import ErrorBoundary, { ErrorFallback } from './components/errorBoundary'
import '@/firebase/config'
function App() {
  return (
    <ErrorBoundary>
      <AppContext>
        <RouterProvider router={router} fallbackElement={<ErrorFallback />} />
      </AppContext>
    </ErrorBoundary>
  )
}

export default App
