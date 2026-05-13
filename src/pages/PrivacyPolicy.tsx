
export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-100">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="prose lg:prose-xl prose-headings:text-blue-600 max-w-none">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Privacy Policy</h1>
            <p className="text-sm text-gray-600 mb-6">
              <strong>Effective Date:</strong> 1 June 2026
              <br />
              <strong>Last Updated:</strong> 1 June 2026
            </p>
            <p className="text-gray-700">
              Byalance (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting the privacy of our clients and website visitors. This Privacy Policy explains what personal and financial data we collect, how we use it, and how we protect it. By using our services or website, you agree to the practices described in this policy.
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">1. Who We Are</h2>
            <p className="text-gray-700">
              Byalance is a virtual accounting and compliance services firm registered in India, providing bookkeeping, GST filing, TDS management, payroll processing, and ITR services to businesses across India.
            </p>
            <p className="text-gray-700">
              <strong>Contact:</strong>
              <br />
              Email: info@byalance.in
              <br />
              Phone: +91 74062 96116
              <br />
              Address: 4th Phase, JP Nagar, Bengaluru, Karnataka
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">2. What Data We Collect</h2>
            <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">2.1 Information You Provide</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Name, business name, mobile number, and email address (from inquiry forms or WhatsApp)</li>
              <li>PAN, GSTIN, TAN, and other tax identification details</li>
              <li>Bank statements, invoices, purchase and sales records, salary registers, and other financial documents</li>
              <li>Employee details (name, PAN, Aadhaar number, bank account) required for payroll and TDS processing</li>
              <li>Login credentials or OTPs shared voluntarily for filing purposes</li>
            </ul>
            <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">2.2 Information We Collect Automatically</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Browser type, device type, IP address, and pages visited on our website (byalance.vercel.app)</li>
              <li>Cookies and session data for website analytics (no advertising cookies are used)</li>
            </ul>
            <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">2.3 Information from Third Parties</h3>
            <p className="text-gray-700">Data from government portals such as GST Portal, Income Tax Portal, and TRACES, accessed on your behalf during service delivery</p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">3. How We Use Your Data</h2>
            <p className="text-gray-700">We use your data solely to:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Deliver accounting, GST, TDS, payroll, and ITR services you have engaged us for</li>
              <li>Communicate with you via WhatsApp, email, or phone regarding your compliance and deliverables</li>
              <li>Meet statutory obligations under the Income Tax Act 1961, GST Act 2017, and other applicable laws</li>
              <li>Generate financial reports, salary slips, and compliance filings on your behalf</li>
              <li>Respond to government notices or queries related to your filings</li>
              <li>Improve our internal processes and service quality</li>
            </ul>
            <p className="text-gray-700 mt-4">We do not use your data for marketing purposes without explicit consent.</p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">4. How We Share Your Data</h2>
            <p className="text-gray-700">We do not sell, rent, or trade your personal or financial data to any third party.</p>
            <p className="text-gray-700 mt-4">We may share data only in the following limited circumstances:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Government portals</strong> — GST Portal, Income Tax Portal, TRACES, MCA, EPFO/ESIC — as required to complete your filings</li>
              <li><strong>Authorised team members</strong> — internal staff or contract accountants working directly on your account, bound by confidentiality obligations</li>
              <li><strong>Legal compliance</strong> — if required by a court order, government authority, or applicable law</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">5. Data Security</h2>
            <p className="text-gray-700">We take the security of your financial data seriously. Our measures include:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>All documents shared with us are stored on password-protected, encrypted cloud storage</li>
              <li>Access to client files is restricted to assigned team members only</li>
              <li>Communications involving sensitive data are conducted over secure email or WhatsApp Business</li>
              <li>We do not store login credentials for government portals beyond the immediate filing session</li>
              <li>A signed Non-Disclosure Agreement (NDA) is in place with every client before data is exchanged</li>
            </ul>
            <p className="text-gray-700 mt-4">While we implement strong safeguards, no method of electronic transmission or storage is 100% secure. In the event of a data breach that affects your personal data, we will notify you promptly as required under applicable law.</p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">6. Data Retention</h2>
            <p className="text-gray-700">We retain your financial and compliance data for a minimum of <strong>8 years</strong> from the end of the relevant financial year, in line with the retention requirements under the Income Tax Act and GST Act. After this period, data is permanently deleted or anonymised.</p>
            <p className="text-gray-700 mt-4">You may request deletion of your data earlier, subject to our statutory obligations to retain certain records.</p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">7. Your Rights</h2>
            <p className="text-gray-700">Under the Digital Personal Data Protection Act, 2023 (DPDP Act) and applicable Indian law, you have the right to:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Access</strong> — request a summary of personal data we hold about you</li>
              <li><strong>Correction</strong> — request correction of inaccurate or incomplete data</li>
              <li><strong>Erasure</strong> — request deletion of your data, subject to legal retention requirements</li>
              <li><strong>Grievance Redressal</strong> — raise a complaint if you believe your data has been mishandled</li>
            </ul>
            <p className="text-gray-700 mt-4">To exercise any of these rights, email us at <strong>info@byalance.in</strong> with your registered name and business name. We will respond within 15 business days.</p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">8. Cookies</h2>
            <p className="text-gray-700">Our website uses minimal cookies strictly for website functionality and anonymous analytics. We do not use cookies for advertising or tracking across other websites. You can disable cookies in your browser settings without affecting your ability to use our services.</p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">9. Third-Party Links</h2>
            <p className="text-gray-700">Our website may contain links to external websites (e.g., GST Portal, MCA). We are not responsible for the privacy practices of those sites. We encourage you to read their privacy policies.</p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-700">We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised effective date. Continued use of our services after any change constitutes your acceptance of the updated policy. For significant changes, we will notify active clients by email or WhatsApp.</p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">11. Governing Law</h2>
            <p className="text-gray-700">This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000, the Digital Personal Data Protection Act, 2023, and all other applicable regulations.</p>

            <p className="text-gray-700 mt-8">
              <em>For any privacy-related queries or concerns, contact us at info@byalance.in</em>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
