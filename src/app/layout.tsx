import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'studigo',
  description: '함께 성장하는 즐거움, studigo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  )
}
