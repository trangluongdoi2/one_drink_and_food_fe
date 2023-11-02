import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react'
import { IContextProviderProps } from '@/types/context'
import { ProductState, ProductTypeAction } from '@/reducer/product/type'
import { productReducer, initinalState as initialProductState } from '@/reducer/product'
import { useGetProductDetail } from '@/pages/products/composables/useGetProductDetail'
import { Loader } from '@mantine/core'
import { setInitProductData } from '@/reducer/product/action'
// import { delay } from 'lodash'

interface ProductContextDefault extends ProductState {
  dispatch: React.Dispatch<ProductTypeAction>
}

const initialProductContext: ProductContextDefault = {
  ...initialProductState,
  dispatch: () => null
}

const ProductContext = createContext(initialProductContext)

const ProductContextProvider = ({ children, mode }: IContextProviderProps) => {
  if (mode === 'create-new') {
    // @ts-ignore
    const [state, dispatch] = useReducer(productReducer, initialProductState)
    const value = useMemo(() => ({ ...state, dispatch }), [state])
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  }

  const { productDetails, isFetching } = useGetProductDetail()
  // @ts-ignore
  const [state, dispatch] = useReducer(productReducer, initialProductState)
  const value = useMemo(() => ({ ...state, dispatch }), [state])

  useEffect(() => {
    if (productDetails && !isFetching) {
      console.log(productDetails, 'productDetails...')
      dispatch(setInitProductData({ ...productDetails }))
    }
  }, [productDetails, isFetching])

  return isFetching && !!productDetails ? (
    <Loader>{children}</Loader>
  ) : (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}

export const useProductContext = () => useContext(ProductContext)

export default ProductContextProvider
