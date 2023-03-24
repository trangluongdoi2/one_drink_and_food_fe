import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '@/pages/login'
import ErrorPage from '@/components/errorPage'
import HomePage from '@/pages/home'
import ProtectedRoute from './protectedRoute'
import AuthLayout from '@/layout/authLayout'
import RegisterPage from '@/pages/register'
import RegisterLayout from '@/layout/registerLayout'
import { MarketAnalytic, ProductAnalytic } from '@/pages/overview'

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <LoginPage />,
        path: '/login'
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <HomePage />,
            path: ''
            // children: [
            //   {
            //     element: <></>,
            //     path: `${FOLDERS_PATH}/:folderId`,
            //     children: [
            //       {
            //         element: <></>,
            //         path: 'note/:noteId'
            //       }
            //     ]
            //   }
            // ]
          },
          {
            path: '/overview',
            children: [
              {
                path: '/overview/market',
                element: <MarketAnalytic />
              },
              {
                path: '/overview/product',
                element: <ProductAnalytic />
              }
            ]
          },
          {
            path: '/users',
            children: [
              {
                path: '/users/list',
                element: <MarketAnalytic />
              },
              {
                path: '/users/silver',
                element: <MarketAnalytic />
              },
              {
                path: '/users/gold',
                element: <MarketAnalytic />
              },
              {
                path: '/users/ruby',
                element: <MarketAnalytic />
              },
              {
                path: '/users/register',
                element: <MarketAnalytic />
              }
            ]
          },
          {
            path: '/orders',
            children: [
              {
                path: '/orders/all',
                element: <MarketAnalytic />
              },
              {
                path: '/orders/waiting',
                element: <ProductAnalytic />
              },
              {
                path: '/orders/processing',
                element: <ProductAnalytic />
              },
              {
                path: '/orders/delivering',
                element: <ProductAnalytic />
              },
              {
                path: '/orders/done',
                element: <ProductAnalytic />
              },
              {
                path: '/orders/cancel',
                element: <ProductAnalytic />
              }
            ]
          },
          {
            path: '/products',
            children: [
              {
                path: '/products/all',
                element: <MarketAnalytic />
              },
              {
                path: '/products/juice',
                element: <ProductAnalytic />
              },
              {
                path: '/products/smoothy',
                element: <ProductAnalytic />
              },
              {
                path: '/products/yogurt',
                element: <ProductAnalytic />
              },
              {
                path: '/products/tea',
                element: <ProductAnalytic />
              },
              {
                path: '/products/coffee',
                element: <ProductAnalytic />
              },
              {
                path: '/products/other',
                element: <ProductAnalytic />
              }
            ]
          },
          {
            path: '/news',
            children: [
              {
                path: '/news/list',
                element: <MarketAnalytic />
              }
            ]
          },
          {
            path: '/coupons',
            children: [
              {
                path: '/coupons/list',
                element: <MarketAnalytic />
              }
            ]
          },
          {
            path: '/gifts',
            children: [
              {
                path: '/gifts/list',
                element: <MarketAnalytic />
              },
              {
                path: '/gifts/infor',
                element: <MarketAnalytic />
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
        path: '/register'
      }
    ]
  }
])
