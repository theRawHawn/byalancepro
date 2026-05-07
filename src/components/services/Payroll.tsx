import SEO from '../SEO';
import React from 'react';
import { Users, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage, translations } from "../../context/LanguageContext";

function PayrollIllustration() {
  return (
    <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" aria-label="Payroll Services Illustration">
      <rect width="480" height="320" rx="16" fill="#F3F4F6" />
      <rect x="80" y="60" width="320" height="200" rx="12" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2"/>
      <rect x="80" y="60" width="320" height="44" rx="12" fill="#4F46E5" />
      <rect x="80" y="92" width="320" height="12" fill="#4F46E5" />
      <text x="240" y="88" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">Monthly Payroll</text>
      <rect x="100" y="122" width="60" height="8" rx="3" fill="#E5E7EB" />
      <rect x="180" y="122" width="60" height="8" rx="3" fill="#E5E7EB" />
      <rect x="260" y="122" width="60" height="8" rx="3" fill="#E5E7EB" />
      <rect x="340" y="122" width="40" height="8" rx="3" fill="#DBEAFE" />
      <line x1="95" y1="140" x2="385" y2="140" stroke="#F3F4F6" strokeWidth="1.5"/>
      {[0,1,2,3].map(i => (
        <g key={i}>
          <circle cx="115" cy={158 + i*28} r="10" fill="#E5E7EB"/>
          <rect x="135" y={152 + i*28} width="70" height="8" rx="3" fill="#E5E7EB" />
          <rect x="220" y={152 + i*28} width="50" height="8" rx="3" fill="#E5E7EB" />
          <rect x="285" y={152 + i*28} width="40" height="8" rx="3" fill="#E5E7EB" />
          <rect x="340" y={152 + i*28} width="40" height="8" rx="3" fill="#D1FAE5" />
        </g>
      ))}
      <circle cx="60" cy="160" r="28" fill="#4F46E5"/>
      <path d="M50 160 l6 6 l14 -14" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="420" cy="160" r="28" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2"/>
      <text x="420" y="155" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#4B5563">PF/ESI</text>
      <text x="420" y="168" textAnchor="middle" fontSize="9" fill="#6B7280">Filed</text>
      <path d="M412 175 l6 5 l10 -10" stroke="#16A34A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

const Payroll = () => {
  const { t } = useLanguage();
  const data = t.serviceDetail?.payroll || translations.en.serviceDetail.payroll;
  const common = t.common || translations.en.common;
  const services = t.services?.items || translations.en.services.items;

  return (
    <>
      <SEO
        title="Payroll Processing Services | Byalance"
        description="Complete payroll management with accurate calculations and statutory compliance — PF, ESI, PT, TDS and more."
        keywords="payroll processing, payroll services, PF ESI filing, salary processing, payroll compliance India"
      />
      <div className="min-h-screen bg-gray-50 pt-20">
        <section className="bg-gradient-to-br from-indigo-50 to-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-indigo-600 rounded-xl text-white">
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-indigo-600 uppercase tracking-wide">{t.nav?.services || 'Services'}</p>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{data.title}</h1>
                  </div>
                </div>
                <p className="text-xl text-gray-600 max-w-3xl mt-4">{data.desc}</p>
              </div>
              <div className="hidden md:block"><PayrollIllustration /></div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{common.whatsIncluded}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {data.features.map((f: string) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.whyTitle}</h2>
              {data.whyDesc.split('\n\n').map((para: string, i: number) => (
                <p key={i} className="text-gray-600 mb-4 last:mb-0">{para}</p>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.whoTitle}</h2>
              <ul className="space-y-3">
                {data.whoItems.map((w: string) => (
                  <li key={w} className="flex items-center gap-3 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-indigo-600 flex-shrink-0" />{w}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl border-2 border-indigo-600 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{common.getStartedToday}</h3>
              <p className="text-gray-600 text-sm mb-4">{data.ctaDesc}</p>
              <a href="https://wa.me/917406296116" target="_blank" rel="noopener noreferrer"
                className="block w-full text-center bg-green-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors mb-3">
                {common.chatWhatsapp}
              </a>
              <Link to="/#contact"
                className="block w-full text-center border border-indigo-600 text-indigo-600 px-4 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
                {common.sendEnquiry}
              </Link>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{common.relatedServices}</h3>
              <ul className="space-y-2">
                {[
                  { label: services[0]?.title, to: "/services/accounting-bookkeeping" },
                  { label: services[2]?.title, to: "/services/gst-services" },
                  { label: services[3]?.title, to: "/services/tds-services" },
                  { label: services[1]?.title, to: "/services/itr-services" },
                ].map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1">
                      <ArrowRight className="w-3 h-3" />{label}
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

export default Payroll;
