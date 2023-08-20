import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '@/pages/login'
import ErrorPage from '@/components/errorPage'
import HomePage from '@/pages/home'
import ProtectedRoute from './protectedRoute'
import AuthLayout from '@/layout/authLayout'
import RegisterPage from '@/pages/register'
import RegisterLayout from '@/layout/registerLayout'
import { MarketAnalytic, ProductAnalytic } from '@/pages/overview'
import ListCustomer from '@/pages/users/features/listCustomer'
import UserContextProvider from '@/context/CustomerContext/CustomerContext'
import { MEMBERSHIP } from '@/types/user'
import OrderList from '@/pages/order/features/orderList'
import AddCustomer from '@/pages/users/features/addCustomer'
import { ProductCreateNew, ProductJuiceGrid } from '@/pages/products'
import { ORDER_STATUS } from '@/types/order'
import OrderContextProvider from '@/context/OrderContext/OrderContext'
import ProductList from '@/pages/products/views/ProductList'
import ProductContextProvider from '@/context/ProductContext/ProductContext'
import { ProductTypeEnum, JuiceType } from '@/pages/products/type'

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
            // children: [Auth
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
                    <ListCustomer membership='all' />
                  </UserContextProvider>
                )
              },
              {
                path: '/users/silver',
                element: (
                  <UserContextProvider>
                    <ListCustomer membership={MEMBERSHIP.SILVER} />
                  </UserContextProvider>
                )
              },
              {
                path: '/users/gold',
                element: (
                  <UserContextProvider>
                    <ListCustomer membership={MEMBERSHIP.GOLD} />
                  </UserContextProvider>
                )
              },
              {
                path: '/users/ruby',
                element: (
                  <UserContextProvider>
                    <ListCustomer membership={MEMBERSHIP.RUBY} />
                  </UserContextProvider>
                )
              },
              {
                path: '/users/register',
                element: <AddCustomer />
              }
            ]
          },
          {
            path: '/orders',
            children: [
              {
                path: '/orders/all',
                element: (
                  <OrderContextProvider>
                    <OrderList title='Tất cả đơn hàng' query='all' />
                  </OrderContextProvider>
                )
              },
              {
                path: '/orders/waiting',
                element: (
                  <OrderContextProvider>
                    <OrderList title='Chờ thanh toán' query={ORDER_STATUS.PAYMENTING} />
                  </OrderContextProvider>
                )
              },
              {
                path: '/orders/processing',
                element: (
                  <OrderContextProvider>
                    <OrderList title='Đang thực hiện' query={ORDER_STATUS.PREPARING} />
                  </OrderContextProvider>
                )
              },
              {
                path: '/orders/delivering',
                element: (
                  <OrderContextProvider>
                    <OrderList title='Đang giao' query={ORDER_STATUS.SHIPPING} />
                  </OrderContextProvider>
                )
              },
              {
                path: '/orders/done',
                element: (
                  <OrderContextProvider>
                    <OrderList title='Đã hoàn tất' query={ORDER_STATUS.PAID} />
                  </OrderContextProvider>
                )
              },
              {
                path: '/orders/cancel',
                element: (
                  <OrderContextProvider>
                    <OrderList title='Đã hủy' query={ORDER_STATUS.CANCEL} />
                  </OrderContextProvider>
                )
              }
            ]
          },
          {
            path: '/products',
            children: [
              {
                path: '/products/all',
                element: <ProductList title='Danh sách sản phẩm' query='all' />
              },
              {
                path: '/products/juice',
                element: <ProductJuiceGrid />
              },
              {
                path: '/products/juice/juice-glass/create-new',
                element: (
                  <ProductContextProvider>
                    <ProductCreateNew type={ProductTypeEnum.JUICE} subType={JuiceType.JUICE_GLASS} />
                  </ProductContextProvider>
                )
              },
              {
                path: '/products/juice/juice-bottled/create-new',
                element: (
                  <ProductContextProvider>
                    <ProductCreateNew type={ProductTypeEnum.JUICE} subType={JuiceType.JUICE_BOTTLED} />
                  </ProductContextProvider>
                )
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
