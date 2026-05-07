import SEO from '../SEO';
import React from 'react';
import { Landmark, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage, translations } from "../../context/LanguageContext";
import { motion } from 'motion/react';

function GstIllustration() {
  return (
    <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" aria-label="GST Services Illustration">
      <rect width="480" height="320" rx="16" fill="#F8FAFC" />
      <rect x="60" y="40" width="360" height="240" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2"/>
      <rect x="60" y="40" width="360" height="40" rx="12" fill="#4F46E5" />
      <rect x="75" y="52" width="60" height="16" rx="4" fill="#FFFFFF" fillOpacity="0.2" />
      <circle cx="395" cy="60" r="10" fill="#FFFFFF" fillOpacity="0.2" />
      <rect x="80" y="100" width="320" height="120" rx="8" fill="#F1F5F9" />
      <rect x="100" y="120" width="120" height="8" rx="4" fill="#CBD5E1" />
      <rect x="260" y="120" width="120" height="8" rx="4" fill="#CBD5E1" />
      <rect x="100" y="140" width="280" height="1" fill="#E2E8F0" />
      <rect x="100" y="155" width="100" height="8" rx="4" fill="#94A3B8" />
      <rect x="300" y="155" width="80" height="8" rx="4" fill="#94A3B8" />
      <rect x="100" y="175" width="100" height="8" rx="4" fill="#94A3B8" />
      <rect x="300" y="175" width="80" height="12" rx="6" fill="#22C55E" />
      <rect x="100" y="195" width="100" height="8" rx="4" fill="#94A3B8" />
      <rect x="300" y="195" width="80" height="8" rx="4" fill="#94A3B8" />
      <circle cx="410" cy="100" r="25" fill="#4F46E5" />
      <path d="M400 100 L 407 107 L 420 93" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="40" y="220" width="80" height="60" rx="8" fill="#FFFFFF" shadow="0 10px 15px -3px rgba(0, 0, 0, 0.1)" />
      <rect x="50" y="235" width="60" height="6" rx="3" fill="#E2E8F0" />
      <rect x="50" y="250" width="40" height="6" rx="3" fill="#4F46E5" />
    </svg>
  );
}

const GST = () => {
  const { t } = useLanguage();
  const data = t.serviceDetail?.gst || translations.en.serviceDetail.gst;

  return (
    <>
      <SEO
        title={`${data.title} | Byalance`}
        description={data.desc}
        keywords="gst registration, gstr-1, gstr-3b, gst return filing, input tax credit, gst compliance"
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
                      <Landmark className="w-8 h-8" />
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
                <GstIllustration />
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
                {data.ctaDesc || "Stay compliant with Goods & Services Tax regulations. From registration to monthly filing and reconciliation."}
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

export default GST;
