import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Exterior Cleaning Services in San Francisco County | Horizon Valley Services',
  description: 'Professional power washing, window cleaning, gutter cleaning & more in San Francisco County. Same-week service, free estimates. Family-owned, serving SF since 2024.',
  keywords: 'power washing san francisco, window cleaning sf, gutter cleaning san francisco county, pressure washing sf, exterior cleaning san francisco',
  openGraph: {
    title: 'San Francisco County Exterior Cleaning Services | Horizon Valley',
    description: 'Professional cleaning services throughout San Francisco County. Same-week availability, 100% satisfaction guaranteed.',
    type: 'website',
  },
};

export default function SanFranciscoPage() {
  return (
    <main className="min-h-screen bg-horizon-white">
      {/* Schema.org Local Business Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Horizon Valley Services - San Francisco',
            image: 'https://horizonvalleycleaning.com/logo.png',
            '@id': 'https://horizonvalleycleaning.com/areas/san-francisco',
            url: 'https://horizonvalleycleaning.com/areas/san-francisco',
            telephone: '(707) 972-4525',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'San Francisco',
              addressRegion: 'CA',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 37.7749,
              longitude: -122.4194,
            },
            areaServed: {
              '@type': 'City',
              name: 'San Francisco',
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              opens: '07:00',
              closes: '19:00',
            },
            priceRange: '$$',
            sameAs: [],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-horizon-black via-horizon-charcoal to-horizon-black text-horizon-white py-20 px-4">
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
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-gray-600 mx-2">/</span>
              <span className="text-white">San Francisco County</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Exterior Cleaning Services in <span className="text-blue-400">San Francisco County</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Family-owned cleaning company serving San Francisco, Daly City, South San Francisco, and surrounding areas. Same-week service available with 100% satisfaction guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link 
              href="/quote"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              Get Free Quote in SF County →
            </Link>
            <a 
              href="tel:707-972-4525"
              className="bg-horizon-white hover:bg-gray-100 text-horizon-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              📞 Call (707) 972-4525
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full border border-green-500/30">
              ✓ FREE Estimates
            </div>
            <div className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full border border-blue-500/30">
              ✓ Same-Week Service Available
            </div>
            <div className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30">
              ✓ 100% Satisfaction Guaranteed
            </div>
          </div>
        </div>
      </section>

      {/* Services in SF County */}
      <section className="py-16 px-4 bg-horizon-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-horizon-black mb-4 text-center">
            Services We Offer in San Francisco County
          </h2>
          <p className="text-center text-horizon-slate mb-12 max-w-2xl mx-auto">
            Comprehensive exterior cleaning and maintenance for San Francisco homes and businesses
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-blue-500/50 transition-all">
              <div className="text-4xl mb-3">💨</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Power Washing in SF</h3>
              <p className="text-horizon-slate mb-3">
                Professional pressure washing for homes, driveways, decks, and sidewalks throughout San Francisco County.
              </p>
              <p className="text-sm text-blue-600 font-semibold">Starting at $150</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-blue-500/50 transition-all">
              <div className="text-4xl mb-3">🪟</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Window Cleaning in SF</h3>
              <p className="text-horizon-slate mb-3">
                Crystal-clear window cleaning for residential and commercial properties in San Francisco.
              </p>
              <p className="text-sm text-blue-600 font-semibold">Starting at $8/window</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-blue-500/50 transition-all">
              <div className="text-4xl mb-3">🍂</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Gutter Cleaning in SF</h3>
              <p className="text-horizon-slate mb-3">
                Complete gutter cleaning and maintenance to protect your SF County property from water damage.
              </p>
              <p className="text-sm text-blue-600 font-semibold">Starting at $120</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-blue-500/50 transition-all">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Roof Cleaning in SF</h3>
              <p className="text-horizon-slate mb-3">
                Safe roof cleaning to remove moss, algae, and debris from San Francisco area roofs.
              </p>
              <p className="text-sm text-blue-600 font-semibold">Starting at $200</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-blue-500/50 transition-all">
              <div className="text-4xl mb-3">🛠️</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Deck Restoration in SF</h3>
              <p className="text-horizon-slate mb-3">
                Professional deck cleaning, staining, and restoration for SF County properties.
              </p>
              <p className="text-sm text-blue-600 font-semibold">Starting at $300</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-blue-500/50 transition-all">
              <div className="text-4xl mb-3">☀️</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Solar Panel Cleaning</h3>
              <p className="text-horizon-slate mb-3">
                Maximize solar efficiency with professional panel cleaning throughout San Francisco County.
              </p>
              <p className="text-sm text-blue-600 font-semibold">Starting at $100</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/quote"
              className="inline-block bg-horizon-black hover:bg-horizon-charcoal text-horizon-white px-10 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Get Free Quote for SF County Service →
            </Link>
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-16 px-4 bg-horizon-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-horizon-black mb-4 text-center">
            San Francisco County Cities We Serve
          </h2>
          <p className="text-center text-horizon-slate mb-12 max-w-2xl mx-auto">
            Proudly serving communities throughout San Francisco County
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black mb-2">San Francisco</h3>
              <p className="text-sm text-horizon-slate">All neighborhoods including Marina, Mission, Richmond, Sunset, SOMA, Nob Hill, Pacific Heights</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black mb-2">Daly City</h3>
              <p className="text-sm text-horizon-slate">Complete coverage throughout Daly City and Westlake</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black mb-2">South San Francisco</h3>
              <p className="text-sm text-horizon-slate">Residential and commercial services throughout SSF</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for SF */}
      <section className="py-16 px-4 bg-horizon-black text-horizon-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Why San Francisco Residents Choose Horizon Valley
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            We understand the unique needs of San Francisco County properties
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-horizon-charcoal p-6 rounded-xl">
              <div className="text-3xl mb-3">🏡</div>
              <h3 className="font-bold text-xl mb-2">Local SF Expertise</h3>
              <p className="text-gray-300">
                We know San Francisco&apos;s climate, architecture, and unique challenges. From Victorian homes to modern condos, we&apos;ve got you covered.
              </p>
            </div>

            <div className="bg-horizon-charcoal p-6 rounded-xl">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-xl mb-2">Fast SF Response</h3>
              <p className="text-gray-300">
                Same-week service available throughout San Francisco County. Most competitors book 2-3 weeks out - we get to you faster.
              </p>
            </div>

            <div className="bg-horizon-charcoal p-6 rounded-xl">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold text-xl mb-2">Transparent SF Pricing</h3>
              <p className="text-gray-300">
                Free estimates with no hidden fees. You know exactly what you&apos;ll pay before we start any work in San Francisco.
              </p>
            </div>

            <div className="bg-horizon-charcoal p-6 rounded-xl">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-bold text-xl mb-2">SF Satisfaction Guarantee</h3>
              <p className="text-gray-300">
                100% satisfaction guaranteed for all San Francisco County customers. Not happy? We&apos;ll make it right at no extra charge.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a 
              href="tel:707-972-4525"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Call Now for SF County Service: (707) 972-4525
            </a>
          </div>
        </div>
      </section>

      {/* SF County FAQs */}
      <section className="py-16 px-4 bg-horizon-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-horizon-black mb-12 text-center">
            San Francisco County Service FAQs
          </h2>

          <div className="space-y-6">
            <div className="bg-horizon-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-horizon-black mb-3">
                Do you serve all of San Francisco County?
              </h3>
              <p className="text-horizon-slate">
                Yes! We serve all of San Francisco, Daly City, South San Francisco, and surrounding areas. We&apos;re familiar with all SF neighborhoods and property types.
              </p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-horizon-black mb-3">
                How quickly can you service my SF property?
              </h3>
              <p className="text-horizon-slate">
                We offer same-week service for most San Francisco County locations. Call us at (707) 972-4525 and we&apos;ll check our schedule for your area.
              </p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-horizon-black mb-3">
                What makes you different from other SF cleaning companies?
              </h3>
              <p className="text-horizon-slate">
                We&apos;re a family-owned business that treats every San Francisco property like it&apos;s our own. Plus, we offer transparent pricing, same-week service, and a 100% satisfaction guarantee.
              </p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-horizon-black mb-3">
                Do you offer commercial services in San Francisco?
              </h3>
              <p className="text-horizon-slate">
                Yes! We serve both residential and commercial properties throughout San Francisco County. Contact us for a custom commercial cleaning quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your San Francisco Property?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers throughout San Francisco County. Same-week service available with free estimates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quote"
              className="bg-white hover:bg-gray-100 text-blue-600 px-10 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Get Free SF Quote →
            </Link>
            <a 
              href="tel:707-972-4525"
              className="bg-blue-900 hover:bg-blue-950 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors border-2 border-white"
            >
              📞 (707) 972-4525
            </a>
          </div>
          <p className="mt-8 text-sm text-blue-200">
            <Link href="/" className="underline hover:text-white">Return to Homepage</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
