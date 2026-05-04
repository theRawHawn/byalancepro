import React from 'react';
import { Calculator, Check, ArrowRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";
import { useLanguage, translations } from "../../context/LanguageContext";

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
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-600 rounded-xl text-white">
                  <Calculator className="w-8 h-8" />
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
              <AccountingIllustration />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main content */}
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

        {/* Sidebar CTA */}
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
                  { label: t.services?.items[2]?.title || "GST Services",      href: "/services/gst-services"            },
                  { label: t.services?.items[3]?.title || "TDS Services",       href: "/services/tds-services"            },
                  { label: t.services?.items[4]?.title || "Payroll Processing", href: "/services/payroll-processing"      },
                  { label: t.services?.items[1]?.title || "ITR Services",       href: "/services/itr-services"            },
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

export default Accounting;
