import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Exterior Cleaning Services in Sonoma County | Horizon Valley Services',
  description: 'Professional power washing, window cleaning, gutter cleaning & more in Sonoma County. Serving Santa Rosa, Petaluma, Rohnert Park. Same-week service, free estimates.',
  keywords: 'power washing sonoma county, window cleaning santa rosa, gutter cleaning petaluma, pressure washing sonoma, exterior cleaning rohnert park',
  openGraph: {
    title: 'Sonoma County Exterior Cleaning Services | Horizon Valley',
    description: 'Professional cleaning services throughout Sonoma County. Same-week availability, 100% satisfaction guaranteed.',
    type: 'website',
  },
};

export default function SonomaCountyPage() {
  return (
    <main className="min-h-screen bg-horizon-white">
      {/* Schema.org Local Business Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Horizon Valley Services - Sonoma County',
            image: 'https://horizonvalleycleaning.com/logo.png',
            '@id': 'https://horizonvalleycleaning.com/areas/sonoma-county',
            url: 'https://horizonvalleycleaning.com/areas/sonoma-county',
            telephone: '(559) 960-2749',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Sonoma County',
              addressRegion: 'CA',
              addressCountry: 'US',
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Sonoma County',
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
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-700 to-purple-900 text-horizon-white py-20 px-4">
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
              <span className="text-white">Sonoma County</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Exterior Cleaning Services in <span className="text-purple-300">Sonoma County</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-3xl">
            Family-owned cleaning company serving Santa Rosa, Petaluma, Rohnert Park, Windsor, Healdsburg, and all of Sonoma County. Same-week service with 100% satisfaction guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link 
              href="/quote"
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              Get Free Quote in Sonoma →
            </Link>
            <a 
              href="tel:5599602749"
              className="bg-horizon-white hover:bg-gray-100 text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              📞 Call (559) 960-2749
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="bg-purple-400/20 text-purple-200 px-4 py-2 rounded-full border border-purple-400/30">
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

      {/* Services in Sonoma County */}
      <section className="py-16 px-4 bg-horizon-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-horizon-black mb-4 text-center">
            Services We Offer in Sonoma County
          </h2>
          <p className="text-center text-horizon-slate mb-12 max-w-2xl mx-auto">
            Comprehensive exterior cleaning and maintenance for Sonoma County homes and businesses
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-purple-500/50 transition-all">
              <div className="text-4xl mb-3">💨</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Power Washing in Sonoma</h3>
              <p className="text-horizon-slate mb-3">
                Professional pressure washing for Sonoma County homes, driveways, decks, and patios.
              </p>
              <p className="text-sm text-purple-600 font-semibold">Starting at $150</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-purple-500/50 transition-all">
              <div className="text-4xl mb-3">🪟</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Window Cleaning in Sonoma</h3>
              <p className="text-horizon-slate mb-3">
                Crystal-clear windows for residential and commercial properties across Sonoma County.
              </p>
              <p className="text-sm text-purple-600 font-semibold">Starting at $8/window</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-purple-500/50 transition-all">
              <div className="text-4xl mb-3">🍂</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Gutter Cleaning in Sonoma</h3>
              <p className="text-horizon-slate mb-3">
                Complete gutter cleaning to protect your Sonoma County property from water damage.
              </p>
              <p className="text-sm text-purple-600 font-semibold">Starting at $120</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-purple-500/50 transition-all">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Roof Cleaning in Sonoma</h3>
              <p className="text-horizon-slate mb-3">
                Safe roof cleaning to remove moss, algae, and debris from Sonoma County roofs.
              </p>
              <p className="text-sm text-purple-600 font-semibold">Starting at $200</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-purple-500/50 transition-all">
              <div className="text-4xl mb-3">🛠️</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Deck Restoration in Sonoma</h3>
              <p className="text-horizon-slate mb-3">
                Professional deck cleaning, staining, and restoration for Sonoma properties.
              </p>
              <p className="text-sm text-purple-600 font-semibold">Starting at $300</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-purple-500/50 transition-all">
              <div className="text-4xl mb-3">☀️</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Solar Panel Cleaning</h3>
              <p className="text-horizon-slate mb-3">
                Maximize solar efficiency with professional panel cleaning in Sonoma County.
              </p>
              <p className="text-sm text-purple-600 font-semibold">Starting at $100</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/quote"
              className="inline-block bg-horizon-black hover:bg-horizon-charcoal text-horizon-white px-10 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Get Free Quote for Sonoma County Service →
            </Link>
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-16 px-4 bg-horizon-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-horizon-black mb-4 text-center">
            Sonoma County Cities We Serve
          </h2>
          <p className="text-center text-horizon-slate mb-12 max-w-2xl mx-auto">
            Proudly serving communities throughout beautiful Sonoma County wine country
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Santa Rosa</h3>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Petaluma</h3>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Rohnert Park</h3>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Windsor</h3>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Healdsburg</h3>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Sebastopol</h3>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Cotati</h3>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Sonoma</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Sonoma */}
      <section className="py-16 px-4 bg-horizon-black text-horizon-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Why Sonoma County Residents Choose Horizon Valley
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            We understand Sonoma County&apos;s unique climate and property needs
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-horizon-charcoal p-6 rounded-xl">
              <div className="text-3xl mb-3">🍇</div>
              <h3 className="font-bold text-xl mb-2">Wine Country Expertise</h3>
              <p className="text-gray-300">
                From vineyard properties to downtown Santa Rosa homes, we understand Sonoma&apos;s diverse property types and unique cleaning challenges.
              </p>
            </div>

            <div className="bg-horizon-charcoal p-6 rounded-xl">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-xl mb-2">Fast Sonoma Response</h3>
              <p className="text-gray-300">
                Same-week service throughout Sonoma County. We know your time is valuable, so we get to you quickly.
              </p>
            </div>

            <div className="bg-horizon-charcoal p-6 rounded-xl">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold text-xl mb-2">Transparent Pricing</h3>
              <p className="text-gray-300">
                Free estimates with no hidden fees. You&apos;ll know exactly what you&apos;ll pay before we start any work in Sonoma County.
              </p>
            </div>

            <div className="bg-horizon-charcoal p-6 rounded-xl">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-bold text-xl mb-2">Sonoma Satisfaction Guarantee</h3>
              <p className="text-gray-300">
                100% satisfaction guaranteed for all Sonoma County customers. Not happy? We&apos;ll make it right at no extra charge.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a 
              href="tel:5599602749"
              className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Call Now for Sonoma Service: (559) 960-2749
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your Sonoma County Property?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join satisfied customers throughout Sonoma County. Same-week service available with free estimates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quote"
              className="bg-white hover:bg-gray-100 text-purple-600 px-10 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Get Free Sonoma Quote →
            </Link>
            <a 
              href="tel:5599602749"
              className="bg-purple-900 hover:bg-purple-950 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors border-2 border-white"
            >
              📞 (559) 960-2749
            </a>
          </div>
          <p className="mt-8 text-sm text-purple-200">
            <Link href="/" className="underline hover:text-white">Return to Homepage</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
