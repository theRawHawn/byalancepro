import SEO from '../SEO';
import React from 'react';
import { Receipt, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage, translations } from "../../context/LanguageContext";

function TdsIllustration() {
  return (
    <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" aria-label="TDS Services Illustration">
      <rect width="480" height="320" rx="16" fill="#F3F4F6" />
      <rect x="80" y="120" width="320" height="80" rx="10" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2"/>
      <circle cx="130" cy="160" r="25" fill="#3B82F6" />
      <text x="130" y="165" textAnchor="middle" fontSize="20" fill="#FFFFFF" fontWeight="bold">₹</text>
      <text x="130" y="195" textAnchor="middle" fontSize="10">PAYMENT</text>
      <path d="M170 160 h 140" stroke="#9CA3AF" strokeWidth="4" strokeDasharray="8 4" />
      <g transform="translate(230, 150) scale(0.6)">
        <circle cx="15" cy="10" r="8" stroke="#EF4444" strokeWidth="3" fill="none"/>
        <circle cx="15" cy="30" r="8" stroke="#EF4444" strokeWidth="3" fill="none"/>
        <line x1="15" y1="10" x2="45" y2="40" stroke="#EF4444" strokeWidth="3"/>
        <line x1="15" y1="30" x2="45" y2="0" stroke="#EF4444" strokeWidth="3"/>
      </g>
      <text x="245" y="195" textAnchor="middle" fontSize="10" fill="#EF4444">TDS</text>
      <circle cx="350" cy="160" r="20" fill="#16A34A" />
      <text x="350" y="165" textAnchor="middle" fontSize="16" fill="#FFFFFF" fontWeight="bold">₹</text>
      <text x="350" y="195" textAnchor="middle" fontSize="10">PAYOUT</text>
      <g transform="translate(50, 40)">
        <rect width="80" height="50" rx="6" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" />
        <text x="40" y="25" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#4B5563">24Q</text>
        <text x="40" y="40" textAnchor="middle" fontSize="7" fill="#6B7280">Salary</text>
      </g>
      <g transform="translate(350, 40)">
        <rect width="80" height="50" rx="6" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" />
        <text x="40" y="25" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#4B5563">26Q</text>
        <text x="40" y="40" textAnchor="middle" fontSize="7" fill="#6B7280">Non-Salary</text>
      </g>
      <g transform="translate(50, 230)">
        <rect width="80" height="50" rx="6" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" />
        <text x="40" y="25" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#4B5563">Form 16</text>
        <text x="40" y="40" textAnchor="middle" fontSize="7" fill="#6B7280">Certificate</text>
      </g>
      <g transform="translate(350, 230)">
        <path d="M10 0 L 70 0 L 60 50 L 20 50 Z" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5"/>
        <text x="40" y="25" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#4B5563">27Q</text>
        <text x="40" y="40" textAnchor="middle" fontSize="7" fill="#6B7280">Non-Resident</text>
      </g>
    </svg>
  );
}

const TDS = () => {
  const { t } = useLanguage();
  const data = t.serviceDetail?.tds || translations.en.serviceDetail.tds;
  const common = t.common || translations.en.common;
  const services = t.services?.items || translations.en.services.items;

  return (
    <>
      <SEO
        title="TDS Services | Byalance"
        description="Complete TDS lifecycle management — from deduction to quarterly filings and certificate generation."
        keywords="TDS services, TDS filing, Form 24Q, Form 26Q, Form 16, TAN registration"
      />
      <div className="min-h-screen bg-gray-50 pt-20">
        <section className="bg-gradient-to-br from-indigo-50 to-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-indigo-600 rounded-xl text-white">
                    <Receipt className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-indigo-600 uppercase tracking-wide">{t.nav?.services || 'Services'}</p>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{data.title}</h1>
                  </div>
                </div>
                <p className="text-xl text-gray-600 max-w-3xl mt-4">{data.desc}</p>
              </div>
              <div className="hidden md:block"><TdsIllustration /></div>
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
                  { label: services[1]?.title, to: "/services/itr-services" },
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

export default TDS;
