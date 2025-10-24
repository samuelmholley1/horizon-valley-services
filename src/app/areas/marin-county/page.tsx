import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Exterior Cleaning Services in Marin County | Horizon Valley Services',
  description: 'Professional power washing, window cleaning, gutter cleaning & more in Marin County. Serving Novato, San Rafael, Mill Valley, Tiburon. Same-week service, free estimates.',
  keywords: 'power washing marin county, window cleaning marin, gutter cleaning san rafael, pressure washing novato, exterior cleaning marin',
  openGraph: {
    title: 'Marin County Exterior Cleaning Services | Horizon Valley',
    description: 'Professional cleaning services throughout Marin County. Same-week availability, 100% satisfaction guaranteed.',
    type: 'website',
  },
};

export default function MarinCountyPage() {
  return (
    <main className="min-h-screen bg-horizon-white">
      {/* Schema.org Local Business Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Horizon Valley Services - Marin County',
            image: 'https://horizonvalleycleaning.com/logo.png',
            '@id': 'https://horizonvalleycleaning.com/areas/marin-county',
            url: 'https://horizonvalleycleaning.com/areas/marin-county',
            telephone: '(707-972-4525',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Marin County',
              addressRegion: 'CA',
              addressCountry: 'US',
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Marin County',
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
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-horizon-white py-20 px-4">
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
              <span className="text-white">Marin County</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Exterior Cleaning Services in <span className="text-green-300">Marin County</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-3xl">
            Family-owned cleaning company serving Novato, San Rafael, Mill Valley, Tiburon, Sausalito, and all of Marin County. Same-week service with 100% satisfaction guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link 
              href="/quote"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              Get Free Quote in Marin →
            </Link>
            <a 
              href="tel:707-972-4525"
              className="bg-horizon-white hover:bg-gray-100 text-green-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              📞 Call (707-972-4525
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="bg-green-400/20 text-green-200 px-4 py-2 rounded-full border border-green-400/30">
              ✓ FREE Estimates
            </div>
            <div className="bg-blue-400/20 text-blue-200 px-4 py-2 rounded-full border border-blue-400/30">
              ✓ Same-Week Service Available
            </div>
            <div className="bg-purple-400/20 text-purple-200 px-4 py-2 rounded-full border border-purple-400/30">
              ✓ 100% Satisfaction Guaranteed
            </div>
          </div>
        </div>
      </section>

      {/* Services in Marin County */}
      <section className="py-16 px-4 bg-horizon-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-horizon-black mb-4 text-center">
            Services We Offer in Marin County
          </h2>
          <p className="text-center text-horizon-slate mb-12 max-w-2xl mx-auto">
            Comprehensive exterior cleaning and maintenance for Marin County homes and businesses
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-green-500/50 transition-all">
              <div className="text-4xl mb-3">💨</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Power Washing in Marin</h3>
              <p className="text-horizon-slate mb-3">
                Professional pressure washing for Marin County homes, driveways, decks, and sidewalks.
              </p>
              <p className="text-sm text-green-600 font-semibold">Starting at $150</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-green-500/50 transition-all">
              <div className="text-4xl mb-3">🪟</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Window Cleaning in Marin</h3>
              <p className="text-horizon-slate mb-3">
                Crystal-clear windows for residential and commercial properties across Marin County.
              </p>
              <p className="text-sm text-green-600 font-semibold">Starting at $8/window</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-green-500/50 transition-all">
              <div className="text-4xl mb-3">🍂</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Gutter Cleaning in Marin</h3>
              <p className="text-horizon-slate mb-3">
                Complete gutter cleaning to protect your Marin County property from water damage.
              </p>
              <p className="text-sm text-green-600 font-semibold">Starting at $120</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-green-500/50 transition-all">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Roof Cleaning in Marin</h3>
              <p className="text-horizon-slate mb-3">
                Safe roof cleaning to remove moss, algae, and debris from Marin County roofs.
              </p>
              <p className="text-sm text-green-600 font-semibold">Starting at $200</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-green-500/50 transition-all">
              <div className="text-4xl mb-3">🛠️</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Deck Restoration in Marin</h3>
              <p className="text-horizon-slate mb-3">
                Professional deck cleaning, staining, and restoration for Marin properties.
              </p>
              <p className="text-sm text-green-600 font-semibold">Starting at $300</p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md border-2 border-horizon-black/5 hover:border-green-500/50 transition-all">
              <div className="text-4xl mb-3">☀️</div>
              <h3 className="text-xl font-bold text-horizon-black mb-2">Solar Panel Cleaning</h3>
              <p className="text-horizon-slate mb-3">
                Maximize solar efficiency with professional panel cleaning in Marin County.
              </p>
              <p className="text-sm text-green-600 font-semibold">Starting at $100</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/quote"
              className="inline-block bg-horizon-black hover:bg-horizon-charcoal text-horizon-white px-10 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Get Free Quote for Marin County Service →
            </Link>
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-16 px-4 bg-horizon-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-horizon-black mb-4 text-center">
            Marin County Cities We Serve
          </h2>
          <p className="text-center text-horizon-slate mb-12 max-w-2xl mx-auto">
            Proudly serving communities throughout beautiful Marin County
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Novato</h3>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">San Rafael</h3>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Mill Valley</h3>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Tiburon</h3>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Sausalito</h3>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Corte Madera</h3>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Larkspur</h3>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg text-horizon-black">Fairfax</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Marin */}
      <section className="py-16 px-4 bg-horizon-black text-horizon-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Why Marin County Residents Trust Horizon Valley
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            We understand the unique needs of Marin County properties and lifestyles
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-horizon-charcoal p-6 rounded-xl">
              <div className="text-3xl mb-3">🌲</div>
              <h3 className="font-bold text-xl mb-2">Marin-Specific Expertise</h3>
              <p className="text-gray-300">
                From hillside homes to waterfront properties, we know Marin&apos;s unique challenges. Coastal weather, redwood debris, and steep driveways - we&apos;ve seen it all.
              </p>
            </div>

            <div className="bg-horizon-charcoal p-6 rounded-xl">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-xl mb-2">Fast Marin Response</h3>
              <p className="text-gray-300">
                Same-week service throughout Marin County. We respect your time and schedule around your busy Marin lifestyle.
              </p>
            </div>

            <div className="bg-horizon-charcoal p-6 rounded-xl">
              <div className="text-3xl mb-3">♻️</div>
              <h3 className="font-bold text-xl mb-2">Eco-Conscious Cleaning</h3>
              <p className="text-gray-300">
                Marin values sustainability, and so do we. We use eco-friendly cleaning solutions that are safe for your family, pets, and Marin&apos;s beautiful environment.
              </p>
            </div>

            <div className="bg-horizon-charcoal p-6 rounded-xl">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-bold text-xl mb-2">Marin Satisfaction Guarantee</h3>
              <p className="text-gray-300">
                100% satisfaction guaranteed. We take pride in our work and won&apos;t rest until your Marin County property looks perfect.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a 
              href="tel:707-972-4525"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Call Now for Marin Service: (707-972-4525
            </a>
          </div>
        </div>
      </section>

      {/* Marin FAQs */}
      <section className="py-16 px-4 bg-horizon-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-horizon-black mb-12 text-center">
            Marin County Service FAQs
          </h2>

          <div className="space-y-6">
            <div className="bg-horizon-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-horizon-black mb-3">
                Do you serve all of Marin County?
              </h3>
              <p className="text-horizon-slate">
                Yes! We serve Novato, San Rafael, Mill Valley, Tiburon, Sausalito, Corte Madera, Larkspur, Fairfax, and all surrounding Marin communities.
              </p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-horizon-black mb-3">
                Can you handle steep driveways and hillside properties?
              </h3>
              <p className="text-horizon-slate">
                Absolutely! We have experience with Marin&apos;s challenging terrain including steep driveways, hillside homes, and multi-level properties. We bring the right equipment for the job.
              </p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-horizon-black mb-3">
                Are your cleaning products safe for Marin&apos;s environment?
              </h3>
              <p className="text-horizon-slate">
                Yes! We use eco-friendly, biodegradable cleaning solutions that are safe for Marin&apos;s watersheds, wildlife, and vegetation. We share Marin&apos;s commitment to environmental stewardship.
              </p>
            </div>

            <div className="bg-horizon-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-horizon-black mb-3">
                How quickly can you service my Marin property?
              </h3>
              <p className="text-horizon-slate">
                We offer same-week service for most Marin County locations. Call us at (707-972-4525 and we&apos;ll check availability for your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your Marin County Property?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join satisfied customers throughout Marin County. Same-week service available with free estimates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quote"
              className="bg-white hover:bg-gray-100 text-green-600 px-10 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Get Free Marin Quote →
            </Link>
            <a 
              href="tel:707-972-4525"
              className="bg-green-900 hover:bg-green-950 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors border-2 border-white"
            >
              📞 (707-972-4525
            </a>
          </div>
          <p className="mt-8 text-sm text-green-200">
            <Link href="/" className="underline hover:text-white">Return to Homepage</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
