import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'
import { Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
interface ErrorBoundaryProps {
  children: JSX.Element
}

export const ErrorFallback = () => {
  const navigate = useNavigate()
  const handleBackHome = () => navigate('/')

  return (
    <div role='alert'>
      <p>Something went wrong : </p>
      <Button onClick={handleBackHome}>Back to Home</Button>
      <span>
        Copyright &copy; {`${new Date().getFullYear()}`} <span>One Drink and Food</span>
      </span>
    </div>
  )
}

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  return <ReactErrorBoundary FallbackComponent={ErrorFallback}>{children}</ReactErrorBoundary>
}

export default ErrorBoundary
