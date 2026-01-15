import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-horizon-black">
      <Header />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-horizon-white mb-4">Privacy Policy</h1>
        <p className="text-gray-400 mb-12">Last updated: October 23, 2025</p>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 mb-8">
            <h2 className="text-2xl font-bold text-horizon-white mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Horizon Valley Services LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 mb-8">
            <h2 className="text-2xl font-bold text-horizon-white mb-4">Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Name, email address, phone number, and mailing address</li>
              <li>Property address and service details</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Communications with us, including support requests and feedback</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 mb-8">
            <h2 className="text-2xl font-bold text-horizon-white mb-4">How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your service requests and payments</li>
              <li>Send you confirmations, updates, and administrative messages</li>
              <li>Respond to your comments and questions</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 mb-8">
            <h2 className="text-2xl font-bold text-horizon-white mb-4">Information Sharing</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Service providers who perform services on our behalf</li>
              <li>Professional advisors, such as lawyers and accountants</li>
              <li>Law enforcement or government officials when required by law</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 mb-8">
            <h2 className="text-2xl font-bold text-horizon-white mb-4">Data Security</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We implement reasonable security measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 mb-8">
            <h2 className="text-2xl font-bold text-horizon-white mb-4">Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 mb-8">
            <h2 className="text-2xl font-bold text-horizon-white mb-4">Cookies and Tracking</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 mb-8">
            <h2 className="text-2xl font-bold text-horizon-white mb-4">Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 mb-8" id="california-privacy">
            <h2 className="text-2xl font-bold text-horizon-white mb-4">Your California Privacy Rights (CCPA)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with specific rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong>Right to Know:</strong> You can request details about the personal information we collect, use, disclose, or sell.</li>
              <li><strong>Right to Delete:</strong> You can request deletion of your personal information, subject to certain exceptions.</li>
              <li><strong>Right to Opt-Out:</strong> You have the right to opt out of the sale of your personal information.</li>
              <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights.</li>
            </ul>
            <div className="bg-blue-600/10 border border-blue-600/30 p-4 rounded-lg mb-4">
              <p className="text-horizon-white font-semibold mb-2">✓ We Do NOT Sell Your Personal Information</p>
              <p className="text-gray-300 text-sm">
                Horizon Valley Services does not sell personal information to third parties. We only share information with service providers necessary to operate our business (scheduling, payment processing, communication).
              </p>
            </div>
            <p className="text-gray-300 mb-4">
              To exercise any of your CCPA rights, please contact us using the information below.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 mt-8">
            <h2 className="text-2xl font-bold text-horizon-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or wish to exercise your California privacy rights, please contact us:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email:</strong> <a href="mailto:owners@horizonvalleycleaning.com" className="text-blue-400 hover:underline">owners@horizonvalleycleaning.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:5599602749" className="text-blue-400 hover:underline">(559) 960-2749</a></p>
              <p><strong>Address:</strong> Ukiah, CA 95482</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
