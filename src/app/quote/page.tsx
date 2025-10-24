'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
    } catch (error) {
      setErrors({ submit: "Something went wrong. Please try again or call us at (559) 960-2749." });
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
      <main className="min-h-screen bg-horizon-cream">
        {/* Navigation */}
        <nav className="bg-horizon-white shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-12 h-12 relative">
                  <Image 
                    src="/HV_logo.jpeg" 
                    alt="Horizon Valley Services" 
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl font-bold text-horizon-black">Horizon Valley</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Success Message */}
        <div className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-horizon-white p-12 rounded-xl shadow-lg border border-gray-100">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-horizon-black mb-4">Thank You!</h1>
              <p className="text-lg text-horizon-slate mb-8 leading-relaxed">
                We&#39;ve received your quote request and will get back to you within 24 hours. 
                We look forward to serving you!
              </p>
              <div className="space-y-4">
                <p className="text-horizon-charcoal">
                  Need immediate assistance?<br />
                  <a href="tel:559-960-2749" className="text-2xl font-bold text-horizon-black hover:text-horizon-charcoal transition-colors">
                    (559) 960-2749
                  </a>
                </p>
                <Link 
                  href="/"
                  className="inline-block bg-horizon-black text-horizon-white px-8 py-3 rounded-lg font-semibold hover:bg-horizon-charcoal transition duration-300"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-horizon-cream">
      {/* Navigation */}
      <nav className="bg-horizon-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 relative">
                <Image 
                  src="/HV_logo.jpeg" 
                  alt="Horizon Valley Services" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-horizon-black">Horizon Valley</span>
            </Link>
            <a 
              href="tel:559-960-2749"
              className="bg-horizon-black text-horizon-white px-6 py-2 rounded-lg font-semibold hover:bg-horizon-charcoal transition duration-300"
            >
              Call (559) 960-2749
            </a>
          </div>
        </div>
      </nav>

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
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-horizon-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-horizon-black mb-4">
                Schedule a Consultation Call
              </h2>
              <p className="text-lg text-horizon-slate leading-relaxed">
                Pick a time that works for you. We&#39;ll discuss your needs, answer questions, and provide accurate pricing.
              </p>
            </div>
            
            {/* Calendly Embed - Live Widget */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/owners-horizonvalleycleaning/30min?hide_event_type_details=1&hide_gdpr_banner=1" 
              style={{ minWidth: '320px', height: '700px' }}
            />
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-horizon-slate">
                Can&#39;t find a time that works? <a href="tel:559-960-2749" className="font-semibold text-horizon-black hover:underline">Call us directly at (559) 960-2749</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Fallback Section */}
      <section className="py-12 px-4 bg-horizon-warm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-horizon-black mb-4">
              Not Ready to Schedule?
            </h2>
            <p className="text-lg text-horizon-slate leading-relaxed">
              Fill out this form and we&#39;ll call you back at your convenience
            </p>
          </div>

          <div className="bg-horizon-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-horizon-charcoal mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-horizon-charcoal focus:border-transparent ${
                  errors.name ? 'border-red-500' : 'border-horizon-slate'
                }`}
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: '' });
                }}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-horizon-black mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-horizon-black focus:border-transparent transition"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-horizon-charcoal mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="you@example.com"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-horizon-charcoal focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-horizon-slate'
                }`}
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-horizon-black mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-horizon-black focus:border-transparent transition bg-white"
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
              <label htmlFor="address" className="block text-sm font-medium text-horizon-charcoal mb-2">
                Property Address *
              </label>
              <input
                type="text"
                id="address"
                required
                placeholder="123 Main St, City, CA 94XXX"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-horizon-charcoal focus:border-transparent ${
                  errors.address ? 'border-red-500' : 'border-horizon-slate'
                }`}
                value={formData.address}
                onChange={(e) => {
                  setFormData({ ...formData, address: e.target.value });
                  if (errors.address) setErrors({ ...errors, address: '' });
                }}
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-horizon-black mb-2">
                  Brief Description of Work Needed
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-horizon-black focus:border-transparent transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div>
                <label htmlFor="callbackTime" className="block text-sm font-semibold text-horizon-black mb-2">
                  Best Time to Call Back
                </label>
                <select
                  id="callbackTime"
                  name="callbackTime"
                  value={formData.callbackTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-horizon-black focus:border-transparent transition bg-white"
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
                className="w-full bg-horizon-black text-horizon-white px-8 py-4 rounded-lg font-semibold hover:bg-horizon-charcoal transition duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              </button>

              <p className="text-sm text-horizon-slate text-center">
                We&#39;ll respond within 24 hours. For immediate assistance, call <a href="tel:559-960-2749" className="font-semibold text-horizon-black hover:underline">(559) 960-2749</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-horizon-charcoal text-horizon-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 relative">
              <Image 
                src="/HV_logo.jpeg" 
                alt="Horizon Valley Services" 
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">Horizon Valley Services LLC</h2>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Professional exterior cleaning and maintenance services proudly serving Northern California&#39;s wine country
          </p>
          <div className="border-t border-gray-600 pt-6">
            <p className="text-gray-500 text-sm">
              © 2025 Horizon Valley Services LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
