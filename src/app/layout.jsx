import { Inter } from 'next/font/google'
import './globals.css'
import {Providers} from "../context/nextui/providers";
import Footer from '@/components/Footer/Footer';
import Logo from '@/components/Header/sub/Logo/logo';
import Navbar from '@/components/Header/sub/Navbar/Navbar';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Catavia',
  description: 'Panaderia Artesanal',
}

export default function RootLayout({ children }) {
  return (
    <html className="html" lang="en">

      <body className="allPage">
        <Providers>
          <div>
            <Logo/>
            <Navbar/>
            {children}
          </div>

          <Footer/>

        </Providers>
      </body>

    </html>
  )
}
