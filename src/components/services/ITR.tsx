import SEO from '../SEO';
import React from 'react';
import { FileText, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage, translations } from "../../context/LanguageContext";
import { motion } from 'motion/react';

function ItrIllustration() {
  return (
    <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" aria-label="ITR Filing Illustration">
      <rect width="480" height="320" rx="16" fill="#F0F9FF" />
      <rect x="100" y="50" width="280" height="220" rx="4" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="2" />
      <rect x="120" y="75" width="100" height="12" rx="6" fill="#0EA5E9" />
      <rect x="300" y="75" width="60" height="12" rx="6" fill="#E0F2FE" />
      <rect x="120" y="110" width="240" height="1" fill="#F1F5F9" />
      <rect x="120" y="125" width="140" height="8" rx="4" fill="#94A3B8" />
      <rect x="320" y="125" width="40" height="8" rx="4" fill="#94A3B8" />
      <rect x="120" y="145" width="120" height="8" rx="4" fill="#94A3B8" />
      <rect x="320" y="145" width="40" height="8" rx="4" fill="#94A3B8" />
      <rect x="120" y="165" width="160" height="8" rx="4" fill="#94A3B8" />
      <rect x="320" y="165" width="40" height="8" rx="4" fill="#94A3B8" />
      <rect x="120" y="195" width="240" height="1" fill="#F1F5F9" />
      <rect x="120" y="215" width="100" height="12" rx="6" fill="#0EA5E9" fillOpacity="0.2" />
      <rect x="280" y="210" width="80" height="24" rx="4" fill="#0EA5E9" />
      <text x="320" y="226" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">FILED</text>
      <circle cx="80" cy="80" r="25" fill="#FFFFFF" shadow="0 10px 15px -3px rgba(0, 0, 0, 0.1)" />
      <path d="M72 80 L 78 86 L 88 74" stroke="#0EA5E9" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const ITR = () => {
  const { t } = useLanguage();
  const data = t.serviceDetail?.itr || translations.en.serviceDetail.itr;

  return (
    <>
      <SEO
        title={`${data.title} | Byalance`}
        description={data.desc}
        keywords="itr filing, income tax return, itr services, tax filing, e-filing, income tax consultant"
      />
      <div className="min-h-screen bg-gray-50 pt-20">

        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-100">
                      <FileText className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">{t.services.title}</p>
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
                <ItrIllustration />
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
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-blue-600" />
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
                    <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-3 h-3 text-blue-600" />
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
              className="bg-white rounded-2xl border-2 border-blue-600 p-6 sticky top-24 shadow-xl shadow-blue-100/50"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t.common.getStartedToday}</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {data.ctaDesc || "Filing your income tax return on time and accurately is easy with Byalance."}
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
                  { label: t.serviceDetail?.accounting?.title || "Accounting & Bookkeeping", to: "/services/accounting-bookkeeping" },
                  { label: t.serviceDetail?.gst?.title || "GST Services",       to: "/services/gst-services"       },
                  { label: t.serviceDetail?.tds?.title || "TDS Services",       to: "/services/tds-services"       },
                  { label: t.serviceDetail?.payroll?.title || "Payroll Processing", to: "/services/payroll-processing" },
                ].map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-2 group">
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

export default ITR;
