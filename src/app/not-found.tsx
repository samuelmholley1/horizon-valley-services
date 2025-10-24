import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-horizon-cream flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="w-24 h-24 mx-auto mb-8 relative">
          <Image 
            src="/HV_logo.jpeg" 
            alt="Horizon Valley Services" 
            fill
            className="object-contain"
          />
        </div>

        {/* 404 Message */}
        <h1 className="text-8xl font-bold text-horizon-black mb-4">404</h1>
        <h2 className="text-3xl font-bold text-horizon-charcoal mb-4">Page Not Found</h2>
        <p className="text-lg text-horizon-slate mb-8 leading-relaxed">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or doesn&apos;t exist.
        </p>

        {/* Quick Actions */}
        <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
          <h3 className="text-xl font-bold text-horizon-black mb-4">What would you like to do?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="bg-horizon-black text-horizon-white px-6 py-3 rounded-lg font-semibold hover:bg-horizon-charcoal transition-colors"
            >
              ← Back to Home
            </Link>
            <Link 
              href="/quote" 
              className="bg-horizon-warm text-horizon-black px-6 py-3 rounded-lg font-semibold hover:bg-horizon-cream transition-colors border-2 border-horizon-black"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-horizon-slate">
          <p className="mb-4 font-semibold">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/#services" className="hover:text-horizon-black hover:underline">Our Services</Link>
            <span>•</span>
            <Link href="/#team" className="hover:text-horizon-black hover:underline">Meet the Team</Link>
            <span>•</span>
            <Link href="/#contact" className="hover:text-horizon-black hover:underline">Contact Us</Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-horizon-black hover:underline">Privacy Policy</Link>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 p-4 bg-horizon-warm rounded-lg border border-horizon-slate">
          <p className="text-horizon-charcoal text-sm mb-2">
            <strong>Need immediate assistance?</strong>
          </p>
          <a 
            href="tel:707-972-4525" 
            className="text-horizon-black font-bold text-lg hover:underline"
          >
            Call (707-972-4525
          </a>
        </div>
      </div>
    </main>
  )
}
