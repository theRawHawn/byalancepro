import { motion } from 'motion/react';
import { Handshake, TrendingUp, Clock, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { icon: Handshake, title: t.about.stats.trusted, text: t.about.stats.trustedText },
    { icon: TrendingUp, title: t.about.stats.growth, text: t.about.stats.growthText },
    { icon: Clock, title: t.about.stats.timely, text: t.about.stats.timelyText },
  ];

  return (
    <section id="about" className="py-24 overflow-hidden bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8">{t.about.title}</h3>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium mb-12">
              <p>
                {t.about.p1}
              </p>
              <p>
                {t.about.p2}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-indigo-50/50 py-8 px-10 rounded-3xl relative overflow-hidden group border border-indigo-100/50"
            >
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{t.about.missionBadge}</h4>
                <p className="text-slate-600 text-lg italic leading-relaxed">
                  {t.about.missionText}
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200"
          >
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" 
              alt="Byalance Professional Compliance"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-900/5 hover:bg-slate-900/0 transition-colors duration-500" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-12 border-t border-slate-100">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6 text-indigo-600 transition-transform duration-300 group-hover:scale-110">
                <stat.icon size={56} strokeWidth={1.2} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-slate-900">{stat.title}</h3>
              <p className="text-base text-slate-500 leading-relaxed font-medium">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
