import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '@/pages/login'
import { HOME_PATH, LOGIN_PATH, REGISTER_PATH, FOLDERS_PATH } from '@/constants/routes'
import ErrorPage from '@/components/errorPage'
import HomePage from '@/pages/home'
import ProtectedRoute from './protectedRoute'
import AuthLayout from '@/layout/authLayout'
import RegisterPage from '@/pages/register'
import RegisterLayout from '@/layout/registerLayout'
import NoteList from '@/components/noteList'
import Note from '@/components/noteList/note'

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <LoginPage />,
        path: LOGIN_PATH
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <HomePage />,
            path: HOME_PATH,
            children: [
              {
                element: <NoteList />,
                path: `${FOLDERS_PATH}/:folderId`,
                children: [
                  {
                    element: <Note />,
                    path: 'note/:noteId'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    element: <RegisterLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <RegisterPage />,
        path: REGISTER_PATH
      }
    ]
  }
])
