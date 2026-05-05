import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Globe, ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage, Language } from '../context/LanguageContext';

const languages: { code: Language; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'kn', name: 'ಕನ್ನಡ' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'mr', name: 'मराठी' },
  { code: 'ta', name: 'தமிழ்' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/#about' },
    { name: t.nav.services, href: '/#services' },
    { name: t.nav.pricing, href: '/#pricing' },
    { name: t.nav.contact, href: '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const currentLangName = languages.find(l => l.code === language)?.name || 'English';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white py-3 shadow-sm border-b border-slate-100' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/brandlogo (1).svg" alt="Byalance" className="h-10" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 text-sm font-semibold tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="relative">
            <button 
              onClick={() => setShowLanguages(!showLanguages)}
              className="flex items-center gap-2 text-slate-600 cursor-pointer hover:text-indigo-600 transition-all font-bold ml-1 lg:ml-4"
            >
              <Globe size={18} className="text-slate-400" />
              <span className="text-sm">{currentLangName}</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${showLanguages ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {showLanguages && (
                <>
                  <div 
                    className="fixed inset-0 z-[-1]" 
                    onClick={() => setShowLanguages(false)}
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 bg-white border border-slate-100 shadow-xl rounded-xl overflow-hidden min-w-[140px] py-1"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLanguages(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs font-bold hover:bg-slate-50 transition-colors ${
                          language === lang.code ? 'text-indigo-600 bg-indigo-50/50' : 'text-slate-600'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <a
            href="https://wa.me/917406296116"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-xl hover:bg-green-600 transition-all shadow-md shadow-green-100 font-bold ml-2"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-zinc-100 overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-4 text-lg font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-brand-secondary py-2 border-b border-zinc-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="py-4 border-b border-zinc-50">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 px-2">Select Language</p>
                <div className="grid grid-cols-3 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                        language === lang.code 
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100' 
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              <a
                href="https://wa.me/917406296116"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white py-4 rounded-2xl mt-4 font-bold shadow-lg shadow-green-100"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
