import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '@/pages/login'
import ErrorPage from '@/components/errorPage'
import HomePage from '@/pages/home'
import ProtectedRoute from './protectedRoute'
import AuthLayout from '@/layout/authLayout'
import RegisterPage from '@/pages/register'
import RegisterLayout from '@/layout/registerLayout'
import { MarketAnalytic, ProductAnalytic } from '@/pages/overview'
import UsersList from '@/pages/users/customerList'
import UserContextProvider from '@/context/CustomerContext/CustomerContext'
import { MEMBERSHIP } from '@/types/user'
import OrderList from '@/pages/order/orderList'
import AddCustomerPage from '@/pages/users/addCustomer'
import { ProductCreateNewForm, ProductJuiceGrid } from '@/pages/products'

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
                element: (
                  <UserContextProvider>
                    <UsersList membership='all' />
                  </UserContextProvider>
                )
              },
              {
                path: '/users/silver',
                element: (
                  <UserContextProvider>
                    <UsersList membership={MEMBERSHIP.SILVER} />
                  </UserContextProvider>
                )
              },
              {
                path: '/users/gold',
                element: (
                  <UserContextProvider>
                    <UsersList membership={MEMBERSHIP.GOLD} />
                  </UserContextProvider>
                )
              },
              {
                path: '/users/ruby',
                element: (
                  <UserContextProvider>
                    <UsersList membership={MEMBERSHIP.RUBY} />
                  </UserContextProvider>
                )
              },
              {
                path: '/users/register',
                element: <AddCustomerPage />
              }
            ]
          },
          {
            path: '/orders',
            children: [
              {
                path: '/orders/all',
                element: <OrderList title='Tất cả đơn hàng' />
              },
              {
                path: '/orders/waiting',
                element: <OrderList title='Chờ thanh toán' />
              },
              {
                path: '/orders/processing',
                element: <OrderList title='Đang thực hiện' />
              },
              {
                path: '/orders/delivering',
                element: <OrderList title='Đang giao' />
              },
              {
                path: '/orders/done',
                element: <OrderList title='Đã hoàn tất' />
              },
              {
                path: '/orders/cancel',
                element: <OrderList title='Đã hủy' />
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
                element: <ProductJuiceGrid />,
                children: [
                  {
                    path: '/products/juice/new',
                    element: <ProductCreateNewForm />
                  }
                ]
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
