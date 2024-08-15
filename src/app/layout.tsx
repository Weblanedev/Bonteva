import type { Metadata } from 'next'
import { AOSInit } from './components/Aos'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Faq from './components/Faq'

export const metadata: Metadata = {
  title: 'Bonteva',
  description: 'Our mission is to ensure that fresh and nutritious food reaches every corner of the globe.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: 'https://th.bing.com/th/id/OIP.EbaN0RzwMksdG9zfSWGUEQHaHa?rs=1&pid=ImgDetMain',
        href: 'https://th.bing.com/th/id/OIP.EbaN0RzwMksdG9zfSWGUEQHaHa?rs=1&pid=ImgDetMain',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: 'https://th.bing.com/th/id/OIP.EbaN0RzwMksdG9zfSWGUEQHaHa?rs=1&pid=ImgDetMain',
        href: 'https://th.bing.com/th/id/OIP.EbaN0RzwMksdG9zfSWGUEQHaHa?rs=1&pid=ImgDetMain',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AOSInit />
      <body>
        <Header></Header>
        {children}
        {/* <Faq></Faq> */}
        <Footer></Footer>
      </body>
    </html>
  )
}
