'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user already consented
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
      
      // Auto-dismiss after 10 seconds (implied consent under CCPA)
      const timer = setTimeout(() => {
        localStorage.setItem('cookie-consent', 'accepted')
        setShowBanner(false)
      }, 10000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-2xl p-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🍪</span>
          <div className="flex-1">
            <p className="text-sm text-gray-300 mb-3">
              We use cookies to enhance your experience. By continuing, you accept our use of cookies.
            </p>
            <div className="flex gap-2 text-xs">
              <Link 
                href="/privacy" 
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Privacy Policy
              </Link>
              <button
                onClick={handleAccept}
                className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded font-medium transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
          <button
            onClick={handleAccept}
            className="text-gray-400 hover:text-white text-xl leading-none"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}
