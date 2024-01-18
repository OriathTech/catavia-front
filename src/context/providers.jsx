// app/providers.jsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ProductProvider } from './products/products'
import { SessionProvider } from './session/session'
import { CartProvider } from './cart/cart'
import { UsersProvider } from './users/users'
import { IngredientsProvider } from './ingredients/ingredients'
import { ExtrasProvider } from './extras/extras'

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <ProductProvider>
        <SessionProvider>
          <CartProvider>
            <UsersProvider>
              <IngredientsProvider>
                <ExtrasProvider>
                  {children}
                </ExtrasProvider>
              </IngredientsProvider>
            </UsersProvider>
          </CartProvider>
        </SessionProvider>
      </ProductProvider>
    </NextUIProvider>
  )
}
