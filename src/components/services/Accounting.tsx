import SEO from '../SEO';
import React from 'react';
import { Calculator, Check, ArrowRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";
import { useLanguage, translations } from "../../context/LanguageContext";

function AccountingIllustration() {
  return (
    <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" aria-label="Accounting & Bookkeeping Illustration">
      {/* ... (illustration SVG code) ... */}
    </svg>
  );
}

const Accounting = () => {
  const { t } = useLanguage();
  const data = t.serviceDetail?.accounting || translations.en.serviceDetail.accounting;

  return (
    <>
      <SEO
        title="Accounting & Bookkeeping Services | Byalance"
        description="Professional accounting and bookkeeping services to keep your finances in order. We offer a comprehensive range of services to businesses of all sizes."
        // Add your comma-separated keywords for the Accounting page here
        keywords="accounting, bookkeeping, financial services, small business accounting, chartered accountant"
      />
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* ... (rest of the component) ... */}
      </div>
    </>
  );
};

export default Accounting;
