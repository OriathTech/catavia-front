import './globals.css'
import { Providers } from "../context/providers";

import Footer from '@/app/components/Footer/Footer';
import Header from './components/Header/Header';

import {heebo, dancing, merri} from '@/utils/fonts'

export const metadata = {
  title: 'Catavia',
  description: 'Panaderia Artesanal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${heebo.variable} ${dancing.variable} ${merri.variable}`}>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}