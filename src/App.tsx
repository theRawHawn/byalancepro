/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Accounting from './components/services/Accounting';
import GST from './components/services/GST';
import ITR from './components/services/ITR';
import Payroll from './components/services/Payroll';
import TDS from './components/services/TDS';
import { LanguageProvider, useLanguage, translations } from './context/LanguageContext';

// A generic service page component for demonstration
const ServicePage = ({ title, titleKey }: { title: string, titleKey?: string }) => {
  const { t } = useLanguage();
  // Service page might not be translated for all languages yet, so fallback to English if needed
  const serviceT = t.servicePage || translations.en.servicePage;
  
  // Use translated title if titleKey is provided, otherwise fallback to title
  const displayTitle = titleKey ? t.footer[titleKey] : title;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-40 pb-24 min-h-screen bg-white"
    >
      <div className="container-custom">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-indigo-600"></span>
            <span className="text-[10px] font-bold tracking-[0.25em] text-indigo-600 uppercase">
              {serviceT.badge}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 mb-10 leading-[1.1] tracking-tight">{displayTitle}</h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-16 font-medium">
            {serviceT.description.replace('{{title}}', displayTitle.toLowerCase())}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-display font-bold mb-8 text-slate-900">{serviceT.framework}</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {serviceT.features.map((item: any) => (
                <div key={item.t} className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">{item.t}</h4>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center bg-indigo-600 p-12 rounded-[3.5rem] text-white shadow-2xl shadow-indigo-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <h3 className="text-3xl font-display font-bold mb-6 relative z-10">{serviceT.ctaTitle}</h3>
            <p className="text-indigo-100 mb-10 text-sm relative z-10 leading-relaxed font-medium">
              {serviceT.ctaText}
            </p>
            <a
              href="https://wa.me/917406296116"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-indigo-600 px-8 py-5 rounded-2xl hover:bg-slate-900 hover:text-white transition-all text-[11px] font-bold uppercase tracking-[0.2em] relative z-10 shadow-lg"
            >
              <MessageSquare size={20} />
              {serviceT.ctaButton}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const LandingPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Hero />
    <Features />
    <About />
    <Services />
    <Pricing />
    <Contact />
  </motion.div>
);

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="relative overflow-x-hidden">
          <Navbar />
          <FloatingWhatsApp />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/services/accounting-bookkeeping" element={<Accounting />} />
              <Route path="/services/gst-services" element={<GST />} />
              <Route path="/services/itr-services" element={<ITR />} />
              <Route path="/services/payroll-processing" element={<Payroll />} />
              <Route path="/services/tds-services" element={<TDS />} />
              <Route path="/privacy-policy" element={<ServicePage title="Privacy Policy" titleKey="privacy" />} />
              <Route path="/data-handling" element={<ServicePage title="Data Handling Policy" titleKey="data" />} />
              {/* Fallback for other routes */}
              <Route path="*" element={<LandingPage />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

