import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Horizon Valley Services LLC - Full-Service Property Care & Maintenance | Bay Area',
  description: 'Comprehensive property services serving San Francisco, Marin, Sonoma, and Mendocino counties. Expert power washing, window cleaning, gutter cleaning, junk removal, moving services, and tree trimming. Local, reliable service throughout the Bay Area and Northern California. Call (559) 960-2749 for a free quote.',
  keywords: 'property services, power washing, window cleaning, gutter cleaning, junk removal, moving services, tree trimming, San Francisco, Marin County, Sonoma County, Mendocino County, Bay Area services, Northern California, wine country, residential services, commercial services',
  authors: [{ name: 'Horizon Valley Services LLC' }],
  creator: 'Horizon Valley Services LLC',
  publisher: 'Horizon Valley Services LLC',
  metadataBase: new URL('https://horizonvalleycleaning.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Horizon Valley Services LLC - Full-Service Property Care',
    description: 'Comprehensive property services serving San Francisco, Marin, Sonoma, and Mendocino counties. Power washing, window cleaning, gutter cleaning, junk removal, moving, and tree trimming.',
    url: 'https://horizonvalleycleaning.com',
    siteName: 'Horizon Valley Services LLC',
    images: [
      {
        url: '/HV_logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Horizon Valley Services LLC Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Horizon Valley Services LLC - Full-Service Property Care',
    description: 'Power washing, window cleaning, gutter cleaning, junk removal, moving, and tree trimming serving the Bay Area and Northern California. Call (559) 960-2749 for a free quote.',
    images: ['/HV_logo.jpeg'],
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
  icons: {
    icon: '/HV_icon.jpeg',
    shortcut: '/HV_icon.jpeg',
    apple: '/HV_icon.jpeg',
  },
  verification: {
    // Add Google Search Console verification here when available
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
