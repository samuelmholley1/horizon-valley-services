import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Horizon Valley Services LLC - Professional Exterior Cleaning & Maintenance',
  description: 'Professional exterior cleaning and maintenance services serving Mendocino, Lake, and Sonoma counties. Trusted local experts in Ukiah, CA.',
  keywords: 'exterior cleaning, maintenance, Ukiah, Mendocino County, Lake County, Sonoma County, pressure washing, cleaning services',
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
