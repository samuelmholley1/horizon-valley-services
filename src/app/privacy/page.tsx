import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function PrivacyPage() {
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
        <h1 className="text-5xl font-bold text-horizon-black mb-4">Privacy Policy</h1>
        <p className="text-horizon-slate mb-12">Last updated: October 23, 2025</p>

        <div className="prose prose-lg max-w-none">
          <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-horizon-black mb-4">Introduction</h2>
            <p className="text-horizon-slate leading-relaxed mb-4">
              Horizon Valley Services LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-horizon-black mb-4">Information We Collect</h2>
            <p className="text-horizon-slate leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-horizon-slate space-y-2 mb-4">
              <li>Name, email address, phone number, and mailing address</li>
              <li>Property address and service details</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Communications with us, including support requests and feedback</li>
            </ul>
          </div>

          <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-horizon-black mb-4">How We Use Your Information</h2>
            <p className="text-horizon-slate leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-horizon-slate space-y-2 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your service requests and payments</li>
              <li>Send you confirmations, updates, and administrative messages</li>
              <li>Respond to your comments and questions</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>
          </div>

          <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-horizon-black mb-4">Information Sharing</h2>
            <p className="text-horizon-slate leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-horizon-slate space-y-2 mb-4">
              <li>Service providers who perform services on our behalf</li>
              <li>Professional advisors, such as lawyers and accountants</li>
              <li>Law enforcement or government officials when required by law</li>
            </ul>
          </div>

          <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-horizon-black mb-4">Data Security</h2>
            <p className="text-horizon-slate leading-relaxed mb-4">
              We implement reasonable security measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-horizon-black mb-4">Your Rights</h2>
            <p className="text-horizon-slate leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-horizon-slate space-y-2 mb-4">
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </div>

          <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-horizon-black mb-4">Cookies and Tracking</h2>
            <p className="text-horizon-slate leading-relaxed mb-4">
              We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings.
            </p>
          </div>

          <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-horizon-black mb-4">Changes to This Policy</h2>
            <p className="text-horizon-slate leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </div>

          <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100" id="california-privacy">
            <h2 className="text-2xl font-bold text-horizon-black mb-4">Your California Privacy Rights (CCPA)</h2>
            <p className="text-horizon-slate leading-relaxed mb-4">
              If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with specific rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-horizon-slate mb-4 space-y-2">
              <li><strong>Right to Know:</strong> You can request details about the personal information we collect, use, disclose, or sell.</li>
              <li><strong>Right to Delete:</strong> You can request deletion of your personal information, subject to certain exceptions.</li>
              <li><strong>Right to Opt-Out:</strong> You have the right to opt out of the sale of your personal information.</li>
              <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights.</li>
            </ul>
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-4">
              <p className="text-horizon-charcoal font-semibold mb-2">✓ We Do NOT Sell Your Personal Information</p>
              <p className="text-horizon-slate text-sm">
                Horizon Valley Services does not sell personal information to third parties. We only share information with service providers necessary to operate our business (scheduling, payment processing, communication).
              </p>
            </div>
            <p className="text-horizon-slate mb-4">
              To exercise any of your CCPA rights, please contact us using the information below.
            </p>
          </div>

          <div className="bg-horizon-white p-8 rounded-xl shadow-lg border border-gray-100 mt-8">
            <h2 className="text-2xl font-bold text-horizon-black mb-4">Contact Us</h2>
            <p className="text-horizon-slate leading-relaxed mb-4">
              If you have questions about this Privacy Policy or wish to exercise your California privacy rights, please contact us:
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
