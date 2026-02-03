import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

const _lato = Lato({ 
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'Chocolat Restaurant | Santa Cruz Fine Dining',
  description: 'Real Food; Celebrating American Diversity. Fine dining restaurant in downtown Santa Cruz, CA. Open for dinner nightly with heated patio dining and pet-friendly atmosphere.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
