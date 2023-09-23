import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react'
import { IContextProviderProps } from '@/types/context'
import { ProductState, ProductTypeAction } from '@/reducer/product/type'
import { productReducer, initinalState as initialProductState } from '@/reducer/product'
import ProductsApi from '@/pages/products/api/product'
import { useParams } from 'react-router-dom'

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

  const { id } = useParams()
  const productApi = new ProductsApi()
  // @ts-ignore
  const [state, dispatch] = useReducer(productReducer, initialProductState)
  const value = useMemo(() => ({ ...state, dispatch }), [state])
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  // productApi.getAllProducts().then((result: any) => {
  //   console.log(result, 'result...')
  // })
  // productApi.getProductDetails(id as string).then((result: any) => {
  //   // @ts-ignore
  //   const [state, dispatch] = useReducer(productReducer, result)
  //   const value = useMemo(() => ({ ...state, dispatch }), [state])
  //   return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  // })
  // @ts-ignore
}

export const useProductContext = () => useContext(ProductContext)

export default ProductContextProvider
