'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    address: '',
    description: '',
    callbackTime: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // Load Calendly script and handle skeleton loader
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = false // Load synchronously to ensure Calendly object exists
    document.head.appendChild(script)

    // Initialize Calendly after script loads
    script.onload = () => {
      const skeleton = document.getElementById('skeleton-loader')
      const embedDiv = document.getElementById('calendly-embed')
      
      if (skeleton && embedDiv) {
        // Poll for iframe to load and then hide skeleton
        const poll = () => {
          const iframe = embedDiv.querySelector('iframe')
          if (!iframe) {
            requestAnimationFrame(poll)
            return
          }
          iframe.addEventListener('load', () => {
            skeleton.remove()
          })
        }
        poll()
      }
    }

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service";
    }
    
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      // Submit to API
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ 
        submit: "Something went wrong. Please try again or call us at (707) 972-4525." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitSuccess) {
    return (
      <main className="min-h-screen bg-horizon-black">
        <Header />

        {/* Success Message */}
        <div className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gray-900 p-12 rounded-xl shadow-lg border border-gray-800">
              <div className="w-20 h-20 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-horizon-white mb-4">Thank You!</h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We&#39;ve received your quote request and will get back to you within 24 hours. 
                We look forward to serving you!
              </p>
              <div className="space-y-4">
                <p className="text-gray-400">
                  Need immediate assistance?<br />
                  <a href="tel:7079724525" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
                    (707) 972-4525
                  </a>
                </p>
                <Link 
                  href="/"
                  className="inline-block bg-blue-600 text-horizon-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-600/30"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-horizon-black">
      {/* Skeleton Loader CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .skeleton-shape {
          position: relative;
          overflow: hidden;
          background: linear-gradient(
            45deg,
            rgba(37, 99, 235, 0.1) 0%,
            rgba(37, 99, 235, 0.25) 50%,
            rgba(37, 99, 235, 0.1) 100%
          );
        }
        
        .skeleton-shape::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(37, 99, 235, 0.1) 50%,
            transparent 70%
          );
          animation: skeleton-shimmer 3s infinite ease-in-out;
        }
        
        @keyframes skeleton-shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .calendly-placeholder {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-height: 700px;
        }
        
        #calendly-embed {
          min-width: 220px;
          width: 100%;
        }
      ` }} />

      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-horizon-black text-horizon-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Get Your Free Quote</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Schedule a consultation or fill out our form - we&#39;ll provide a detailed quote tailored to your needs
          </p>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-12 px-4 bg-horizon-charcoal">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 p-8 md:p-12 rounded-xl shadow-lg border border-gray-800">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-horizon-white mb-4">
                Schedule a Consultation Call
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Pick a time that works for you. We&#39;ll discuss your needs, answer questions, and provide accurate pricing.
              </p>
            </div>
            
            {/* Calendly Embed Container with Skeleton Loader */}
            <div className="calendly-placeholder relative min-h-[700px]">
              {/* Skeleton Loader */}
              <div id="skeleton-loader" className="absolute inset-0 z-10 flex flex-col gap-2 p-6">
                {/* Header */}
                <div className="skeleton-header mb-4">
                  <div className="skeleton-shape h-7 w-1/3 bg-gradient-to-r from-gray-800 to-gray-700 rounded"></div>
                </div>
                
                {/* Month Navigation */}
                <div className="skeleton-month-nav flex justify-between items-center mb-5 px-2">
                  <div className="skeleton-nav-arrow w-4 h-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 opacity-20"></div>
                  <div className="skeleton-shape h-5 w-1/4 bg-gradient-to-r from-gray-800 to-gray-700 opacity-20 rounded"></div>
                  <div className="skeleton-nav-arrow w-4 h-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 opacity-20"></div>
                </div>
                
                {/* Weekdays */}
                <div className="skeleton-weekdays grid grid-cols-7 gap-1 mb-2 px-1">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="skeleton-weekday h-2 w-3/4 mx-auto bg-gradient-to-r from-gray-700 to-gray-800 opacity-25 rounded"></div>
                  ))}
                </div>
                
                {/* Calendar Grid */}
                <div className="skeleton-calendar-grid grid grid-cols-7 gap-1 flex-grow px-1">
                  {Array.from({ length: 42 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`skeleton-date-box h-4 rounded border relative overflow-hidden ${
                        i % 7 === 2 || i % 7 === 5 
                          ? 'bg-gradient-to-br from-blue-600/8 to-blue-600/4 border-blue-600/15' 
                          : 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/8'
                      }`}
                    >
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600/10 to-transparent animate-pulse"
                        style={{ 
                          animation: `shimmer 3s infinite ease-in-out ${i * 0.1}s`,
                          left: '-100%',
                          animationName: 'shimmer'
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
                
                {/* Footer */}
                <div className="skeleton-footer mt-7 px-2">
                  <div className="skeleton-shape h-3 w-full bg-gradient-to-r from-gray-700 to-gray-800 opacity-20 rounded"></div>
                </div>
              </div>

              {/* Calendly Embed - Live Widget */}
              <div 
                id="calendly-embed"
                className="calendly-inline-widget" 
                data-url="https://calendly.com/owners-horizonvalleycleaning/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                data-resize="true"
                style={{ minWidth: '320px', height: '700px', width: '100%' }}
              />
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Can&#39;t find a time that works? <a href="tel:7079724525" className="font-semibold text-blue-400 hover:underline">Call us at (707) 972-4525</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Fallback Section */}
      <section className="py-12 px-4 bg-horizon-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-horizon-white mb-4">
              Not Ready to Schedule?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Fill out this form and we&#39;ll call you back at your convenience
            </p>
          </div>

          <div className="bg-gray-900 p-8 md:p-12 rounded-xl shadow-lg border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                className={`w-full px-4 py-3 border rounded-lg bg-gray-800 text-horizon-white focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                  errors.name ? 'border-red-500' : 'border-gray-700'
                }`}
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: '' });
                }}
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-horizon-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="you@example.com"
                className={`w-full px-4 py-3 border rounded-lg bg-gray-800 text-horizon-white focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-700'
                }`}
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-300 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition bg-gray-800 text-horizon-white"
                  >
                    <option value="">Select a service</option>
                    <option value="power-washing">Power Washing</option>
                    <option value="window-cleaning">Window Cleaning</option>
                    <option value="gutter-cleaning">Gutter Cleaning</option>
                    <option value="junk-removal">Junk Removal</option>
                    <option value="moving">Moving Services</option>
                    <option value="tree-trimming">Tree Trimming</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">
                Property Address *
              </label>
              <input
                type="text"
                id="address"
                required
                placeholder="123 Main St, City, CA 94XXX"
                className={`w-full px-4 py-3 border rounded-lg bg-gray-800 text-horizon-white focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                  errors.address ? 'border-red-500' : 'border-gray-700'
                }`}
                value={formData.address}
                onChange={(e) => {
                  setFormData({ ...formData, address: e.target.value });
                  if (errors.address) setErrors({ ...errors, address: '' });
                }}
              />
              {errors.address && <p className="text-red-400 text-sm mt-1">{errors.address}</p>}
            </div>              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-300 mb-2">
                  Brief Description of Work Needed
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition resize-none bg-gray-800 text-horizon-white"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div>
                <label htmlFor="callbackTime" className="block text-sm font-semibold text-gray-300 mb-2">
                  Best Time to Call Back
                </label>
                <select
                  id="callbackTime"
                  name="callbackTime"
                  value={formData.callbackTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition bg-gray-800 text-horizon-white"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (8am - 12pm)</option>
                  <option value="afternoon">Afternoon (12pm - 5pm)</option>
                  <option value="evening">Evening (5pm - 7pm)</option>
                  <option value="anytime">Anytime</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-horizon-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-600/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              </button>

              <p className="text-sm text-gray-400 text-center">
                We&#39;ll respond within 24 hours. For immediate assistance, call <a href="tel:7079724525" className="text-blue-400 hover:underline">(707) 972-4525</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
