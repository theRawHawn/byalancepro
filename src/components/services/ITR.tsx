import React from 'react';
import { FileSpreadsheet, Check, ArrowRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";
import { useLanguage, translations } from "../../context/LanguageContext";

function ItrIllustration() {
  return (
    <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" aria-label="ITR Services Illustration">
      <rect width="480" height="320" rx="16" fill="#F3F4F6" />
      
      {/* Main document representing ITR form */}
      <rect x="120" y="60" width="240" height="200" rx="12" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2"/>
      <rect x="135" y="75" width="80" height="12" rx="4" fill="#6366f1" />
      <text x="225" y="86" fontSize="10" fill="#6B7280">Income Tax Return</text>

      {/* Abstract lines for form content */}
      {[100, 115, 130, 145, 160].map(y => (
        <rect key={y} x="140" y={y} width="200" height="6" rx="3" fill="#E5E7EB" />
      ))}
      <rect x="140" y="160" width="120" height="6" rx="3" fill="#E5E7EB" />

      {/* Financial icons */}
      {/* Rupee symbol for income */}
      <circle cx="80" cy="120" r="30" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2"/>
      <text x="80" y="128" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#16A34A">₹</text>
      <text x="80" y="100" textAnchor="middle" fontSize="10" fill="#16A34A">INCOME</text>

      {/* Shield for tax savings/deductions */}
      <path d="M400 100 L 400 140 C 400 155, 380 165, 360 165 C 340 165, 320 155, 320 140 L 320 100 L 360 80 Z" fill="#6366f1"/>
      <text x="360" y="125" textAnchor="middle" fontSize="18" fill="#FFFFFF" fontWeight="bold">80C</text>
      <text x="360" y="145" textAnchor="middle" fontSize="10" fill="#FFFFFF">DEDUCTIONS</text>

      {/* Official stamp/seal */}
      <circle cx="240" cy="220" r="35" fill="#6366f1" />
      <path d="M225 220 l 10 12 l 20 -20" stroke="#FFFFFF" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="240" y="260" textAnchor="middle" fontSize="9" fill="#FFFFFF" fontWeight="bold">VERIFIED</text>

      {/* Smaller floating elements */}
      <rect x="60" y="230" width="50" height="30" rx="4" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" />
      <text x="85" y="248" textAnchor="middle" fontSize="8">PAN</text>

      <rect x="370" y="200" width="50" height="30" rx="4" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" />
      <text x="395" y="218" textAnchor="middle" fontSize="8">26AS</text>

    </svg>
  );
}

const ITR = () => {
  const { t } = useLanguage();
  const data = t.serviceDetail?.itr || translations.en.serviceDetail.itr;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="bg-gradient-to-br from-indigo-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-600 rounded-xl text-white">
                  <FileSpreadsheet className="w-8 h-8" />
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
              <ItrIllustration />
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
                Share your Form 16 or income details. We'll handle the rest and file before the
                deadline.
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
                  { label: t.services?.items[2]?.title || "GST Services",             href: "/services/gst-services"           },
                  { label: t.services?.items[3]?.title || "TDS Services",             href: "/services/tds-services"           },
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

export default ITR;
