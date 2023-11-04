import ErrorPage from '@/components/errorPage'
import UserContextProvider from '@/context/CustomerContext/CustomerContext'
import OrderContextProvider from '@/context/OrderContext/OrderContext'
import ProductContextProvider from '@/context/ProductContext/ProductContext'
import AuthLayout from '@/layout/authLayout'
import RegisterLayout from '@/layout/registerLayout'
import LoginPage from '@/pages/login'
import OrderList from '@/pages/order/features/orderList'
import { MarketAnalytic, ProductAnalytic } from '@/pages/overview'
import { ProductCreateNew, ProductBaseThroughType } from '@/pages/products'
import ProductList from '@/pages/products/views/ProductList'
import RegisterPage from '@/pages/register'
import ListCustomer from '@/pages/users/features/listCustomer'
import { ORDER_STATUS } from '@/types/order'
import { MEMBERSHIP } from '@/types/user'
import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from './protectedRoute'

import AddCouponDetail from '@/pages/coupons/features/addCouponDetail'
import { default as AddCouponList } from '@/pages/coupons/features/addCouponList'
import CouponList from '@/pages/coupons/features/couponList'
import { ProductUpdate } from '@/pages/products/views/ProductUpdate'

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
            element: null,
            path: ''
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
              }
              // {
              //   path: '/users/register',
              //   element: <AddCustomer />
              // }
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
                path: '/products/:productType',
                element: <ProductBaseThroughType />
              },
              {
                path: '/products/:productType/:productSubType/:id',
                element: (
                  <ProductContextProvider mode={'update'}>
                    <ProductUpdate />
                  </ProductContextProvider>
                ),
              },
              {
                path: '/products/:productType/:productSubType/create-new',
                element: (
                  <ProductContextProvider mode={'create-new'}>
                    <ProductCreateNew />
                  </ProductContextProvider>
                )
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
                element: <CouponList />
              },
              {
                path: '/coupons',
                element: <AddCouponList />
              },
              {
                path: '/coupons/create',
                element: <AddCouponDetail />
              },
              {
                path: '/coupons/edit/:id',
                element: <AddCouponDetail type='edit' />
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
