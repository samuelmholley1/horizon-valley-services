import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-horizon-black">
      <Header />

      {/* Hero Section */}
      <section id="main-content" className="relative bg-gradient-to-b from-horizon-black via-gray-900 to-horizon-charcoal py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
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
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-horizon-white">
            Full-Service Property<br />
            <span className="text-blue-400">Care &amp; Maintenance</span>
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Professional power washing, window cleaning, gutter cleaning, junk removal, moving services, and tree trimming serving San Francisco, Marin, Sonoma, and Mendocino counties.
          </p>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg shadow-blue-600/30">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              FREE Estimates
            </div>
            <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg shadow-blue-600/30">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Same-Week Service
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:559-960-2749" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-600/50 text-center"
            >
              📞 Call Now - (559) 960-2749
            </a>
            <Link
              href="/quote"
              className="border-2 border-blue-600 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300 text-center"
            >
              Get Free Quote →
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-horizon-charcoal to-transparent"></div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-horizon-warm to-horizon-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-horizon-black mb-4">
            Why Choose Horizon Valley Services?
          </h2>
          <p className="text-center text-horizon-slate mb-12 max-w-2xl mx-auto">
            We&apos;re not just another service company. Here&apos;s what makes us different:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-horizon-black/20 transition-all">
              <div className="w-14 h-14 bg-green-500 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-horizon-black mb-2">Family Owned & Operated</h4>
              <p className="text-sm text-horizon-slate">Local business run by 4 partners who care about our community and your satisfaction.</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-horizon-black/20 transition-all">
              <div className="w-14 h-14 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-horizon-black mb-2">Transparent Pricing</h4>
              <p className="text-sm text-horizon-slate">Free estimates with no hidden fees. You know exactly what you&apos;ll pay before we start.</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-horizon-black/20 transition-all">
              <div className="w-14 h-14 bg-purple-500 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-horizon-black mb-2">100% Satisfaction Guaranteed</h4>
              <p className="text-sm text-horizon-slate">Not happy? We&apos;ll make it right at no extra charge. Your satisfaction is our priority.</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-horizon-black/20 transition-all">
              <div className="w-14 h-14 bg-orange-500 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg text-horizon-black mb-2">Proudly Serving Bay Area</h4>
              <p className="text-sm text-horizon-slate">From San Francisco to Mendocino County. We know Northern California properties inside and out.</p>
            </div>
          </div>

          <div className="mt-12 bg-horizon-black text-horizon-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-3">🎯 Same-Week Service Available</h3>
            <p className="text-lg mb-6 text-gray-300">Most competitors book 2-3 weeks out. We get to you faster.</p>
            <Link 
              href="/quote" 
              className="inline-block bg-horizon-white text-horizon-black px-8 py-4 rounded-lg font-bold hover:bg-horizon-warm transition-all shadow-lg"
            >
              Get Your Free Quote Today →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-horizon-warm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-horizon-black mb-6">Our Services</h3>
            <p className="text-lg text-horizon-slate max-w-2xl mx-auto leading-relaxed">
              Comprehensive property services for residential and commercial clients across San Francisco, 
              Marin, Sonoma, and Mendocino counties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-horizon-black rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-horizon-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-horizon-black">Power Washing</h4>
              <p className="text-horizon-slate leading-relaxed">
                Professional power washing for driveways, sidewalks, decks, and building exteriors. 
                Remove years of buildup and restore your property&#39;s appearance.
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
                Professional results that let the California sunshine through.
              </p>
            </div>
            <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-horizon-black rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-horizon-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-horizon-black">Gutter Cleaning</h4>
              <p className="text-horizon-slate leading-relaxed">
                Thorough gutter cleaning and debris removal to protect your property from water damage. 
                Essential maintenance for Northern California&#39;s wet season.
              </p>
            </div>
            <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-horizon-black rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-horizon-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-horizon-black">Junk Removal</h4>
              <p className="text-horizon-slate leading-relaxed">
                Fast and efficient junk removal services for homes and businesses. 
                From single items to complete property cleanouts.
              </p>
            </div>
            <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-horizon-black rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-horizon-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-horizon-black">Moving Services</h4>
              <p className="text-horizon-slate leading-relaxed">
                Reliable moving services for local relocations. 
                Professional handling of your belongings with care and efficiency.
              </p>
            </div>
            <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-horizon-black rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-horizon-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-horizon-black">Tree Trimming</h4>
              <p className="text-horizon-slate leading-relaxed">
                Professional tree trimming and pruning services. 
                Keep your property safe and beautiful with proper tree maintenance.
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
              proudly serving the greater Bay Area and Northern California.
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
            {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-horizon-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-horizon-black mb-4">
            Why Choose Horizon Valley?
          </h2>
          <p className="text-center text-horizon-slate mb-12 max-w-2xl mx-auto">
            Local expertise, professional service, and a commitment to excellence that sets us apart
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-horizon-cream p-6 rounded-xl border-2 border-horizon-warm hover:border-horizon-black transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-green-500 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-horizon-black mb-2">Free Estimates</h4>
              <p className="text-horizon-slate text-sm">No-obligation quotes for all services. Know exactly what to expect before we start.</p>
            </div>
            <div className="bg-horizon-cream p-6 rounded-xl border-2 border-horizon-warm hover:border-horizon-black transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-horizon-black mb-2">Fast Scheduling</h4>
              <p className="text-horizon-slate text-sm">Most jobs scheduled within days, not weeks. We respect your time and work efficiently.</p>
            </div>
            <div className="bg-horizon-cream p-6 rounded-xl border-2 border-horizon-warm hover:border-horizon-black transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-purple-500 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-horizon-black mb-2">Local Team</h4>
              <p className="text-horizon-slate text-sm">Bay Area founded and operated. We know the area and care about our community.</p>
            </div>
            <div className="bg-horizon-cream p-6 rounded-xl border-2 border-horizon-warm hover:border-horizon-black transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-orange-500 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-horizon-black mb-2">Quality Guaranteed</h4>
              <p className="text-horizon-slate text-sm">100% satisfaction guarantee. We fix any issues promptly at no extra charge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-horizon-charcoal to-horizon-black text-horizon-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Serving the Bay Area &amp; Northern California
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Professional property care across four counties - from San Francisco to the Mendocino coast
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-horizon-white/10 backdrop-blur-sm p-6 rounded-xl border border-horizon-white/20 hover:bg-horizon-white/20 transition-all hover:scale-105">
              <h4 className="text-2xl font-semibold text-horizon-white mb-3">San Francisco</h4>
              <p className="text-gray-300 text-sm mb-2">All neighborhoods including:</p>
              <p className="text-gray-400 text-xs">Marina, Mission, Sunset, Richmond, SOMA, Pacific Heights</p>
            </div>
            <div className="bg-horizon-white/10 backdrop-blur-sm p-6 rounded-xl border border-horizon-white/20 hover:bg-horizon-white/20 transition-all hover:scale-105">
              <h4 className="text-2xl font-semibold text-horizon-white mb-3">Marin County</h4>
              <p className="text-gray-300 text-sm mb-2">Including major cities:</p>
              <p className="text-gray-400 text-xs">San Rafael, Novato, Mill Valley, Sausalito, Tiburon, San Anselmo</p>
            </div>
            <div className="bg-horizon-white/10 backdrop-blur-sm p-6 rounded-xl border border-horizon-white/20 hover:bg-horizon-white/20 transition-all hover:scale-105">
              <h4 className="text-2xl font-semibold text-horizon-white mb-3">Sonoma County</h4>
              <p className="text-gray-300 text-sm mb-2">Wine country & beyond:</p>
              <p className="text-gray-400 text-xs">Santa Rosa, Petaluma, Healdsburg, Sebastopol, Rohnert Park</p>
            </div>
            <div className="bg-horizon-white/10 backdrop-blur-sm p-6 rounded-xl border border-horizon-white/20 hover:bg-horizon-white/20 transition-all hover:scale-105">
              <h4 className="text-2xl font-semibold text-horizon-white mb-3">Mendocino County</h4>
              <p className="text-gray-300 text-sm mb-2">Coastal to inland:</p>
              <p className="text-gray-400 text-xs">Ukiah, Willits, Fort Bragg, Mendocino, Point Arena</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-400 text-sm">Don&apos;t see your city? <a href="tel:559-960-2749" className="text-horizon-warm hover:underline font-semibold">Call (559) 960-2749</a> - we likely serve your area!</p>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-16 bg-horizon-cream border-y-2 border-horizon-black/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-horizon-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-horizon-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-horizon-black mb-2">Satisfaction Guaranteed</h4>
              <p className="text-horizon-slate">We don&#39;t rest until you&#39;re completely satisfied with our work</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-horizon-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-horizon-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-horizon-black mb-2">Reliable & On Time</h4>
              <p className="text-horizon-slate">Punctual service you can count on, every single time</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-horizon-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-horizon-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-horizon-black mb-2">Locally Owned & Operated</h4>
              <p className="text-horizon-slate">Your neighbors, committed to our community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder Section */}
      <section className="py-16 px-4 bg-horizon-black text-horizon-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            We&apos;re just getting started, but we&apos;re already making neighbors happy across the Bay Area
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-horizon-charcoal p-8 rounded-xl">
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 italic mb-4">
                &quot;The team was professional, on time, and did an amazing job on our home. Will definitely use them again!&quot;
              </p>
              <p className="text-gray-500 text-sm">- Coming Soon</p>
            </div>

            <div className="bg-horizon-charcoal p-8 rounded-xl">
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 italic mb-4">
                &quot;Fast, affordable, and excellent quality. Exactly what we needed for our property.&quot;
              </p>
              <p className="text-gray-500 text-sm">- Coming Soon</p>
            </div>

            <div className="bg-horizon-charcoal p-8 rounded-xl">
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 italic mb-4">
                &quot;Highly recommend! They went above and beyond to make sure everything was perfect.&quot;
              </p>
              <p className="text-gray-500 text-sm">- Coming Soon</p>
            </div>
          </div>

          <div className="bg-horizon-white text-horizon-black p-6 rounded-xl max-w-2xl mx-auto">
            <h3 className="font-bold text-xl mb-2">✨ Be Our Next Happy Customer</h3>
            <p className="text-horizon-slate mb-4">
              Join our growing list of satisfied customers across San Francisco, Marin, Sonoma, and Mendocino counties
            </p>
            <a 
              href="tel:5599602749" 
              className="inline-block bg-horizon-black text-horizon-white px-8 py-3 rounded-lg font-semibold hover:bg-horizon-charcoal transition-colors"
            >
              Call (559) 960-2749 Now
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-horizon-warm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-horizon-black mb-6">Frequently Asked Questions</h3>
            <p className="text-lg text-horizon-slate leading-relaxed">
              Quick answers to common questions about our services
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-horizon-white p-6 rounded-xl shadow-md border border-gray-100">
              <h4 className="text-xl font-semibold text-horizon-black mb-3">What areas do you serve?</h4>
              <p className="text-horizon-slate leading-relaxed">
                We proudly serve San Francisco, Marin, Sonoma, and Mendocino counties. If you&#39;re unsure whether we cover your area, give us a call at (559) 960-2749 and we&#39;ll let you know!
              </p>
            </div>
            <div className="bg-horizon-white p-6 rounded-xl shadow-md border border-gray-100">
              <h4 className="text-xl font-semibold text-horizon-black mb-3">Do you offer free estimates?</h4>
              <p className="text-horizon-slate leading-relaxed">
                Yes! We provide free, no-obligation quotes for all our services. You can schedule a consultation through our website or call us directly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h4 className="text-xl font-semibold text-horizon-black mb-3">What safety measures do you follow?</h4>
              <p className="text-horizon-slate leading-relaxed">
                We prioritize safety and professionalism on every job. Our team follows industry best practices and takes care to protect your property throughout the service process.
              </p>
            </div>
            <div className="bg-horizon-white p-6 rounded-xl shadow-md border border-gray-100">
              <h4 className="text-xl font-semibold text-horizon-black mb-3">What payment methods do you accept?</h4>
              <p className="text-horizon-slate leading-relaxed">
                We accept cash, checks, and all major credit cards for your convenience. Payment is typically due upon completion of service.
              </p>
            </div>
            <div className="bg-horizon-white p-6 rounded-xl shadow-md border border-gray-100">
              <h4 className="text-xl font-semibold text-horizon-black mb-3">How quickly can you start a project?</h4>
              <p className="text-horizon-slate leading-relaxed">
                Most projects can be scheduled within a few days to a week, depending on our current workload and the scope of your project. For urgent needs, we do our best to accommodate same-day or next-day service.
              </p>
            </div>
            <div className="bg-horizon-white p-6 rounded-xl shadow-md border border-gray-100">
              <h4 className="text-xl font-semibold text-horizon-black mb-3">Do I need to be home during the service?</h4>
              <p className="text-horizon-slate leading-relaxed">
                For most exterior services like power washing, gutter cleaning, and tree trimming, you don&#39;t need to be present. For moving services or interior work, we&#39;ll coordinate access with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-horizon-cream">
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
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <div className="w-16 h-16 mb-4 relative mx-auto md:mx-0">
                <Image 
                  src="/HV_logo.jpeg" 
                  alt="Horizon Valley Services" 
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Horizon Valley Services</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full-service property care serving the Bay Area and Northern California
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <div><a href="#services" className="text-gray-400 hover:text-horizon-white transition-colors">Services</a></div>
                <div><a href="#team" className="text-gray-400 hover:text-horizon-white transition-colors">Our Team</a></div>
                <div><Link href="/quote" className="text-gray-400 hover:text-horizon-white transition-colors">Get a Quote</Link></div>
                <div><a href="#contact" className="text-gray-400 hover:text-horizon-white transition-colors">Contact</a></div>
              </div>
            </div>

            {/* Contact & Legal */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p><a href="tel:559-960-2749" className="hover:text-horizon-white transition-colors">(559) 960-2749</a></p>
                <p><a href="mailto:owners@horizonvalleycleaning.com" className="hover:text-horizon-white transition-colors">owners@horizonvalleycleaning.com</a></p>
                <p className="mt-4 pt-4 border-t border-gray-600">
                  <Link href="/privacy" className="hover:text-horizon-white transition-colors">Privacy Policy</Link>
                  {' · '}
                  <Link href="/terms" className="hover:text-horizon-white transition-colors">Terms of Service</Link>
                  {' · '}
                  <Link href="/privacy#california-privacy" className="hover:text-horizon-white transition-colors">CA Privacy Rights</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-6 text-center">
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
            "description": "Full-service property care and maintenance serving San Francisco, Marin, Sonoma, and Mendocino counties. Specializing in power washing, window cleaning, gutter cleaning, junk removal, moving services, and tree trimming.",
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
                "@type": "AdministrativeArea",
                "name": "San Francisco County",
                "containedInPlace": {
                  "@type": "AdministrativeArea",
                  "name": "California"
                }
              },
              {
                "@type": "AdministrativeArea",
                "name": "Marin County",
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
              },
              {
                "@type": "AdministrativeArea",
                "name": "Mendocino County",
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
              "name": "Property Services & Maintenance",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Power Washing",
                    "description": "Professional power washing for driveways, walkways, decks, and exterior surfaces"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Window Cleaning",
                    "description": "Crystal clear window cleaning for residential and commercial properties"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Gutter Cleaning",
                    "description": "Thorough gutter cleaning and maintenance to protect your property from water damage"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Junk Removal",
                    "description": "Fast and efficient junk removal services for residential and commercial properties"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Moving Services",
                    "description": "Reliable local moving services with professional handling"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Tree Trimming",
                    "description": "Professional tree trimming and pruning to maintain property safety and aesthetics"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* FAQ Schema.org Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What areas do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We proudly serve San Francisco, Marin, Sonoma, and Mendocino counties in Northern California. Contact us to confirm we service your specific location."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide free estimates?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We offer free, no-obligation estimates for all our services. You can request a quote online or call us at (559) 960-2749."
                }
              },
              {
                "@type": "Question",
                "name": "What safety measures do you follow?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We prioritize safety and professionalism on every job. Our team follows industry best practices and takes care to protect your property throughout the service process."
                }
              },
              {
                "@type": "Question",
                "name": "What payment methods do you accept?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We accept cash, checks, and all major credit cards. Payment is typically due upon completion of service."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you schedule service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We strive to accommodate your schedule as quickly as possible. Depending on the season and demand, we can often schedule service within a few days to a week."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to be home during service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For most exterior services like power washing and gutter cleaning, you don't need to be home. For interior work like window cleaning, we'll coordinate access with you in advance."
                }
              }
            ]
          }),
        }}
      />
    </main>
  )
}
