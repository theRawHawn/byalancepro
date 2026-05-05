import { Instagram, Twitter, Linkedin, Facebook, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/#about' },
    { name: t.nav.services, href: '/#services' },
    { name: t.nav.pricing, href: '/#pricing' },
    { name: t.nav.contact, href: '/#contact' },
  ];

  const serviceLinks = [
    { name: t.services.items[0].title, href: '/services/accounting-bookkeeping' },
    { name: t.services.items[1].title, href: '/services/itr-services' },
    { name: t.services.items[2].title, href: '/services/gst-services' },
    { name: t.services.items[3].title, href: '/services/tds-services' },
    { name: t.services.items[4].title, href: '/services/payroll-processing' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 pt-8 pb-4 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-6 mb-6">
          <div className="lg:col-span-1">
            <img src="/brandlogowhite (1).svg" alt="Byalance" className="h-12 mb-4" />
            <p className="text-slate-400 text-xs leading-relaxed mb-4 max-w-xs font-medium">
              {t.footer.about}
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">{t.footer.resources}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-xs text-slate-400 hover:text-indigo-400 transition-all font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">{t.footer.expertise}</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-xs text-slate-400 hover:text-indigo-400 transition-all font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">{t.footer.headquarters}</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-bold mb-4 italic font-display">
              4th Phase, JP Nagar<br />
              Bengaluru, Karnataka 560078
            </p>
            <div className="flex items-center gap-2 text-[9px] font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-1 rounded-md border border-indigo-500/20 inline-block">
              <span className="w-1 h-1 bg-indigo-400 rounded-full animate-pulse"></span>
              GSTIN: PENDING
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col items-center gap-3 text-center">
          <div className="flex gap-4 text-slate-500 text-[9px] font-bold uppercase tracking-widest">
            <Link to="/privacy-policy" className="hover:text-indigo-400 transition-all">{t.footer.privacy}</Link>
            <Link to="/data-handling" className="hover:text-indigo-400 transition-all">{t.footer.data}</Link>
          </div>
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
