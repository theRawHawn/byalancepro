import { Check } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "../context/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.sections.pricing}</h2>
          <p className="text-xl text-gray-600">{t.sections.pricingSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Starter */}
          <Card className="hover:shadow-lg transition-shadow border-slate-100 h-full">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.pricing.starter}</h3>
                <div className="text-2xl font-bold text-indigo-600 mb-1">{t.pricing.starterPrice}</div>
                <p className="text-gray-600 text-sm">{t.pricing.perMonth}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {t.pricing.starterFeatures.map((f: string) => (
                  <li key={f} className="flex items-center text-gray-700">
                    <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={scrollToContact} 
                className="w-full bg-white border border-slate-200 text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-slate-50 transition-colors"
              >
                {t.cta.chooseStarter}
              </button>
            </CardContent>
          </Card>

          {/* Growth — Recommended */}
          <Card className="border-2 border-indigo-600 shadow-lg relative h-full">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                {t.pricing.recommended}
              </span>
            </div>
            <CardContent className="p-8 pt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.pricing.growth}</h3>
                <div className="text-2xl font-bold text-indigo-600 mb-1">{t.pricing.growthPrice}</div>
                <p className="text-gray-600 text-sm">{t.pricing.perMonth}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {t.pricing.growthFeatures.map((f: string) => (
                  <li key={f} className="flex items-center text-gray-700">
                    <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={scrollToContact} 
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-100"
              >
                {t.cta.chooseGrowth}
              </button>
            </CardContent>
          </Card>

          {/* Pro */}
          <Card className="hover:shadow-lg transition-shadow border-slate-100 h-full">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.pricing.pro}</h3>
                <div className="text-2xl font-bold text-indigo-600 mb-1">{t.pricing.proPrice}</div>
                <p className="text-gray-600 text-sm">{t.pricing.perMonth}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {t.pricing.proFeatures.map((f: string) => (
                  <li key={f} className="flex items-center text-gray-700">
                    <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={scrollToContact} 
                className="w-full bg-white border border-slate-200 text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-slate-50 transition-colors"
              >
                {t.cta.choosePro}
              </button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-indigo-600 mb-3">{t.pricing.notIdeal}</h3>
          <p className="text-gray-600 mb-6">{t.pricing.notIdealDesc}</p>
          <button 
            onClick={scrollToContact} 
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-xl shadow-indigo-100"
          >
            {t.cta.contactCustom}
          </button>
        </div>
      </div>
    </section>
  );
}
