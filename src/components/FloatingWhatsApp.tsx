import { motion } from 'motion/react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/917406296116"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 border-[3px] md:border-4 border-white"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8 text-white" />
    </motion.a>
  );
}
