import type { Metadata } from 'next'
import localFont from 'next/font/local'

import Header from '@/shared/ui/header/Header'
import Footer from '@/shared/ui/footer/Footer'
import './globals.css'
import { Toaster } from '@/shared/ui/sonner'

export const metadata: Metadata = {
  title: 'StudiGo',
  description: '함께 성장하는 즐거움, StudiGo',
}

const pretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
})

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="ko" className={`${pretendard.variable} antialiased`}>
      <body className="font-pretendard flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Toaster position="top-right" duration={1500} />
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
