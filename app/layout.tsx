import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Leonard Mutugi | Lead Android Engineer & Product Strategist',
  description: 'Portfolio of Leonard Mutugi, a Lead Android Engineer and Product Strategist with expertise in mobile development, system architecture, and technical leadership.',
  metadataBase: new URL('https://leonardmutugi.com'),
  keywords: ['Leonard Mutugi', 'Android Engineer', 'Product Strategy', 'Fintech', 'Civic Tech', 'Kenya', 'Africa'],
  authors: [{ name: 'Leonard Mutugi' }],
  openGraph: {
    title: 'Leonard Mutugi | Lead Android Engineer & Product Strategist',
    description: 'Portfolio of Leonard Mutugi, a Lead Android Engineer and Product Strategist with expertise in mobile development, system architecture, and technical leadership.',
    url: 'https://leonardmutugi.com',
    siteName: 'Leonard Mutugi Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leonard Mutugi | Lead Android Engineer & Product Strategist',
    description: 'Portfolio of Leonard Mutugi, a Lead Android Engineer and Product Strategist with expertise in mobile development, system architecture, and technical leadership.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 