import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Horizon Valley Services LLC - Professional Exterior Cleaning & Maintenance | Ukiah, CA',
  description: 'Professional exterior cleaning and maintenance services serving Mendocino, Lake, and Sonoma counties. Expert pressure washing, gutter cleaning, window washing, and property maintenance. Local, reliable service in Northern California wine country. Call (559) 960-2749 for a free quote.',
  keywords: 'exterior cleaning, pressure washing, gutter cleaning, window washing, property maintenance, Ukiah CA, Mendocino County, Lake County, Sonoma County, Northern California, wine country services, residential cleaning, commercial cleaning',
  authors: [{ name: 'Horizon Valley Services LLC' }],
  creator: 'Horizon Valley Services LLC',
  publisher: 'Horizon Valley Services LLC',
  metadataBase: new URL('https://horizonvalleycleaning.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Horizon Valley Services LLC - Exterior Cleaning & Maintenance',
    description: 'Professional exterior cleaning services serving Mendocino, Lake, and Sonoma counties. Pressure washing, gutter cleaning, window washing, and more. Local experts you can trust.',
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
    title: 'Horizon Valley Services LLC - Exterior Cleaning Experts',
    description: 'Professional exterior cleaning and maintenance serving Northern California wine country. Call (559) 960-2749 for a free quote.',
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
