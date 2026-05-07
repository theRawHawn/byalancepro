import SEO from '../SEO';
import React from 'react';
import { FileText, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage, translations } from "../../context/LanguageContext";

function ItrIllustration() {
  return (
    <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" aria-label="ITR Services Illustration">
      <rect width="480" height="320" rx="16" fill="#F3F4F6" />
      <rect x="140" y="40" width="200" height="240" rx="12" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2"/>
      <rect x="160" y="70" width="160" height="12" rx="4" fill="#E5E7EB" />
      <rect x="160" y="92" width="120" height="8" rx="4" fill="#E5E7EB" />
      <rect x="160" y="120" width="160" height="1.5" fill="#E5E7EB" />
      <text x="160" y="145" fontSize="10" fontWeight="bold" fill="#4B5563">Income Sources</text>
      <rect x="160" y="155" width="100" height="8" rx="4" fill="#DBEAFE" />
      <rect x="160" y="171" width="80" height="8" rx="4" fill="#DBEAFE" />
      <rect x="160" y="187" width="120" height="8" rx="4" fill="#DBEAFE" />
      <rect x="160" y="210" width="160" height="1.5" fill="#E5E7EB" />
      <text x="160" y="232" fontSize="10" fontWeight="bold" fill="#4B5563">Deductions</text>
      <rect x="160" y="242" width="90" height="8" rx="4" fill="#D1FAE5" />
      <circle cx="60" cy="80" r="28" fill="#4F46E5" />
      <text x="60" y="87" textAnchor="middle" fontSize="20" fill="white" fontWeight="bold">₹</text>
      <circle cx="420" cy="80" r="28" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2"/>
      <path d="M410 80 l8 8 l14 -16" stroke="#16A34A" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="50" y="180" width="70" height="40" rx="6" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5"/>
      <text x="85" y="196" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#4B5563">Form 16</text>
      <text x="85" y="210" textAnchor="middle" fontSize="7" fill="#6B7280">Salary</text>
      <rect x="360" y="180" width="70" height="40" rx="6" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5"/>
      <text x="395" y="196" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#4B5563">26AS</text>
      <text x="395" y="210" textAnchor="middle" fontSize="7" fill="#6B7280">Tax Credit</text>
      <rect x="50" y="240" width="70" height="40" rx="6" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5"/>
      <text x="85" y="256" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#4B5563">AIS / TIS</text>
      <text x="85" y="270" textAnchor="middle" fontSize="7" fill="#6B7280">Review</text>
      <rect x="360" y="240" width="70" height="40" rx="6" fill="#4F46E5" stroke="#4F46E5" strokeWidth="1.5"/>
      <text x="395" y="256" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white">ITR Filed</text>
      <path d="M388 265 l5 5 l9 -9" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

const ITR = () => {
  const { t } = useLanguage();
  const data = t.serviceDetail?.itr || translations.en.serviceDetail.itr;
  const common = t.common || translations.en.common;
  const services = t.services?.items || translations.en.services.items;

  return (
    <>
      <SEO
        title="ITR Services | Byalance"
        description="Expert ITR filing services for individuals and businesses. Accurate, on-time income tax return filing."
        keywords="ITR filing, income tax return, ITR services, tax filing India, Form 16, AIS, TIS"
      />
      <div className="min-h-screen bg-gray-50 pt-20">
        <section className="bg-gradient-to-br from-indigo-50 to-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-indigo-600 rounded-xl text-white">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-indigo-600 uppercase tracking-wide">{t.nav?.services || 'Services'}</p>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{data.title}</h1>
                  </div>
                </div>
                <p className="text-xl text-gray-600 max-w-3xl mt-4">{data.desc}</p>
              </div>
              <div className="hidden md:block"><ItrIllustration /></div>
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
                  { label: services[4]?.title, to: "/services/payroll-processing" },
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

export default ITR;
