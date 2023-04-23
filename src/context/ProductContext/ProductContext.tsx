import React, { createContext, useContext, useMemo, useReducer } from 'react'
import { IContextProviderProps } from '@/types/context'
import { ProductState, ProductTypeAction } from '@/reducer/product/type'
import { productReducer, initinalState as initialProductState } from '@/reducer/product'

interface ProductContextDefault extends ProductState {
  dispatch: React.Dispatch<ProductTypeAction>
}

const initialProductContext: ProductContextDefault = {
  ...initialProductState,
  dispatch: () => null
}

const ProductContext = createContext(initialProductContext)

const ProductContextProvider = ({ children }: IContextProviderProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [state, dispatch] = useReducer(productReducer, initialProductState)

  const value = useMemo(() => ({ ...state, dispatch }), [state])

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export const useProductContext = () => useContext(ProductContext)

export default ProductContextProvider
