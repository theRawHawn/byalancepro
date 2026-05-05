import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    businessType: '',
    message: '',
  });

  const contactInfo = [
    { icon: Phone, title: t.contact.phone, text: '+91 74062 96116, +91 96111 93492' },
    { icon: Mail, title: t.contact.email, text: 'info@byalance.in' },
    { icon: MapPin, title: t.contact.location, text: '4th Phase, JP Nagar, Bengaluru, KA 560078' },
    { icon: Clock, title: t.common.businessHours, text: 'Mon – Sat: 9:00 AM – 5:30 PM' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          mobile: '',
          email: '',
          businessType: '',
          message: '',
        });
      } else {
        alert('Failed to submit form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-zinc-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-600 mb-4 md:mb-6">{t.contact.badge}</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 md:mb-8 leading-tight">{t.contact.title}</h3>
            <p className="text-slate-600 text-base md:text-lg mb-8 md:mb-12 font-medium leading-relaxed max-w-md">
              {t.contact.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm text-indigo-600">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">{item.title}</h4>
                    <div className="text-slate-900 font-bold text-sm leading-relaxed">
                      {item.text.split(', ').map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 md:mt-16 p-6 sm:p-10 bg-slate-900 rounded-[2rem] sm:rounded-[2.5rem] text-white shadow-2xl shadow-indigo-200 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <WhatsAppIcon className="w-32 h-32" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 relative z-10">{t.common.instantResponse}</h3>
              <p className="text-slate-400 mb-8 text-sm relative z-10 max-w-xs">{t.common.whatsappDesk}</p>
              <a
                href="https://wa.me/917406296116"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20 relative z-10"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{t.common.messageNow}</span>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-10 md:p-14 rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-50"
          >
            <h3 className="text-2xl font-display font-bold mb-10 text-slate-900">{t.contact.formTitle}</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">{t.contact.name} *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none font-medium text-slate-900" placeholder={t.common.enterName} required />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">{t.common.mobileNumber} *</label>
                  <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none font-medium text-slate-900" placeholder={t.common.enterMobile} required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">{t.contact.emailLabel} *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none font-medium text-slate-900" placeholder={t.common.enterEmail} required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">{t.common.businessType}</label>
                <div className="relative">
                  <select name="businessType" value={formData.businessType} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none appearance-none font-medium text-slate-900">
                    <option value="" disabled>{t.common.selectBusinessType}</option>
                    {t.common.businessTypes.map((type: string) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <Send size={14} className="rotate-90" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">{t.contact.message}</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none resize-none font-medium text-slate-900" placeholder={t.common.accountingNeeds}></textarea>
              </div>

              <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold uppercase text-[11px] tracking-[0.3em] hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3">
                {t.contact.send}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
