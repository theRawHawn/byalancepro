import SEO from '../SEO';
import React from 'react';
import { FileText, Check, ArrowRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Link } from "react-router-dom";
import { useLanguage, translations } from "../../context/LanguageContext";

function GstIllustration() {
  return (
    <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" aria-label="GST Services Illustration">
      {/* ... (illustration SVG code) ... */}
    </svg>
  );
}

const GST = () => {
  const { t } = useLanguage();
  const data = t.serviceDetail?.gst || translations.en.serviceDetail.gst;

  return (
    <>
      <SEO
        title="GST Services | Byalance"
        description="Comprehensive GST services including registration, filing, and compliance. Ensure your business is GST compliant with our expert assistance."
        // Add your comma-separated keywords for the GST page here
        keywords="gst services, gst registration, gst filing, gst compliance, gst return, gst consultant"
      />
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* ... (rest of the component) ... */}
      </div>
    </>
  );
};

export default GST;
