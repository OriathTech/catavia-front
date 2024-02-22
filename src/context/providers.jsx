'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ProductProvider } from './products/products'
import { SessionProvider } from './session/session'
import { CartProvider } from './cart/cart'
import { UsersProvider } from './users/users'
import { ElementsProvider } from './elements/elements'


export function Providers({ children }) {
  return (
    <NextUIProvider>
      <ProductProvider>
        <SessionProvider>
          <CartProvider>
            <UsersProvider>
              <ElementsProvider>
                {children}
              </ElementsProvider>
            </UsersProvider>
          </CartProvider>
        </SessionProvider>
      </ProductProvider>
    </NextUIProvider>
  )
}
