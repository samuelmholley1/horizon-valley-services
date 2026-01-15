import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-horizon-black text-gray-300 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-horizon-white font-bold text-lg mb-4">Horizon Valley Services LLC</h3>
            <p className="text-sm text-gray-400 mb-4">
              Professional exterior cleaning and maintenance services for the Bay Area.
            </p>
            <p className="text-sm text-gray-400">
              Family-owned • Locally operated
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-horizon-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-horizon-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-horizon-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-horizon-white transition-colors">
                  Get Free Quote
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-horizon-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-horizon-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-horizon-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:5599602749" className="hover:text-horizon-white transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (559) 960-2749
                </a>
              </li>
              <li>
                <a href="mailto:owners@horizonvalleycleaning.com" className="hover:text-horizon-white transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  owners@horizonvalleycleaning.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  Serving San Francisco, Marin, Sonoma & Mendocino Counties
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Horizon Valley Services LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
