import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function TermsPage() {
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
            <Link 
              href="/"
              className="bg-horizon-black text-horizon-white px-6 py-2 rounded-lg font-semibold hover:bg-horizon-charcoal transition duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-horizon-black mb-4">Terms of Service</h1>
        <p className="text-horizon-slate mb-12">Last updated: October 23, 2025</p>

        <div className="prose prose-lg max-w-none">
          <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-horizon-black mb-4">Agreement to Terms</h2>
            <p className="text-horizon-slate leading-relaxed mb-4">
              By accessing or using the services of Horizon Valley Services LLC, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-horizon-black mb-4">Services Provided</h2>
            <p className="text-horizon-slate leading-relaxed mb-4">
              Horizon Valley Services LLC provides property care and maintenance services including but not limited to:
            </p>
            <ul className="list-disc list-inside text-horizon-slate space-y-2 mb-4">
              <li>Power washing</li>
              <li>Window cleaning</li>
              <li>Gutter cleaning</li>
              <li>Junk removal</li>
              <li>Moving services</li>
              <li>Tree trimming</li>
            </ul>
          </div>

          <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-horizon-black mb-4">Scheduling and Cancellations</h2>
            <p className="text-horizon-slate leading-relaxed mb-4">
              <strong>Scheduling:</strong> Services are scheduled based on availability. We will make every effort to accommodate your preferred date and time.
            </p>
            <p className="text-horizon-slate leading-relaxed mb-4">
              <strong>Cancellations:</strong> Cancellations must be made at least 24 hours in advance. Late cancellations may be subject to a cancellation fee.
            </p>
            <p className="text-horizon-slate leading-relaxed mb-4">
              <strong>Weather:</strong> Services may be rescheduled due to inclement weather or unsafe conditions at no additional charge.
            </p>
          </div>

          <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-horizon-black mb-4">Payment Terms</h2>
            <ul className="list-disc list-inside text-horizon-slate space-y-2 mb-4">
              <li>Payment is due upon completion of service unless otherwise arranged</li>
              <li>We accept cash, checks, and major credit cards</li>
              <li>Estimates are provided free of charge</li>
              <li>Final pricing may vary based on actual conditions and scope of work</li>
              <li>Late payments may be subject to interest charges</li>
            </ul>
          </div>

          <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-horizon-black mb-4">Property Access and Preparation</h2>
            <p className="text-horizon-slate leading-relaxed mb-4">
              You agree to:
            </p>
            <ul className="list-disc list-inside text-horizon-slate space-y-2 mb-4">
              <li>Provide safe and clear access to all areas requiring service</li>
              <li>Secure or remove valuable or fragile items from work areas</li>
              <li>Notify us of any hazards, pets, or special considerations</li>
              <li>Ensure adequate water and electrical access where required</li>
            </ul>
          </div>

          <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
            <h3 className="text-2xl font-bold text-horizon-black mb-4">5. Liability & Insurance</h3>
            <p className="text-horizon-slate leading-relaxed mb-4">
              Horizon Valley Services LLC takes great care in performing our services, but we are not liable for:
            </p>
            <ul className="list-disc list-inside text-horizon-slate space-y-2 mb-4">
              <li>Pre-existing damage or defects not disclosed prior to service</li>
              <li>Damage caused by acts of nature or circumstances beyond our control</li>
              <li>Items not properly secured or moved by the property owner</li>
              <li>Normal wear and tear of surfaces being cleaned or maintained</li>
            </ul>
          </div>

          <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-horizon-black mb-4">Satisfaction Guarantee</h2>
            <p className="text-horizon-slate leading-relaxed mb-4">
              We stand behind our work. If you are not satisfied with our service, please contact us within 24 hours and we will make it right at no additional charge.
            </p>
          </div>

          <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-horizon-black mb-4">Limitation of Liability</h2>
            <p className="text-horizon-slate leading-relaxed mb-4">
              Our total liability for any claim related to our services shall not exceed the amount paid for the specific service in question.
            </p>
          </div>

          <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-horizon-black mb-4">Changes to Terms</h2>
            <p className="text-horizon-slate leading-relaxed mb-4">
              We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </div>

          <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-horizon-black mb-4">Contact Information</h2>
            <p className="text-horizon-slate leading-relaxed mb-4">
              Questions about these Terms? Contact us:
            </p>
            <div className="space-y-2 text-horizon-slate">
              <p><strong>Email:</strong> <a href="mailto:owners@horizonvalleycleaning.com" className="text-horizon-black hover:underline">owners@horizonvalleycleaning.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:7079724525" className="text-horizon-black hover:underline">(707) 972-4525</a></p>
              <p><strong>Address:</strong> Ukiah, CA 95482</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-horizon-charcoal text-horizon-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Horizon Valley Services LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
