import SEO from '../SEO';
import React from 'react';
import { FileSpreadsheet, Check, ArrowRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";
import { useLanguage, translations } from "../../context/LanguageContext";

function ItrIllustration() {
  return (
    <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" aria-label="ITR Services Illustration">
      {/* ... (illustration SVG code) ... */}
    </svg>
  );
}

const ITR = () => {
  const { t } = useLanguage();
  const data = t.serviceDetail?.itr || translations.en.serviceDetail.itr;

  return (
    <>
      <SEO
        title="ITR Filing Services | Byalance"
        description="File your income tax returns accurately and on time with Byalance. Our experts help you with ITR filing for individuals and businesses, ensuring maximum tax savings."
        // Add your comma-separated keywords for the ITR page here
        keywords="itr filing, income tax return, itr services, tax filing, e-filing, income tax consultant"
      />
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* ... (rest of the component) ... */}
      </div>
    </>
  );
};

export default ITR;
