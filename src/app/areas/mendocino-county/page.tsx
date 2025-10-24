import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Exterior Cleaning Services in Mendocino County | Horizon Valley Services',
  description: 'Professional power washing, window cleaning, gutter cleaning & more in Mendocino County. Serving Ukiah, Willits, Fort Bragg. Same-week service, free estimates.',
  keywords: 'power washing mendocino county, window cleaning ukiah, gutter cleaning willits, pressure washing fort bragg, exterior cleaning mendocino',
  openGraph: {
    title: 'Mendocino County Exterior Cleaning Services | Horizon Valley',
    description: 'Professional cleaning services throughout Mendocino County. Same-week availability, 100% satisfaction guaranteed.',
    type: 'website',
  },
};

export default function MendocinoCountyPage() {
  return (
    <main className="min-h-screen bg-horizon-white">
      {/* Schema.org Local Business Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Horizon Valley Services - Mendocino County',
            image: 'https://horizonvalleycleaning.com/logo.png',
            '@id': 'https://horizonvalleycleaning.com/areas/mendocino-county',
            url: 'https://horizonvalleycleaning.com/areas/mendocino-county',
            telephone: '(707-972-4525',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Mendocino County',
              addressRegion: 'CA',
              addressCountry: 'US',
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Mendocino County',
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              opens: '07:00',
              closes: '19:00',
            },
            priceRange: '$$',
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-700 to-orange-900 text-horizon-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/logo.png" 
                alt="Horizon Valley Services" 
                width={50} 
                height={50}
                className="rounded-lg"
              />
            </Link>
            <div className="text-sm">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-gray-500 mx-2">/</span>
              <span className="text-white">Mendocino County</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Exterior Cleaning Services in <span className="text-orange-300">Mendocino County</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-3xl">
            Family-owned cleaning company based in Ukiah, serving Willits, Fort Bragg, Point Arena, and all of Mendocino County. Same-week service with 100% satisfaction guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link 
              href="/quote"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              Get Free Quote in Mendocino →
            </Link>
            <a 
              href="tel:707-972-4525"
              className="bg-horizon-white hover:bg-gray-100 text-orange-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              📞 Call (707-972-4525
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="bg-orange-400/20 text-orange-200 px-4 py-2 rounded-full border border-orange-400/30">
              ✓ FREE Estimates
            </div>
            <div className="bg-blue-400/20 text-blue-200 px-4 py-2 rounded-full border border-blue-400/30">
              ✓ Same-Week Service Available
            </div>
            <div className="bg-green-400/20 text-green-200 px-4 py-2 rounded-full border border-green-400/30">
              ✓ 100% Satisfaction Guaranteed
            </div>
          </div>
        </div>
      </section>

      {/* Services in Mendocino County */}
      <section className="py-16 px-4 bg-horizon-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-horizon-black mb-4 text-center">
            Services We Offer in Mendocino County
          </h2>
          <p className="text-center text-horizon-slate mb-12 max-w-2xl mx-auto">
            Comprehensive exterior cleaning and maintenance for Mendocino County homes and businesses
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-orange-500/50 transition-all">
              <div className="text-4xl mb-3">💨</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Power Washing in Mendocino</h3>
              <p className="text-horizon-slate mb-3">
                Professional pressure washing for Mendocino County homes, driveways, decks, and siding.
              </p>
              <p className="text-sm text-orange-600 font-semibold">Starting at $150</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-orange-500/50 transition-all">
              <div className="text-4xl mb-3">🪟</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Window Cleaning in Mendocino</h3>
              <p className="text-horizon-slate mb-3">
                Crystal-clear windows for residential and commercial properties across Mendocino County.
              </p>
              <p className="text-sm text-orange-600 font-semibold">Starting at $8/window</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-orange-500/50 transition-all">
              <div className="text-4xl mb-3">🍂</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Gutter Cleaning in Mendocino</h3>
              <p className="text-horizon-slate mb-3">
                Complete gutter cleaning to protect your Mendocino County property from winter water damage.
              </p>
              <p className="text-sm text-orange-600 font-semibold">Starting at $120</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-orange-500/50 transition-all">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Roof Cleaning in Mendocino</h3>
              <p className="text-horizon-slate mb-3">
                Safe roof cleaning to remove moss, algae, and debris from Mendocino County roofs.
              </p>
              <p className="text-sm text-orange-600 font-semibold">Starting at $200</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-orange-500/50 transition-all">
              <div className="text-4xl mb-3">🛠️</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Deck Restoration in Mendocino</h3>
              <p className="text-horizon-slate mb-3">
                Professional deck cleaning, staining, and restoration for Mendocino properties.
              </p>
              <p className="text-sm text-orange-600 font-semibold">Starting at $300</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-orange-500/50 transition-all">
              <div className="text-4xl mb-3">☀️</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Solar Panel Cleaning</h3>
              <p className="text-horizon-slate mb-3">
                Maximize solar efficiency with professional panel cleaning in Mendocino County.
              </p>
              <p className="text-sm text-orange-600 font-semibold">Starting at $100</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/quote"
              className="inline-block bg-horizon-black hover:bg-horizon-charcoal text-horizon-white px-10 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Get Free Quote for Mendocino County Service →
            </Link>
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-16 px-4 bg-horizon-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-horizon-black mb-4 text-center">
            Mendocino County Cities We Serve
          </h2>
          <p className="text-center text-horizon-slate mb-12 max-w-2xl mx-auto">
            Proudly serving communities throughout Mendocino County - our home base
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center border-2 border-orange-500">
              <h3 className="font-bold text-lg text-horizon-black">Ukiah</h3>
              <p className="text-xs text-orange-600 mt-1">✓ Our Home Base</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Willits</h3>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Fort Bragg</h3>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Point Arena</h3>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Mendocino</h3>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Redwood Valley</h3>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Hopland</h3>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Laytonville</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Mendocino */}
      <section className="py-16 px-4 bg-horizon-black text-horizon-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Why Mendocino County Residents Trust Horizon Valley
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Based in Ukiah - we&apos;re your local neighbors serving Mendocino County
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-horizon-charcoal p-6 rounded-xl">
              <div className="text-3xl mb-3">🏘️</div>
              <h3 className="font-bold text-xl mb-2">Your Local Mendocino Team</h3>
              <p className="text-gray-300">
                Based right here in Ukiah! We&apos;re not some big city company - we&apos;re your neighbors. We know Mendocino County&apos;s climate, properties, and challenges firsthand.
              </p>
            </div>

            <div className="bg-horizon-charcoal p-6 rounded-xl">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-xl mb-2">Fast Local Response</h3>
              <p className="text-gray-300">
                Same-week service throughout Mendocino County. Being locally based means we can get to you faster than competitors from outside the area.
              </p>
            </div>

            <div className="bg-horizon-charcoal p-6 rounded-xl">
              <div className="text-3xl mb-3">🌲</div>
              <h3 className="font-bold text-xl mb-2">Mendocino Climate Experts</h3>
              <p className="text-gray-300">
                We understand Mendocino&apos;s heavy winter rains, redwood debris, and coastal fog. Our cleaning methods are tailored to our local conditions.
              </p>
            </div>

            <div className="bg-horizon-charcoal p-6 rounded-xl">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-bold text-xl mb-2">Mendocino Satisfaction Guarantee</h3>
              <p className="text-gray-300">
                100% satisfaction guaranteed for all Mendocino County neighbors. Your happiness is our reputation in the community.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a 
              href="tel:707-972-4525"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Call Your Local Team: (707-972-4525
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your Mendocino County Property?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Support your local Ukiah-based business. Same-week service available with free estimates throughout Mendocino County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quote"
              className="bg-white hover:bg-gray-100 text-orange-600 px-10 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Get Free Mendocino Quote →
            </Link>
            <a 
              href="tel:707-972-4525"
              className="bg-orange-900 hover:bg-orange-950 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors border-2 border-white"
            >
              📞 (707-972-4525
            </a>
          </div>
          <p className="mt-8 text-sm text-orange-200">
            <Link href="/" className="underline hover:text-white">Return to Homepage</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
