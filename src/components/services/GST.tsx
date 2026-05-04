import React from 'react';
import { FileText, Check, ArrowRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";
import { useLanguage, translations } from "../../context/LanguageContext";

function GstIllustration() {
  return (
    <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" aria-label="GST Services Illustration">
      <rect width="480" height="320" rx="16" fill="#F3F4F6" />
      
      {/* Central building representing government/tax authority */}
      <rect x="190" y="80" width="100" height="160" rx="8" fill="#6B7280" />
      <path d="M190 80 L 240 40 L 290 80 Z" fill="#4B5563" />
      <rect x="225" y="100" width="30" height="60" rx="4" fill="#F9FAFB" />
      <circle cx="240" cy="120" r="5" fill="#6B7280"/>

      {/* Arrows representing flow of goods/services and taxes */}
      <path d="M60 180 C 100 120, 140 120, 180 180" fill="none" stroke="#6366f1" strokeWidth="8" strokeDasharray="12 6"/>
      <path d="M70 185 l -15 0 l 8 -12 z" fill="#6366f1" />

      <path d="M300 180 C 340 240, 380 240, 420 180" fill="none" stroke="#10B981" strokeWidth="8" strokeDasharray="12 6"/>
      <path d="M410 175 l 15 0 l -8 12 z" fill="#10B981" />

      {/* Documents representing filings */}
      <rect x="40" y="220" width="80" height="60" rx="6" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2"/>
      <rect x="50" y="230" width="60" height="4" rx="2" fill="#D1D5DB" />
      <rect x="50" y="240" width="40" height="4" rx="2" fill="#D1D5DB" />
      <text x="80" y="265" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#6366f1">GSTR-1</text>

      <rect x="360" y="100" width="80" height="60" rx="6" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2"/>
      <rect x="370" y="110" width="60" height="4" rx="2" fill="#D1D5DB" />
      <rect x="370" y="120" width="50" height="4" rx="2" fill="#D1D5DB" />
      <text x="400" y="145" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#10B981">GSTR-3B</text>

      {/* Iconography */}
      <circle cx="120" cy="100" r="24" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2" />
      <text x="120" y="108" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#6366f1">₹</text>
      <text x="112" y="95" textAnchor="middle" fontSize="10" fill="#6366f1">ITC</text>

       <circle cx="360" cy="250" r="24" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2" />
      <path d="M352 250 l 6 6 l 12 -12" stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <text x="360" y="270" textAnchor="middle" fontSize="8" fill="#10B981">COMPLIANT</text>

    </svg>
  );
}

const GST = () => {
  const { t } = useLanguage();
  const data = t.serviceDetail?.gst || translations.en.serviceDetail.gst;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="bg-gradient-to-br from-indigo-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="">
              <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-indigo-600 rounded-xl text-white">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-indigo-600 uppercase tracking-wide">{t.nav.services}</p>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{data.title}</h1>
                  </div>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mt-4 leading-relaxed">
                {data.desc}
              </p>
            </div>
            <div className="hidden md:block">
              <GstIllustration />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.common.whatsIncluded}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {data.features.map((f: string) => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.whyTitle}</h2>
              <div className="space-y-4">
                {data.whyDesc.split('\n\n').map((para: string, i: number) => (
                  <p key={i} className="text-gray-600 leading-relaxed text-lg">
                    {para}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.whoTitle}</h2>
              <ul className="space-y-3">
                {data.whoItems.map((w: string) => (
                  <li key={w} className="flex items-center gap-3 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-indigo-600 flex-shrink-0" />{w}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-2 border-indigo-600">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t.common.getStartedToday}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {data.ctaDesc}
              </p>
              <a
                href="https://wa.me/917406296116"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-green-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors mb-3"
              >
                {t.common.chatWhatsapp}
              </a>
              <Link to="/#contact" className="block w-full text-center border border-indigo-600 text-indigo-600 px-4 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
                {t.common.sendEnquiry}
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{t.common.relatedServices}</h3>
              <ul className="space-y-2">
                {[
                  { label: t.services?.items[0]?.title || "Accounting & Bookkeeping", href: "/services/accounting-bookkeeping" },
                  { label: t.services?.items[3]?.title || "TDS Services",             href: "/services/tds-services"           },
                  { label: t.services?.items[1]?.title || "ITR Services",             href: "/services/itr-services"           },
                  { label: t.services?.items[4]?.title || "Payroll Processing",       href: "/services/payroll-processing"     },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link to={href} className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1">
                      <ArrowRight className="w-3 h-3" />{label}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GST;
