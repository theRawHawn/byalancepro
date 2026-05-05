import SEO from '../SEO';
import React from 'react';
import { Users, Check, ArrowRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";
import { useLanguage, translations } from "../../context/LanguageContext";

function PayrollIllustration() {
  return (
    <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" aria-label="Payroll Processing Illustration">
      <rect width="480" height="320" rx="16" fill="#F3F4F6" />

      {/* Central element: Payslip */}
      <rect x="140" y="60" width="200" height="200" rx="12" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2"/>
      <circle cx="240" cy="100" r="25" fill="#6366f1"/>
      <path d="M230 100 h 20 M240 90 v 20" stroke="#FFFFFF" strokeWidth="4"/>
      <text x="240" y="140" textAnchor="middle" fontSize="12" fontWeight="bold">SALARY SLIP</text>

      {/* Earnings and Deductions */}
      <rect x="160" y="160" width="60" height="6" rx="2" fill="#16A34A"/>
      <rect x="160" y="175" width="50" height="6" rx="2" fill="#16A34A"/>
      <text x="150" y="150" fontSize="10" fill="#16A34A">Earnings</text>

      <rect x="260" y="160" width="60" height="6" rx="2" fill="#EF4444"/>
      <rect x="260" y="175" width="40" height="6" rx="2" fill="#EF4444"/>
      <text x="320" y="150" fontSize="10" fill="#EF4444" textAnchor="end">Deductions</text>
      
      <line x1="150" y1="190" x2="330" y2="190" stroke="#D1D5DB" strokeWidth="1.5" />
      <text x="240" y="210" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#111827">Net Pay: ₹XXX</text>


      {/* Statutory Icons */}
      <g transform="translate(40, 80)">
        <rect width="80" height="50" rx="8" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" />
        <text x="40" y="30" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#6366f1">PF</text>
        <text x="40" y="45" textAnchor="middle" fontSize="8" fill="#6B7280">Provident Fund</text>
      </g>

      <g transform="translate(360, 80)">
        <rect width="80" height="50" rx="8" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" />
        <text x="40" y="30" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#6366f1">ESI</text>
        <text x="40" y="45" textAnchor="middle" fontSize="8" fill="#6B7280">State Insurance</text>
      </g>

      <g transform="translate(40, 200)">
        <rect width="80" height="50" rx="8" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" />
        <text x="40" y="30" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#6366f1">PT</text>
        <text x="40" y="45" textAnchor="middle" fontSize="8" fill="#6B7280">Professional Tax</text>
      </g>

      <g transform="translate(360, 200)">
        <rect width="80" height="50" rx="8" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1.5" />
        <text x="40" y="30" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#EF4444">TDS</text>
        <text x="40" y="45" textAnchor="middle" fontSize="8" fill="#6B7280">Income Tax</text>
      </g>

    </svg>
  );
}

const Payroll = () => {
  const { t } = useLanguage();
  const data = t.serviceDetail?.payroll || translations.en.serviceDetail.payroll;

  return (
    <>
      <SEO
        title="Payroll Processing Services | Byalance"
        description="Streamline your payroll process with our reliable and accurate payroll services. We manage everything from salary processing to compliance."
        // Add your comma-separated keywords for the Payroll page here
        keywords="payroll processing, payroll services, salary processing, payroll compliance, payroll outsourcing"
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
                      <p className="text-sm font-medium text-indigo-600 uppercase tracking-wide">{t.nav.services}</p>
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{data.title}</h1>
                    </div>
                  </div>
                  <p className="text-xl text-gray-600 max-w-3xl mt-4 leading-relaxed">
                    {data.desc}
                  </p>
              </div>
              <div className="hidden md:block">
                <PayrollIllustration />
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
                  Share your employee headcount and CTC details. We'll set up your payroll structure
                  and take over from month one.
                </p>
                <a
                  href="https://wa.me/917406296116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-green-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors mb-3"
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
                    { label: t.services?.items[2]?.title || "GST Services",             href: "/services/gst-services"           },
                    { label: t.services?.items[1]?.title || "ITR Services",             href: "/services/itr-services"           },
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
    </>
  );
};

export default Payroll;
