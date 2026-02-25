import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Wrench, Truck } from 'lucide-react';

const whyUsItems = [
  { icon: ShieldCheck, text: 'Dayanıklı Gövde, Uzun Ömür' },
  { icon: Zap, text: 'Hızlı ve Garantili Yedek Parça' },
  { icon: Wrench, text: '7/24 Teknik Destek ve Servis' },
  { icon: Truck, text: 'Türkiye Geneli Kurulum ve Montaj' }
];

const WhyUs = () => {
  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">Neden Toklu Tarım'ı Seçmelisiniz?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Bizi rakiplerimizden ayıran, sadece ürettiğimiz makine değil; kaliteye, güvene ve çiftçimize verdiğimiz değere dayalı Toklu Tarım üretim anlayışımızdır.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {whyUsItems.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: index * 0.15, type: 'spring' }} 
              className="flex flex-col items-center p-6 bg-background rounded-lg shadow-sm border"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }} 
                transition={{ type: 'spring', stiffness: 300 }} 
                className="bg-primary/10 p-5 rounded-full mb-4"
              >
                <item.icon className="w-10 h-10 text-primary" />
              </motion.div>
              <p className="font-semibold text-lg text-secondary">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;