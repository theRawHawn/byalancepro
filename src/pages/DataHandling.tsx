
export default function DataHandlingPage() {
  return (
    <div className="bg-gray-100">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="max-w-none">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Data Handling Policy</h1>
            <p className="text-sm text-gray-600 mb-6">
              <strong>Effective Date:</strong> 1 June 2026
              <br />
              <strong>Last Updated:</strong> 1 June 2026
            </p>
            <p className="text-gray-700">
              This Data Handling Policy describes the specific practices Byalance follows when collecting, processing, storing, and disposing of client financial and business data. It is intended to give clients full clarity and confidence in how their sensitive information is managed.
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">1. Scope</h2>
            <p className="text-gray-700">This policy applies to all data shared with Byalance by clients in connection with:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Accounting and bookkeeping services</li>
              <li>GST filing and compliance</li>
              <li>TDS returns and management</li>
              <li>Payroll processing</li>
              <li>ITR filing and tax advisory</li>
            </ul>
            <p className="text-gray-700 mt-4">It covers data shared via WhatsApp, email, physical documents, or any other channel.</p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">2. Data Collection Standards</h2>
            <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">2.1 Minimum Necessary Data</h3>
            <p className="text-gray-700">We collect only the data required to perform the specific service you have engaged us for. We do not request documents or information beyond what is operationally necessary.</p>
            <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">2.2 How You Share Data with Us</h3>
            <p className="text-gray-700">Clients typically share data through:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>WhatsApp Business</strong> — invoices, bank statements, vouchers in image or PDF format</li>
              <li><strong>Email</strong> — documents, reports, and authorisation letters</li>
              <li><strong>Shared cloud folders</strong> — for bulk document uploads (Google Drive or similar, as agreed)</li>
            </ul>
            <p className="text-gray-700 mt-4">We do not ask clients to share government portal passwords unless absolutely necessary for filing, and in such cases, we strongly recommend changing the password immediately after the filing is complete.</p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">3. Data Storage</h2>
            <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">3.1 Where Data is Stored</h3>
            <p className="text-gray-700">All client files are stored on <strong>Google Workspace</strong> (Google Drive), which provides:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>AES-256 encryption at rest</li>
              <li>TLS encryption in transit</li>
              <li>Access logs and audit trails</li>
            </ul>
            <p className="text-gray-700 mt-4">No client data is stored on personal devices or local hard drives without encryption.</p>
            <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">3.2 Access Controls</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Each client&apos;s folder is accessible only to the team member(s) assigned to that client</li>
              <li>Access is revoked immediately upon disengagement or staff change</li>
              <li>File sharing links are set to &quot;restricted&quot; — no public access</li>
            </ul>
            <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">3.3 Physical Documents</h3>
            <p className="text-gray-700">Physical documents received from clients (if any) are scanned and digitised within 2 business days, stored securely, and returned or destroyed as per client instructions.</p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">4. Data Processing Standards</h2>
            <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">4.1 Who Processes Your Data</h3>
            <p className="text-gray-700">Your data is handled by:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Byalance&apos;s core accounting team members, directly responsible for your account</li>
              <li>Contract accountants, where applicable — bound by the same NDA and confidentiality obligations</li>
            </ul>
            <p className="text-gray-700 mt-4">No client data is shared with third parties for outsourcing without explicit client consent.</p>
            <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">4.2 Government Portal Access</h3>
            <p className="text-gray-700">When filing on your behalf on the GST Portal, Income Tax Portal, TRACES, MCA, or EPFO/ESIC:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>We access portals using credentials authorised by you</li>
              <li>We complete only the specific filing tasks you have engaged us for</li>
              <li>Session is closed immediately after task completion</li>
              <li>Credentials are not stored in our systems</li>
            </ul>
            <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">4.3 Accuracy and Review</h3>
            <p className="text-gray-700">All entries, reconciliations, and filings are reviewed before submission. Clients are sent a confirmation or summary for approval before any return is filed on their behalf.</p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">5. Non-Disclosure and Confidentiality</h2>
            <p className="text-gray-700">Before any data exchange begins:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>A <strong>Non-Disclosure Agreement (NDA)</strong> is signed between Byalance and the client</li>
              <li>The NDA covers all financial, operational, and personal data shared during the engagement</li>
              <li>All team members handling client data are bound by confidentiality clauses in their employment or contractor agreements</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">6. Data Retention and Disposal</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 mt-4">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Retention Period</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">GST-related records</td>
                    <td className="px-6 py-4 whitespace-nowrap">8 years from filing date</td>
                    <td className="px-6 py-4 whitespace-nowrap">GST Act, 2017</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Income tax records</td>
                    <td className="px-6 py-4 whitespace-nowrap">8 years from assessment year</td>
                    <td className="px-6 py-4 whitespace-nowrap">Income Tax Act, 1961</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">TDS records</td>
                    <td className="px-6 py-4 whitespace-nowrap">7 years</td>
                    <td className="px-6 py-4 whitespace-nowrap">TDS rules under IT Act</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Payroll records</td>
                    <td className="px-6 py-4 whitespace-nowrap">8 years</td>
                    <td className="px-6 py-4 whitespace-nowrap">Labour law and IT Act</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Employee PAN / Aadhaar</td>
                    <td className="px-6 py-4 whitespace-nowrap">Duration of engagement + 3 years</td>
                    <td className="px-6 py-4 whitespace-nowrap">Statutory requirement</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Website inquiry data</td>
                    <td className="px-6 py-4 whitespace-nowrap">2 years from last contact</td>
                    <td className="px-6 py-4 whitespace-nowrap">Internal policy</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mt-4">After the applicable retention period:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Digital files are permanently deleted from all storage locations</li>
              <li>Physical documents are shredded</li>
              <li>Clients can request a certificate of destruction upon request</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">7. Data Breach Response</h2>
            <p className="text-gray-700">In the event of an actual or suspected data breach:</p>
            <ol className="list-decimal list-inside text-gray-700">
              <li>We will contain and assess the breach within <strong>24 hours</strong> of discovery</li>
              <li>Affected clients will be notified within <strong>72 hours</strong>, as required under the DPDP Act, 2023</li>
              <li>We will report to the Data Protection Board of India if required by law</li>
              <li>A written incident report will be provided to affected clients on request</li>
            </ol>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">8. Client Rights Over Their Data</h2>
            <p className="text-gray-700">You may, at any time:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Request a copy</strong> of all data we hold related to your business</li>
              <li><strong>Request correction</strong> of any inaccurate data</li>
              <li><strong>Withdraw consent</strong> and request deletion, subject to statutory retention requirements</li>
              <li><strong>Request transfer</strong> of your data to another service provider</li>
              <li><strong>Raise a grievance</strong> if you believe this policy has been violated</li>
            </ul>
            <p className="text-gray-700 mt-4">All requests must be sent to <strong>info@byalance.in</strong> with your registered business name. We will acknowledge within 3 business days and resolve within 15 business days.</p>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">9. Compliance Framework</h2>
            <p className="text-gray-700">Byalance&apos;s data handling practices are aligned with:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Information Technology Act, 2000</strong> and IT (Amendment) Act, 2008</li>
              <li><strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong></li>
              <li><strong>IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong></li>
              <li>Applicable provisions of the <strong>GST Act, 2017</strong> and <strong>Income Tax Act, 1961</strong> regarding record retention</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">10. Contact for Data Matters</h2>
            <p className="text-gray-700">
              <strong>Data Handling Queries:</strong>
              <br />
              Email: info@byalance.in
              <br />
              Phone: +91 74062 96116
              <br />
              Address: 4th Phase, JP Nagar, Bengaluru, Karnataka
            </p>

            <p className="text-gray-700 mt-8">
              <em>This policy is reviewed annually and updated as required. Last reviewed: June 2026.</em>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
