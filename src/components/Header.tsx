'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-horizon-black shadow-2xl border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <div className="w-12 h-12 relative flex-shrink-0">
              <Image 
                src="/HV_icon.png" 
                alt="Horizon Valley Services Icon" 
                fill
                className="object-contain"
              />
            </div>
            <img 
              src="/HV_logo_text.png" 
              alt="Horizon Valley Services" 
              className="h-10 w-auto"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/#services" className="text-gray-300 hover:text-horizon-white font-medium transition-colors">
              Services
            </Link>
            <Link href="/#team" className="text-gray-300 hover:text-horizon-white font-medium transition-colors">
              Team
            </Link>
            <Link href="/#contact" className="text-gray-300 hover:text-horizon-white font-medium transition-colors">
              Contact
            </Link>
            <Link 
              href="/quote"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors shadow-lg shadow-blue-600/50"
            >
              Get Free Quote →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-horizon-white p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-horizon-white font-medium transition-colors px-4 py-2"
              >
                Services
              </Link>
              <Link 
                href="/#team"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-horizon-white font-medium transition-colors px-4 py-2"
              >
                Team
              </Link>
              <Link 
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-horizon-white font-medium transition-colors px-4 py-2"
              >
                Contact
              </Link>
              <Link
                href="/quote"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center mx-4 shadow-lg shadow-blue-600/50"
              >
                Get Free Quote →
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
