import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
const ProductionAndRDE = () => {
  return <section className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7,
          ease: 'easeOut'
        }}>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Üretimde Kalite, Ar-Ge'de İnovasyon</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Kalite, Toklu Tarım üretim felsefesinin temel taşıdır. En zorlu şartlara yıllarca dayanacak makineler üretmek için en iyi malzemeleri seçiyor, sürekli Ar-Ge ve inovasyon çalışmalarıyla tasarımlarımızı geleceğe taşıyoruz. Her bir makine, atölyemizden çıkmadan önce titiz kalite kontrol süreçlerinden geçer.
            </p>
            <ul className="mt-6 space-y-4 text-foreground">
              <li className="flex items-center"><ShieldCheck className="w-6 h-6 mr-4 text-primary" /> <strong>Gövde ve Taban Sacı:</strong> Sektör standardının üzerinde, 3mm gövde ve 5mm taban sacı kullanımı.</li>
              <li className="flex items-center"><ShieldCheck className="w-6 h-6 mr-4 text-primary" /> <strong>Kesici Bıçaklar:</strong> Yüksek dayanımlı, özel ısıl işlem görmüş ST52 çelik bıçaklar.</li>
              <li className="flex items-center"><ShieldCheck className="w-6 h-6 mr-4 text-primary" /> <strong>Verimli Teknoloji:</strong> Düşük enerji tüketimi sağlayan inverter teknolojisi ve güçlü şanzıman seçenekleri.</li>
            </ul>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7,
            delay: 0.2
          }}>
              <img alt="Toklu Tarım Konya fabrikasında çalışan bir kaynak ustası" className="rounded-lg shadow-xl w-full h-full object-cover" src="/images/rde/rde-1.png" />
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7,
            delay: 0.4
          }}>
              <img alt="Toklu Tarım montaj hattında son kontrolleri yapılan bir yem karma makinesi" className="rounded-lg shadow-xl w-full h-full object-cover mt-8" src="/images/rde/rde-2.png" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProductionAndRDE;