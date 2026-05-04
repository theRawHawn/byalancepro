import { Shield, Languages, CheckCircle, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const featureIcons = [Shield, Languages, CheckCircle, TrendingUp];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{t.features.title}</h2>
          <p className="text-zinc-600 text-lg">{t.features.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.items.map((feature: any, index: number) => {
            const Icon = featureIcons[index] || CheckCircle;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-professional p-8 group overflow-hidden relative flex flex-col items-center text-center"
              >
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                  <Icon size={80} />
                </div>
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 shadow-sm border border-indigo-100/50 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{feature.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
