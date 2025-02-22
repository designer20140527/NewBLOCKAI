import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BLOCKAI', // 修改网页标题为 BLOCKAI
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* 设置 favicon */}
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}