import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from "../context/providers";
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Catavia',
  description: 'Panaderia Artesanal',
}

export default function RootLayout({ children }) {
  return (
    <html className="html" lang="en">

      <body className='allPage '>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}