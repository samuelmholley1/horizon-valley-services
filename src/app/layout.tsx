import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Horizon Valley Services LLC - Full-Service Property Care & Maintenance | Bay Area',
  description: 'Comprehensive property services serving San Francisco, Marin, Sonoma, and Mendocino counties. Expert power washing, window cleaning, gutter cleaning, junk removal, moving services, and tree trimming. Local, reliable service throughout the Bay Area and Northern California. Call (707) 972-4525 for a free quote.',
  keywords: 'property services, power washing, window cleaning, gutter cleaning, junk removal, moving services, tree trimming, San Francisco, Marin County, Sonoma County, Mendocino County, Bay Area services, Northern California, wine country, residential services, commercial services',
  authors: [{ name: 'Horizon Valley Services LLC' }],
  creator: 'Horizon Valley Services LLC',
  publisher: 'Horizon Valley Services LLC',
  metadataBase: new URL('https://horizonvalleycleaning.com'),
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
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
        url: '/HV_logo.png',
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
    description: 'Power washing, window cleaning, gutter cleaning, junk removal, moving, and tree trimming serving the Bay Area and Northern California. Call (707) 972-4525 for a free quote.',
    images: ['/HV_logo.png'],
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
    icon: [
      { url: '/HV_icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/HV_icon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/HV_icon.png',
    apple: [
      { url: '/HV_icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/HV_icon.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/HV_icon.png', sizes: '512x512', type: 'image/png' },
    ],
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
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/HV_icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/HV_icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
