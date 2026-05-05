import SEO from '../SEO';
import React from 'react';
import { Receipt, Check, ArrowRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";
import { useLanguage, translations } from "../../context/LanguageContext";

function TdsIllustration() {
  return (
    <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" aria-label="TDS Services Illustration">
      {/* ... (illustration SVG code) ... */}
    </svg>
  );
}

const TDS = () => {
  const { t } = useLanguage();
  const data = t.serviceDetail?.tds || translations.en.serviceDetail.tds;

  return (
    <>
      <SEO
        title="TDS Return Filing Services | Byalance"
        description="Ensure timely and accurate TDS return filing with Byalance. Our services cover all aspects of TDS compliance, from deduction to filing."
        // Add your comma-separated keywords for the TDS page here
        keywords="tds return filing, tds services, tds compliance, tds deduction, form 24q, form 26q"
      />
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* ... (rest of the component) ... */}
      </div>
    </>
  );
};

export default TDS;
