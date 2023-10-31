import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Code Editor',
  description: 'A simple code editor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
