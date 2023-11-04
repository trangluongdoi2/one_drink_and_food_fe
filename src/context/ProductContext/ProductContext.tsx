import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react'
import { IContextProviderProps } from '@/types/context'
import { ProductState, ProductTypeAction } from '@/reducer/product/type'
import { productReducer, initinalState as initialProductState } from '@/reducer/product'
import { useGetProductDetail } from '@/pages/products/composables/useGetProductDetail'
import { Box, Flex, Loader, Paper, Skeleton } from '@mantine/core'
import { setInitProductData } from '@/reducer/product/action'

const styleLoader = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(100% - 60px)'
}

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
      dispatch(setInitProductData({ ...productDetails }))
    }
  }, [productDetails, isFetching])

  return isFetching && !productDetails ? (
    <Box sx={styleLoader}>
      <Flex direction={'row'} gap={20} p={40} sx={{ width: '100%', height: '100%' }}>
        <Skeleton radius='xs'></Skeleton>
        <Skeleton radius='xs'></Skeleton>
      </Flex>
    </Box>
  ) : (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}

export const useProductContext = () => useContext(ProductContext)

export default ProductContextProvider
