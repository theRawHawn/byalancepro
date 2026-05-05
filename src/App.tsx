/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
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
import SEO from './components/SEO';

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
      {/* ... (rest of the component) ... */}
    </motion.div>
  );
};

const LandingPage = () => (
  <>
    <SEO 
      title="Byalance: Accounting, GST, TDS & Payroll Services"
      description="Byalance provides comprehensive accounting, GST, TDS, and payroll services for businesses of all sizes. Simplify your finances and stay compliant with our expert team."
      // Add your comma-separated keywords for the main page here
      keywords="accounting services, gst services, tds services, payroll processing, chartered accountant firm, financial services, business compliance"
    />
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
  </>
);

export default function App() {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
}
