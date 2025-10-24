'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <main className="min-h-screen bg-horizon-cream">
      {/* Navigation */}
      <nav className="bg-horizon-white shadow-lg border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 relative">
                <Image 
                  src="/HV_logo.jpeg" 
                  alt="Horizon Valley Services Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-horizon-black tracking-tight">
                  Horizon Valley Services
                </h1>
                <p className="text-sm text-horizon-stone font-medium">LLC</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-horizon-charcoal hover:text-horizon-black font-medium transition-colors">Services</a>
              <a href="#team" className="text-horizon-charcoal hover:text-horizon-black font-medium transition-colors">Team</a>
              <a href="#contact" className="text-horizon-charcoal hover:text-horizon-black font-medium transition-colors">Contact</a>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-horizon-charcoal hover:text-horizon-black p-2"
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
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#services" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-horizon-charcoal hover:text-horizon-black font-medium transition-colors px-4 py-2"
                >
                  Services
                </a>
                <a 
                  href="#team" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-horizon-charcoal hover:text-horizon-black font-medium transition-colors px-4 py-2"
                >
                  Team
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-horizon-charcoal hover:text-horizon-black font-medium transition-colors px-4 py-2"
                >
                  Contact
                </a>
                <a 
                  href="tel:559-960-2749"
                  className="bg-horizon-black text-horizon-white px-6 py-3 rounded-lg font-semibold hover:bg-horizon-charcoal transition duration-300 text-center mx-4"
                >
                  Call (559) 960-2749
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-horizon-black text-horizon-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-rural-texture opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 relative">
              <Image 
                src="/HV_logo.jpeg" 
                alt="Horizon Valley Services" 
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Professional Exterior<br />
            <span className="text-horizon-warm">Cleaning &amp; Maintenance</span>
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Serving the heart of Northern California&#39;s wine country with reliable, professional exterior 
            cleaning and maintenance services. Your trusted local experts in Ukiah and surrounding valleys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:559-960-2749" 
              className="bg-horizon-white text-horizon-black px-8 py-4 rounded-lg font-semibold hover:bg-horizon-warm transition duration-300 shadow-lg text-center"
            >
              Call (559) 960-2749
            </a>
            <a 
              href="mailto:owners@horizonvalleycleaning.com"
              className="border-2 border-horizon-white text-horizon-white px-8 py-4 rounded-lg font-semibold hover:bg-horizon-white hover:text-horizon-black transition duration-300 text-center"
            >
              Email Us
            </a>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-horizon-cream to-transparent"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-horizon-warm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-horizon-black mb-6">Our Services</h3>
            <p className="text-lg text-horizon-slate max-w-2xl mx-auto leading-relaxed">
              We provide comprehensive exterior cleaning and maintenance solutions for residential and commercial properties 
              throughout Mendocino&#39;s beautiful valleys.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-horizon-black rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-horizon-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-horizon-black">Pressure Washing</h4>
              <p className="text-horizon-slate leading-relaxed">
                Professional pressure washing for driveways, sidewalks, decks, and building exteriors. 
                Restoring the natural beauty of your property.
              </p>
            </div>
            <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-horizon-black rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-horizon-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-horizon-black">Window Cleaning</h4>
              <p className="text-horizon-slate leading-relaxed">
                Crystal clear window cleaning for residential and commercial properties. 
                Let the Northern California sunshine in.
              </p>
            </div>
            <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-horizon-black rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-horizon-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-horizon-black">Exterior Maintenance</h4>
              <p className="text-horizon-slate leading-relaxed">
                Complete exterior maintenance including gutter cleaning and facility upkeep. 
                Protecting your investment year-round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-horizon-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-horizon-black mb-6">Meet Our Team</h3>
            <p className="text-lg text-horizon-slate leading-relaxed">
              Founded and operated by four dedicated professionals committed to excellence and 
              deeply rooted in the Mendocino community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Cody White', role: 'Co-Founder & Operations' },
              { name: 'Treyton Scott', role: 'Co-Founder & Quality' },
              { name: 'Caleb White', role: 'Co-Founder & Services' },
              { name: 'Hudson Ford', role: 'Co-Founder & Client Relations' },
            ].map((member) => (
              <div key={member.name} className="text-center bg-horizon-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="w-24 h-24 bg-horizon-black rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-horizon-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-horizon-black mb-2">{member.name}</h4>
                <p className="text-horizon-stone text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-horizon-black text-horizon-white relative overflow-hidden">
        <div className="absolute inset-0 bg-rural-texture opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl font-bold mb-6">Our Service Areas</h3>
          <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Proudly serving the beautiful valleys and communities throughout Northern California&#39;s wine country
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-horizon-white/10 backdrop-blur-sm p-8 rounded-xl border border-horizon-white/20 hover:bg-horizon-white/20 transition-colors">
              <h4 className="text-2xl font-semibold text-horizon-white mb-3">Mendocino County</h4>
              <p className="text-gray-300">Ukiah, Willits, Fort Bragg and surrounding valleys</p>
            </div>
            <div className="bg-horizon-white/10 backdrop-blur-sm p-8 rounded-xl border border-horizon-white/20 hover:bg-horizon-white/20 transition-colors">
              <h4 className="text-2xl font-semibold text-horizon-white mb-3">Lake County</h4>
              <p className="text-gray-300">Lakeport, Clearlake, and complete county coverage</p>
            </div>
            <div className="bg-horizon-white/10 backdrop-blur-sm p-8 rounded-xl border border-horizon-white/20 hover:bg-horizon-white/20 transition-colors">
              <h4 className="text-2xl font-semibold text-horizon-white mb-3">Sonoma County</h4>
              <p className="text-gray-300">Northern regions, Healdsburg, and beyond</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-horizon-warm">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-horizon-black mb-6">Get In Touch</h3>
          <p className="text-lg mb-12 text-horizon-slate max-w-2xl mx-auto leading-relaxed">
            Ready to enhance your property? Contact us for a free consultation and competitive quote. 
            We&#39;re here to serve our local community.
          </p>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h4 className="text-2xl font-semibold mb-6 text-horizon-black">Contact Information</h4>
              <div className="space-y-6 text-left">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-horizon-black rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-horizon-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-horizon-black font-medium">Call for quote</p>
                    <a href="tel:559-960-2749" className="text-horizon-slate hover:text-horizon-black transition-colors">(559) 960-2749</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-horizon-black rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-horizon-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-horizon-black font-medium">Email us</p>
                    <a href="mailto:owners@horizonvalleycleaning.com" className="text-horizon-slate hover:text-horizon-black transition-colors">owners@horizonvalleycleaning.com</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-horizon-black rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-horizon-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-horizon-black font-medium">Based in</p>
                    <p className="text-horizon-slate">Ukiah, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h4 className="text-2xl font-semibold mb-6 text-horizon-black">Request a Quote</h4>
              <p className="text-left text-horizon-slate mb-6 leading-relaxed">
                Fill out our online form or give us a call to discuss your exterior cleaning and maintenance needs. 
                We provide free consultations and competitive pricing for all our services.
              </p>
              <a 
                href="tel:559-960-2749"
                className="block w-full bg-horizon-black text-horizon-white px-6 py-4 rounded-lg font-semibold hover:bg-horizon-charcoal transition duration-300 shadow-lg text-center"
              >
                Call (559) 960-2749 for Quote
              </a>
            </div>
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

      {/* Schema.org Structured Data for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://horizonvalleycleaning.com",
            "name": "Horizon Valley Services LLC",
            "image": "https://horizonvalleycleaning.com/HV_logo.jpeg",
            "description": "Professional exterior cleaning and maintenance services serving Mendocino, Lake, and Sonoma counties in Northern California. Specializing in pressure washing, gutter cleaning, window washing, and property maintenance.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ukiah",
              "addressRegion": "CA",
              "postalCode": "95482",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 39.1502,
              "longitude": -123.2078
            },
            "telephone": "+15599602749",
            "email": "owners@horizonvalleycleaning.com",
            "url": "https://horizonvalleycleaning.com",
            "priceRange": "$$",
            "areaServed": [
              {
                "@type": "City",
                "name": "Ukiah",
                "containedInPlace": {
                  "@type": "AdministrativeArea",
                  "name": "California"
                }
              },
              {
                "@type": "AdministrativeArea",
                "name": "Mendocino County",
                "containedInPlace": {
                  "@type": "AdministrativeArea",
                  "name": "California"
                }
              },
              {
                "@type": "AdministrativeArea",
                "name": "Lake County",
                "containedInPlace": {
                  "@type": "AdministrativeArea",
                  "name": "California"
                }
              },
              {
                "@type": "AdministrativeArea",
                "name": "Sonoma County",
                "containedInPlace": {
                  "@type": "AdministrativeArea",
                  "name": "California"
                }
              }
            ],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "17:00"
              }
            ],
            "founder": [
              {
                "@type": "Person",
                "name": "Cody White"
              },
              {
                "@type": "Person",
                "name": "Treyton Scott"
              },
              {
                "@type": "Person",
                "name": "Caleb White"
              },
              {
                "@type": "Person",
                "name": "Hudson Ford"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Exterior Cleaning Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pressure Washing",
                    "description": "Professional pressure washing for driveways, walkways, decks, and exterior surfaces"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Gutter Cleaning",
                    "description": "Thorough gutter cleaning and maintenance to protect your property"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Window Washing",
                    "description": "Crystal clear window cleaning for residential and commercial properties"
                  }
                }
              ]
            }
          })
        }}
      />
    </main>
  )
}
