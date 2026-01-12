import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

export const metadata: Metadata = {
  title: 'StudiGo',
  description: '함께 성장하는 즐거움, StudiGo',
}

const pretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
