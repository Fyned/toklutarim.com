import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, Mail } from 'lucide-react';

const PHONE = '905545069499';
const EMAIL = 'tokluagro@gmail.com';

const ContactCTA = () => {
  return (
    <section className="bg-gradient-to-r from-toklu-blue to-toklu-blue-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">İşinizi Büyütmeye Hazır Mısınız?</h2>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
                Size en uygun Toklu Tarım çözümünü bulmak, ürünlerimiz hakkında detaylı bilgi veya teklif almak için uzman ekibimizle hemen iletişime geçin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white" asChild>
                    <a href={`tel:+${PHONE}`}><Phone className="mr-2 h-5 w-5" /> Hemen Ara</a>
                </Button>
                <Button size="lg" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white" asChild>
                    <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp'tan Yaz
                    </a>
                </Button>
                <Button size="lg" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white" asChild>
                    <a href={`mailto:${EMAIL}`}><Mail className="mr-2 h-5 w-5" /> E-posta Gönder</a>
                </Button>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
