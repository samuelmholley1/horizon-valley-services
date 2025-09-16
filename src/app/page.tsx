import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-horizon-blue">
                Horizon Valley Services
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-horizon-blue">Services</a>
              <a href="#team" className="text-gray-700 hover:text-horizon-blue">Team</a>
              <a href="#contact" className="text-gray-700 hover:text-horizon-blue">Contact</a>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-horizon-blue">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-horizon-blue to-horizon-green text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Professional Exterior Cleaning & Maintenance
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Serving Mendocino, Lake, and Sonoma counties with reliable, professional exterior 
            cleaning and maintenance services. Your trusted local experts in Ukiah, CA.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-horizon-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-horizon-blue transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive exterior cleaning and maintenance solutions for residential and commercial properties.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-horizon-blue rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Pressure Washing</h4>
              <p className="text-gray-600">
                Professional pressure washing for driveways, sidewalks, decks, and building exteriors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-horizon-green rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Window Cleaning</h4>
              <p className="text-gray-600">
                Crystal clear window cleaning for residential and commercial properties.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-horizon-blue rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Exterior Maintenance</h4>
              <p className="text-gray-600">
                Complete exterior maintenance including gutter cleaning and facility upkeep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
            <p className="text-lg text-gray-600">
              Founded and operated by four dedicated professionals committed to excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Cody White', role: 'Co-Founder' },
              { name: 'Treyton Scott', role: 'Co-Founder' },
              { name: 'Caleb White', role: 'Co-Founder' },
              { name: 'Hudson Ford', role: 'Co-Founder' },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Service Areas</h3>
          <p className="text-lg text-gray-600 mb-8">
            Proudly serving communities throughout Northern California
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-horizon-blue mb-2">Mendocino County</h4>
              <p className="text-gray-600">Ukiah and surrounding areas</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-horizon-blue mb-2">Lake County</h4>
              <p className="text-gray-600">Complete county coverage</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-horizon-blue mb-2">Sonoma County</h4>
              <p className="text-gray-600">Northern regions and beyond</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-horizon-blue text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
          <p className="text-lg mb-8 opacity-90">
            Ready to enhance your property? Contact us for a free consultation and quote.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
              <div className="space-y-3 text-left">
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call for quote: (555) 123-4567
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@horizonvalleyservices.com
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Based in Ukiah, CA
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Request a Quote</h4>
              <p className="text-left opacity-90">
                Fill out our online form or give us a call to discuss your exterior cleaning and maintenance needs. 
                We provide free consultations and competitive pricing for all our services.
              </p>
              <button className="mt-4 bg-white text-horizon-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Horizon Valley Services LLC</h2>
          <p className="text-gray-400 mb-4">
            Professional exterior cleaning and maintenance services in Northern California
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Horizon Valley Services LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
