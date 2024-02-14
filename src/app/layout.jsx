import { Inter } from 'next/font/google'
import './globals.css'
import {Providers} from "../context/providers";
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
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
      </style>

      <body>
        <Providers>

          <Logo/>
          <Navbar/>
          {children}
          <Footer/>

        </Providers>
      </body>
    </html>
  )
}
