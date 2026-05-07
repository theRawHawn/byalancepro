import SEO from '../SEO';
import React from 'react';
import { Calculator, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage, translations } from "../../context/LanguageContext";
import { motion } from 'motion/react';

function AccountingIllustration() {
  return (
    <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" aria-label="Accounting & Bookkeeping Illustration">
      <rect width="480" height="320" rx="16" fill="#F3F4F6" />
      <rect x="100" y="60" width="280" height="200" rx="12" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2"/>
      <path d="M240 60 V 260" stroke="#E5E7EB" strokeWidth="1.5" />
      <text x="170" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#111827">Debits</text>
      <text x="310" y="85" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#111827">Credits</text>
      <rect x="120" y="100" width="100" height="8" rx="4" fill="#E5E7EB" />
      <rect x="260" y="100" width="100" height="8" rx="4" fill="#E5E7EB" />
      <rect x="120" y="120" width="80" height="8" rx="4" fill="#E5E7EB" />
      <rect x="260" y="120" width="100" height="8" rx="4" fill="#E5E7EB" />
      <rect x="120" y="140" width="100" height="8" rx="4" fill="#E5E7EB" />
      <rect x="260" y="140" width="70" height="8" rx="4" fill="#E5E7EB" />
      <line x1="110" y1="230" x2="370" y2="230" stroke="#D1D5DB" strokeWidth="2"/>
      <rect x="160" y="240" width="40" height="10" rx="5" fill="#16A34A" />
      <rect x="290" y="240" width="40" height="10" rx="5" fill="#16A34A" />
      <circle cx="60" cy="100" r="30" fill="#3B82F6" />
      <path d="M50 100 L 60 110 L 70 90" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="420" cy="220" r="30" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2" />
      <path d="M410,225 a15,15 0 0,1 20,0" fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="416" cy="218" r="2" fill="#3B82F6"/>
      <circle cx="424" cy="218" r="2" fill="#3B82F6"/>
    </svg>
  );
}

const Accounting = () => {
  const { t } = useLanguage();
  const data = t.serviceDetail?.accounting || translations.en.serviceDetail.accounting;

  return (
    <>
      <SEO
        title={`${data.title} | Byalance`}
        description={data.desc}
        keywords="accounting, bookkeeping, financial services, small business accounting, chartered accountant"
      />
      <div className="min-h-screen bg-gray-50 pt-20">

        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-50 to-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-indigo-600 rounded-xl text-white shadow-lg shadow-indigo-100">
                      <Calculator className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-indigo-600 uppercase tracking-wide">{t.services.title}</p>
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{data.title}</h1>
                    </div>
                  </div>
                  <p className="text-xl text-gray-600 max-w-3xl mt-4 leading-relaxed">
                    {data.desc}
                  </p>
                </motion.div>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden md:block"
              >
                <AccountingIllustration />
              </motion.div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">

            {/* What's Included */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.common.whatsIncluded}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {data.features.map((f: string) => (
                  <div key={f} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why It Matters */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.whyTitle}</h2>
              <div className="text-gray-600 whitespace-pre-line leading-relaxed">
                {data.whyDesc}
              </div>
            </motion.div>

            {/* Who Is This For */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.whoTitle}</h2>
              <ul className="space-y-4">
                {data.whoItems.map((w: string) => (
                  <li key={w} className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-3 h-3 text-indigo-600" />
                    </div>
                    {w}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* CTA Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-2xl border-2 border-indigo-600 p-6 sticky top-24 shadow-xl shadow-indigo-100/50"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t.common.getStartedToday}</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {data.ctaDesc || "Book a free consultation. We'll review your current setup and recommend the right plan."}
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/917406296116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 text-white px-4 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-100"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5 brightness-0 invert" />
                  {t.common.chatWhatsapp}
                </a>
                <Link
                  to="/#contact"
                  className="block w-full text-center border border-slate-200 text-slate-900 px-4 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all"
                >
                  {t.common.sendEnquiry}
                </Link>
              </div>
            </motion.div>

            {/* Related Services */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t.common.relatedServices}</h3>
              <ul className="space-y-3">
                {[
                  { label: t.serviceDetail?.gst?.title || "GST Services",      to: "/services/gst-services"       },
                  { label: t.serviceDetail?.tds?.title || "TDS Services",       to: "/services/tds-services"       },
                  { label: t.serviceDetail?.payroll?.title || "Payroll Processing", to: "/services/payroll-processing" },
                  { label: t.serviceDetail?.itr?.title || "ITR Services",       to: "/services/itr-services"       },
                ].map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-2 group">
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Accounting;
