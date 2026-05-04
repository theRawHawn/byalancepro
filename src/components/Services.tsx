import React from 'react';
import { Calculator, FileText, Landmark, Users, Receipt } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function Services() {
  const { t } = useLanguage();

  const serviceIcons = [Calculator, FileText, Landmark, Receipt, Users];
  const serviceLinks = [
    '/services/accounting-bookkeeping',
    '/services/itr-services',
    '/services/gst-services',
    '/services/tds-services',
    '/services/payroll-processing'
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 gap-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6">{t.services.title}</h2>
            <p className="text-slate-600 text-base md:text-lg">{t.services.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
          {t.services.items.map((service: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row items-start gap-6 p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] hover:shadow-xl hover:border-indigo-100 transition-all duration-300 relative overflow-hidden"
            >
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm shrink-0">
                {serviceIcons[index] ? React.createElement(serviceIcons[index], { size: 32 }) : <Calculator size={32} />}
              </div>

              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900">{service.title}</h3>
                  <Link 
                    to={serviceLinks[index] || '#'}
                    className="hidden md:inline-flex items-center px-4 py-1.5 rounded-lg border border-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white text-xs font-bold transition-all"
                  >
                    Learn More <span className="ml-2">→</span>
                  </Link>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-6 max-w-3xl leading-relaxed whitespace-normal">{service.text}</p>
                
                {service.features && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 pt-6 border-t border-slate-50">
                    {service.features.map((feature: string, fIndex: number) => (
                      <div key={fIndex} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-xs md:text-sm font-medium text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 md:hidden">
                  <Link 
                    to={serviceLinks[index] || '#'}
                    className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    Learn More <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 md:p-10 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-indigo-100 mt-4"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 shrink-0">
                <Users size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">{t.services.ctaTitle}</h3>
                <p className="text-slate-400 text-sm max-w-sm">{t.services.ctaText}</p>
              </div>
            </div>
            <a 
              href="https://wa.me/917406296116"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-indigo-50 transition-all shrink-0"
            >
              {t.services.ctaButton}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
