import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'hi' | 'kn' | 'te' | 'mr' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      pricing: 'Pricing',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'Simplifying Accounting, Powering Growth.',
      description: 'We handle your GST, TDS, Payroll, and Full Accounting — so you focus on your business.',
      bookConsultation: 'Book Free Consultation',
      whatsappNow: 'WhatsApp Now',
    },
    sections: {
      pricing: 'Transparent Pricing',
      pricingSubtitle: 'Choose the plan that fits your business needs. Simple, clear, and effective.',
    },
    about: {
      badge: 'Corporate Excellence',
      title: 'The Byalance Standard',
      p1: 'Byalance is a affordable modern virtual accounting firm purpose-built for the entrepreneurs, traders, and founders driving India\'s next wave of growth. from metro startup hubs to the rising commercial corridors of Tier 2 and Tier 3 cities.',
      p2: 'We bridge the gap between traditional accounting and modern business speed, providing rigorous compliance oversight without the legacy overhead. bookkeeping, GST, TDS, and payroll, done right, without the big-firm price tag.',
      missionBadge: 'Our Mission',
      missionTitle: 'Bridging Growth & Compliance',
      missionText: '"Making compliance stress-free, affordable, and professional for every business in India."',
      stats: {
        trusted: 'Trusted Partner',
        trustedText: 'Building long-term relationships with our clients based on trust and reliability.',
        growth: 'Growth Focused',
        growthText: 'Supporting businesses at every stage of their growth journey.',
        timely: 'Timely Service',
        timelyText: 'Meeting all deadlines and keeping your business compliant on time.',
      }
    },
    services: {
      title: 'Our Services',
      description: 'Complete accounting solutions tailored for your business',
      items: [
        { 
          title: 'Accounting & Bookkeeping', 
          text: 'Comprehensive accounting services to keep your books accurate and up-to-date.',
          features: [
            'Sales, Purchase, Expense Entries',
            'Bank Reconciliation',
            'Cash Book Maintenance',
            'Journal Entries & Depreciation',
            'Ledgers/Vendors Reconciliation',
            'Trial Balance, P&L, Balance Sheet',
            'Receivables & Payables Tracking',
            'Data Setup & Cleanup',
            'Month-End & Year-End Closing Support'
          ],
          details: {
            desc: "Accurate, timely books are the foundation of every healthy business. We manage your entire accounting lifecycle — from day-to-day entries to year-end closing — so you always have a clear financial picture.",
            whyTitle: "Why It Matters",
            whyDesc: "Without accurate books, you're flying blind. Delayed or incorrect accounts mean missed tax deductions, incorrect GST filings, and no visibility into cash flow. Byalance keeps your records clean on a monthly cadence so nothing falls through the cracks.\n\nWe work with Tally, Zoho Books, QuickBooks, and Excel — whatever your team already uses. No disruption to your workflow.",
            whoTitle: "Who Is This For?",
            whoItems: [
              "Retail & trading businesses",
              "Startups and early-stage companies",
              "Service providers and consultants",
              "MSMEs and small manufacturers",
              "E-commerce sellers"
            ]
          }
        },
        { 
          title: 'ITR Services', 
          text: 'Expert ITR filing services for individuals and businesses.',
          features: [
            'Applicability Check (Mandatory/Voluntary)',
            'PAN-Aadhaar Linking Verification',
            'Computation of Total Income & Tax',
            'Form 26AS, AIS & TIS Review',
            'Filing Correct ITR Form (ITR-1 to ITR-7)',
            'Notice & Scrutiny Support'
          ],
          details: {
            desc: "Filing your income tax return on time and accurately is not just a legal requirement — it unlocks loans, visas, and government tenders. Byalance handles everything from document collection to notice responses, ensuring zero-stress compliance.",
            whyTitle: "Why Accurate ITR Filing Matters",
            whyDesc: "An incorrect ITR form or missed schedule can trigger a defective return notice under Section 139(9), leading to penalties and even prosecution in extreme cases. Our team matches your income across Form 26AS, AIS, and bank statements before filing so your return is bulletproof.\n\nWe also advise on legal deductions under Sections 80C, 80D, 80G, HRA, and LTA to minimise your tax outgo every year.",
            whoTitle: "Who Is This For?",
            whoItems: [
              "Salaried individuals (Form 16 holders)",
              "Self-employed professionals (doctors, lawyers, consultants)",
              "Business owners and proprietors",
              "Freelancers with domestic or foreign income",
              "HUFs and partnership firms",
              "Companies and LLPs"
            ]
          }
        },
        { 
          title: 'GST Services', 
          text: 'Complete GST compliance and filing services to keep your business tax-compliant.',
          features: [
            'GST Registration',
            'GSTR-1, 3B, 9 Filing',
            'GST Input Credit Matching (2B vs Books)',
            'E-Invoice & E-Way Bill Compliance',
            'Late Fee and Penalty Resolution'
          ],
          details: {
            desc: "Stay fully compliant with Goods & Services Tax regulations. From registration to monthly/annual filings and reconciliation, we handle every aspect of your GST lifecycle so you never miss a deadline or lose input credit.",
            whyTitle: "Why Timely GST Filing Matters",
            whyDesc: "Late or incorrect GST filings attract penalties of up to ₹200/day per return and can block your clients from claiming input tax credit — damaging business relationships. Byalance files your returns accurately before every deadline and reconciles your GSTR-2B against purchase records monthly.\n\nWe also track GSTN portal notices and advisory communications so nothing slips through.",
            whoTitle: "Who Is This For?",
            whoItems: [
              "Businesses with annual turnover above ₹40 lakh",
              "E-commerce sellers & marketplace vendors",
              "Exporters & importers",
              "Service providers crossing the GST threshold",
              "Businesses switching from Composition to Regular scheme"
            ]
          }
        },
        { 
          title: 'TDS Services', 
          text: 'Comprehensive TDS management and filing services for your business.',
          features: [
            'TAN Application',
            'Filing of Form 24Q, 26Q',
            'Advance Tax & Challan Management',
            'Form 16/16A Generation',
            'TDS Default & Demand Resolution'
          ],
          details: {
            desc: "Seamless Tax Deducted at Source management. We handle TDS computation, compliance, and filing, ensuring your business stays on the right side of the law.",
            whyTitle: "The Cost of Non-Compliance",
            whyDesc: "TDS defaults can lead to expensive interest charges (up to 1.5% per month) and disallowance of expenses by the Income Tax Department. Our systematic TDS management ensures timely challan payments and quarterly return filings without errors.\n\nWe provide automated form 16/16A generation and resolve any prior TDS defaults.",
            whoTitle: "Who Is This For?",
            whoItems: [
              "Businesses making regular payments to vendors",
              "Companies with payroll",
              "Rent-paying commercial tenants",
              "Professionals making sub-contractor payments"
            ]
          }
        },
        { 
          title: 'Payroll Services', 
          text: 'Complete payroll management with accurate calculations and statutory compliance.',
          features: [
            'Employee Master Data Management',
            'Salary Structuring & Monthly Calculations',
            'Accurate Payslips & Payroll Register',
            'TDS on Salary & Form 16/16A',
            'PF/ESI/PT/EDLI Registration & Return Filing',
            'Full & Final Settlement'
          ],
          details: {
            desc: "Timely and accurate payroll management. From salary computation to statutory compliances like PF, ESI, and Professional Tax, we handle it all with precision.",
            whyTitle: "Why Outsource Payroll?",
            whyDesc: "Payroll errors lead to employee dissatisfaction and legal liabilities for the company. Byalance provides error-free payslips and handles all complex compliance filings (PF, ESI, LWF).\n\nWe ensure that your salary structures are optimized for tax for your employees while remaining compliant with current labor laws.",
            whoTitle: "Who Is This For?",
            whoItems: [
              "Startups with growing teams",
              "MSMEs with 10+ employees",
              "Companies requiring outsourced HR compliance",
              "Consultants with multiple staff members"
            ]
          }
        }
      ],
      ctaTitle: 'Enterprise Solutions',
      ctaText: 'Custom accounting frameworks for complex organizational structures.',
      ctaButton: 'Get Consultation',
    },
    features: {
      title: 'Why Choose BYALANCE?',
      description: 'Professional accounting services tailored for growing businesses across India.',
      items: [
        { title: 'Transparent Pricing', text: 'Clear, upfront pricing with no hidden costs. Know exactly what you pay for.' },
        { title: 'Local Language Support', text: 'Communicate in your preferred language. We understand local business needs.' },
        { title: 'End-to-End Compliance', text: 'Complete compliance management from registration to filing and beyond.' },
        { title: 'Micro Business Friendly', text: 'Services available even for the smallest businesses. Grow with confidence.' }
      ]
    },
    pricing: {
      title: 'Transparent Pricing',
      description: 'Choose the plan that fits your business needs. Simple, clear, and effective.',
      starter: 'Starter Plan',
      starterPrice: '₹1,999 – ₹6,999',
      perMonth: '/month',
      starterFeatures: ['GST Returns', 'Basic Bookkeeping', 'Sales & Purchase Entries', 'Monthly Financial Reports'],
      recommended: 'Recommended',
      growth: 'Growth Plan',
      growthPrice: '₹7,499 – ₹14,999',
      growthFeatures: ['GST Returns & Compliance', 'TDS Returns & Filing', 'Full Accounting & Bookkeeping', 'Bank Reconciliation', 'Financial Reports (P&L, Balance Sheet)'],
      pro: 'Pro Plan',
      proPrice: '₹15,499 – ₹20,000+',
      proFeatures: ['GST & TDS Complete Management', 'Payroll Processing', 'Complete Accounting Services', 'Advanced Financial Reports', 'Priority Support'],
      notIdeal: 'Not an Ideal Pricing?',
      notIdealDesc: "Need a custom solution? Let's discuss your specific requirements.",
      plans: [
        { name: 'Starter Plan', price: '₹1,999 – ₹6,999', period: '/month', features: ['GST Returns', 'Basic Bookkeeping', 'Sales & Purchase Entries', 'Monthly Financial Reports'] },
        { name: 'Growth Plan', price: '₹7,499 – ₹14,999', period: '/month', features: ['GST Returns & Compliance', 'TDS Returns & Filing', 'Full Accounting & Bookkeeping', 'Bank Reconciliation', 'Financial Reports (P&L, Balance Sheet)'] },
        { name: 'Pro Plan', price: '₹15,499 – ₹20,000+', period: '/month', features: ['GST & TDS Complete Management', 'Payroll Processing', 'Complete Accounting Services', 'Advanced Financial Reports', 'Priority Support'] }
      ],
      button: 'Choose Plan',
      customButton: 'Contact Us',
    },
    cta: {
      choosePlan: 'Choose',
      chooseStarter: 'Choose Starter',
      chooseGrowth: 'Choose Growth',
      choosePro: 'Choose Pro',
      contactCustom: 'Contact for Custom Pricing',
    },
    contact: {
      badge: 'Expert Consultation',
      title: 'Ready to fortify your financial compliance?',
      description: 'Speak with our senior accountants today. We provide clear paths to regulatory clarity and business growth.',
      phone: 'Call Us',
      email: 'Email Us',
      location: 'Visit Us',
      formTitle: 'Direct Inquiries',
      name: 'Full Name',
      emailLabel: 'Email Address',
      message: 'Your Message',
      send: 'Send Message',
    },
    footer: {
      about: 'A premier virtual accounting firm dedicated to serving the needs of high-growth startups and MSMEs across India.',
      resources: 'Resources',
      expertise: 'Key Expertise',
      headquarters: 'Headquarters',
      privacy: 'Privacy Policy',
      data: 'Data Handling Policy',
      rights: '© 2026 Byalance. All rights reserved.',
    },
    common: {
      learnMore: 'Learn More',
      businessHours: 'Business Hours',
      instantResponse: 'Instant Response',
      whatsappDesk: 'Our WhatsApp desk is manned by certified accountants for rapid policy guidance.',
      messageNow: 'Message Now',
      enterName: 'Enter your name',
      mobileNumber: 'Mobile Number',
      enterMobile: 'Enter your mobile number',
      emailId: 'Email ID',
      enterEmail: 'Enter your Email ID',
      businessType: 'Business Type',
      selectBusinessType: 'Select your business type',
      businessTypes: [
        'Individual / Proprietorship',
        'Partnership / LLP',
        'Private Limited Company',
        'Startup (Registered)',
        'Retailer / E-commerce',
        'Service Provider',
        'Other'
      ],
      accountingNeeds: 'Tell us about your accounting needs...',
      gstinPending: 'GSTIN: PENDING',
      whatsIncluded: "What's Included",
      getStartedToday: 'Get Started Today',
      chatWhatsapp: 'Chat on WhatsApp',
      sendEnquiry: 'Send an Enquiry',
      relatedServices: 'Related Services',
    },
    servicePage: {
      badge: 'Service Excellence',
      framework: 'Compliance Framework',
      description: 'We provide enterprise-grade {{title}} solutions tailored for modern businesses. Our methodology combines rigorous compliance standards with technology-driven efficiency.',
      features: [
        { t: 'Expert Audit', d: 'Peer-reviewed filings by senior specialists.' },
        { t: 'Deadline Seal', d: 'Guaranteed compliance with statutory timelines.' },
        { t: 'Digital Vault', d: 'Secure, encrypted storage of all financial records.' },
        { t: 'Strategic Counsel', d: 'Direct access to senior tax consultants.' },
      ],
      ctaTitle: 'Initiate Onboarding',
      ctaText: 'Join 200+ businesses that trust Byalance for their financial integrity. Speak with an onboarding specialist to customize your service levels.',
      ctaButton: 'Connect via WhatsApp',
    },
    serviceDetail: {
      accounting: {
        title: "Accounting & Bookkeeping",
        desc: "Accurate, timely books are the foundation of every healthy business. We manage your entire accounting lifecycle — from day-to-day entries to year-end closing — so you always have a clear financial picture.",
        ctaDesc: "Book a free consultation. We'll review your current setup and recommend the right plan.",
        features: [
          "Sales, Purchase & Expense Entries",
          "Bank Reconciliation (Monthly)",
          "Cash Book & Petty Cash Maintenance",
          "Journal Entries & Depreciation Schedules",
          "Ledger & Vendor Reconciliation",
          "Trial Balance, P&L & Balance Sheet",
          "Receivables & Payables Tracking",
          "Data Setup, Cleanup & Migration",
          "Month-End & Year-End Closing Support",
        ],
        whyTitle: "Why It Matters",
        whyDesc: "Without accurate books, you're flying blind. Delayed or incorrect accounts mean missed tax deductions, incorrect GST filings, and no visibility into cash flow. Byalance keeps your records clean on a monthly cadence so nothing falls through the cracks.\n\nWe work with Tally, Zoho Books, QuickBooks, and Excel — whatever your team already uses. No disruption to your workflow.",
        whoTitle: "Who Is This For?",
        whoItems: [
          "Retail & trading businesses",
          "Startups and early-stage companies",
          "Service providers and consultants",
          "MSMEs and small manufacturers",
          "E-commerce sellers",
        ]
      },
      gst: {
        title: "GST Services",
        desc: "Stay fully compliant with Goods & Services Tax regulations. From registration to monthly/annual filings and reconciliation, we handle every aspect of your GST lifecycle so you never miss a deadline or lose input credit.",
        ctaDesc: "Book a free consultation. We'll audit your current GST status and set up a clean compliance calendar.",
        features: [
          "GST Registration (Regular & Composition)",
          "GSTR-1 Filing (Monthly / Quarterly)",
          "GSTR-3B Filing (Monthly)",
          "GSTR-9 Annual Return Filing",
          "GST Input Credit Matching (2B vs Books)",
          "E-Invoice & E-Way Bill Compliance",
          "GST Amendments & Reconciliation",
          "Late Fee & Penalty Resolution",
        ],
        whyTitle: "Why Timely GST Filing Matters",
        whyDesc: "Late or incorrect GST filings attract penalties of up to ₹200/day per return and can block your clients from claiming input tax credit — damaging business relationships. Byalance files your returns accurately before every deadline and reconciles your GSTR-2B against purchase records monthly.\n\nWe also track GSTN portal notices and advisory communications so nothing slips through.",
        whoTitle: "Who Is This For?",
        whoItems: [
          "Businesses with annual turnover above ₹40 lakh",
          "E-commerce sellers & marketplace vendors",
          "Exporters & importers",
          "Service providers crossing the GST threshold",
          "Businesses switching from Composition to Regular scheme",
        ]
      },
      itr: {
        title: "ITR Services",
        desc: "Filing your income tax return on time and accurately is not just a legal requirement — it unlocks loans, visas, and government tenders. Byalance handles everything from document collection to notice responses, ensuring zero-stress compliance.",
        ctaDesc: "Share your Form 16 or income details. We'll handle the rest and file before the deadline.",
        features: [
          "Applicability Check (Mandatory vs Voluntary Filing)",
          "PAN–Aadhaar Linking Verification",
          "Computation of Total Income & Tax Liability",
          "Form 26AS, AIS & TIS Review",
          "Income & Deduction Documentation (Form 16, Bank Statements)",
          "Filing of Correct ITR Form (ITR-1 to ITR-7)",
          "Revised Return Filing",
          "Notice & Scrutiny Support (143(1), 139(9), 143(2) Responses)",
          "Tax Planning & Advance Tax Advisory",
        ],
        whyTitle: "Why Accurate ITR Filing Matters",
        whyDesc: "An incorrect ITR form or missed schedule can trigger a defective return notice under Section 139(9), leading to penalties and even prosecution in extreme cases. Our team matches your income across Form 26AS, AIS, and bank statements before filing so your return is bulletproof.\n\nWe also advise on legal deductions under Sections 80C, 80D, 80G, HRA, and LTA to minimise your tax outgo every year.",
        whoTitle: "Who Is This For?",
        whoItems: [
          "Salaried individuals (Form 16 holders)",
          "Self-employed professionals (doctors, lawyers, consultants)",
          "Business owners and proprietors",
          "Freelancers with domestic or foreign income",
          "HUFs and partnership firms",
          "Companies and LLPs",
        ]
      },
      tds: {
        title: "TDS Services",
        desc: "Seamless Tax Deducted at Source management. We handle TDS computation, compliance, and filing, ensuring your business stays on the right side of the law.",
        ctaDesc: "Book a free consultation. We'll review your current TDS obligations and set up a system to avoid defaults.",
        features: [
          "TAN Application",
          "Filing of Form 24Q, 26Q",
          "Advance Tax & Challan Management",
          "Form 16/16A Generation",
          "TDS Default & Demand Resolution",
        ],
        whyTitle: "The Cost of Non-Compliance",
        whyDesc: "TDS defaults can lead to expensive interest charges (up to 1.5% per month) and disallowance of expenses by the Income Tax Department. Our systematic TDS management ensures timely challan payments and quarterly return filings without errors.\n\nWe provide automated form 16/16A generation and resolve any prior TDS defaults.",
        whoTitle: "Who Is This For?",
        whoItems: [
          "Businesses making regular payments to vendors",
          "Companies with payroll",
          "Rent-paying commercial tenants",
          "Professionals making sub-contractor payments",
        ]
      },
      payroll: {
        title: "Payroll Processing",
        desc: "Timely and accurate payroll management. From salary computation to statutory compliances like PF, ESI, and Professional Tax, we handle it all with precision.",
        ctaDesc: "Share your employee headcount and CTC details. We'll set up your payroll structure and take over from month one.",
        features: [
          "Employee Master Data Management",
          "Salary Structuring & Monthly Calculations",
          "Accurate Payslips & Payroll Register",
          "TDS on Salary & Form 16/16A",
          "PF/ESI/PT/EDLI Registration & Return Filing",
          "Full & Final Settlement",
        ],
        whyTitle: "Why Outsource Payroll?",
        whyDesc: "Payroll errors lead to employee dissatisfaction and legal liabilities for the company. Byalance provides error-free payslips and handles all complex compliance filings (PF, ESI, LWF).\n\nWe ensure that your salary structures are optimized for tax for your employees while remaining compliant with current labor laws.",
        whoTitle: "Who Is This For?",
        whoItems: [
          "Startups with growing teams",
          "MSMEs with 10+ employees",
          "Companies requiring outsourced HR compliance",
          "Consultants with multiple staff members",
        ]
      }
    }
  },
  hi: {
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      services: 'सेवाएं',
      pricing: 'मूल्य निर्धारण',
      contact: 'संपर्क',
    },
    hero: {
      subtitle: 'लेखांकन को सरल करना, विकास को शक्ति देना।',
      description: 'Byalance बुककीपिंग, टैक्स अनुपालन और वित्तीय रणनीति के लिए आपका ऑल-इन-वन पार्टनर है।',
      bookConsultation: 'नि:शुल्क परामर्श बुक करें',
      whatsappNow: 'व्हाट्सएप करें',
    },
    sections: {
      pricing: 'पारदर्शी मूल्य निर्धारण',
      pricingSubtitle: 'अपने व्यवसाय की जरूरतों के अनुसार योजना चुनें। सरल, स्पष्ट और प्रभावी।',
    },
    about: {
      badge: 'कॉर्पोरेट उत्कृष्टता',
      title: 'Byalance मानक',
      p1: 'Byalance एक किफायती आधुनिक वर्चुअल अकाउंटिंग फर्म है जो भारत के विकास की अगली लहर को चलाने वाले उद्यमियों और संस्थापकों के लिए बनाई गई है।',
      p2: 'हम पारंपरिक लेखांकन और आधुनिक व्यावसायिक गति के बीच की खाई को पाटते हैं। बुककीपिंग, जीएसटी, टीडीएस और पेरोल - सब कुछ सही कीमत पर।',
      missionBadge: 'हमारा मिशन',
      missionTitle: 'विकास और अनुपालन को जोड़ना',
      missionText: '"भारत में हर व्यवसाय के लिए अनुपालन को तनाव मुक्त, किफायती और व्यावसायिक बनाना।।',
      stats: {
        trusted: 'विश्वसनीय भागीदार',
        trustedText: 'विश्वास और विश्वसनीयता के आधार पर अपने ग्राहकों के साथ दीर्घकालिक संबंध बनाना।',
        growth: 'विकास केंद्रित',
        growthText: 'व्यवसायों को उनके विकास के हर चरण में समर्थन देना।',
        timely: 'समय पर सेवा',
        timelyText: 'सभी समय सीमा को पूरा करना और आपके व्यवसाय को समय पर अनुपालन में रखना।',
      }
    },
    services: {
      title: 'हमारी सेवाएं',
      description: 'आपके व्यवसाय के लिए विशेष रूप से तैयार पूर्ण लेखांकन समाधान',
      items: [
        { 
          title: 'अकाउंटिंग और बुककीपिंग', 
          text: 'आपके खातों को सटीक और अद्यतित रखने के लिए व्यापक लेखांकन सेवाएं।',
          features: [
            'बिक्री, खरीद, व्यय प्रविष्टियां',
            'बैंक समाधान (Bank Reconciliation)',
            'कैश बुक रखरखाव',
            'जर्नल प्रविष्टियां और मूल्यह्रास',
            'लेज़र/विक्रेता समाधान',
            'ट्रायल बैलेंस, पी एंड एल, बैलेंस शीट',
            'प्राप्य और देय ट्रैकिंग',
            'डेटा सेटअप और सफाई',
            'महीने के अंत और वर्ष के अंत में समापन सहायता'
          ]
        },
        { 
          title: 'आईटीआर सेवाएं', 
          text: 'व्यक्तियों और व्यवसायों के लिए विशेषज्ञ आईटीआर फाइलिंग सेवाएं।',
          features: [
            'प्रयोज्यता जांच (अनिवार्य/स्वैच्छिक)',
            'पैन-आधार लिंकिंग सत्यापन',
            'कुल आय और कर की गणना',
            'फॉर्म 26AS, AIS और TIS समीक्षा',
            'सही आईटीआर फॉर्म भरना (ITR-1 से ITR-7)',
            'नोटिस और स्क्रूटनी समर्थन'
          ]
        },
        { 
          title: 'जीएसटी सेवाएं', 
          text: 'आपके व्यवसाय को टैक्स-अनुपालन रखने के लिए पूर्ण जीएसटी अनुपालन और फाइलिंग सेवाएं।',
          features: [
            'जीएसटी पंजीकरण',
            'GSTR-1, 3B, 9 फाइलिंग',
            'जीएसटी इनपुट क्रेडिट मिलान (2B बनाम बुक्स)',
            'ई-चालान और ई-वे बिल अनुपालन',
            'विलंब शुल्क और जुर्माना समाधान'
          ]
        },
        { 
          title: 'टीडीएस सेवाएं', 
          text: 'आपके व्यवसाय के लिए व्यापक टीडीएस प्रबंधन और फाइलिंग सेवाएं।',
          features: [
            'टैन (TAN) आवेदन',
            'फॉर्म 24Q, 26Q की फाइलिंग',
            'अग्रिम कर और चालान प्रबंधन',
            'फॉर्म 16/16A जनरेशन',
            'टीडीएस डिफॉल्ट और डिमांड समाधान'
          ]
        },
        { 
          title: 'पेरोल सेवाएं', 
          text: 'सटीक गणना और वैधानिक अनुपालन के साथ पूर्ण पेरोल प्रबंधन।',
          features: [
            'कर्मचारी मास्टर डेटा प्रबंधन',
            'पगार संरचना और मासिक गणना',
            'सटीक Payslips और पेरोल रजिस्टर',
            'सैलरी पर टीडीएस और फॉर्म 16/16A',
            'PF/ESI/PT/EDLI पंजीकरण और रिटर्न फाइलिंग',
            'पूर्ण और अंतिम निपटान'
          ]
        }
      ],
      ctaTitle: 'उद्यम समाधान',
      ctaText: 'जटिल संगठनात्मक संरचनाओं के लिए कस्टम अकाउंटिंग फ्रेमवर्क।',
      ctaButton: 'परामर्श लें',
    },
    features: {
      title: 'BYALANCE क्यों चुनें?',
      description: 'पूरे भारत में बढ़ते व्यवसायों के लिए तैयार पेशेवर लेखा सेवाएं।',
      items: [
        { title: 'पारदर्शी मूल्य निर्धारण', text: 'बिना किसी छिपी लागत के स्पष्ट और अग्रिम मूल्य निर्धारण। जानें कि आप किस लिए भुगतान करते हैं।' },
        { title: 'स्थानीय भाषा समर्थन', text: 'अपनी पसंदीदा भाषा में संवाद करें। हम स्थानीय व्यावसायिक जरूरतों को समझते हैं।' },
        { title: 'शुरू से अंत तक अनुपालन', text: 'पंजीकरण से लेकर फाइलिंग और उससे आगे तक पूर्ण अनुपालन प्रबंधन।' },
        { title: 'सूक्ष्म व्यवसाय अनुकूल', text: 'सबसे छोटे व्यवसायों के लिए भी सेवाएं उपलब्ध। आत्मविश्वास के साथ बढ़ें।' }
      ]
    },
    pricing: {
      title: 'पारदर्शी मूल्य निर्धारण',
      description: 'वह योजना चुनें जो आपके व्यवसाय की आवश्यकताओं के अनुरूप हो। सरल, स्पष्ट और प्रभावी।',
      starter: 'स्टार्टर प्लान',
      starterPrice: '₹1,999 – ₹6,999',
      perMonth: '/महीना',
      starterFeatures: ['जीएसटी रिटर्न', 'बेसिक बुककीपिंग', 'बिक्री और खरीद प्रविष्टियां', 'मासिक वित्तीय रिपोर्ट'],
      recommended: 'अनुशंसित',
      growth: 'ग्रोथ प्लान',
      growthPrice: '₹7,499 – ₹14,999',
      growthFeatures: ['जीएसटी रिटर्न और अनुपालन', 'टीडीएस रिटर्न और फाइलिंग', 'पूर्ण अकॉउंटिंग और बुककीपिंग', 'बैंक समाधान', 'वित्तीय रिपोर्ट (P&L, बैलेंस शीट)'],
      pro: 'प्रो प्लान',
      proPrice: '₹15,499 – ₹20,000+',
      proFeatures: ['जीएसटी और टीडीएस पूर्ण प्रबंधन', 'पेरोल प्रोसेसिंग', 'पूर्ण अकॉउंटिंग सेवाएं', 'उन्नत वित्तीय रिपोर्ट', 'प्राथमिकता सहायता'],
      notIdeal: 'आदर्श मूल्य निर्धारण नहीं?',
      notIdealDesc: "एक कस्टम समाधान की आवश्यकता है? आइए अपनी विशिष्ट आवश्यकताओं पर चर्चा करें।",
      plans: [
        { name: 'स्टार्टर प्लान', price: '₹1,999 – ₹6,999', period: '/महीना', features: ['जीएसटी रिटर्न', 'बेसिक बुककीपिंग', 'बिक्री और खरीद प्रविष्टियां', 'मासिक वित्तीय रिपोर्ट'] },
        { name: 'ग्रोथ प्लान', price: '₹7,499 – ₹14,999', period: '/महीना', features: ['जीएसटी रिटर्न और अनुपालन', 'टीडीएस रिटर्न और फाइलिंग', 'पूर्ण अकॉउंटिंग और बुककीपिंग', 'बैंक समाधान', 'वित्तीय रिपोर्ट (P&L, बैलेंस शीट)'] },
        { name: 'प्रो प्लान', price: '₹15,499 – ₹20,000+', period: '/महीना', features: ['जीएसटी और टीडीएस पूर्ण प्रबंधन', 'पेरोल प्रोसेसिंग', 'पूर्ण अकॉउंटिंग सेवाएं', 'उन्नत वित्तीय रिपोर्ट', 'प्राथमिकता सहायता'] }
      ],
      button: 'योजना चुनें',
      customButton: 'संपर्क करें',
    },
    cta: {
      choosePlan: 'चुनें',
      chooseStarter: 'स्टार्टर चुनें',
      chooseGrowth: 'ग्रोथ चुनें',
      choosePro: 'प्रो चुनें',
      contactCustom: 'कस्टम मूल्य निर्धारण के लिए संपर्क करें',
    },
    contact: {
      badge: 'विशेषज्ञ परामर्श',
      title: 'अपने वित्तीय अनुपालन को मजबूत करने के लिए तैयार हैं?',
      description: 'आज ही हमारे वरिष्ठ लेखाकारों से बात करें। हम नियामक स्पष्टता और व्यावसायिक विकास के लिए स्पष्ट मार्ग प्रदान करते।',
      phone: 'हमें कॉल करें',
      email: 'हमें ईमेल करें',
      location: 'हमसे मिलने आएं',
      formTitle: 'सीधी पूछताछ',
      name: 'पूरा नाम',
      emailLabel: 'ईमेल पता',
      message: 'आपका संदेश',
      send: 'संदेश भेजें',
    },
    footer: {
      about: 'एक प्रमुख वर्चुअल अकाउंटिंग फर्म जो पूरे भारत में उच्च-विकास वाले स्टार्टअप और MSME की जरूरतों को पूरा करने के लिए समर्पित है।',
      resources: 'संसाधन',
      expertise: 'प्रमुख विशेषज्ञता',
      headquarters: 'मुख्यालय',
      privacy: 'गोपनीयता नीति',
      data: 'डेटा हैंडलिंग नीति',
      rights: '© 2026 Byalance. सर्वाधिकार सुरक्षित।',
    },
    common: {
      learnMore: 'और जानें',
      businessHours: 'कामकाज के घंटे',
      instantResponse: 'त्वरित प्रतिक्रिया',
      whatsappDesk: 'हमारा व्हाट्सएप डेस्क नीति मार्गदर्शन के लिए प्रमाणित लेखाकारों द्वारा संचालित है।',
      messageNow: 'अभी संदेश भेजें',
      enterName: 'अपना नाम दर्ज करें',
      mobileNumber: 'मोबाइल नंबर',
      enterMobile: 'अपना मोबाइल नंबर दर्ज करें',
      emailId: 'ईमेल आईडी',
      enterEmail: 'अपनी ईमेल आईडी दर्ज करें',
      businessType: 'व्यापार का प्रकार',
      selectBusinessType: 'अपने व्यवसाय का प्रकार चुनें',
      businessTypes: [
        'व्यक्तिगत / स्वामित्व',
        'साझेदारी / एलएलपी',
        'प्राइवेट लिमिटेड कंपनी',
        'स्टार्टअप (पंजीकृत)',
        'रिटेलर / ई-कॉमर्स',
        'सेवा प्रदाता',
        'अन्य'
      ],
      accountingNeeds: 'हमें अपनी लेखांकन आवश्यकताओं के बारे में बताएं...',
      gstinPending: 'GSTIN: लंबित',
      whatsIncluded: "क्या शामिल है",
      getStartedToday: 'आज ही शुरू करें',
      chatWhatsapp: 'व्हाट्सएप पर चैट करें',
      sendEnquiry: 'पूछताछ भेजें',
      relatedServices: 'संबंधित सेवाएं',
    },
    servicePage: {
      badge: 'उत्कृष्ट सेवा',
      framework: 'अनुपालन ढांचा',
      description: 'हम आधुनिक व्यवसायों के लिए तैयार किए गए एंटरप्राइज-ग्रेड {{title}} समाधान प्रदान करते हैं। हमारी पद्धति तकनीक-संचालित दक्षता کے ساتھ سخت अनुपालन मानकों को जोड़ती है।',
      features: [
        { t: 'विशेषज्ञ ऑडिट', d: 'वरिष्ठ विशेषज्ञों द्वारा सहकर्मी-समीक्षित फाइलिंग।़' },
        { t: 'समय सीमा की मुहर', d: 'वैधानिक समय सीमा के साथ सुनिश्चित अनुपालन।' },
        { t: 'डिजिटल वॉल्ट', d: 'सभी वित्तीय रिकॉर्ड का सुरक्षित, एन्क्रिप्टेड स्टोरेज।' },
        { t: 'रणनीतिक परामर्श', d: 'वरिष्ठ कर सलाहकारों तक सीधी पहुंच।' },
      ],
      ctaTitle: 'ऑनबोर्डिंग शुरू करें',
      ctaText: 'उन 200+ व्यवसायों में शामिल हों जो अपनी वित्तीय अखंडता के लिए Byalance पर भरोसा करते हैं। अपने सेवा स्तर को अनुकूलित करने के लिए ऑनबोर्डिंग विशेषज्ञ से बात करें।',
      ctaButton: 'व्हाट्सएप के माध्यम से जुड़ें',
    },
    serviceDetail: {
      accounting: {
        title: "अकाउंटिंग और बुककीपिंग",
        desc: "सटीक और समय पर लेखांकन हर स्वस्थ व्यवसाय की नींव है। हम आपके पूरे लेखा चक्र का प्रबंधन करते हैं - दैनिक प्रविष्टियों से लेकर साल के अंत में समापन तक - ताकि आपके पास हमेशा एक स्पष्ट वित्तीय तस्वीर हो।",
        features: [
          "बिक्री, खरीद और व्यय प्रविष्टियां",
          "बैंक समाधान (मासिक)",
          "कैश बुक और पेटी कैश रखरखाव",
          "जर्नल प्रविष्टियां और मूल्यह्रास अनुसूची",
          "लेज़र और विक्रेता समाधान",
          "ट्रायल बैलेंस, पी एंड एल और बैलेंस शीट",
          "प्राप्य और देय ट्रैकिंग",
          "डेटा सेटअप, सफाई और माइग्रेशन",
          "महीने के अंत और साल के अंत में समापन सहायता",
        ],
        whyTitle: "यह क्यों महत्वपूर्ण है",
        whyDesc: "सटीक बहीखाते के बिना, आप अंधेरे में काम कर रहे हैं। विलंबित या गलत खातों का मतलब है कर कटौती का नुकसान, गलत जीएसटी फाइलिंग और नकदी प्रवाह की कोई दृश्यता नहीं। बायलेंस मासिक अंतराल पर आपके रिकॉर्ड को साफ रखता है ताकि कुछ भी छूट न जाए।\n\nहम टैली, ज़ोहो बुक्स, क्विकबुक्स और एक्सेल के साथ काम करते हैं। आपके वर्कफ्लो में कोई व्यवधान नहीं।",
        whoTitle: "यह किसके लिए है?",
        whoItems: [
          "रिटेल और ट्रेडिंग व्यवसाय",
          "स्टार्टअप और शुरुआती चरण की कंपनियां",
          "सेवा प्रदाता और सलाहकार",
          "MSME और छोटे निर्माता",
          "ई-कॉमर्स विक्रेता",
        ]
      },
      gst: {
        title: "जीएसटी सेवाएं",
        desc: "गुड्स एंड सर्विसेज टैक्स नियमों का पूरी तरह पालन करें। पंजीकरण से लेकर मासिक/वार्षिक फाइलिंग और समाधान तक, हम आपके जीएसटी जीवनचक्र के हर पहलू को संभालते हैं ताकि आप कभी भी समय सीमा न चूकें या इनपुट क्रेडिट न खोएं।",
        features: [
          "जीएसटी पंजीकरण (नियमित और कंपोजिशन)",
          "GSTR-1 फाइलिंग (मासिक / त्रैमासिक)",
          "GSTR-3B फाइलिंग (मासिक)",
          "GSTR-9 वार्षिक रिटर्न फाइलिंग",
          "जीएसटी इनपुट क्रेडिट मिलान (2B बनाम बुक्स)",
          "ई-चालान और ई-वे बिल अनुपालन",
          "जीएसटी संशोधन और समाधान",
          "विलंब शुल्क और जुर्माना समाधान",
        ],
        whyTitle: "समय पर जीएसटी फाइलिंग क्यों महत्वपूर्ण है",
        whyDesc: "देरी से या गलत जीएसटी फाइलिंग पर प्रति रिटर्न ₹200/दिन तक का जुर्माना लगता है और यह आपके ग्राहकों को इनपुट टैक्स क्रेडिट का दावा करने से रोक सकता है। बायलेंस हर समय सीमा से पहले आपके रिटर्न को सटीक रूप से फाइल करता है और मासिक रूप से आपके GSTR-2B का मिलान करता है।\n\nहम जीएसटीएन पोर्टल नोटिस और सलाहकारी संचार को भी ट्रैक करते हैं।",
        whoTitle: "यह किसके लिए है?",
        whoItems: [
          "₹40 लाख से अधिक वार्षिक टर्नओवर वाले व्यवसाय",
          "ई-कॉमर्स विक्रेता और मार्केटप्लेस विक्रेता",
          "निर्यात और आयात करने वाले",
          "जीएसटी सीमा पार करने वाले सेवा प्रदाता",
          "कंपोजिशन से नियमित योजना में स्विच करने वाले व्यवसाय",
        ]
      },
      itr: {
        title: "आईटीआर सेवाएं",
        desc: "अपना आयकर रिटर्न समय पर और सटीक रूप से भरना केवल एक कानूनी आवश्यकता नहीं है - यह ऋण, वीजा और सरकारी निविदाओं को अनलॉक करता है। बायलेंस दस्तावेज़ संग्रह से लेकर नोटिस प्रतिक्रियाओं तक सब कुछ संभालता है।",
        features: [
          "प्रयोज्यता जांच (अनिवार्य बनाम स्वैच्छिक फाइलिंग)",
          "पैन-आधार लिंकिंग सत्यापन",
          "कुल आय और कर देयता की गणना",
          "फॉर्म 26AS, AIS और TIS समीक्षा",
          "आय और कटौती दस्तावेज़ीकरण (फॉर्म 16, बैंक स्टेटमेंट)",
          "सही आईटीआर फॉर्म भरना (ITR-1 से ITR-7)",
          "संशोधित रिटर्न फाइलिंग",
          "नोटिस और स्क्रूटनी समर्थन (143(1), 139(9), 143(2) प्रतिक्रियाएं)",
          "कर योजना और अग्रिम कर सलाह",
        ],
        whyTitle: "सटीक आईटीआर फाइलिंग क्यों महत्वपूर्ण है",
        whyDesc: "एक गलत आईटीआर फॉर्म या छूटी हुई समय सीमा धारा 139(9) के तहत दोषपूर्ण रिटर्न नोटिस को ट्रिगर कर सकती है। हमारी टीम फाइलिंग से पहले फॉर्म 26AS, AIS और बैंक स्टेटमेंट में आपकी आय का मिलान करती है ताकि आपका रिटर्न सुरक्षित रहे।\n\nहम हर साल आपके टैक्स आउटगो को कम करने के लिए कानूनी कटौती पर भी सलाह देते हैं।",
        whoTitle: "यह किसके लिए है?",
        whoItems: [
          "वेतनभोगी व्यक्ति (फॉर्म 16 धारक)",
          "स्व-नियोजित पेशेवर (डॉक्टर, वकील, सलाहकार)",
          "व्यवसाय के मालिक और प्रोपराइटर",
          "घरेलू या विदेशी आय वाले फ्रीलांसर",
          "HUF और पार्टनरशिप फर्म",
          "कंपनियां और LLP",
        ]
      },
      tds: {
        title: "टीडीएस सेवाएं",
        desc: "स्रोत पर कर कटौती (TDS) का निर्बाध प्रबंधन। हम टीडीएस गणना, अनुपालन और फाइलिंग संभालते हैं, यह सुनिश्चित करते हुए कि आपका व्यवसाय कानून के सही पक्ष में रहे।",
        features: [
          "टैन (TAN) आवेदन",
          "फॉर्म 24Q, 26Q की फाइलिंग",
          "अग्रिम कर और चालान प्रबंधन",
          "फॉर्म 16/16A जनरेशन",
          "टीडीएस डिफॉल्ट और डिमांड समाधान",
        ],
        whyTitle: "अनुपालन न करने की लागत",
        whyDesc: "टीडीएस चूक से महंगा ब्याज शुल्क (1.5% प्रति माह तक) लग सकता है और आयकर विभाग द्वारा खर्चों की अमान्यता हो सकती है। हमारा व्यवस्थित टीडीएस प्रबंधन बिना किसी गलती के समय पर चालान भुगतान और त्रैमासिक रिटर्न फाइलिंग सुनिश्चित करता है।\n\nहम स्वचालित फॉर्म 16/16A जनरेशन प्रदान करते हैं।",
        whoTitle: "यह किसके लिए है?",
        whoItems: [
          "विक्रेताओं को नियमित भुगतान करने वाले व्यवसाय",
          "पेरोल वाली कंपनियां",
          "किराया भुगतान करने वाले व्यावसायिक किरायेदार",
          "सब-कॉन्ट्रैक्टर भुगतान करने वाले पेशेवर",
        ]
      },
      payroll: {
        title: "पेरोल सेवाएं",
        desc: "समय पर और सटीक पेरोल प्रबंधन। वेतन गणना से लेकर पीएफ, ईएसआई और व्यावसायिक कर जैसे वैधानिक अनुपालन तक, हम सब कुछ सटीकता के साथ संभालते हैं।",
        features: [
          "कर्मचारी मास्टर डेटा प्रबंधन",
          "पगार संरचना और मासिक गणना",
          "सटीक पे-स्लिप और पेरोल रजिस्टर",
          "सैलरी पर टीडीएस और फॉर्म 16/16A",
          "PF/ESI/PT/EDLI पंजीकरण और रिटर्न फाइलिंग",
          "पूर्ण और अंतिम निपटान",
        ],
        whyTitle: "पेरोल आउटसोर्स क्यों करें?",
        whyDesc: "पेरोल त्रुटियों से कर्मचारियों में असंतोष और कंपनी के लिए कानूनी उत्तरदायित्व पैदा होते हैं। बायलेंस त्रुटि मुक्त पे-स्लिप प्रदान करता है और सभी जटिल अनुपालन फाइलिंग (PF, ESI, LWF) को संभालता है।\n\nहम सुनिश्चित करते हैं कि आपकी वेतन संरचनाएं आपके कर्मचारियों के लिए कर-अनुकूल हों।",
        whoTitle: "यह किसके लिए है?",
        whoItems: [
          "बढ़ती टीमों वाले स्टार्टअप",
          "10+ कर्मचारियों वाले MSME",
          "आउटसोर्स एचआर अनुपालन की आवश्यकता वाली कंपनियां",
          "कई कर्मचारियों वाले सलाहकार",
        ]
      }
    }
  },
  kn: {
    nav: {
      home: 'ಮುಖಪುಟ',
      about: 'ನಮ್ಮ ಬಗ್ಗೆ',
      services: 'ಸೇವೆಗಳು',
      pricing: 'ದರ ಪಟ್ಟಿ',
      contact: 'ಸಂಪರ್ಕಿಸಿ',
    },
    hero: {
      subtitle: 'ಲೆಕ್ಕಪತ್ರ ನಿರ್ವಹಣೆಯನ್ನು ಸರಳಗೊಳಿಸುವುದು, ಬೆಳವಣಿಗೆಗೆ ಶಕ್ತಿ ನೀಡುವುದು.',
      description: 'Byalance ಬುಕ್‌ಕೀಪಿಂಗ್, ತೆರಿಗೆ అనుసరణ మరియు ఆర్థిక వ్యూహం కోసం మీ ఏకైక పాలుదారు.',
      bookConsultation: 'ಉಚಿತ ಸಮಾಲೋಚನೆ ಪಡೆಯಿರಿ',
      whatsappNow: 'ಈಗಲೇ ವಾಟ್ಸಾಪ್ ಮಾಡಿ',
    },
    sections: {
      pricing: 'ಪಾರದರ್ಶಕ ದರ ಪಟ್ಟಿ',
      pricingSubtitle: 'ನಿಮ್ಮ ವ್ಯವಹಾರದ ಅಗತ್ಯಗಳಿಗೆ ಸರಿಹೊಂದುವ ಯೋಜನೆಯನ್ನು ಆರಿಸಿ. ಸರಳ, ಸ್ಪಷ್ಟ ಮತ್ತು ಪರಿಣಾಮಕಾರಿ.',
    },
    about: {
      badge: 'ಕಾರ್ಪೊರೇಟ್ ಶ್ರೇಷ್ಠತೆ',
      title: 'Byalance ಮಾನದಂಡ',
      p1: 'Byalance ಒಂದು ಕೈಗೆಟುಕುವ ಆಧುನಿಕ ವರ್ಚುವಲ್ ಅಕೌಂಟಿಂಗ್ ಸಂಸ್ಥೆಯಾಗಿದ್ದು, ಭಾರತದ ಮುಂದಿನ ಬೆಳವಣಿಗೆಯ ಅಲೆಯನ್ನು ನಡೆಸುತ್ತಿರುವ ಉದ್ಯಮಿಗಳು ಮತ್ತು ಸಂಸ್ಥಾಪಕರಿಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ.',
      p2: 'ನಾವು ಸಾಂಪ್ರದಾಯಿಕ ಅಕೌಂಟಿಂಗ್ ಮತ್ತು ಆಧುನಿಕ ವ್ಯವಹಾರ ವೇಗದ ನಡುವಿನ ಅಂತರವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತೇವೆ. ಬುಕ್‌ಕೀಪಿಂಗ್, ಜಿಎಸ್‌ಟಿ, ಟಿಡಿಎಸ್ ಮತ್ತು ಪೇರೋಲ್ ಅನ್ನು ಸರಿಯಾದ ರೀತಿಯಲ್ಲಿ ವೃತ್ತಿಪರ ಗುಣಮಟ್ಟದೊಂದಿಗೆ ಮಾಡುತ್ತೇವೆ.',
      missionBadge: 'ನಮ್ಮ ಮಿಷನ್',
      missionTitle: 'ಬೆಳವಣಿಗೆ ಮತ್ತು ಅನುಸರಣೆಯನ್ನು ಬೆಸೆಯುವುದು',
      missionText: '"ಭಾರತದ ಪ್ರತಿಯೊಂದು ವ್ಯವಹಾರಕ್ಕೂ ನಿಯಮಗಳ ಪಾಲನೆಯನ್ನು ಒತ್ತಡ ಮುಕ್ತ, ಕೈಗೆಟುಕುವ ಮತ್ತು ವೃತ್ತಿಪರವನ್ನಾಗಿ ಮಾಡುವುದು."',
      stats: {
        trusted: 'ವಿಶ್ವಾಸಾರ್ಹ ಪಾಲುದಾರ',
        trustedText: 'ನಂಬಿಕೆ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹತೆಯ ಆಧಾರದ ಮೇಲೆ ನಮ್ಮ ಗ್ರಾಹಕರೊಂದಿಗೆ ದೀರ್ಘಕಾಲದ ಸಂಬಂಧವನ್ನು ನಿರ್ಮಿಸುವುದು.',
        growth: 'ಬೆಳವಣಿಗೆ ಕೇಂದ್ರಿತ',
        growthText: 'ವ್ಯವಹಾರಗಳ ಬೆಳವಣಿಗೆಯ ಪ್ರತಿ ಹಂತದಲ್ಲೂ ಬೆಂಬಲ ನೀಡುವುದು.',
        timely: 'ಸಮಯೋಚಿತ ಸೇವೆ',
        timelyText: 'ಎಲ್ಲಾ ಗಡುವುಗಳನ್ನು ಪೂರೈಸುವುದು ಮತ್ತು ನಿಮ್ಮ ವ್ಯವಹಾರವನ್ನು ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ನಿಯಮಗಳ ಪಾಲನೆಯಲ್ಲಿಡುವುದು.',
      }
    },
    services: {
      title: 'ನಮ್ಮ ಸೇವೆಗಳು',
      description: 'ನಿಮ್ಮ ವ್ಯವಹಾರಕ್ಕಾಗಿ ವಿಶೇಷವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸಂಪೂರ್ಣ ಅಕೌಂಟಿಂಗ್ ಪರಿಹಾರಗಳು',
      items: [
        { 
          title: 'ಅಕೌಂಟಿಂಗ್ ಮತ್ತು ಬುಕ್ಕೀಪಿಂಗ್', 
          text: 'ನಿಮ್ಮ ದಾಖಲೆಗಳನ್ನು ನಿಖರವಾಗಿ ಮತ್ತು ನವೀಕೃತವಾಗಿರಿಸಲು ಸಮಗ್ರ ಅಕೌಂಟಿಂಗ್ ಸೇವೆಗಳು.',
          features: [
            'ಮಾರಾಟ, ಖರೀದಿ, ವೆಚ್ಚದ ನಮೂದುಗಳು',
            'ಬ್ಯಾಂಕ್ ಸಮನ್ವಯ (Bank Reconciliation)',
            'ನಗದು ಪುಸ್ತಕ ನಿರ್ವಹಣೆ',
            'ಜರ್ನಲ್ ನಮೂದುಗಳು ಮತ್ತು ಸವಕಳಿ',
            'ಲೆಡ್ಜರ್‌ಗಳು/ಮಾರಾಟಗಾರರ ಸಮನ್ವಯ',
            'ಟ್ರಯಲ್ ಬ್ಯಾಲೆನ್ಸ್, ಪಿ&ಎಲ್, ಬ್ಯಾಲೆನ್ಸ್ ಶೀಟ್',
            'ಸ್ವೀಕರಿಸಬಹುದಾದ ಮತ್ತು ಪಾವತಿಸಬೇಕಾದ ಟ್ರ್ಯಾಕಿಂಗ್',
            'ಡೇಟಾ ಸೆಟಪ್ ಮತ್ತು ಕ್ಲೀನಪ್',
            'ತಿಂಗಳ ಅಂತ್ಯ ಮತ್ತು ವರ್ಷದ ಅಂತ್ಯದ ಕ್ಲೋಸಿಂಗ್ ಬೆಂಬಲ'
          ]
        },
        { 
          title: 'ಐಟಿಆರ್ ಸೇವೆಗಳು', 
          text: 'ವ್ಯಕ್ತಿಗಳು ಮತ್ತು ವ್ಯವಹಾರಗಳಿಗೆ ತಜ್ಞ ಐಟಿಆರ್ ಫೈಲಿಂಗ್ ಸೇವೆಗಳು.',
          features: [
            'ಅನ್ವಯಿಸುವಿಕೆ ಪರಿಶೀಲನೆ (ಕಡ್ಡಾಯ/ಸ್ವಯಂಪ್ರೇರಿತ)',
            'ಪ್ಯಾನ್-ಆಧಾರ್ ಲಿಂಕ್ ಮಾಡುವ ಪರಿಶೀಲನೆ',
            'ಒಟ್ಟು ಆದಾಯ ಮತ್ತು ತೆರಿಗೆಯ ಲೆಕ್ಕಾಚಾರ',
            'ಫಾರ್ಮ್ 26AS, AIS ಮತ್ತು TIS ವಿಮರ್ಶೆ',
            'ಸರಿಯಾದ ಐಟಿಆರ್ ಫಾರ್ಮ್ ಫೈಲಿಂಗ್ (ITR-1 ರಿಂದ ITR-7)',
            'ನೋಟಿಸ್ ಮತ್ತು ಪರಿಶೀಲನೆ ಬೆಂಬಲ'
          ]
        },
        { 
          title: 'ಜಿಎಸ್ಟಿ ಸೇವೆಗಳು', 
          text: 'ನಿಮ್ಮ ವ್ಯವಹಾರವನ್ನು ತೆರಿಗೆ-ಅನುಸರಣೆಯಲ್ಲಿಡಲು ಸಂಪೂರ್ಣ ಜಿಎಸ್ಟಿ ಫೈಲಿಂಗ್ ಸೇವೆಗಳು.',
          features: [
            'ಜಿಎಸ್ಟಿ ನೋಂದಣಿ',
            'GSTR-1, 3B, 9 ಫೈಲಿಂಗ್',
            'ಜಿಎಸ್ಟಿ ಇನ್‌ಪುಟ್ ಕ್ರೆಡಿಟ್ ಹೊಂದಾಣಿಕೆ',
            'ಇ-ಇನ್‌ವಾಯ್ಸ್ ಮತ್ತು ಇ-ವೇ ಬಿಲ್ ಅನುಸರಣೆ',
            'ವಿಳಂಬ ಶುಲ್ಕ ಮತ್ತು ದಂಡ ಪರಿಹಾರ'
          ]
        },
        { 
          title: 'ಟಿಡಿಎಸ್ ಸೇವೆಗಳು', 
          text: 'ನಿಮ್ಮ ವ್ಯವಹಾರಕ್ಕಾಗಿ ಸಮಗ್ರ ಟಿಡಿಎಸ್ ನಿರ್ವಹಣೆ ಮತ್ತು ಫೈಲಿಂಗ್ ಸೇವೆಗಳು.',
          features: [
            'ಟ್ಯಾನ್ (TAN) ಅರ್ಜಿ',
            'ಫಾರ್ಮ್ 24Q, 26Q ಫೈಲಿಂಗ್',
            'ಮುಂಗಡ ತೆರಿಗೆ ochu ಚಲನ್ ನಿರ್ವಹಣೆ',
            'ಫಾರ್ಮ್ 16/16A ರಚನೆ',
            'ಟಿಡಿಎಸ್ ಡಿಫಾಲ್ಟ್ ಡಿಮ್ಯಾಂಡ್ ಪರಿಹಾರ'
          ]
        },
        { 
          title: 'ಪೇರೋಲ್ ಸೇವೆಗಳು', 
          text: 'ನಿಖರವಾದ ಲೆಕ್ಕಾಚಾರಗಳು ಮತ್ತು ಶಾಸನಬದ್ಧ ನಿಯಮಗಳ ಪಾಲನೆಯೊಂದಿಗೆ ಸಂಪೂರ್ಣ ಪೇರೋಲ್ ನಿರ್ವಹಣೆ.',
          features: [
            'ಉದ್ಯೋಗಿ ಮಾಸ್ಟರ್ ಡೇಟಾ ನಿರ್ವಹಣೆ',
            'ಸಂಬಳ ರಚನೆ ಮತ್ತು ಮಾಸಿಕ ಲೆಕ್ಕಾಚಾರಗಳು',
            'ನಿಖರವಾದ ಪೇ-ಸ್ಲಿಪ್‌ಗಳು ಮತ್ತು ಪೇರೋಲ್ ರಿಜಿಸ್ಟರ್',
            'ಸಂಬಳದ ಮೇಲೆ ಟಿಡಿಎಸ್ ಮತ್ತು ಫಾರ್ಮ್ 16/16A',
            'PF/ESI/PT/EDLI ನೋಂದಣಿ ಮತ್ತು ರಿಟರ್ನ್ ಫೈಲಿಂಗ್',
            'ಪೂರ್ಣ ಮತ್ತು ಅಂತಿಮ ಸೆಟಲ್ಮೆಂಟ್'
          ]
        }
      ],
      ctaTitle: 'ತೊಂದರೆ ರಹಿತ ಲೆಕ್ಕಪತ್ರ ನಿರ್ವಹಣೆಗೆ ಸಿದ್ಧರಿದ್ದೀರಾ?',
      ctaText: 'ತಮ್ಮ ಬೆಳವಣಿಗೆಗಾಗಿ Byalance ಅನ್ನು ನಂಬುವ 100+ ವ್ಯವಹಾರಗಳೊಂದಿಗೆ ಸೇರಿ.',
      ctaButton: 'ಇಂದೇ ಪ್ರಾರಂಭಿಸಿ',
    },
    features: {
      title: 'BYALANCE ಅನ್ನು ಏಕೆ ಆರಿಸಬೇಕು?',
      description: 'ಭಾರತದಾದ್ಯಂತ ಬೆಳೆಯುತ್ತಿರುವ ವ್ಯವಹಾರಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ವೃತ್ತಿಪರ ಅಕೌಂಟಿಂಗ್ ಸೇವೆಗಳು.',
      items: [
        { title: 'ಪಾರದರ್ಶಕ ಬೆಲೆ', text: 'ಯಾವುದೇ ಗುಪ್ತ ವೆಚ್ಚಗಳಿಲ್ಲದೆ ಸ್ಪಷ್ಟ ಬೆಲೆ. ನೀವು ಯಾವುದಕ್ಕಾಗಿ ಪಾವತಿಸುತ್ತೀರಿ ಎಂದು ತಿಳಿಯಿರಿ.' },
        { title: 'ಸ್ಥಳೀಯ ಭಾಷಾ ಬೆಂಬಲ', text: 'ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯಲ್ಲಿ ಸಂವಹನ ನಡೆಸಿ. ನಾವು ಸ್ಥಳೀಯ ವ್ಯವಹಾರ ಅಗತ್ಯಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತೇವೆ.' },
        { title: 'ಸಂಪೂರ್ಣ ನಿಯಮಗಳ ಪಾಲನೆ', text: 'ನೋಂದಣಿಯಿಂದ ಫೈಲಿಂಗ್ ಮತ್ತು ಅದಕ್ಕೂ ಮೀರಿ ಸಂಪೂರ್ಣ ಅನುಸರಣೆ ನಿರ್ವಹಣೆ.' },
        { title: 'ಸೂಕ್ಷ್ಮ ವ್ಯವಹಾರ ಸ್ನೇಹಿ', text: 'ಅತ್ಯಂತ ಸಣ್ಣ ವ್ಯವಹಾರಗಳಿಗೂ ಸೇವೆಗಳು ಲಭ್ಯವಿದೆ. ಆತ್ಮವಿಶ್ವಾಸದಿಂದ ಬೆಳೆಯಿರಿ.' }
      ]
    },
    pricing: {
      title: 'ಪಾರದರ್ಶಕ ದರಗಳು',
      description: 'ನಿಮ್ಮ ವ್ಯವಹಾರದ ಅಗತ್ಯಗಳಿಗೆ ಸರಿಹೊಂದುವ ಯೋಜನೆಯನ್ನು ಆರಿಸಿ. ಸರಳ, ಸ್ಪಷ್ಟ ಮತ್ತು ಪರಿಣಾಮಕಾರಿ.',
      starter: 'ಸ್ಟಾರ್ಟರ್ ಪ್ಲಾನ್',
      starterPrice: '₹1,999 – ₹6,999',
      perMonth: '/ತಿಂಗಳು',
      starterFeatures: ['ಜಿಎಸ್‌ಟಿ ರಿಟರ್ನ್ಸ್‌', 'ಬೇಸಿಕ್ ಬುಕ್ಕೀಪಿಂಗ್', 'ಸೇಲ್ಸ್ ಮತ್ತು ಪರ್ಚೇಸ್ ಎಂಟ್ರಿಗಳು', 'ಮಾಸಿಕ ಹಣಕಾಸು ವರದಿಗಳು'],
      recommended: 'ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ',
      growth: 'ಗ್ರೋತ್ ಪ್ಲಾನ್',
      growthPrice: '₹7,499 – ₹14,999',
      growthFeatures: ['ಜಿಎಸ್‌ಟಿ ರಿಟರ್ನ್ಸ್‌ ಮತ್ತು ಕಂಪ್ಲೈಯನ್ಸ್', 'ಟಿಡಿಎಸ್ ರಿಟರ್ನ್ಸ್‌ ಮತ್ತು ಫೈಲಿಂಗ್', 'ಪೂರ್ಣ ಅಕೌಂಟಿಂಗ್ ಮತ್ತು ಬುಕ್ಕೀಪಿಂಗ್', 'ಬ್ಯಾಂಕ್ ಸಮನ್ವಯ', 'ಹಣಕಾಸು ವರದಿಗಳು (P&L, ಬ್ಯಾಲೆನ್ಸ್ ಶೀಟ್)'],
      pro: 'ಪ್ರೊ ಪ್ಲಾನ್',
      proPrice: '₹15,499 – ₹20,000+',
      proFeatures: ['ಜಿಎಸ್‌ಟಿ ಮತ್ತು ಟಿಡಿಎಸ್ ಪೂರ್ಣ ನಿರ್ವಹಣೆ', 'ಪೇರೋಲ್ ಪ್ರಕ್ರಿಯೆ', 'ಸಂಪೂರ್ಣ ಅಕೌಂಟಿಂಗ್ ಸೇವೆಗಳು', 'ಸುಧಾರಿತ ಹಣಕಾಸು ವರದಿಗಳು', 'ಆದ್ಯತೆಯ ಬೆಂಬಲ'],
      notIdeal: 'ಸೂಕ್ತ ಬೆಲೆ ಅಲ್ಲವೇ?',
      notIdealDesc: 'ಕಸ್ಟಮ್ ಪರಿಹಾರ ಬೇಕೇ? ನಿಮ್ಮ ನಿರ್ದಿಷ್ಟ ಅವಶ್ಯಕತೆಗಳನ್ನು ಚರ್ಚಿಸೋಣ.',
      plans: [
        { name: 'ಸ್ಟಾರ್ಟರ್ ಪ್ಲಾನ್', price: '₹1,999 – ₹6,999', period: '/ತಿಂಗಳು', features: ['ಜಿಎಸ್‌ಟಿ ರಿಟರ್ನ್ಸ್‌', 'ಬೇಸಿಕ್ ಬುಕ್ಕೀಪಿಂಗ್', 'ಸೇಲ್ಸ್ ಮತ್ತು ಪರ್ಚೇಸ್ ಎಂಟ್ರಿಗಳು', 'ಮಾಸಿಕ ಹಣಕಾಸು ವರದಿಗಳು'] },
        { name: 'ಗ್ರೋತ್ ಪ್ಲಾನ್', price: '₹7,499 – ₹14,999', period: '/ತಿಂಗಳು', features: ['ಜಿಎಸ್‌ಟಿ ರಿಟರ್ನ್ಸ್‌ ಮತ್ತು ಕಂಪ್ಲೈಯನ್ಸ್', 'ಟಿಡಿಎಸ್ ರಿಟರ್ನ್ಸ್‌ ಮತ್ತು ಫೈಲಿಂಗ್', 'ಪೂರ್ಣ ಅಕೌಂಟಿಂಗ್ ಮತ್ತು ಬುಕ್ಕೀಪಿಂಗ್', 'ಬ್ಯಾಂಕ್ ಸಮನ್ವಯ', 'ಹಣಕಾಸು ವರದಿಗಳು (P&L, ಬ್ಯಾಲೆನ್ಸ್ ಶೀಟ್)'] },
        { name: 'ಪ್ರೊ ಪ್ಲಾನ್', price: '₹15,499 – ₹20,000+', period: '/ತಿಂಗಳು', features: ['ಜಿಎಸ್‌ಟಿ ಮತ್ತು ಟಿಡಿಎಸ್ ಪೂರ್ಣ ನಿರ್ವಹಣೆ', 'ಪೇರೋಲ್ ಪ್ರಕ್ರಿಯೆ', 'ಸಂಪೂರ್ಣ ಅಕೌಂಟಿಂಗ್ ಸೇವೆಗಳು', 'ಸುಧಾರಿತ ಹಣಕಾಸು ವರದಿಗಳು', 'ಆದ್ಯತೆಯ ಬೆಂಬಲ'] }
      ],
      button: 'ಯೋಜನೆಯನ್ನು ಆರಿಸಿ',
      customButton: 'ಸಂಪರ್ಕಿಸಿ',
    },
    cta: {
      choosePlan: 'ಆರಿಸಿ',
      chooseStarter: 'ಸ್ಟಾರ್ಟರ್ ಆಯ್ಕೆಮಾಡಿ',
      chooseGrowth: 'ಗ್ರೋತ್ ಆಯ್ಕೆಮಾಡಿ',
      choosePro: 'ಪ್ರೊ ಆಯ್ಕೆಮಾಡಿ',
      contactCustom: 'ಕಸ್ಟಮ್ ಬೆಲೆಗಾಗಿ ಸಂಪರ್ಕಿಸಿ',
    },
    contact: {
      badge: 'ತಜ್ಞರ ಸಮಾಲೋಚನೆ',
      title: 'ನಿಮ್ಮ ಹಣಕಾಸಿನ ಅನುಸರಣೆಯನ್ನು ಬಲಪಡಿಸಲು ನೀವು ಸಿದ್ಧರಿದ್ದೀರಾ?',
      description: 'ಇಂದೇ ನಮ್ಮ ಹಿರಿಯ ಅಕೌಂಟೆಂಟ್‌ಗಳೊಂದಿಗೆ ಮಾತನಾಡಿ. ನಾವು ನಿಯಂತ್ರಕ ಸ್ಪಷ್ಟತೆ ಮತ್ತು ವ್ಯವಹಾರದ ಬೆಳವಣಿಗೆಗೆ ಸ್ಪಷ್ಟ ದಾರಿಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ.',
      phone: 'ನಮಗೆ ಕರೆ ಮಾಡಿ',
      email: 'ನಮಗೆ ಇಮೇಲ್ ಮಾಡಿ',
      location: 'ನಮ್ಮನ್ನು ಭೇಟಿ ಮಾಡಿ',
      formTitle: 'ನೇರ ವಿಚಾರಣೆಗಳು',
      name: 'ಪೂರ್ಣ ಹೆಸರು',
      emailLabel: 'ಇಮೇಲ್ ವಿಳಾಸ',
      message: 'ನಿಮ್ಮ ಸಂದೇಶ',
      send: 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
    },
    footer: {
      about: 'ಭಾರತದಾದ್ಯಂತ ಹೈ-ಗ್ರೋತ್ ಸ್ಟಾರ್ಟ್ಅಪ್‌ಗಳು ಮತ್ತು ಎಂಎಸ್‌ಎಂಇಗಳಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸಲು ಮೀಸಲಾಗಿರುವ ಪ್ರಮುಖ ವರ್ಚುವಲ್ ಅಕೌಂಟಿಂಗ್ ಸಂಸ್ಥೆ.',
      resources: 'ಸಂಪನ್ಮೂಲಗಳು',
      expertise: 'ನಮ್ಮ ಪರಿಣತಿ',
      headquarters: 'ಪ್ರಧಾನ ಕಚೇರಿ',
      privacy: 'ಗೌಪ್ಯತಾ ನೀತಿ',
      data: 'ಡೇಟಾ ನಿರ್ವಹಣೆ ನೀತಿ',
      rights: '© 2026 Byalance. ಸರ್ವ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
    },
    common: {
      learnMore: 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
      businessHours: 'ಕೆಲಸದ ಸಮಯ',
      instantResponse: 'ತ್ವರಿತ ಪ್ರತಿಕ್ರಿಯೆ',
      whatsappDesk: 'ನಮ್ಮ ವಾಟ್ಸಾಪ್ ಡೆಸ್ಕ್ ನೀತಿ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಪ್ರಮಾಣೀಕೃತ ಅಕೌಂಟೆಂಟ್‌ಗಳಿಂದ ನಿರ್ವಹಿಸಲ್ಪಡುತ್ತದೆ.',
      messageNow: 'ಈಗಲೇ ಸಂದೇಶ ಕಳುಹಿಸಿ',
      enterName: 'ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
      mobileNumber: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ',
      enterMobile: 'ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ',
      emailId: 'ಇಮೇಲ್ ಐಡಿ',
      enterEmail: 'ನಿಮ್ಮ ಇಮೇಲ್ ಐಡಿಯನ್ನು ನಮೂದಿಸಿ',
      businessType: 'ವ್ಯವಹಾರದ ಪ್ರಕಾರ',
      selectBusinessType: 'ನಿಮ್ಮ ವ್ಯವಹಾರದ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
      businessTypes: [
        'ವೈಯಕ್ತಿಕ / ಮಾಲೀಕತ್ವ',
        'ಪಾಲುದಾರಿಕೆ / ಎಲ್‌ಎಲ್‌ಪಿ',
        'ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್ ಕಂಪನಿ',
        'ಸ್ಟಾರ್ಟ್ಅಪ್ (ನೋಂದಾಯಿತ)',
        'ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ / ಇ-ಕಾಮರ್ಸ್',
        'ಸೇವಾ ಪೂರೈಕೆದಾರ',
        'ಇತರ'
      ],
      accountingNeeds: 'ನಿಮ್ಮ ಅಕೌಂಟಿಂಗ್ ಅಗತ್ಯಗಳ ಬಗ್ಗೆ ನಮಗೆ ತಿಳಿಸಿ...',
      gstinPending: 'GSTIN: ಬಾಕಿ ಇದೆ',
      whatsIncluded: "ಏನು ಒಳಗೊಂಡಿದೆ",
      getStartedToday: 'ಇಂದೇ ಪ್ರಾರಂಭಿಸಿ',
      chatWhatsapp: 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ',
      sendEnquiry: 'ವಿಚಾರಣೆ ಕಳುಹಿಸಿ',
      relatedServices: 'ಸಂಬಂಧಿತ ಸೇವೆಗಳು',
    },
    servicePage: {
      badge: 'ಸೇವಾ ಶ್ರೇಷ್ಠತೆ',
      framework: 'ಅನುಸರಣೆ ಚೌಕಟ್ಟು',
      description: 'ನಾವು ಆಧುನಿಕ ವ್ಯವಹಾರಗಳಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಎಂಟರ್‌ಪ್ರೈಸ್-ದರ್ಜೆಯ {{title}} ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ. ನಮ್ಮ ಕಾರ್ಯವಿಧಾನವು ತಂತ್ರಜ್ಞಾನ-ಚಾಲಿತ ದಕ್ಷತೆಯೊಂದಿಗೆ ಕಟ್ಟುನಿಟ್ಟಾದ ಅನುಸರಣೆ ಮಾನದಂಡಗಳನ್ನು ಸಂಯೋಜಿಸುತ್ತದೆ.',
      features: [
        { t: 'ತಜ್ಞರ ಆಡಿಟ್', d: 'ಹಿರಿಯ ತಜ್ಞರಿಂದ ಪರಿಶೀಲಿಸಲ್ಪಟ್ಟ ಫೈಲಿಂಗ್‌ಗಳು.' },
        { t: 'ಗಡುವು ಗ್ಯಾರಂಟಿ', d: 'ಶಾಸನಬದ್ಧ ಗಡುವುಗಳೊಂದಿಗೆ ಖಚಿತವಾದ ಅನುಸರಣೆ.' },
        { t: 'ಡಿಜಿಟಲ್ ವಾಲ್ಟ್', d: 'ಎಲ್ಲಾ ಹಣಕಾಸು ದಾಖಲೆಗಳ ಸುರಕ್ಷಿತ, ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡಿದ ಸಂಗ್ರಹಣೆ.' },
        { t: 'ಕಾರ್ಯತಂತ್ರದ ಸಲಹೆ', d: 'ಹಿರಿಯ ತೆರಿಗೆ ಸಲಹೆಗಾರರಿಗೆ ನೇರ ಪ್ರವೇಶ.' },
      ],
      ctaTitle: 'ಆನ್‌ಬೋರ್ಡಿಂಗ್ ಪ್ರಾರಂಭಿಸಿ',
      ctaText: 'ತಮ್ಮ ಹಣಕಾಸಿನ ಸಮಗ್ರತೆಗಾಗಿ Byalance ಅನ್ನು ನಂಬುವ 200+ ವ್ಯವಹಾರಗಳೊಂದಿಗೆ ಸೇರಿ.',
      ctaButton: 'ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಸಂಪರ್ಕಿಸಿ',
    },
    serviceDetail: {
      accounting: {
        title: "ಅಕೌಂಟಿಂಗ್ ಮತ್ತು ಬುಕ್ಕೀಪಿಂಗ್",
        desc: "ನಿಖರವಾದ ಮತ್ತು ಸಮಯೋಚಿತ ಪುಸ್ತಕಗಳು ಪ್ರತಿಯೊಂದು ಆರೋಗ್ಯಕರ ವ್ಯವಹಾರದ ಅಡಿಪಾಯವಾಗಿದೆ. ನಾವು ನಿಮ್ಮ ಸಂಪೂರ್ಣ ಅಕೌಂಟಿಂಗ್ ಜೀವನಚಕ್ರವನ್ನು ನಿರ್ವಹಿಸುತ್ತೇವೆ — ದೈನಂದಿನ ನಮೂದುಗಳಿಂದ ಹಿಡಿದು ವರ್ಷದ ಅಂತ್ಯದ ಮುಕ್ತಾಯದವರೆಗೆ — ಇದರಿಂದ ನೀವು ಯಾವಾಗಲೂ ಸ್ಪಷ್ಟ ಹಣಕาสಿನ ಚಿತ್ರಣವನ್ನು ಹೊಂದಿರುತ್ತೀರಿ.",
        features: [
          "ಮಾರಾಟ, ಖರೀದಿ ಮತ್ತು ವೆಚ್ಚದ ನಮೂದುಗಳು",
          "ಬ್ಯಾಂಕ್ ಸಮನ್ವಯ (ಮಾಸಿಕ)",
          "ನಗದು ಪುಸ್ತಕ ಮತ್ತು ಪೆಟ್ಟಿ ಕ್ಯಾಶ್ ನಿರ್ವಹಣೆ",
          "ಜರ್ನಲ್ ಎಂಟ್ರಿಗಳು ಮತ್ತು ಸವಕಳಿ ವೇಳಾಪಟ್ಟಿಗಳು",
          "ಲೆಡ್ಜರ್ ಮತ್ತು ಮಾರಾಟಗಾರರ ಸಮನ್ವಯ",
          "ಟ್ರಯಲ್ ಬ್ಯಾಲೆನ್ಸ್, P&L ಮತ್ತು ಬ್ಯಾಲೆನ್ಸ್ ಶೀಟ್",
          "ಸ್ವೀಕೃತಿಗಳು ಮತ್ತು ಪಾವತಿಗಳ ಟ್ರ್ಯಾಕಿಂಗ್",
          "ಡೇಟಾ ಸೆಟಪ್, ಶುಚಿಗೊಳಿಸುವಿಕೆ ಮತ್ತು ವಲಸೆ",
          "ತಿಂಗಳ ಅಂತ್ಯದ ಮತ್ತು ವರ್ಷದ ಅಂತ್ಯದ ಮುಕ್ತಾಯ ಬೆಂಬಲ",
        ],
        whyTitle: "ಇದು ಏಕೆ ಮುಖ್ಯ?",
        whyDesc: "ನಿಖರವಾದ ಪುಸ್ತಕಗಳಿಲ್ಲದೆ, ನೀವು ಸರಿಯಾದ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳಲು ಸಾಧ್ಯವಾಗುವುದಿಲ್ಲ. ವಿಳಂಬವಾದ ಅಥವಾ ತಪ್ಪಾದ ಖಾತೆಗಳು ಎಂದರೆ ತೆರಿಗೆ ಕಡಿತಗಳು ಕೈತಪ್ಪುವುದು, ತಪ್ಪಾದ ಜಿಎಸ್‌ಟಿ ಫೈಲಿಂಗ್‌ಗಳು ಮತ್ತು ನಗದು ಹರಿವಿನ ಬಗ್ಗೆ ಅಸ್ಪಷ್ಟತೆ ಎಂದರ್ಥ. Byalance ನಿಮ್ಮ ದಾಖಲೆಗಳನ್ನು ಪ್ರತಿ ತಿಂಗಳು ವ್ಯವಸ್ಥಿತವಾಗಿ ಇರಿಸುತ್ತದೆ.\n\nನಾವು Tally, Zoho Books, QuickBooks ಮತ್ತು Excel ಜೊತೆ ಕೆಲಸ ಮಾಡುತ್ತೇವೆ — ನಿಮ್ಮ ತಂಡ ಈಗಾಗಲೇ ಏನನ್ನು ಬಳಸುತ್ತದೆಯೋ ಅದರ ಜೊತೆಗೆ. ನಿಮ್ಮ ಕೆಲಸಕ್ಕೆ ಯಾವುದೇ ಅಡ್ಡಿಯಾಗುವುದಿಲ್ಲ.",
        whoTitle: "ಇದು ಯಾರಿಗೆ?",
        whoItems: [
          "ಚಿಲ್ಲರೆ ಮತ್ತು ವ್ಯಾಪಾರ ಸಂಸ್ಥೆಗಳು",
          "ಸ್ಟಾರ್ಟ್ಅಪ್‌ಗಳು ಮತ್ತು ಆರಂಭಿಕ ಹಂತದ ಕಂಪನಿಗಳು",
          "ಸೇವಾ ಪೂರೈಕೆದಾರರು ಮತ್ತು ಸಲಹೆಗಾರರು",
          "ಸಣ್ಣ ಮತ್ತು ಮಧ್ಯಮ ಕೈಗಾರಿಕೆಗಳು (MSMEs)",
          "ಇ-ಕಾಮರ್ಸ್ ಮಾರಾಟಗಾರರು",
        ]
      },
      gst: {
        title: "ಜಿಎಸ್‌ಟಿ ಸೇವೆಗಳು",
        desc: "ಸರಕು ಮತ್ತು ಸೇವಾ ತೆರಿಗೆ (GST) ನಿಯಮಗಳೊಂದಿಗೆ ಸಂಪೂರ್ಣವಾಗಿ ಅನುಸರಣೆಯಲ್ಲಿರಿ. ನೋಂದಣಿಯಿಂದ ಹಿಡಿದು ಮಾಸಿಕ/ವಾರ್ಷಿಕ ಫೈಲಿಂಗ್‌ಗಳು ಮತ್ತು ಸಮನ್ವಯದವರೆಗೆ, ನಾವು ನಿಮ್ಮ ಜಿಎಸ್‌ಟಿ ಜೀವನಚಕ್ರದ ಪ್ರತಿಯೊಂದು ಹಂತವನ್ನೂ ನಿರ್ವಹಿಸುತ್ತೇವೆ.",
        features: [
          "ಜಿಎಸ್‌ಟಿ ನೋಂದಣಿ (Regular & Composition)",
          "GSTR-1 ಫೈಲಿಂಗ್ (ಮಾಸಿಕ / ತ್ರೈಮಾಸಿಕ)",
          "GSTR-3B ಫೈಲಿಂಗ್ (ಮಾಸಿಕ)",
          "GSTR-9 ವಾರ್ಷಿಕ ರಿಟರ್ನ್ ಫೈಲಿಂಗ್",
          "ಜಿಎಸ್‌ಟಿ ಇನ್‌ಪುಟ್ ಕ್ರೆಡಿಟ್ ಮ್ಯಾಚಿಂಗ್ (2B vs Books)",
          "ಇ-ಇನ್‌ವಾಯ್ಸ್ ಮತ್ತು ಇ-ವೇ ಬಿಲ್ ಅನುಸರಣೆ",
          "ಜಿಎಸ್‌ಟಿ ತಿದ್ದುಪಡಿಗಳು ಮತ್ತು ಸಮನ್ವಯ",
          "ವಿಳಂಬ ಶುಲ್ಕ ಮತ್ತು ದಂಡದ ಪರಿಹಾರ",
        ],
        whyTitle: "ಸಕಾಲಿಕ ಜಿಎಸ್‌ಟಿ ಫೈಲಿಂಗ್ ಏಕೆ ಮುಖ್ಯ?",
        whyDesc: "ತಡವಾದ ಅಥವಾ ತಪ್ಪಾದ ಜಿಎಸ್‌ಟಿ ಫೈಲಿಂಗ್‌ಗಳು ಪ್ರತಿ ದಿನಕ್ಕೆ ₹200 ವರೆಗೆ ದಂಡವನ್ನು ಆಕರ್ಷಿಸುತ್ತವೆ ಮತ್ತು ನಿಮ್ಮ ಗ್ರಾಹಕರು ಇನ್‌ಪುಟ್ ಟ್ಯಾಕ್ಸ್ ಕ್ರೆಡಿಟ್ ಪಡೆಯುವುದನ್ನು ತಡೆಯಬಹುದು. Byalance ನಿಮ್ಮ ರಿಟರ್ನ್ಸ್‌ಗಳನ್ನು ಗಡುವಿನ ಮೊದಲು ನಿಖರವಾಗಿ ಫೈಲ್ ಮಾಡುತ್ತದೆ.\n\nನಾವು ಜಿಎಸ್‌ಟಿಎನ್ ಪೋರ್ಟಲ್ ನೋಟಿಸ್‌ಗಳು ಮತ್ತು ಸಲಹೆಗಳನ್ನು ಸಹ ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತೇವೆ.",
        whoTitle: "ಇದು ಯಾರಿಗೆ?",
        whoItems: [
          "₹40 ಲಕ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ವಾರ್ಷಿಕ ವಹಿವಾಟು ಹೊಂದಿರುವ ವ್ಯವಹಾರಗಳು",
          "ಇ-ಕಾಮರ್ಸ್ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಮಾರಾಟಗಾರರು",
          "ರಫ್ತುದಾರರು ಮತ್ತು ಆಮದುದಾರರು",
          "ಜಿಎಸ್‌ಟಿ ಮಿತಿ ಮೀರಿದ ಸೇವಾ ಪೂರೈಕೆದಾರರು",
          "ಕಂಪೋಸಿಷನ್‌ನಿಂದ ರೆಗ್ಯುಲರ್ ಸ್ಕೀಮ್‌ಗೆ ಬದಲಾಗುವವರು",
        ]
      },
      itr: {
        title: "ಐಟಿಆರ್ ಸೇವೆಗಳು",
        desc: "ನಿಮ್ಮ ಆದಾಯ ತೆರಿಗೆ ರಿಟರ್ನ್ ಅನ್ನು ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಫೈಲ್ ಮಾಡುವುದು ಕೇವಲ ಕಾನೂನು ಅವಶ್ಯಕತೆಯಲ್ಲ — ಇದು ಸಾಲಗಳು, ವೀಸಾಗಳು ಮತ್ತು ಸರ್ಕಾರಿ ಟೆಂಡರ್‌ಗಳಿಗೆ ದಾರಿ ಮಾಡಿಕೊಡುತ್ತದೆ. ಡಾಕ್ಯುಮೆಂಟ್ ಸಂಗ್ರಹಣೆಯಿಂದ ನೋಟಿಸ್ ಪ್ರತಿಕ್ರಿಯೆಗಳವರೆಗೆ ನಾವು ಎಲ್ಲವನ್ನೂ ನಿರ್ವಹಿಸುತ್ತೇವೆ.",
        features: [
          "ಅನ್ವಯಿಸುವಿಕೆ ಪರಿಶೀಲನೆ (ಕಡ್ಡಾಯ ವರ್ಸಸ್ ಸ್ವಯಂಪ್ರೇರಿತ)",
          "ಪಾನ್-ಆಧಾರ್ ಲಿಂಕ್ ಮಾಡುವ ಪರಿಶೀಲನೆ",
          "ಒಟ್ಟು ಆದಾಯ ಮತ್ತು ತೆರಿಗೆ ಹೊಣೆಗಾರಿಕೆಯ ಲೆಕ್ಕಾಚಾರ",
          "ಫಾರ್ಮ್ 26AS, AIS ಮತ್ತು TIS ಪರಿಶೀಲನೆ",
          "ಆದಾಯ ಮತ್ತು ಕಡಿತ ದಾಖಲಾತಿ (Form 16)",
          "ಸರಿಯಾದ ಐಟಿಆರ್ ಫಾರ್ಮ್ ಫೈಲಿಂಗ್ (ITR-1 ರಿಂದ ITR-7)",
          "ಪರಿಷ್ಕೃತ ರಿಟರ್ನ್ ಫೈಲಿಂಗ್",
          "ನೋಟಿಸ್ ಮತ್ತು ಸ್ಕ್ರುಟಿನಿ ಬೆಂಬಲ",
          "ತೆರಿಗೆ ಯೋಜನೆ ಮತ್ತು ಮುಂಗಡ ತೆರಿಗೆ ಸಲಹೆ",
        ],
        whyTitle: "ನಿಖರ ಐಟಿಆರ್ ಫೈಲಿಂಗ್ ಏಕೆ ಮುಖ್ಯ?",
        whyDesc: "ತಪ್ಪಾದ ಐಟಿಆರ್ ಫಾರ್ಮ್ ಅಥವಾ ಗಡುವು ತಪ್ಪುವುದು ಸೆಕ್ಷನ್ 139(9) ಅಡಿಯಲ್ಲಿ ನೋಟಿಸ್‌ಗೆ ಕಾರಣವಾಗಬಹುದು. ನಮ್ಮ ತಂಡವು ಫೈಲಿಂಗ್ ಮಾಡುವ ಮೊದಲು ನಿಮ್ಮ ಆದಾಯವನ್ನು ಫಾರ್ಮ್ 26AS, AIS ಮತ್ತು ಬ್ಯಾಂಕ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್‌ಗಳೊಂದಿಗೆ ಮ್ಯಾಚ್ ಮಾಡುತ್ತದೆ.\n\nನಾವು ಸೆಕ್ಷನ್ 80C, 80D ಅಡಿಯಲ್ಲಿ ಕಾನೂನುಬದ್ಧ ಕಡಿತಗಳ ಬಗ್ಗೆ ಸಲಹೆ ನೀಡುತ್ತೇವೆ.",
        whoTitle: "ಇದು ಯಾರಿಗೆ?",
        whoItems: [
          "ಸಂಬಳ ಪಡೆಯುವ ವ್ಯಕ್ತಿಗಳು (Form 16)",
          "ಸ್ವಯಂ ಉದ್ಯೋಗಿ ವೃತ್ತಿಪರರು (ವೈದ್ಯರು, ವಕೀಲರು)",
          "ವ್ಯವಹಾರ ಮಾಲೀಕರು ಮತ್ತು ಪ್ರೊಪ್ರೈಟರ್‌ಗಳು",
          "ಫ್ರೀಲ್ಯಾನ್ಸರ್‌ಗಳು",
          "ಪಾಲುದಾರಿಕೆ ಸಂಸ್ಥೆಗಳು ಮತ್ತು ಕಂಪನಿಗಳು",
        ]
      },
      tds: {
        title: "ಟಿಡಿಎಸ್ ಸೇವೆಗಳು",
        desc: "ಮೂಲದಲ್ಲಿ ಕಡಿತಗೊಳಿಸಲಾದ ತೆರಿಗೆ (TDS) ಭಾರತೀಯ ವ್ಯವಹಾರಗಳಿಗೆ ಒಂದು ಪ್ರಮುಖ ಅನುಸರಣೆ ಕ್ಷೇತ್ರವಾಗಿದೆ. ಗಡುವು ತಪ್ಪುವುದು ಅಥವಾ ತಪ್ಪಾದ ವಿವರಗಳು ಭಾರಿ ದಂಡವನ್ನು ಆಕರ್ಷಿಸುತ್ತವೆ. Byalance ನಿಮ್ಮ ಸಂಪೂರ್ಣ ಟಿಡಿಎಸ್ ಜೀವನಚಕ್ರವನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ.",
        features: [
          "TAN ನೋಂದಣಿ ಮತ್ತು ಅಪ್ಲಿಕೇಶನ್",
          "ಫಾರ್ಮ್ 24Q ಫೈಲಿಂಗ್ (Salary TDS)",
          "ಫಾರ್ಮ್ 26Q ಫೈಲಿಂಗ್ (Non-Salary TDS)",
          "ಫಾರ್ಮ್ 27Q ಫೈಲಿಂಗ್ (Non-Resident Payments)",
          "ಮುಂಗಡ ತೆರಿಗೆ ಲೆಕ್ಕಾಚಾರ ಮತ್ತು ಚಲನ್ ನಿರ್ವಹಣೆ",
          "ಬಾಡಿಗೆ ಮೇಲಿನ ಟಿಡಿಎಸ್ (Form 26QC)",
          "ಫಾರ್ಮ್ 16 ಮತ್ತು ಫಾರ್ಮ್ 16A ಜನರೇಷನ್",
          "ಟಿಡಿಎಸ್ ಡಿಫಾಲ್ಟ್ ಮತ್ತು ಡಿಮ್ಯಾಂಡ್ ಪರಿಹಾರ",
          "ಕಡಿಮೆ ಕಡಿತ ಪ್ರಮಾಣಪತ್ರ ಬೆಂಬಲ (Form 13)",
        ],
        whyTitle: "ಅನುಸರಣೆ ಮಾಡದಿರುವ ವೆಚ್ಚ",
        whyDesc: "ಸೆಕ್ಷನ್ 271C ಅಡಿಯಲ್ಲಿ, ಟಿಡಿಎಸ್ ಕಡಿತಗೊಳಿಸಲು ವಿಫಲವಾದರೆ ತೆರಿಗೆ ಮೊತ್ತದಷ್ಟೇ ದಂಡ ವಿಧಿಸಬಹುದು. ಟಿಡಿಎಸ್ ರಿಟರ್ನ್ಸ್‌ಗಳ ವಿಳಂಬ ಫೈಲಿಂಗ್‌ಗೆ ದಿನಕ್ಕೆ ₹200 ದಂಡ ವಿಧಿಸಲಾಗುತ್ತದೆ. Byalance ನೀವು ಯಾವಾಗಲೂ ಗಡುವಿನ ನವೀಕರಣದಲ್ಲಿರುವುದನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.\n\nನಾವು ಪ್ರತಿ ತ್ರೈಮಾಸಿಕದಲ್ಲಿ ನಿಮ್ಮ 26AS ಅನ್ನು ಪುಸ್ತಕಗಳೊಂದಿಗೆ ಸಮನ್ವಯಗೊಳಿಸುತ್ತೇವೆ.",
        whoTitle: "ಇದು ಯಾರಿಗೆ?",
        whoItems: [
          "ಸಂಬಳದ ಮೇಲೆ ಟಿಡಿಎಸ್ ಕಡಿತಗೊಳಿಸುವ ಕಂಪನಿಗಳು",
          "ವೃತ್ತಿಪರ ಪಾವತಿಗಳನ್ನು ಮಾಡುವ ವ್ಯವಹಾರಗಳು",
          "ಹೆಚ್ಚಿನ ಮೌಲ್ಯದ ಬಾಡಿಗೆ ಪಾವತಿಸುವವರು",
          "₹50 ಲಕ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಮೌಲ್ಯದ ಆಸ್ತಿ ಖರೀದಿದಾರರು",
          "ಟಿಡಿಎಸ್ ನಿಬಂಧನೆಗಳಿಗೆ ಒಳಪಟ್ಟಿರುವ ಯಾವುದೇ ಸಂಸ್ಥೆ",
        ]
      },
      payroll: {
        title: "ಪೇರೋಲ್ ಸೇವೆಗಳು",
        desc: "ಪೇರೋಲ್ ಅನ್ನು ಸರಿಯಾಗಿ ನಡೆಸುವುದ ಎಂದರೆ ಕೇವಲ ಸಂಬಳ ವರ್ಗಾಯಿಸುವುದು ಮಾತ್ರವಲ್ಲ. PF, ESI, PT, ಇವೆಲ್ಲವನ್ನೂ ಕಟ್ಟುನಿಟ್ಟಾದ ಗಡುವಿನೊಳಗೆ ನಿರ್ವಹಿಸಬೇಕಾಗುತ್ತದೆ. Byalance ನಿಮ್ಮ ಸಂಪೂರ್ಣ ಪೇರೋಲ್ ಚಕ್ರವನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ.",
        features: [
          "ಉದ್ಯೋಗಿ ಮಾಸ್ಟರ್ ರಚನೆ (PAN, Aadhaar)",
          "ಮಾಸಿಕ ಸಂಬಳ ಮತ್ತು CTC ಲೆಕ್ಕಾಚಾರಗಳು",
          "ಪೇರೋಲ್ ರಿಜಿಸ್ಟರ್ ಮತ್ತು ಜರ್ನಲ್",
          "ಡಿಜಿಟಲ್ ಸಂಬಳ ಸ್ಲಿಪ್ ಜನರೇಷನ್",
          "ಮರುಪಾವತಿ ಮತ್ತು ಭತ್ಯೆ ಪ್ರಕ್ರಿಯೆ",
          "ಸಂಬಳದ ಮೇಲೆ ಟಿಡಿಎಸ್ ಮತ್ತು ಫಾರ್ಮ್ 16",
          "PF (Provident Fund) ರಿಟರ್ನ್ ಫೈಲಿಂಗ್",
          "ESI (State Insurance) ಫೈಲಿಂಗ್",
          "ವೃತ್ತಿಪರ ತೆರಿಗೆ (PT) ಅನುಸರಣೆ",
          "ಪೂರ್ಣ ಮತ್ತು ಅಂತಿಮ ಸೆಟಲ್ಮೆಂಟ್ ಪ್ರಕ್ರಿಯೆ",
        ],
        whyTitle: "ಪೇರೋಲ್ ಔಟ್‌ಸೋರ್ಸ್ ಏಕೆ ಮಾಡಬೇಕು?",
        whyDesc: "ಪೇರೋಲ್ ತಪ್ಪುಗಳು ದುಬಾರಿಯಾಗಬಹುದು — ತಡವಾದ PF ಠೇವಣಿಗಳು 12% ದಂಡದ ಬಡ್ಡಿಯನ್ನು ಆಕರ್ಷಿಸುತ್ತವೆ. Byalance ನಿಖರತೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಬಹು-ಪದರದ ಪರಿಶೀಲನೆಯೊಂದಿಗೆ ಪೇರೋಲ್ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತದೆ.\n\nನಾವು ಪ್ರತಿ ವರ್ಷ ಜೂನ್ ಒಳಗೆ ನಿಮ್ಮ ಎಲ್ಲಾ ಉದ್ಯೋಗಿಗಳಿಗೆ ಫಾರ್ಮ್ 16 ಅನ್ನು ಸಹ ಒದಗಿಸುತ್ತೇವೆ.",
        whoTitle: "ಇದು ಯಾರಿಗೆ?",
        whoItems: [
          "ಮೊದಲ ಉದ್ಯೋಗಿಗಳನ್ನು ನೇಮಿಸಿಕೊಳ್ಳುವ ಸ್ಟಾರ್ಟ್ಅಪ್‌ಗಳು",
          "5–200 ಉದ್ಯೋಗಿಗಳನ್ನು ಹೊಂದಿರುವ ಸಣ್ಣ ಉದ್ದಿಮೆಗಳು",
          "ಪೇರೋಲ್ ಕಾರ್ಯಗಳನ್ನು ಹೊರಗುತ್ತಿಗೆ ನೀಡುವ ವ್ಯವಹಾರಗಳು",
          "PF/ESI ಶಾಸನಬದ್ಧ ಅನುಸರಣೆ ಅಗತ್ಯವಿರುವ ಕಂಪನಿಗಳು",
          "ವೃತ್ತಿಪರ ತೆರಿಗೆ ರಾಜ್ಯಗಳಲ್ಲಿರುವ ವ್ಯವಹಾರಗಳು (KA, MH, TN, ಇತ್ಯಾದಿ)",
        ]
      }
    }
  },
  te: {
    nav: {
      home: 'హోమ్',
      about: 'మా గురించి',
      services: 'సేవలు',
      pricing: 'ధరలు',
      contact: 'సంప్రదించండి',
    },
    hero: {
      subtitle: 'అకౌంటింగ్‌ను సరళీకృతం చేయడం, వృద్ధిని పెంచడం.',
      description: 'బుక్ కీపింగ్, టాక్స్ కంప్లైయన్స్ మరియు ఆర్థిక వ్యూహం కోసం Byalance మీ ఆల్-ఇన్-వన్ భాగస్వామి.',
      bookConsultation: 'ఉచిత సంప్రదింపు బుక్ చేయండి',
      whatsappNow: 'వాట్సాప్ చేయండి',
    },
    sections: {
      pricing: 'పారదర్శక ధరలు',
      pricingSubtitle: 'మీ వ్యాపార అవసరాలకు సరిపోయే ప్లాన్‌ను ఎంచుకోండి. సరళమైనది, స్పష్టమైనది మరియు సమర్థవంతమైనది.',
    },
    about: {
      badge: 'కార్పొరేట్ ఎక్సలెన్స్',
      title: 'Byalance ప్రమాణం',
      p1: 'Byalance అనేది భారతదేశపు తదుపరి వృద్ధి తరంగాలను నడిపించే వ్యవస్థాపకులు మరియు వ్యాపారుల కోసం నిర్మించబడిన సరసమైన ఆధునిక వర్చువల్ అకౌంటింగ్ సంస్థ.',
      p2: 'మేము సాంప్రదాయ అకౌంటింగ్ మరియు ఆధునిక వ్యాపార వేగం మధ్య అంతరాన్ని తగ్గిస్తాము. బుక్ కీపింగ్, జీఎస్టీ, టీడీఎస్ మరియు పేరోల్ - అన్నీ సరైన ధరలో.',
      missionBadge: 'మా మిషన్',
      missionTitle: 'వృద్ధి మరియు కంప్లైన్స్‌ను అనుసంధానించడం',
      missionText: '"భారతదేశంలోని ప్రతి వ్యాపారానికి కంప్లైన్స్‌ను ఒత్తిడి లేనిదిగా, సరసమైనదిగా మరియు వృత్తిపరమైనదిగా మార్చడం."',
      stats: {
        trusted: 'నమ్మకమైన భాగస్వామి',
        trustedText: 'నమ్మకం మరియు విశ్వసనీయత ఆధారంగా మా ఖాతాదారులతో దీర్ఘకాలిక సంబంధాలను నిర్మించడం.',
        growth: 'వృద్ధి కేంద్రిత',
        growthText: 'వ్యాపారాలకు వారి వృద్ధిలోని ప్రతి దశలో మద్దతు ఇవ్వడం.',
        timely: 'సమయానుకూల సేవ',
        timelyText: 'అన్ని గడువులను పూర్తి చేయడం మరియు మీ వ్యాపారాన్ని సమయానికి కంప్లైన్స్‌లో ఉంచడం.',
      }
    },
    services: {
      title: 'మా సేవలు',
      description: 'మీ వ్యాపారం కోసం ప్రత్యేకంగా రూపొందించబడిన పూర్తి అకౌంటింగ్ పరిష్కారాలు',
      items: [
        { 
          title: 'అకౌంటింగ్ & బుక్ కీపింగ్', 
          text: 'మీ రికార్డులను ఖచ్చితంగా మరియు తాజాగా ఉంచడానికి సమగ్ర అకౌంటింగ్ సేవలు.',
          features: [
            'సేల్స్, పర్చేజ్, ఎక్స్‌పెన్స్ ఎంట్రీలు',
            'బ్యాంక్ రికన్సిలియేషన్',
            'క్యాష్ బుక్ మెయింటెనెన్స్',
            'జర్నల్ ఎంట్రీలు & డిప్రిసియేషన్',
            'లెడ్జర్స్/వెండర్స్ రికన్సిలియేషన్',
            'ట్రయల్ బ్యాలెన్స్, P&L, బ్యాలెన్స్ షీట్',
            'రిసీవబుల్స్ & పేయబుల్స్ ట్రాకింగ్',
            'డేటా సెటప్ & క్లీనప్',
            'నెలవారీ & వార్షిక క్లోజింగ్ సపోర్ట్'
          ]
        },
        { 
          title: 'ఐటీఆర్ సేవలు', 
          text: 'వ్యక్తులు మరియు వ్యాపారాల కోసం నిపుణుల ఐటీఆర్ ఫైలింగ్ సేవలు.',
          features: [
            'వర్తించే పరిశీలన (తప్పనిసరి/స్వచ్ఛంద)',
            'పాన్-ఆధార్ లింకింగ్ వెరిఫికేషన్',
            'మొత్తం ఆదాయం & పన్ను లెక్కింపు',
            'ఫారమ్ 26AS, AIS & TIS రివ్యూ',
            'సరైన ఐటీఆర్ ఫారమ్ ఫైలింగ్ (ITR-1 నుండి ITR-7)',
            'నోటీసు & విచారణ మద్దతు'
          ]
        },
        { 
          title: 'జీఎస్టీ సేవలు', 
          text: 'మీ వ్యాపారాన్ని పన్ను-కంప్లైంట్‌గా ఉంచడానికి పూర్తి జీఎస్టీ సేవలు.',
          features: [
            'జీఎస్టీ రిజిస్ట్రేషన్',
            'GSTR-1, 3B, 9 ఫైలింగ్',
            'జీఎస్టీ ఇన్‌పుట్ క్రెడిట్ మ్యాచింగ్',
            'ఈ-ఇన్వాయిస్ & ఈ-వే బిల్ కంప్లయెన్స్',
            'లేట్ ఫీజు మరియు పెనాల్టీ పరిష్కారం'
          ]
        },
        { 
          title: 'టీడీఎస్ సేవలు', 
          text: 'మీ వ్యాపారం కోసం సమగ్ర టీడీఎస్ నిర్వహణ మరియు ఫైలింగ్ సేవలు.',
          features: [
            'టాన్ (TAN) అప్లికేషన్',
            'ఫారమ్ 24Q, 26Q ఫైలింగ్',
            'అడ్వాన్స్ టాక్స్ & చలాన్ మేనేజ్‌మెంట్',
            'ఫారమ్ 16/16A జనరేషన్',
            'టీడీఎస్ డిఫాల్ట్ & డిమాండ్ పరిష్కారం'
          ]
        },
        { 
          title: 'పేరోల్ సేవలు', 
          text: 'ఖచ్చితమైన లెక్కలు మరియు చట్టబద్ధమైన నియమాల పాటింపుతో పూర్తి పేరోల్ నిర్వహణ.',
          features: [
            'ఉద్యోగి మాస్టర్ డేటా మేనేజ్‌మెంట్',
            'శాలరీ స్ట్రక్చరింగ్ & మంత్లీ కాలిక్యులేషన్స్',
            'ఖచ్చితమైన పే-స్లిప్స్ & పేరోల్ రిజిస్టర్',
            'శాలరీపై టీడీఎస్ & ఫారమ్ 16/16A',
            'PF/ESI/PT/EDLI రిజిస్ట్రేషన్ & రిటర్న్ ఫైలింగ్',
            'పూర్తి & తుది సెటిల్‌మెంట్'
          ]
        }
      ],
      ctaTitle: 'ఇబ్బంది లేని అకౌంటింగ్ కోసం సిద్ధంగా ఉన్నారా?',
      ctaText: 'తమ వృద్ధి కోసం Byalance పై నమ్మకం ఉంచిన 100+ వ్యాపారాలలో చేరండి.',
      ctaButton: 'ఈరోజే ప్రారంభించండి',
    },
    features: {
      title: 'BYALANCE ను ఎందుకు ఎంచుకోవాలి?',
      description: 'భారతదేశవ్యాప్తంగా అభివృద్ధి చెందుతున్న వ్యాపారాలకు అనుగుణంగా వృత్తిపరమైన అకౌంటింగ్ సేవలు.',
      items: [
        { title: 'నిపుణుల బృందం', text: 'సీనియర్ అకౌంటెంట్లు మరియు టాక్స్ నిపుణులకు ప్రత్యక్ష ప్రాప్తి.' },
        { title: 'టెక్నాలజీ ఆధారిత', text: 'గరిష్ట సామర్థ్యం కోసం అతుకులు లేని డిజిటల్ వర్క్‌ఫ్లోలు.' },
        { title: 'స్థిర ధరలు', text: 'ఎటువంటి దాచిన ఖర్చులు లేవు. పారదర్శకమైన ధరలు.' }
      ]
    },
    pricing: {
      title: 'పారదర్శక ధరలు',
      description: 'మీ వ్యాపార అవసరాలకు సరిపోయే ప్లాన్‌ను ఎంచుకోండి. సరళమైనది, స్పష్టమైనది మరియు సమర్థవంతమైనది.',
      starter: 'స్టార్టర్ ప్లాన్',
      starterPrice: '₹1,999 – ₹6,999',
      perMonth: '/నెల',
      starterFeatures: ['జీఎస్టీ రిటర్న్స్', 'బేసిక్ బుక్ కీపింగ్', 'సేల్స్ & పర్చేజ్ ఎంట్రీలు', 'నెలవారీ ఆర్థిక నివేదికలు'],
      recommended: 'సిఫార్సు చేయబడింది',
      growth: 'గ్రోత్ ప్లాన్',
      growthPrice: '₹7,499 – ₹14,999',
      growthFeatures: ['జీఎస్టీ రిటర్న్స్ & కంప్లైయన్స్', 'టీడీఎస్ రిటర్న్స్ & ఫైలింగ్', 'పూర్తి అకౌంటింగ్ & బుక్ కీపింగ్', 'బ్యాంక్ రికన్సిలియేషన్', 'ఆర్థిక నివేదికలు (P&L, బ్యాలెన్స్ షీట్)'],
      pro: 'ప్రో ప్లాన్',
      proPrice: '₹15,499 – ₹20,000+',
      proFeatures: ['జీఎస్టీ & టీడీఎస్ పూర్తి నిర్వహణ', 'పేరోల్ ప్రాసెసింగ్', 'పూర్తి అకౌంటింగ్ సేవలు', 'అడ్వాన్స్‌డ్ ఆర్థిక నివేదికలు', 'ప్రాధాన్యత మద్దతు'],
      notIdeal: 'సరైన ధర కాదా?',
      notIdealDesc: 'కస్టమ్ పరిష్కారం కావాలా? మీ నిర్దిష్ట అవసరాలను చర్చిద్దాం.',
      plans: [
        { name: 'స్టార్టర్ ప్లాన్', price: '₹1,999 – ₹6,999', period: '/నెల', features: ['జీఎస్టీ రిటర్న్స్', 'బేసిక్ బుక్ కీపింగ్', 'సేల్స్ & పర్చేజ్ ఎంట్రీలు', 'నెలవారీ ఆర్థిక నివేదికలు'] },
        { name: 'గ్రోత్ ప్లాన్', price: '₹7,499 – ₹14,999', period: '/నెల', features: ['జీఎస్టీ రిటర్న్స్ & కంప్లైయన్స్', 'టీడీఎస్ రిటర్న్స్ & ఫైలింగ్', 'పూర్తి అకౌంటింగ్ & బుక్ కీపింగ్', 'బ్యాంక్ రికన్సిలియేషన్', 'ఆర్థిక నివేదికలు (P&L, బ్యాలెన్స్ షీట్)'] },
        { name: 'ప్రో ప్లాన్', price: '₹15,499 – ₹20,000+', period: '/నెల', features: ['జీఎస్టీ & టీడీఎస్ పూర్తి నిర్వహణ', 'పేరోల్ ప్రాసెసింగ్', 'పూర్ति అకౌంటింగ్ సేవలు', 'అడ్వాన్స్‌డ్ ఆర్థిక నివేదికలు', 'ప్రాధాన్యత మద్దతు'] }
      ],
      button: 'ప్లాన్‌ను ఎంచుకోండి',
      customButton: 'సంప్రదించండి',
    },
    cta: {
      choosePlan: 'ఎంచుకోండి',
      chooseStarter: 'స్టార్టర్ ఎంచుకోండి',
      chooseGrowth: 'గ్రోత్ ఎంచుకోండి',
      choosePro: 'ప్రో ఎంచుకోండి',
      contactCustom: 'కస్టమ్ ధర కోసం సంప్రదించండి',
    },
    contact: {
      badge: 'నిపుణుల సంప్రదింపులు',
      title: 'మీ ఆర్థిక కంప్లైన్స్‌ను బలోపేతం చేయడానికి మీరు సిద్ధంగా ఉన్నారా?',
      description: 'ఈరోజే మా సీనియర్ అకౌంటెంట్లతో మాట్లాడండి. మా నియంత్రణ మరియు వ్యాపార వృద్ధికి స్పష్టమైన మార్గాలను అందిస్తాము.',
      phone: 'మాకు కాల్ చేయండి',
      email: 'మాకు ఇమెయిల్ చేయండి',
      location: 'మమ్మల్ని సందర్శించండి',
      formTitle: 'నేరుగా సంప్రదించండి',
      name: 'పూర్తి పేరు',
      emailLabel: 'ఇమెయిల్ చిరునామా',
      message: 'మీ సందేశం',
      send: 'సంప్రదించండి',
    },
    footer: {
      about: 'భారతదేశవ్యాప్తంగా హై-గ్రోత్ స్టార్టప్ మరియు ఎంఎస్ఎంఈలకు సేవ చేయడానికి అంకితమైన ఒక అగ్రశ్రేణి వర్చువల్ అకౌంటింగ్ సంస్థ.',
      resources: 'వనరులు',
      expertise: 'ముఖ్య నైపుణ్యం',
      headquarters: 'ప్రధాన కార్యాలయం',
      privacy: 'గోప్యతా విధానం',
      data: 'డేటా హ్యాండ్లింగ్ విధానం',
      rights: '© 2026 Byalance. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.',
    },
    common: {
      learnMore: 'మరింత తెలుసుకోండి',
      businessHours: 'పని వేళలు',
      instantResponse: 'తక్షణ స్పందన',
      whatsappDesk: 'మా వాట్సాప్ డెస్క్ సర్టిఫైడ్ అకౌంటెంట్లచే నిర్వహించబడుతుంది.',
      messageNow: 'ఇప్పుడే సందేశం పంపండి',
      enterName: 'మీ పేరు నమోదు చేయండి',
      mobileNumber: 'మొబైల్ సంఖ్య',
      enterMobile: 'మీ మొబైల్ సంఖ్యను నమోదు చేయండి',
      emailId: 'ఇమెయిల్ ఐడి',
      enterEmail: 'మీ ఇమెయిల్ ఐడిని నమోదు చేయండి',
      businessType: 'వ్యాపార రకం',
      selectBusinessType: 'మీ వ్యాపార రకాన్ని ఎంచుకోండి',
      businessTypes: [
        'వ్యక్తిగత / యాజమాన్యం',
        'భాగస్వామ్యం / ఎల్‌ఎల్‌పి',
        'ప్రైవేట్ లిమిటెడ్ కంపెనీ',
        'స్టార్టప్ (నమోదిత)',
        'రిటైలర్ / ఈ-కామర్స్',
        'సేవా ప్రదాత',
        'ఇతర'
      ],
      accountingNeeds: 'మీ అకౌంటింగ్ అవసరాల గురించి మాకు తెలియజేయండి...',
      gstinPending: 'GSTIN: పెండింగ్‌లో ఉంది',
      whatsIncluded: "ఏమి చేర్చబడింది",
      getStartedToday: 'ఈరోజే ప్రారంభించండి',
      chatWhatsapp: 'వాట్సాప్‌లో చాట్ చేయండి',
      sendEnquiry: 'విచారణ పంపండి',
      relatedServices: 'సంబంధిత సేవలు',
    },
    servicePage: {
      badge: 'సేవా శ్రేష్ఠత',
      framework: 'కంప్లైన్స్ ఫ్రేమ్‌వర్క్',
      features: [
        { t: 'నిపుణుల ఆడిట్', d: 'సీనియర్ నిపుణులచే సమీక్షించబడిన ఫైలింగ్‌లు.' },
        { t: 'డెడ్‌లైన్ గ్యారెంటీ', d: 'చట్టబద్ధమైన గడువుల ప్రకారం ఖచ్చితమైన కంప్లైన్స్.' },
        { t: 'డిజిటల్ వాల్ట్', d: 'అన్ని ఆర్థిక రికార్డుల సురక్షిత మరియు ఎన్‌క్రిప్టెడ్ స్టోరేజ్.' },
        { t: 'వ్యూహాత్మక సలహా', d: 'సీనియర్ టాక్స్ అడ్వైజర్లకు ప్రత్యక్ష ప్రాప్తి.' },
      ],
      ctaTitle: 'ఆన్‌బోర్డింగ్ ప్రారంభించండి',
      ctaText: 'తమ ఆర్థిక సమగ్రత కోసం Byalance ను నమ్ముతున్న 200+ వ్యాపారాలలో చేరండి.',
      ctaButton: 'వాట్సాప్ ద్వారా సంప్రదించండి',
    },
    serviceDetail: {
      accounting: {
        title: "అకౌంటింగ్ & బుక్ కీపింగ్",
        desc: "ఖచ్చితమైన మరియు సమయానుకూలమైన అకౌంటింగ్ రికార్డులు ప్రతి ఆరోగ్యకరమైన వ్యాపారానికి పునాది. మేము మీ పూర్తి అకౌంటింగ్ జీవితచక్రాన్ని నిర్వహిస్తాము — రోజువారీ ఎంట్రీల నుండి సంవత్సరం ముగింపు వరకు — తద్వారా మీరు ఎల్లప్పుడూ స్పష్టమైన ఆర్థిక చిత్రాన్ని కలిగి ఉంటారు.",
        features: [
          "సేల్స్, పర్చేజ్ & ఎక్స్‌పెన్స్ ఎంట్రీలు",
          "బ్యాంక్ రికన్సిలియేషన్ (నెలవారీ)",
          "క్యాష్ బుక్ & పెట్టీ క్యాష్ మెయింటెనెన్స్",
          "జర్నల్ ఎంట్రీలు & డిప్రిసియేషన్ షెడ్యూల్స్",
          "లెడ్జర్ & వెండర్ రికన్సిలియేషన్",
          "ట్రయల్ బ్యాలెన్స్, P&L & బ్యాలెన్స్ షీట్",
          "రిసీవబుల్స్ & పేయబుల్స్ ట్రాకింగ్",
          "డేటా సెటప్, క్లీనప్ & మైగ్రేషన్",
          "మంత్-ఎండ్ & ఇయర్-ఎండ్ క్లోజింగ్ సపోర్ట్",
        ],
        whyTitle: "అకౌంటింగ్ ఎందుకు ముఖ్యం?",
        whyDesc: "ఖచ్చితమైన బుక్ కీపింగ్ లేకపోతే, మీ వ్యాపార పరిస్థితిపై మీకు స్పష్టత ఉండదు. ఆలస్యమైన లేదా తప్పు అకౌంట్స్ వల్ల పన్ను తగ్గింపులు కోల్పోవడం, తప్పుడు జీఎస్టీ ఫైలింగ్ మరియు నగదు ప్రవాహం (cash flow) పై స్పష్టత లేకపోవడానికి దారితీస్తుంది. Byalance మీ రికార్డులను ప్రతి నెలా క్రమపద్ధతిలో ఉంచుతుంది.\n\nమేము Tally, Zoho Books, QuickBooks మరియు Excel తో పనిచేస్తాము — మీ టీమ్ ఇప్పటికే వాడుతున్న వాటితోనే మేము కలిసి పనిచేస్తాము.",
        whoTitle: "ఇది ఎవరి కోసం?",
        whoItems: [
          "రిటైల్ మరియు ట్రేడింగ్ వ్యాపారాలు",
          "స్టార్టప్‌లు మరియు ప్రారంభ దశ కంపెనీలు",
          "సర్వీస్ ప్రొవైడర్లు మరియు కన్సల్టెంట్లు",
          "MSMEలు మరియు చిన్న తయారీదారులు",
          "ఈ-కామర్స్ విక్రేతలు",
        ]
      },
      gst: {
        title: "జీఎస్టీ సేవలు",
        desc: "వస్తు మరియు సేవల పన్ను (GST) నిబంధనలతో పూర్తి కంప్లైంట్‌లో ఉండండి. రిజిస్ట్రేషన్ నుండి నెలవారీ/వార్షిక ఫైలింగ్ మరియు రికన్సిలియేషన్ వరకు, మేము మీ జీఎస్టీ జీవితచక్రంలోని ప్రతి అంశాన్ని నిర్వహిస్తాము.",
        features: [
          "జీఎస్టీ రిజిస్ట్రేషన్ (Regular & Composition)",
          "GSTR-1 ఫైలింగ్ (నెలవారీ / త్రైమాసిక)",
          "GSTR-3B ఫైలింగ్ (నెలవారీ)",
          "GSTR-9 వార్షిక రిటర్న్ ఫైలింగ్",
          "జీఎస్టీ ఇన్‌పుట్ క్రెడిట్ మ్యాచింగ్ (2B vs Books)",
          "ఈ-ఇన్వాయిస్ & ఈ-వే బిల్ కంప్లయెన్స్",
          "జీఎస్టీ సవరణలు & రికన్సిలియేషన్",
          "లేట్ ఫీజు & పెనాల్టీ పరిష్కారం",
        ],
        whyTitle: "సమయానుకూల జీఎస్టీ ఫైలింగ్ ఎందుకు ముఖ్యం?",
        whyDesc: "ఆలస్యమైన లేదా తప్పుడు జీఎస్టీ ఫైలింగ్‌ల వల్ల రోజుకు ₹200 వరకు జరిమానా పడవచ్చు మరియు మీ కస్టమర్లు ఇన్‌పుట్ ట్యాక్స్ క్రెడిట్ పొందకుండా అడ్డుకోవచ్చు. Byalance ప్రతి గడువు కంటే ముందే మీ రిటర్న్స్‌ను ఖచ్చితంగా ఫైల్ చేస్తుంది.\n\nమేము జీఎస్టీఎన్ (GSTN) పోర్టల్ నోటీసులను కూడా ట్రాక్ చేస్తాము.",
        whoTitle: "ఇది ఎవరి కోసం?",
        whoItems: [
          "వార్షిక టర్నోవర్ ₹40 లక్షల కంటే ఎక్కువ ఉన్న వ్యాపారాలు",
          "ఈ-కామర్స్ విక్రేతలు & మార్కెట్‌ప్లేస్ వెండర్లు",
          "ఎగుమతిదారులు & దిగుమతిదారులు",
          "జీఎస్టీ పరిమితి దాటిన సర్వీస్ ప్రొవైడర్లు",
          "కంపోజిషన్ నుండి రెగ్యులర్ స్కీమ్‌కు మారే వ్యాపారాలు",
        ]
      },
      itr: {
        title: "ఐటీఆర్ సేవలు",
        desc: "మీ ఆదాయపు పన్ను రిటర్న్ (ITR) ను సమయానికి మరియు ఖచ్చితంగా ఫైల్ చేయడం కేవలం చట్టపరమైన అవసరం మాత్రమే కాదు — ఇది రుణాలు, వీసాలు మరియు ప్రభుత్వ టెండర్లకు దారి తీస్తుంది. డాక్యుమెంట్ల సేకరణ నుండి నోటీసుల సమాధానాల వరకు మేము ప్రతిదీ నిర్వహిస్తాము.",
        features: [
          "వర్తించే పరిశీలన (తప్పనిసరి వర్సెస్ స్వచ్ఛంద ఫైలింగ్)",
          "పాన్–ఆధార్ లింకింగ్ వెరిఫికేషన్",
          "మొత్తం ఆదాయం & పన్ను బాధ్యత లెక్కింపు",
          "ఫారమ్ 26AS, AIS & TIS రివ్యూ",
          "ఆదాయం & డిడక్షన్ డాక్యుమెంటేషన్ (Form 16)",
          "సరైన ఐటీఆర్ ఫారమ్ ఫైలింగ్ (ITR-1 నుండి ITR-7)",
          "రివైజ్డ్ రిటర్న్ ఫైలింగ్",
          "నోటీసు & విచారణ మద్దతు",
          "టాక్స్ ప్లానింగ్ & అడ్వాన్స్ టాక్స్ సలహా",
        ],
        whyTitle: "ఖచ్చితమైన ఐటీఆర్ ఫైలింగ్ ఎందుకు ముఖ్యం?",
        whyDesc: "తప్పుడు ఐటీఆర్ ఫారమ్ లేదా గడువు మించడం వల్ల సెక్షన్ 139(9) కింద నోటీసు రావచ్చు, ఇది జరిమానాలకు దారితీస్తుంది. ఫైలింగ్ చేయడానికి ముందే మా బృందం మీ ఆదాయాన్ని ఫారమ్ 26AS, AIS మరియు బ్యాంక్ స్టేట్‌మెంట్‌లతో సరిపోలుస్తుంది.\n\nమేము సెక్షన్ 80C, 80D కింద చట్టబద్ధమైన పన్ను తగ్గింపుల గురించి కూడా సలహా ఇస్తాము.",
        whoTitle: "ఇది ఎవరి కోసం?",
        whoItems: [
          "జీతాలు తీసుకునే వ్యక్తులు (Form 16 హోల్డర్స్)",
          "స్వయం ఉపాధి నిపుణులు (వైద్యులు, లాయర్లు)",
          "వ్యాపార యజమానులు మరియు ప్రొప్రైటర్లు",
          "ఫ్రీలాన్సర్లు",
          "భాగస్వామ్య సంస్థలు మరియు కంపెనీలు",
        ]
      },
      tds: {
        title: "టీడీఎస్ సేవలు",
        desc: "వద్దే రీత్యా పన్ను కోత (TDS) భారతీయ వ్యాపారాలకు అత్యంత కీలకమైన అంశం. గడువు మించడం లేదా తప్పుడు వివరాల వల్ల భారీ జరిమానాలు పడవచ్చు. Byalance మీ పూర్తి టీడీఎస్ జీవితచక్రాన్ని నిర్వహిస్తుంది.",
        features: [
          "టాన్ (TAN) రిజిస్ట్రేషన్ & అప్లికేషన్",
          "ఫారమ్ 24Q ఫైలింగ్ (శాలరీ టీడీఎస్)",
          "ఫారమ్ 26Q ఫైలింగ్ (నాన్-శాలరీ టీడీఎస్)",
          "ఫారమ్ 27Q ఫైలింగ్ (నాన్-రెసిడెంట్ చెల్లింపులు)",
          "అడ్వాన్స్ టాక్స్ లెక్కింపు & చలాన్ మేనేజ్‌మెంట్",
          "అద్దెపై టీడీఎస్ (Form 26QC)",
          "ఫారమ్ 16 & ఫారమ్ 16A జనరేషన్",
          "టీడీఎస్ డిఫాల్ట్ & డిమాండ్ పరిష్కారం",
          "తక్కువ పన్ను కోత సర్టిఫికేట్ మద్దతు (Form 13)",
        ],
        whyTitle: "కంప్లైన్స్ లేకపోతే జరిగే నష్టం",
        whyDesc: "సెక్షన్ 271C కింద, టీడీఎస్ కట్ చేయడంలో వైఫల్యం చెందితే పన్ను మొత్తానికి సమానమైన జరిమానా పడవచ్చు. టీడీఎస్ రిటర్న్ ఫైలింగ్ ఆలస్యమైతే రోజుకు ₹200 జరిమానా ఉంటుంది. Byalance మీరు ప్రతి గడువు కంటే ముందే ఉండేలా చూస్తుంది.\n\nమేము ప్రతి త్రైమాసికంలో మీ 26AS ను బుక్స్‌తో సరిపోలుస్తాము.",
        whoTitle: "ఇది ఎవరి కోసం?",
        whoItems: [
          "జీతాలపై టీడీఎస్ కట్ చేసే కంపెనీలు",
          "కాంట్రాక్టర్ లేదా ప్రొఫెషనల్ చెల్లింపులు చేసే వ్యాపారాలు",
          "అధిక అద్దె చెల్లించే యజమానులు లేదా అద్దెదారులు",
          "₹50 లక్షల కంటే ఎక్కువ విలువైన ఆస్తి కొనుగోలుదారులు",
          "టీడీఎస్ నిబంధనలకు లోబడి ఉండే ఏ సంస్థ అయినా",
        ]
      },
      payroll: {
        title: "పేరోల్ సేవలు",
        desc: "పేరోల్ నిర్వహించడం అంటే కేవలం జీతాలు బదిలీ చేయడం మాత్రమే కాదు. PF, ESI, PT వంటివన్నీ కచ్చితమైన గడువుల లోపు నిర్వహించాలి. Byalance మీ పూర్తి పేరోల్ చక్రాన్ని నిర్వహిస్తుంది.",
        features: [
          "ఉద్యోగి మాస్టర్ క్రియేషన్ (PAN, Aadhaar)",
          "నెలవారీ శాలరీ & CTC లెక్కింపులు",
          "పేరోల్ రిజిస్టర్ & జర్నల్",
          "డిజిటల్ శాలరీ స్లిప్ జనరేషన్",
          "రీయింబర్స్‌మెంట్ & అలవెన్స్ ప్రాసెసింగ్",
          "శాలరీపై టీడీఎస్ & ఫారమ్ 16",
          "PF (ప్రొవిడెంట్ ఫండ్) రిటర్న్ ఫైలింగ్",
          "ESI (స్టేట్ ఇన్సూరెన్స్) ఫైలింగ్",
          "ప్రొఫెషనల్ టాక్స్ (PT) కంప్లైన్స్",
          "పూర్తి & తుది సెటిల్‌మెంట్ ప్రాసెసింగ్",
        ],
        whyTitle: "పేరోల్‌ను మాకు ఎందుకు అప్పగించాలి?",
        whyDesc: "పేరోల్ తప్పులు ఖరీదైనవి — పీఎఫ్ డిపాజిట్లు ఆలస్యమైతే 12% జరిమానా వడ్డీ పడుతుంది. Byalance ఖచ్చితత్వాన్ని నిర్ధారించడానికి మల్టీ-లేయర్ రివ్యూతో పేరోల్ ప్రాసెస్ చేస్తుంది.\n\nమేము ప్రతి సంవత్సరం జూన్ నాటికి మీ ఉద్యోగులందరికీ ఫారమ్ 16ను కూడా అందిస్తాము.",
        whoTitle: "ఇది ఎవరి కోసం?",
        whoItems: [
          "మొదటి సారి ఉద్యోగులను నియమించుకునే స్టార్టప్‌లు",
          "5–200 ఉద్యోగులు ఉన్న చిన్న మధ్య తరహా వ్యాపారాలు",
          "హెచ్ఆర్ & పేరోల్ విధులను అవుట్‌సోర్స్ చేయాలనుకునే వ్యాపారాలు",
          "PF/ESI చట్టబద్ధమైన కంప్లైన్స్ అవసరమైన కంపెనీలు",
          "వృత్తి పన్ను (PT) ఉన్న రాష్ట్రాల్లోని వ్యాపారాలు (KA, MH, TN, etc.)",
        ]
      }
    }
  },
  mr: {
    nav: {
      home: 'होम',
      about: 'आमच्याबद्दल',
      services: 'सेवा',
      pricing: 'दर',
      contact: 'संपर्क',
    },
    hero: {
      subtitle: 'लेखांकन सुलभ करणे, विकासाला चालना देणे.',
      description: 'Byalance बुककीपिंग, टॅक्स कंप्लायन्स आणि आर्थिक धोरणासाठी तुमचा ऑल-इन-वन भागीदार आहे.',
      bookConsultation: 'मोफत सल्ला घ्या',
      whatsappNow: 'व्हॉट्सॲप करा',
    },
    sections: {
      pricing: 'पारदर्शक दर',
      pricingSubtitle: 'तुमच्या व्यवसायाच्या गरजा पूर्ण करणारी योजना निवडा. साधी, स्पष्ट आणि प्रभावी.',
    },
    about: {
      badge: 'कॉर्पोरेट एक्सलन्स',
      title: 'Byalance मानक',
      p1: 'Byalance ही एक स्वस्त आधुनिक व्हर्च्युअल अकाउंटिंग फर्म आहे जी उद्योजक, व्यापारी आणि संस्थापकांसाठी तयार केली गेली आहे.',
      p2: 'आम्ही पारंपारिक लेखांकन आणि आधुनिक व्यवसाय गती यांच्यातील दरी सांधतो. बुककीपिंग, जीएसटी, टीडीएस आणि पेरोल - सर्व काही योग्य दरात.',
      missionBadge: 'आमचे ध्येय',
      missionTitle: 'विकास आणि कंप्लायन्स जोडणे',
      missionText: '"भारतातील प्रत्येक व्यवसायासाठी कंप्लायन्स तणावमुक्त, स्वस्त और व्यावसायिक बनवणे."',
      stats: {
        trusted: 'विश्वसनीय भागीदार',
        trustedText: 'नंबिका आणि विश्वासार्हतेवर आधारित आमच्या ग्राहकांशी दीर्घकालीन संबंध निर्माण करणे.',
        growth: 'विकास केंद्रित',
        growthText: 'व्यवसायांना त्यांच्या विकासाच्या प्रत्येक टप्प्यावर पाठबळ देणे.',
        timely: 'वेळेवर सेवा',
        timelyText: 'सर्व मुदती पाळणे आणि तुमचा व्यवसाय वेळेवर कंप्लायन्समध्ये ठेवणे.',
      }
    },
    services: {
      title: 'आमच्या सेवा',
      description: 'तुमच्या व्यवसायासाठी विशेषतः तयार केलेले पूर्ण लेखांकन समाधान',
      items: [
        { 
          title: 'अकाउंटिंग आणि बुककीपिंग', 
          text: 'तुमची खाती अचूक आणि अद्ययावत ठेवण्यासाठी व्यापक लेखांकन सेवा.',
          features: [
            'विक्री, खरेदी, खर्च नोंदी',
            'बँक समाधान (Bank Reconciliation)',
            'कॅश बुक व्यवस्थापन',
            'जर्नल नोंदी आणि घसारा',
            'लेजर/विक्रेता समाधान',
            'ट्रायल बॅलन्स, पी अँड एल, बॅलन्स शीट',
            'प्राप्य आणि देय ट्रॅकिंग',
            'डेटा सेटअप आणि साफसफाई',
            'महिन्याच्या शेवटी आणि वर्षाच्या शेवटी क्लोजिंग सपोर्ट'
          ]
        },
        { 
          title: 'आयटीआर सेवा', 
          text: 'व्यक्ती आणि व्यवसायांसाठी तज्ञ आयटीआर फाइलिंग सेवा.',
          features: [
            'प्रयोज्यता तपासणी (अनिवार्य/स्वैच्छिक)',
            'पॅन-आधार लिंकिंग पडताळणी',
            'एकूण उत्पन्न आणि कराची गणना',
            'फॉर्म 26AS, AIS आणि TIS पुनरावलोकन',
            'योग्य आयटीआर फॉर्म भरणे (ITR-1 ते ITR-7)',
            'नोटीस आणि छाननी समर्थन'
          ]
        },
        { 
          title: 'जीएसटी सेवा', 
          text: 'तुमचा व्यवसाय टॅक्स-कंप्लायंट ठेवण्यासाठी पूर्ण जीएसटी फाइलिंग सेवा.',
          features: [
            'जीएसटी नोंदणी',
            'GSTR-1, 3B, 9 फाइलिंग',
            'जीएसटी इनपुट क्रेडिट जुळणी (2B vs Books)',
            'ई-चालान आणि ई-वे बिल अनुपालन',
            'विलंब शुल्क आणि दंड निवारण'
          ]
        },
        { 
          title: 'टीडीएस सेवा', 
          text: 'तुमच्या व्यवसायासाठी व्यापक टीडीएस व्यवस्थापन आणि फाइलिंग सेवा.',
          features: [
            'टॅन (TAN) अर्ज',
            'फॉर्म 24Q, 26Q फाइलिंग',
            'अॅडव्हान्स टॅक्स आणि चलन व्यवस्थापन',
            'फॉर्म 16/16A जनरेशन',
            'टीडीएस डिफॉल्ट आणि डिमांड निवारण'
          ]
        },
        { 
          title: 'पेरोल सेवा', 
          text: 'अचूक गणना आणि वैधानिक अनुपालनासह पूर्ण पेरोल व्यवस्थापन.',
          features: [
            'कर्मचारी मास्टर डेटा व्यवस्थापन',
            'पगार रचना आणि मासिक गणना',
            'अचूक पे-स्लिप आणि पेरोल रजिस्टर',
            'पेरोल रजिस्टर आणि पगार स्लिप',
            'पगारावर टीडीएस आणि फॉर्म 16/16A',
            'PF/ESI/PT/EDLI नोंदणी आणि रिटर्न फाइलिंग',
            'पूर्ण आणि अंतिम सेटलमेंट'
          ]
        }
      ],
      ctaTitle: 'त्रासमुक्त लेखांकनासाठी तयार आहात का?',
      ctaText: 'Byalance वर विश्वास ठेवणाऱ्या १००+ व्यवसायांमध्ये सामील व्हा.',
      ctaButton: 'आजच सुरुवात करा',
    },
    features: {
      title: 'BYALANCE का निवडावे?',
      description: 'संपूर्ण भारतातील वाढत्या व्यवसायांसाठी व्यावसायिक लेखा सेवा.',
      items: [
        { title: 'पारदर्शक दर', text: 'कोणतेही छुपे खर्च नसलेले स्पष्ट दर. आपण कशासाठी पैसे देत आहात हे जाणून घ्या.' },
        { title: 'स्थानिक भाषा समर्थन', text: 'आपल्या पसंतीच्या भाषेत संवाद साधा. आम्ही स्थानिक व्यवसायांच्या गरजा समजतो.' },
        { title: 'एंड-టు-एंड कंप्लायन्स', text: 'नोंदणीपासून फाइलिंगपर्यंत आणि त्यापलीकडे पूर्ण कंप्लायन्स व्यवस्थापन.' },
        { title: 'सूक्ष्म व्यवसाय अनुकूल', text: 'लहान व्यवसायांसाठीही सेवा उपलब्ध. आत्मविश्वासाने वाढा.' }
      ]
    },
    pricing: {
      title: 'पारदर्शक दर',
      description: 'तुमच्या व्यवसायाच्या गरजा पूर्ण करणारी योजना निवडा. साधी, स्पष्ट आणि प्रभावी.',
      starter: 'स्टार्टर प्लान',
      starterPrice: '₹1,999 – ₹6,999',
      perMonth: '/महिना',
      starterFeatures: ['जीएसटी रिटर्न', 'बेसिक बुककीपिंग', 'विक्री आणि खरेदी प्रविष्ट्या', 'मासिक आर्थिक अहवाल'],
      recommended: 'शिफारस केलेले',
      growth: 'ग्रोथ प्लान',
      growthPrice: '₹7,499 – ₹14,999',
      growthFeatures: ['जीएसटी रिटर्न आणि अनुपालन', 'टीडीएस रिटर्न आणि फाइलिंग', 'पूर्ण अकाउंटिंग आणि बुककीपिंग', 'बँक समाधान', 'आर्थिक अहवाल (P&L, बॅलेन्स शीट)'],
      pro: 'प्रो प्लान',
      proPrice: '₹15,499 – ₹20,000+',
      proFeatures: ['जीएसटी आणि टीडीएस पूर्ण व्यवस्थापन', 'पेरोल प्रक्रिया', 'पूर्ण अकाउंटिंग सेवा', 'प्रगत आर्थिक अहवाल', 'प्राधान्य समर्थन'],
      plans: [
        { name: 'स्टार्टर प्लान', price: '₹1,999 – ₹6,999', period: '/महिना', features: ['जीएसटी रिटर्न', 'बेसिक बुककीपिंग', 'विक्री आणि खरेदी प्रविष्ट्या', 'मासिक आर्थिक अहवाल'] },
        { name: 'ग्रोथ प्लान', price: '₹7,499 – ₹14,999', period: '/महिना', features: ['जीएसटी रिटर्न आणि अनुपालन', 'टीडीएस रिटर्न आणि फाइलिंग', 'पूर्ण अकाउंटिंग आणि बुककीपिंग', 'बँक समाधान', 'आर्थिक अहवाल (P&L, बॅलेन्स शीट)'] },
        { name: 'प्रो प्लान', price: '₹15,499 – ₹20,000+', period: '/महिना', features: ['जीएसटी आणि टीडीएस पूर्ण व्यवस्थापन', 'पेरोल प्रक्रिया', 'पूर्ण अकाउंटिंग सेवा', 'प्रगत आर्थिक अहवाल', 'प्राधान्य समर्थन'] }
      ],
      button: 'योजना निवडा',
      notIdeal: 'आदर्श मूल्य निर्धारण नाही?',
      notIdealDesc: "सानुकूल समाधान हवे आहे का? तुमच्या विशिष्ट गरजांवर चर्चा करूया.",
    },
    cta: {
      choosePlan: 'निवडा',
      chooseStarter: 'स्टार्टर निवडा',
      chooseGrowth: 'ग्रोथ निवडा',
      choosePro: 'प्रो निवडा',
      contactCustom: 'सानुकूल दरासाठी संपर्क साधा',
    },
    contact: {
      badge: 'तज्ञ सल्ला',
      title: 'तुमचा आर्थिक कंप्लायन्स मजबूत करण्यास तुम्ही तयार आहात का?',
      description: 'आजच आमच्या वरिष्ठ लेखापालांशी बोला. आम्ही नियामक स्पष्टता आणि व्यवसायासाठी स्पष्ट मार्ग देतो.',
      phone: 'आम्हाला कॉल करा',
      email: 'आम्हाला ईमेल करा',
      location: 'आम्हाला भेट द्या',
      formTitle: 'थेट चौकशी',
      name: 'पूर्ण नाव',
      emailLabel: 'ईमेल पत्ता',
      message: 'तुमचा संदेश',
      send: 'संदेश पाठवा',
    },
    footer: {
      about: 'संपूर्ण भारतातील स्टार्टअप्स आणि एमएसएमईच्या गरजा पूर्ण करण्यासाठी समर्पित एक आघाडीची व्हर्च्युअल अकाउंटिंग फर्म.',
      resources: 'संसाधन',
      expertise: 'मुख्य कौशल्य',
      headquarters: 'मुख्यालय',
      privacy: 'गोपनीयता धोरण',
      data: 'डेटा हाताळणी धोरण',
      rights: '© 2026 Byalance. सर्व हक्क राखीव.',
    },
    common: {
      learnMore: 'अधिक जाणून घ्या',
      businessHours: 'व्यवसाय वेळ',
      instantResponse: 'त्वरित प्रतिसाद',
      whatsappDesk: 'आमचे व्हॉट्सॲप डेस्क प्रमाणित लेखापालांद्वारे चालवले जाते.',
      messageNow: 'आता संदेश पाठवा',
      enterName: 'तुमचे नाव प्रविष्ट करा',
      mobileNumber: 'मोबाईल नंबर',
      enterMobile: 'तुमचा मोबाईल नंबर प्रविष्ट करा',
      emailId: 'ईमेल आयडी',
      enterEmail: 'तुमचा ईमेल आयडी प्रविष्ट करा',
      businessType: 'व्यवसाय प्रकार',
      selectBusinessType: 'तुमचा व्यवसाय प्रकार निवडा',
      businessTypes: [
        'वैयक्तिक / मालकी',
        'भागीदारी / एलएलपी',
        'प्रायव्हेट लिमिटेड कंपनी',
        'स्टार्टअप (नोंदणीकृत)',
        'रिटेलर / ई-कॉमर्स',
        'सेवा प्रदाता',
        'इतर'
      ],
      accountingNeeds: 'तुमच्या लेखांकन गरजांबद्दल आम्हाला सांगा...',
      gstinPending: 'GSTIN: प्रलंबित',
      whatsIncluded: "काय समाविष्ट आहे",
      getStartedToday: 'आजच सुरुवात करा',
      chatWhatsapp: 'व्हॉट्सॲपवर चॅट करा',
      sendEnquiry: 'चौकशी पाठवा',
      relatedServices: 'संबंधित सेवा',
    },
    servicePage: {
      badge: 'सेवा उत्कृष्टता',
      framework: 'कंप्लायन्स फ्रेमवर्क',
      features: [
        { t: 'तज्ञ ऑडिट', d: 'वरिष्ठ तज्ञांद्वारे पुनरावलोकन केलेले फाइलिंग.' },
        { t: 'डेडलाइन सील', d: 'वैधानिक मुदतींचे खात्रीशीर पालन.' },
        { t: 'डिजिटल वॉल्ट', d: 'सर्व आर्थिक रेకอร์ดचे सुरक्षित, एनक्रिप्टेड स्टोरेज.' },
        { t: 'धोरणात्मक सल्ला', d: 'वरिष्ठ टॅक्स सल्लागारांशी थेट संपर्क.' },
      ],
      ctaTitle: 'ऑनबोर्डिंग सुरू करा',
      ctaText: 'त्या २००+ व्यवसायांमध्ये सामील व्हा जे त्यांच्या आर्थिक अखंडतेसाठी Byalance वर विश्वास ठेवतात.',
      ctaButton: 'व्हॉट्सॲपद्वारे संपर्क साधा',
    },
    serviceDetail: {
      accounting: {
        title: "लेखांकन आणि बुककीपिंग",
        desc: "अचूक आणि वेळेवर केलेले लेखांकन प्रत्येक निरोगी व्यवसायाचा पाया आहे. आम्ही तुमच्या व्यवसायाचे संपूर्ण लेखांकन चक्र सांभाळतो — रोजच्या नोंदींपासून ते वर्षाच्या अखेरपर्यंत — जेणेकरून तुम्हाला नेहमीच व्यवसायाची स्पष्ट आर्थिक स्थिती समजेल.",
        features: [
          "विक्री, खरेदी आणि खर्चाच्या नोंदी",
          "बँक रिकॉन्सिलीएशन (मासिक)",
          "कॅश बुक आणि पेटी कॅश देखभाल",
          "जर्नल एंट्री आणि घसारा (Depreciation) वेळापत्रक",
          "लेजर आणि वेंडर रिकॉन्सिलीएशन",
          "ट्रायल बॅलन्स, P&L आणि बॅलन्स शीट",
          "येणे आणि देणे (Receivables/Payables) ट्रॅकिंग",
          "डेटा सेटअप आणि मायग्रेशन",
          "महिना अखेर आणि वर्ष अखेर क्लोजिंग सपोर्ट",
        ],
        whyTitle: "हे महत्त्वाचे का आहे?",
        whyDesc: "अचूक हिशोबाशिवाय तुम्ही व्यवसायाचे योग्य निर्णय घेऊ शकत नाही. विलंबित किंवा चुकीच्या खात्यांमुळे टॅक्स डिडक्शन सुटू शकतात, चुकीचे जीएसटी फायलिंग होऊ शकते आणि कॅश फ्लोचा अंदाज येत नाही. Byalance तुमचे रेकॉर्ड्स दरमहा अद्ययावत ठेवते.\n\nआम्ही Tally, Zoho Books, QuickBooks आणि Excel सह काम करतो — जे तुमच्या टीमला सोयीचे असेल.",
        whoTitle: "हे कोणासाठी आहे?",
        whoItems: [
          "रिटेल आणि ट्रेडिंग व्यवसाय",
          "स्टार्टअप्स आणि सुरुवातीच्या टप्प्यातील कंपन्या",
          "सेवा पुरवठादार आणि सल्लागार",
          "लघु आणि मध्यम उद्योग (MSMEs)",
          "ई-कॉमर्स विक्रेते",
        ]
      },
      gst: {
        title: "जीएसटी सेवा",
        desc: "वस्तू आणि सेवा कर (GST) नियमांचे पूर्णपणे पालन करा. नोंदणीपासून ते मासिक/वार्षिक फायलिंग आणि रिकॉन्सिलीएशनपर्यंत, आम्ही तुमच्या जीएसटीच्या प्रत्येक टप्प्यावर मदत करतो.",
        features: [
          "जीएसटी नोंदणी (Regular & Composition)",
          "GSTR-1 फायलिंग (मासिक / त्रैमासिक)",
          "GSTR-3B फायलिंग (मासिक)",
          "GSTR-9 वार्षिक रिटर्न फायलिंग",
          "जीएसटी इनपुट क्रेडिट मॅचिंग (2B vs Books)",
          "ई-इनव्हॉइस आणि ई-वे बिल पालन",
          "जीएसटी दुरुस्ती आणि रिकॉन्सिलीएशन",
          "विलंब शुल्क आणि दंड निवारण",
        ],
        whyTitle: "वेळेवर जीएसटी फायलिंग का महत्त्वाचे?",
        whyDesc: "जीएसटी फायलिंगला उशीर झाल्यास दररोज ₹२०० पर्यंत दंड आकारला जाऊ शकतो आणि तुमच्या ग्राहकांना इनपुट टॅक्स क्रेडिट मिळण्यास अडचण येऊ शकते. Byalance तुमचे रिटर्न डेडलाईनच्या आधी अचूकपणे फाईल करते.\n\nआम्ही जीएसटी पोर्टलवरील नोटिसांचा सुद्धा पाठपुरावा करतो.",
        whoTitle: "हे कोणासाठी आहे?",
        whoItems: [
          "४० लाखांपेक्षा जास्त वार्षिक उलाढाल असलेले व्यवसाय",
          "ई-कॉमर्स विक्रेते आणि मार्केटप्लेस विक्रेते",
          "निर्यातदार आणि आयातदार",
          "जीएसटी मर्यादेपेक्षा जास्त उत्पन्न असलेले सेवा पुरवठादार",
          "कंपोझिशनमधून रेग्युलर स्कीममध्ये जाणारे व्यवसाय",
        ]
      },
      itr: {
        title: "आयटीआर सेवा",
        desc: "इन्कम टॅक्स रिटर्न (ITR) वेळेवर भरणे केवळ कायदेशीर गरज नाही, तर यामुळे कर्ज, व्हिसा आणि सरकारी टेंडर मिळणे सोपे होते. दस्तऐवज गोळा करण्यापासून ते नोटिसांना उत्तरे देण्यापर्यंत आम्ही सर्व सांभाळतो.",
        features: [
          "लागू होण्याची तपासणी (अनिवार्य विरुद्ध ऐच्छिक)",
          "पॅन-आधार लिंकिंग पडताळणी",
          "एकूण उत्पन्न आणि टॅक्स मोजणी",
          "Form 26AS, AIS आणि TIS रिव्ह्यू",
          "उत्पन्न आणि कपातीचे दस्तऐवजीकरण (Form 16)",
          "योग्य आयटीआर फॉर्म फायलिंग (ITR-1 ते ITR-7)",
          "सुधारित (Revised) रिटर्न फायलिंग",
          "नोटीस आणि छाननी (Scrutiny) मदत",
          "टॅक्स प्लॅनिंग आणि ॲडव्हान्स टॅक्स सल्ला",
        ],
        whyTitle: "अचूक आयटीआर फायलिंग का महत्त्वाचे?",
        whyDesc: "चुकीचा आयटीआर फॉर्म किंवा डेडलाईन चुकल्यास कलम १३९(९) अंतर्गत नोटीस येऊ शकते. आमची टीम फायलिंग करण्यापूर्वी तुमचे उत्पन्न Form 26AS, AIS आणि बँक स्टेटमेंटशी जुळवते.\n\nआम्ही कलम 80C, 80D अंतर्गत कायदेशीर टॅक्स बचतीचा सल्ला देतो.",
        whoTitle: "हे कोणासाठी आहे?",
        whoItems: [
          "पगारदार व्यक्ती (Form 16 धारक)",
          "स्वयंरोजगार व्यावसायिक (डॉक्टर, वकील)",
          "व्यवसाय मालक",
          "फ्रीलान्सर्स",
          "पार्टनरशिप फर्म आणि कंपन्या",
        ]
      },
      tds: {
        title: "टीडीएस सेवा",
        desc: "टीडीएस (TDS) हे भारतीय व्यवसायांसाठी एक अत्यंत महत्त्वाचे क्षेत्र आहे. डेडलाईन चुकल्यास किंवा चुकीची माहिती दिल्यास मोठा दंड बसू शकतो. Byalance तुमचे संपूर्ण टीडीएस चक्र व्यवस्थापित करते.",
        features: [
          "TAN नोंदणी आणि अर्ज",
          "फॉर्म 24Q फायलिंग (पगार टीडीएस)",
          "फॉर्म 26Q फायलिंग (बिगर-पगार टीडीएस)",
          "फॉर्म 27Q फायलिंग (अनिवासी देयके)",
          "ॲडव्हान्स टॅक्स मोजणी आणि चलन व्यवस्थापन",
          "भाड्यावर टीडीएस (Form 26QC)",
          "फॉर्म 16 आणि फॉर्म 16A जनरेशन",
          "टीडीएस डिफॉल्ट आणि मागणी निराकरण",
          "कमी कपात प्रमाणपत्र मदत (Form 13)",
        ],
        whyTitle: "पालन न केल्यास होणारे नुकसान",
        whyDesc: "कलम 271C अन्वये, टीडीएस कपात न केल्यास टॅक्सच्या रकमेइतका दंड होऊ शकतो. टीडीएस रिटर्नला उशीर झाल्यास दररोज ₹२०० दंड आकारला जातो. Byalance तुम्हाला नेहमी डेडलाईनच्या आधी ठेवते.\n\nआम्ही दर तिमाहीला तुमचे 26AS रेकॉर्ड्स हिशोबाच्या पुस्तकांशी जुळवून घेतो.",
        whoTitle: "हे कोणासाठी आहे?",
        whoItems: [
          "पगारावर टीडीएस कपात करणाऱ्या कंपन्या",
          "व्यावसायिक देयके देणारे व्यवसाय",
          "जास्त भाडे देणारे भाडेकरू किंवा मालक",
          "५० लाखांपेक्षा जास्त मालमत्ता खरेदी करणारे",
          "टीडीएस नियम लागू असणारी कोणतीही संस्था",
        ]
      },
      payroll: {
        title: "पेरोल सेवा",
        desc: "पेरोल योग्यरित्या चालवणे म्हणजे फक्त पगार वर्ग करणे नव्हे. PF, ESI, PT आणि टीडीएस यांसारख्या गोष्टी वेळेत पाळाव्या लागतात. Byalance तुमचे संपूर्ण पेरोल सायकल सांभाळते.",
        features: [
          "कर्मचारी मास्टर क्रिएशन (PAN, Aadhaar)",
          "मासिक पगार आणि CTC मोजणी",
          "पेरोल रजिस्टर आणि जर्नल",
          "डिजिटल सॅलरी स्लिप जनरेशन",
          "रिइम्बर्समेंट आणि भत्ते प्रक्रिया",
          "पगारावर टीडीएस आणि फॉर्म 16",
          "PF (प्रोव्हिडंट फंड) रिटर्न फायलिंग",
          "ESI (स्टेट इन्शुरन्स) फायलिंग",
          "प्रोफेशनल टॅक्स (PT) पालन",
          "पूर्ण आणि अंतिम (Full & Final) सेटलमेंट",
        ],
        whyTitle: "पेरोल आउटसोर्स का करावे?",
        whyDesc: "पेरोल मधील चुका महागात पडू शकतात — PF उशिरा जमा केल्यास व्याज आणि दंड लागतो. Byalance अचूकता सुनिश्चित करण्यासाठी अनेक स्तरांवर तपासणी करते.\n\nआम्ही दरवर्षी जूनपर्यंत तुमच्या सर्व कर्मचाऱ्यांना फॉर्म 16 देखील उपलब्ध करून देतो.",
        whoTitle: "हे कोणासाठी आहे?",
        whoItems: [
          "पहिले कर्मचारी कामावर घेणारे स्टार्टअप्स",
          "५-२०० कर्मचारी असलेले लघु उद्योग",
          "पेरोल फंक्शन्स आउटसोर्स करणारे व्यवसाय",
          "PF/ESI वैधानिक पालन आवश्यक असणाऱ्या कंपन्या",
          "प्रोफेशनल टॅक्स लागू असलेल्या राज्यांमधील व्यवसाय",
        ]
      }
    }
  },
  ta: {
    nav: {
      home: 'முகப்பு',
      about: 'எங்களைப் பற்றி',
      services: 'சேவைகள்',
      pricing: 'விலை',
      contact: 'தொடர்பு',
    },
    hero: {
      subtitle: 'கணக்கியலை எளிதாக்குவது, வளர்ச்சியைத் தூண்டுவது.',
      description: 'Byalance என்பது கணக்குப்பதிவு, வரி இணக்கம் மற்றும் நிதி உத்திக்கான உங்களது ஒரே கூட்டாளர்.',
      bookConsultation: 'இலவச ஆலோசனை பெறவும்',
      whatsappNow: 'வாட்ஸ்அப் செய்யவும்',
    },
    sections: {
      pricing: 'வெளிப்படையான விலை',
      pricingSubtitle: 'உங்கள் வணிகத் தேவைகளுக்குப் பொருந்தும் திட்டத்தைத் தேர்ந்தெடுக்கவும். எளிமையானது, தெளிவானது மற்றும் பயனுள்ளது.',
    },
    about: {
      badge: 'கார்ப்பரேட் சிறப்பு',
      title: 'Byalance தரம்',
      p1: 'Byalance என்பது இந்தியாவின் அடுத்த கட்ட வளர்ச்சியை இயக்கும் தொழில்முனைவோர் மற்றும் நிறுவனர்களுக்காக உருவாக்கப்பட்ட ஒரு மலிவு விலை நவீன கணக்கியல் நிறுவனம்.',
      p2: 'பாரம்பரிய கணக்கியல் மற்றும் நவீன வணிக வேகத்திற்கு இடையிலான இடைவெளியை நாங்கள் குறைக்கிறோம். கணக்குப்பதிவு, ஜிஎஸ்டி, டிடிஎஸ் மற்றும் ஊதியப்பட்டியல் - அனைத்தும் சரியான விலையில்.',
      missionBadge: 'எங்கள் நோக்கம்',
      missionTitle: 'வளர்ச்சி மற்றும் இணக்கத்தை இணைத்தல்',
      missionText: '"இந்தியாவில் உள்ள ஒவ்வொரு வணிகத்திற்கும் இணக்கத்தை மன அழுத்தம் இல்லாததாகவும், மலிவானதாகவும், தொழில்முறை ரீதியாகவும் மாற்றுவது."',
      stats: {
        trusted: 'நம்பகமான கூட்டாளர்',
        trustedText: 'நம்பிக்கை மற்றும் நம்பகத்தன்மையின் அடிப்படையில் எங்கள் வாடிக்கையாளர்களுடன் நீண்டகால உறவுகளை உருவாக்குதல்.',
        growth: 'வளர்ச்சி சார்ந்த',
        growthText: 'வணிகங்களின் வளர்ச்சியின் ஒவ்வொரு கட்டத்திலும் ஆதரவளித்தல்.',
        timely: 'சரியான நேர சேவை',
        timelyText: 'அனைத்து காலக்கெடுவையும் பூர்த்தி செய்தல் மற்றும் உங்கள் வணிகத்தை சரியான நேரத்தில் இணக்கத்தில் வைத்திருத்தல்.',
      }
    },
    services: {
      title: 'எங்கள் சேவைகள்',
      description: 'உங்கள் வணிகத்திற்காக பிரத்யேகமாக வடிவமைக்கப்பட்ட முழுமையான கணக்கியல் தீர்வுகள்',
      items: [
        { 
          title: 'கணக்கியல் மற்றும் கணக்குப்பதிவு', 
          text: 'உங்கள் கணக்குகளை துல்லியமாகவும் புதுப்பித்த நிலையிலும் வைத்திருக்க விரிவான கணக்கியல் சேவைகள்.',
          features: [
            'விற்பனை, கொள்முதல், செலவு பதிவுகள்',
            'வங்கி கணக்கு சரிபார்ப்பு (Reconciliation)',
            'ரொக்கப் புத்தக மேலாண்மை',
            'குறிப்பேடு பதிவுகள் மற்றும் தேய்மானம்',
            'பேரேடு/விற்பனையாளர் கணக்கு சரிபார்ப்பு',
            'இருப்பு ஆய்வு, இலாப நட்டக் கணக்கு, இருப்புநிலை',
            'வர வேண்டிய மற்றும் செலுத்த வேண்டியவை கண்காணிப்பு',
            'தரவு அமைப்பு மற்றும் சரிசெய்தல்',
            'மாத இறுதி மற்றும் ஆண்டு இறுதி கணக்கு முடிப்பு ஆதரவு'
          ]
        },
        { 
          title: 'ஐடிஆர் சேவைகள்', 
          text: 'தனிநபர்கள் மற்றும் வணிகங்களுக்கான நிபுணர் ஐடிஆர் தாக்கல் சேவைகள்.',
          features: [
            'பயன்பாட்டு சரிபார்ப்பு (கட்டாயம்/விருப்பம்)',
            'பான்-ஆதார் இணைப்பு சரிபார்ப்பு',
            'மொத்த வருமானம் மற்றும் வரி கணக்கீடு',
            'படிவம் 26AS, AIS மற்றும் TIS மதிப்பாய்வு',
            'சரியான ஐடிஆர் படிவம் தாக்கல் (ITR-1 முதல் ITR-7 வரை)',
            'அறிவிப்பு மற்றும் விசாரணை ஆதரவு'
          ]
        },
        { 
          title: 'ஜிஎஸ்டி சேவைகள்', 
          text: 'உங்கள் வணிகத்தை வரி-இணக்கத்துடன் வைத்திருக்க முழுமையான ஜிஎஸ்டி இணக்கம் மற்றும் தாக்கல் சேவைகள்.',
          features: [
            'ஜிஎஸ்டி பதிவு',
            'GSTR-1, 3B, 9 தாக்கல்',
            'ஜிஎஸ்டி உள்ளீட்டு வரி வரவு பொருத்தம்',
            'இ-இன்வாய்ஸ் மற்றும் இ-வே பில் இணக்கம்',
            'தாமதக் கட்டணம் மற்றும் அபராதத் தீர்வு'
          ]
        },
        { 
          title: 'டிடிஎஸ் சேவைகள்', 
          text: 'உங்கள் வணிகத்திற்கான விரிவான டிடிஎஸ் மேலாண்மை மற்றும் தாக்கல் சேவைகள்.',
          features: [
            'டான் (TAN) விண்ணப்பம்',
            'படிவம் 24Q, 26Q தாக்கல்',
            'முன்கூட்டிய வரி மற்றும் சாலாண் மேலாண்மை',
            'படிவம் 16/16A உருவாக்கம்',
            'டிடிஎஸ் நிலுவை மற்றும் கோரிக்கை தீர்வு'
          ]
        },
        { 
          title: 'ஊதிய மேலாண்மை', 
          text: 'துல்லியமான கணக்கீடுகள் மற்றும் சட்டரீதியான இணக்கத்துடன் முழுமையான ஊதிய மேலாண்மை.',
          features: [
            'பணியாளர் முதன்மை தரவு மேலாண்மை',
            'சம்பள அமைப்பு மற்றும் மாதாந்திர கணக்கீடு',
            'துல்லியமான ஊதியச் சீட்டுகள் மற்றும் ஊதியப் பதிவு',
            'சம்பளத்திற்கான டிடிஎஸ் மற்றும் படிவம் 16/16A',
            'PF/ESI/PT/EDLI பதிவு மற்றும் வருவாய் தாக்கல்',
            'முழுமையான மற்றும் இறுதித் தீர்வு'
          ]
        }
      ],
      ctaTitle: 'சிக்கலில்லாத கணக்கியலுக்குத் தயாரா?',
      ctaText: 'தங்கள் வளர்ச்சிக்காக Byalance ஐ நம்பும் 100+ வணிகங்களில் இணையுங்கள்.',
      ctaButton: 'இன்றே தொடங்குங்கள்',
    },
    features: {
      title: 'ஏன் BYALANCE ஐ தேர்வு செய்ய வேண்டும்?',
      description: 'இந்தியா முழுவதும் வளர்ந்து வரும் வணிகங்களுக்கு ஏற்ப தொழில்முறை கணக்கியல் சேவைகள்.',
      items: [
        { title: 'வெளிப்படையான விலை', text: 'மறைமுகக் கட்டணங்கள் எதுவும் இல்லாத தெளிவான விலை. நீங்கள் எதற்குக் கட்டணம் செலுத்துகிறீர்கள் என்பதை அறிந்து கொள்ளுங்கள்.' },
        { title: 'உள்ளூர் மொழி ஆதரவு', text: 'உங்களுக்கு விருப்பமான மொழியில் தொடர்புகொள்ளுங்கள். உள்ளூர் வணிகத் தேவைகளை நாங்கள் புரிந்துகொள்கிறோம்.' },
        { title: 'முழுமையான இணக்கம்', text: 'பதிவு முதல் தாக்கல் வரை மற்றும் அதற்கு அப்பால் முழுமையான இணக்க மேலாண்மை.' },
        { title: 'சிறு வணிகங்களுக்கு ஏற்றது', text: 'மிகச்சிறிய வணிகங்களுக்கும் சேவைகள் கிடைக்கும். நம்பிக்கையுடன் வளருங்கள்.' }
      ]
    },
    pricing: {
      title: 'வெளிப்படையான விலை',
      description: 'உங்கள் வணிகத் தேவைகளுக்குப் பொருத்தமான திட்டத்தைத் தேர்ந்தெடுக்கவும். எளிமையானது, தெளிவானது மற்றும் பயனுள்ளது.',
      starter: 'ஸ்டார்ட்டர் திட்டம்',
      starterPrice: '₹1,999 – ₹6,999',
      perMonth: '/மாதம்',
      starterFeatures: ['ஜிஎஸ்டி கணக்குகள்', 'அடிப்படை கணக்குப்பதிவு', 'விற்பனை மற்றும் கொள்முதல் பதிவுகள்', 'மாதாந்திர நிதி அறிக்கைகள்'],
      recommended: 'பரிந்துரைக்கப்படுகிறது',
      growth: 'வளர்ச்சித் திட்டம்',
      growthPrice: '₹7,499 – ₹14,999',
      growthFeatures: ['ஜிஎஸ்டி கணக்குகள் மற்றும் இணக்கம்', 'டிடிஎஸ் கணக்குகள் மற்றும் தாக்கல்', 'முழுமையான கணக்கியல் மற்றும் கணக்குப்பதிவு', 'வங்கி கணக்கு சரிபார்ப்பு', 'நிதி அறிக்கைகள் (P&L, இருப்புநிலை)'],
      pro: 'புரோ திட்டம்',
      proPrice: '₹15,499 – ₹20,000+',
      proFeatures: ['ஜிஎஸ்டி மற்றும் டிடிஎஸ் முழுமையான மேலாண்மை', 'ஊதியச் செயலாக்கம்', 'முழுமையான கணக்கியல் சேவைகள்', 'மேம்பட்ட நிதி அறிக்கைகள்', 'முன்னுரிமை ஆதரவு'],
      notIdeal: 'சிறந்த விலை இல்லையா?',
      notIdealDesc: 'தனிப்பயனாக்கப்பட்ட தீர்வு வேண்டுமா? உங்கள் குறிப்பிட்ட தேவைகளைப் பற்றி விவாதிப்போம்.',
      plans: [
        { name: 'ஸ்டார்ட்டர் திட்டம்', price: '₹1,999 – ₹6,999', period: '/மாதம்', features: ['ஜிஎஸ்டி கணக்குகள்', 'அடிப்படை கணக்குப்பதிவு', 'விற்பனை மற்றும் கொள்முதல் பதிவுகள்', 'மாதாந்திர நிதி அறிக்கைகள்'] },
        { name: 'வளர்ச்சித் திட்டம்', price: '₹7,499 – ₹14,999', period: '/மாதம்', features: ['ஜிஎஸ்டி கணக்குகள் மற்றும் இணக்கம்', 'டிடிஎஸ் கணக்குகள் மற்றும் தாக்கல்', 'முழுமையான கணக்கியல் மற்றும் கணக்குப்பதிவு', 'வங்கி கணக்கு சரிபார்ப்பு', 'நிதி அறிக்கைகள் (P&L, இருப்புநிலை)'] },
        { name: 'புரோ திட்டம்', price: '₹15,499 – ₹20,000+', period: '/மாதம்', features: ['ஜிஎஸ்டி மற்றும் டிடிஎஸ் முழுமையான மேலாண்மை', 'ஊதியச் செயலாக்கம்', 'முழுமையான கணக்கியல் சேவைகள்', 'மேம்பட்ட நிதி அறிக்கைகள்', 'முன்னுरीமை ஆதரவு'] }
      ],
      button: 'திட்டத்தைத் தேர்ந்தெடு',
      customButton: 'தொடர்பு கொள்ளவும்',
    },
    cta: {
      choosePlan: 'தேர்ந்தெடு',
      chooseStarter: 'ஸ்டார்ட்டர் தேர்ந்தெடு',
      chooseGrowth: 'வளர்ச்சி தேர்ந்தெடு',
      choosePro: 'புரோ தேர்ந்தெடு',
      contactCustom: 'தனிப்பயன் விலைக்காக தொடர்பு கொள்ளவும்',
    },
    contact: {
      badge: 'நிபுணர் ஆலோசனை',
      title: 'உங்கள் நிதி இணக்கத்தை வலுப்படுத்த நீங்கள் தயாரா?',
      description: 'இன்றே எமது மூத்த கணக்காளர்களுடன் பேசுங்கள். ஒழுங்குமுறை தெளிவு மற்றும் வணிக வளர்ச்சிக்கான தெளிவான வழிகளை நாங்கள் வழங்குகிறோம்.',
      phone: 'எங்களை அழையுங்கள்',
      email: 'மின்னஞ்சல் அனுப்புங்கள்',
      location: 'எங்களை சந்திக்கவும்',
      formTitle: 'நேரடி விசாரணைகள்',
      name: 'முழு பெயர்',
      emailLabel: 'மின்னஞ்சல் முகவரி',
      message: 'உங்கள் செய்தி',
      send: 'செய்தி அனுப்பு',
    },
    footer: {
      about: 'இந்தியா முழுவதும் உள்ள உயர்மட்ட ஸ்டார்ட்அப்கள் மற்றும் சிறு நடுத்தర நிறுவனங்களுக்குச் சேவை செய்ய அர்ப்பணிக்கப்பட்ட ஒரு முன்னணி கணக்கியல் நிறுவனம்.',
      resources: 'ஆதாரங்கள்',
      expertise: 'முக்கை நிபுணத்துவம்',
      headquarters: 'தலைமையகம்',
      privacy: 'தனியுரிமைக் கொள்கை',
      data: 'தரவு கையாளுதல் கொள்கை',
      rights: '© 2026 Byalance. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    },
    common: {
      learnMore: 'மேலும் அறிய',
      businessHours: 'வணிக நேரம்',
      instantResponse: 'உடனடி பதில்',
      whatsappDesk: 'எங்கள் வாட்ஸ்அப் டெஸ்க் சான்றளிக்கப்பட்ட கணக்காளர்களால் நிர்வகிக்கப்படுகிறது.',
      messageNow: 'இப்போது செய்தி அனுப்புங்கள்',
      enterName: 'உங்கள் பெயரை உள்ளிடவும்',
      mobileNumber: 'மொபைல் எண்',
      enterMobile: 'உங்கள் மொபைல் எண்ணை உள்ளிடவும்',
      emailId: 'மின்னஞ்சல் ஐடி',
      enterEmail: 'உங்கள் மின்னஞ்சல் ஐடியை உள்ளிடவும்',
      businessType: 'வணிக வகை',
      selectBusinessType: 'உங்கள் வணிக வகையைத் தேர்ந்தெடுக்கவும்',
      businessTypes: [
        'தனிநபர் / உரிமையாளர்',
        'கூட்டுரிமை / எல்எல்பி',
        'தனியார் லிமிடெட் நிறுவனம்',
        'ஸ்டார்ட்அப் (பதிவு செய்யப்பட்டது)',
        'சில்லறை விற்பனையாளர் / இ-காமர்ஸ்',
        'சேவை வழங்குநர்',
        'இதர'
      ],
      accountingNeeds: 'உங்கள் கணக்கியல் தேவைகளைப் பற்றி எங்களிடம் கூறுங்கள்...',
      gstinPending: 'GSTIN: நிலுவையில் உள்ளது',
      whatsIncluded: "என்ன சேர்க்கப்பட்டுள்ளது",
      getStartedToday: 'இன்றே தொடங்குங்கள்',
      chatWhatsapp: 'வாட்ஸ்அப்பில் அரட்டையடிக்கவும்',
      sendEnquiry: 'விசாரணை அனுப்பவும்',
      relatedServices: 'தொடர்புடைய சேவைகள்',
    },
    servicePage: {
      badge: 'சிறந்த சேவை',
      framework: 'இணக்க கட்டமைப்பு',
      description: 'நவீன வணிகங்களுக்காக வடிவமைக்கப்பட்ட எண்டர்பிரைஸ்-கிரேடு {{title}} தீர்வுகளை நாங்கள் வழங்குகிறோம். எங்களது வழிமுறை தொழில்நுட்பத்தால் இயங்கும் செயல்திறனுடன் கடுமையான இணக்கத் தரங்களை ஒருங்கிணைக்கிறது.',
      features: [
        { t: 'நிபுணர் தணிக்கை', d: 'மூத்த நிபுணர்களால் மதிப்பாய்வு செய்யப்பட்ட தாக்கல்.' },
        { t: 'காலக்கெடு முத்திரை', d: 'சட்டரீதியான காலக்கெடுவுடன் உத்தரவாதம் அளிக்கப்பட்ட இணக்கம்.' },
        { t: 'டிஜிட்டல் வால்ட்', d: 'அனைத்து நிதி பதிவுகளின் பாதுகாப்பான சேமிப்பு.' },
        { t: 'மூலோபాయ ஆலோசனை', d: 'மூத்த வரி ஆலோசகர்களுடன் நேரடி தொடர்பு.' },
      ],
      ctaTitle: 'ஆன்போர்டிங்கைத் தொடங்குங்கள்',
      ctaText: 'தங்கள் நிதி நேர்மைக்காக Byalance ஐ நம்பும் 200+ வணிகங்களில் இணையுங்கள்.',
      ctaButton: 'வாட்ஸ்அப் மூலம் இணையுங்கள்',
    },
    serviceDetail: {
      accounting: {
        title: "கணக்கியல் மற்றும் கணக்குப்பதிவு",
        desc: "துல்லியமான மற்றும் முறையான கணக்குப்பதிவு ஒவ்வொரு ஆரோக்கியமான வணிகத்தின் அடித்தளமாகும். தினசரிப் பதிவுகள் முதல் ஆண்டின் இறுதி வரை உங்கள் முழு கணக்கியல் சுழற்சியையும் நாங்கள் நிர்வகிக்கிறோம் — இதனால் நீங்கள் எப்போதும் தெளிவான நிதி நிலையைப் பெற முடியும்.",
        features: [
          "விற்பனை, கொள்முதல் மற்றும் செலவுப் பதிவுகள்",
          "வங்கி சமரசம் (மாதாந்திரம்)",
          "ரொக்கப் புத்தகம் மற்றும் சில்லறை செலவு பராமரிப்பு",
          "ஜர்னல் பதிவுகள் மற்றும் தேய்மான அட்டவணைகள்",
          "பேரேடு மற்றும் விற்பனையாளர் சமரசம்",
          "ட்ரையல் பேலன்ஸ், P&L மற்றும் இருப்புநிலை குறிப்பு",
          "பணம் வர வேண்டியவை மற்றும் செலுத்த வேண்டியவை கண்காணிப்பு",
          "தரவு அமைப்பு, சுத்தம் மற்றும் இடம்பெயர்வு",
          "மாதாந்திர மற்றும் ஆண்டு இறுதி கணக்கு முடிப்பு ஆதரவு",
        ],
        whyTitle: "இது ஏன் முக்கியமானது?",
        whyDesc: "துல்லியமான கணக்குகள் இல்லாமல், நீங்கள் இருட்டில் பயணிப்பது போன்றது. தாமதமான அல்லது தவறான கணக்குகள் என்பது வரி சலுகைகளை இழப்பது, தவறான ஜிஎஸ்டி தாக்கல் மற்றும் பணப்புழக்கம் பற்றிய தெளிவு இல்லாததைக் குறிக்கும். Byalance ஒவ்வொரு மாதமும் உங்கள் பதிவுகளைச் சுத்தமாக வைத்திருக்க உதவுகிறது.\n\nநாங்கள் Tally, Zoho Books, QuickBooks மற்றும் Excel ஆகியவற்றுடன் வேலை செய்கிறோம் — உங்கள் குழு ஏற்கனவே எதைப் பயன்படுத்துகிறதோ அதிலேயே பணியாற்றுகிறோம்.",
        whoTitle: "இது யாருக்கானது?",
        whoItems: [
          "சில்லறை மற்றும் வர்த்தக வணிகங்கள்",
          "தொடக்க நிறுவனங்கள் (Startups)",
          "சேவை வழங்குநர்கள் மற்றும் ஆலோசகர்கள்",
          "MSMEகள் மற்றும் சிறு உற்பத்தியாளர்கள்",
          "மின்-வணிக (E-commerce) விற்பனையாளர்கள்",
        ]
      },
      gst: {
        title: "ஜிஎஸ்டி சேவைகள்",
        desc: "பண்டங்கள் மற்றும் சேவைகள் வரி விதிமுறைகளுடன் முழுமையாக இணங்கி இருங்கள். பதிவு முதல் மாதாந்திர/ஆண்டுத் தாக்கல் மற்றும் சமரசம் வரை, நாங்கள் உங்கள் ஜிஎஸ்டி சுழற்சியின் ஒவ்வொரு அம்சத்தையும் கையாளுகிறோம்.",
        features: [
          "ஜிஎஸ்டி பதிவு (வழக்கமான & கலவை)",
          "GSTR-1 தாக்கல் (மாதாந்திரம் / காலாண்டு)",
          "GSTR-3B தாக்கல் (மாதாந்திரம்)",
          "GSTR-9 ஆண்டுத் தாக்கல்",
          "ஜிஎஸ்டி உள்ளீட்டு வரிச் சலுகை பொருத்தம் (2B vs ஏடுகள்)",
          "இ-இன்வாய்ஸ் & இ-வே பில் இணக்கம்",
          "ஜிஎஸ்டி திருத்தங்கள் மற்றும் சமரசம்",
          "தாமதக் கட்டணம் மற்றும் அபராதம் தீர்வு",
        ],
        whyTitle: "சரியான நேரத்தில் ஜிஎஸ்டி தாக்கல் ஏன் முக்கியம்?",
        whyDesc: "தாமதமான அல்லது தவறான ஜிஎஸ்டி தாக்கல்கள் ஒரு நாளைக்கு ₹200 வரை அபராதத்தை ஈர்க்கும் மற்றும் உங்கள் வாடிக்கையாளர்கள் உள்ளீட்டு வரிச் சலுகையைப் பெறுவதைத் தடுக்கலாம். Byalance ஒவ்வொரு காலக்கெடுவிற்கும் முன்பாக உங்கள் தாக்கல்களைத் துல்லியமாகச் செய்கிறது.\n\nஜிஎஸ்டிஎன் போர்டல் அறிவிப்புகள் மற்றும் ஆலோசனைத் தொடர்புகளையும் நாங்கள் கண்காணிக்கிறோம்.",
        whoTitle: "இது யாருக்கானது?",
        whoItems: [
          "ஆண்டு விற்றுமுதல் ₹40 லட்சத்திற்கு மேல் உள்ள வணிகங்கள்",
          "மின்-வணிக விற்பனையாளர்கள்",
          "ஏற்றுமதியாளர்கள் மற்றும் இறக்குமதியாளர்கள்",
          "ஜிஎஸ்டி வரம்பைக் கடக்கும் சேவை வழங்குநர்கள்",
          "கலவை திட்டத்திலிருந்து வழக்கமான திட்டத்திற்கு மாறும் வணிகங்கள்",
        ]
      },
      itr: {
        title: "ஐடிஆர் சேவைகள்",
        desc: "உங்கள் வருமான வரித் தாக்கலை (ITR) சரியான நேரத்தில் மற்றும் துல்லியமாகத் தாக்கல் செய்வது சட்டரீதியான தேவை மட்டுமல்ல — இது கடன்கள், விசாக்கள் மற்றும் அரசாங்க ஒப்பந்தங்களைப் பெற உதவுகிறது.",
        features: [
          "பொருந்தக்கூடிய சரிபார்ப்பு (கட்டாயமா அல்லது விருப்பமான தாக்கலா)",
          "பான்–ஆதார் இணைப்பு சரிபார்ப்பு",
          "மொத்த வருமானம் மற்றும் வரிப் பொறுப்பு கணக்கீடு",
          "படிவம் 26AS, AIS & TIS மதிப்பாய்வு",
          "வருமானம் மற்றும் விலக்கு ஆவணங்கள் (படிவம் 16, வங்கி அறிக்கைகள்)",
          "சரியான ஐடிஆர் படிவத்தைத் தாக்கல் செய்தல் (ITR-1 முதல் ITR-7 வரை)",
          "திருத்தப்பட்ட வருமான வரித் தாக்கல்",
          "அறிவிப்பு மற்றும் விசாரணை ஆதரவு (143(1), 139(9), 143(2) பதில்கள்)",
          "வரித் திட்டமிடல் மற்றும் முன்கூட்டிய வரி ஆலோசனை",
        ],
        whyTitle: "துல்லியமான ஐடிஆர் தாக்கல் ஏன் முக்கியம்?",
        whyDesc: "தவறான ஐடிஆர் படிவம் அல்லது தவறவிட்ட அட்டவணை அபராதங்களுக்கு வழிவகுக்கும். எங்களது குழு தாக்கல் செய்வதற்கு முன் படிவம் 26AS, AIS மற்றும் வங்கி அறிக்கைகளுடன் உங்கள் வருமானத்தைப் பொருத்திப் பார்க்கிறது.\n\nபிரிவுகள் 80C, 80D, 80G, HRA மற்றும் LTA ஆகியவற்றின் கீழ் சட்டப்பூர்வ வரி விலக்குகள் குறித்தும் நாங்கள் ஆலோசனை வழங்குகிறோம்.",
        whoTitle: "இது யாருக்கானது?",
        whoItems: [
          "சம்பளம் பெறுபவர்கள் (படிவம் 16 வைத்திருப்பவர்கள்)",
          "சுயதொழில் செய்பவர்கள் (மருத்துவர்கள், வழக்கறிஞர்கள், ஆலோசகர்கள்)",
          "வணிக உரிமையாளர்கள்",
          "உள்நாட்டு அல்லது வெளிநாட்டு வருமானம் கொண்ட ஃப்ரீலான்ஸர்கள்",
          "HUFகள் மற்றும் கூட்டு நிறுவனங்கள்",
          "நிறுவனங்கள் மற்றும் LLPகள்",
        ]
      },
      tds: {
        title: "டிடிஎஸ் சேவைகள்",
        desc: "மூலத்தில் வரி பிடித்தம் (TDS) என்பது இந்திய வணிகங்களுக்கான மிக முக்கியமான இணக்கப் பகுதிகளில் ஒன்றாகும். Byalance உங்கள் முழு டிடிஎஸ் சுழற்சியையும் — பிடித்தம் முதல் காலாண்டுத் தாக்கல் மற்றும் சான்றிதழ் உருவாக்கம் வரை நிர்வகிக்கிறது.",
        features: [
          "TAN பதிவு மற்றும் விண்ணப்பம்",
          "படிவம் 24Q தாக்கல் (சம்பள டிடிஎஸ்)",
          "படிவம் 26Q தாக்கல் (சம்பளம் அல்லாத டிடிஎஸ்)",
          "படிவம் 27Q தாக்கல் (வெளிநாடு வாழ் மக்கள் கொடுப்பனவுகள்)",
          "முன்கூட்டிய வரி கணக்கீடு மற்றும் சலான் மேலாண்மை",
          "வாடகை மற்றும் சொத்து வாங்குதல் மீதான டிடிஎஸ்",
          "படிவம் 16 & படிவம் 16A உருவாக்கம்",
          "டிடிஎஸ் நிலுவை மற்றும் தேவைத் தீர்வு",
          "குறைந்த வரி பிடித்தம் சான்றிதழ் ஆதரவு (படிவம் 13)",
        ],
        whyTitle: "இணக்கமின்மையின் செலவு",
        whyDesc: "டிடிஎஸ் நிலுவைகள் அதிக வட்டி விகிதங்களுக்கு வழிவகுக்கும். காலாண்டு காலக்கெடுவிற்கு முன்பே நீங்கள் எப்போதும் தயாராக இருப்பதை Byalance உறுதி செய்கிறது.\n\nஒவ்வொரு காலாண்டிலும் உங்கள் 26AS ஆவணங்களை ஏடுகளுடன் நாங்கள் ஒப்பிட்டுச் சரிபார்க்கிறோம்.",
        whoTitle: "இது யாருக்கானது?",
        whoItems: [
          "சம்பளத்தில் டிடிஎஸ் பிடிக்கும் நிறுவனங்கள்",
          "ஒப்பந்ததாரர் அல்லது தொழில்முறை கட்டணம் செலுத்தும் வணிகங்கள்",
          "உயர் மதிப்பு வாடகை செலுத்தும் வீட்டு உரிமையாளர்கள் அல்லது வாடகைதாரர்கள்",
          "₹50 லட்சத்திற்கு மேல் சொத்து வாங்குபவர்கள்",
          "டிடிஎஸ் விதிகளுக்கு உட்பட்ட பணம் செலுத்தும் எந்தவொரு நிறுவனமும்",
        ]
      },
      payroll: {
        title: "ஊதியப்பட்டியல் சேவைகள்",
        desc: "ஊதியப்பட்டியலைச் (Payroll) சரியாக நடத்துவது என்பது சம்பளத்தை மாற்றுவதை விட மேலானது. PF, ESI, PT, சம்பளம் மீதான TDS மற்றும் படிவம் 16 அனைத்தும் நிர்வகிக்கப்பட வேண்டும். Byalance உங்கள் முழு ஊதியப்பட்டியல் சுழற்சியையும் கையாளுகிறது.",
        features: [
          "பணியாளர் முதன்மைத் தரவு உருவாக்கம்",
          "மாதாந்திர சம்பளம் மற்றும் CTC கணக்கீடுகள்",
          "ஊதியப்பட்டியல் பதிவேடு",
          "டிஜிட்டல் சம்பளச் சீட்டு உருவாக்கம்",
          "திருப்பிக் கொடுத்தல் மற்றும் கொடுப்பனவு செயலாக்கம்",
          "சம்பளத்தின் மீதான டிடிஎஸ் மற்றும் படிவம் 16",
          "PF (வருங்கால வைப்பு நிதி) தாக்கல்",
          "ESI (தொழிலாளர் காப்பீடு) தாக்கல்",
          "தொழில்முறை வரி (PT) இணக்கம்",
          "EDLI & LWF இணக்கம்",
          "முழு மற்றும் இறுதி தீர்வு செயலாக்கம் (Full & Final)",
        ],
        whyTitle: "ஏன் ஊதியப்பட்டியலை அவுட்சோர்ஸ் செய்ய வேண்டும்?",
        whyDesc: "ஊதியப்பட்டியல் பிழைகள் பணியாளர் அதிருப்திக்கும் நிறுவனத்திற்கான சட்ட ரீதியான சிக்கல்களுக்கும் வழிவகுக்கும். துல்லியத்தை உறுதிப்படுத்த பல அடுக்கு மதிப்பாய்வுடன் Byalance ஊதியப்பட்டியலைச் செயலாக்குகிறது.\n\nஒவ்வொரு ஆண்டும் ஜூன் மாதத்திற்குள் உங்கள் பணியாளர்கள் அனைவருக்கும் படிவம் 16 ஐ நாங்கள் வழங்குகிறோம்.",
        whoTitle: "இது யாருக்கானது?",
        whoItems: [
          "முதல் பணியாளர்களை நியமிக்கும் தொடக்க நிறுவனங்கள்",
          "5-200 பணியாளர்களைக் கொண்ட SMEகள்",
          "HR & ஊதியப்பட்டியல் செயல்பாடுகளை அவுட்சோர்ஸ் செய்ய விரும்பும் வணிகங்கள்",
          "PF/ESI சட்டரீதியான இணக்கம் தேவைப்படும் நிறுவனங்கள்",
          "PT மாநிலங்களில் உள்ள வணிகங்கள் (KA, MH, TN போன்றவை)",
        ]
      }
    }
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
