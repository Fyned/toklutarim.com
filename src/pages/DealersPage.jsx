import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/layout/PageHeader';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactCTA from '@/components/home/ContactCTA';

const dealers = [
  // This is a placeholder. Real dealer data would be added here.
  {
    name: 'Merkez Servis - Konya',
    address: 'Tatlıcak Mah. Konya Ereğli Cad. No:17CA, 42100 Karatay/Konya',
    phone: '+90 544 614 02 64',
    email: 'servis@toklutarim.com',
    mapUrl: 'https://maps.google.com/maps?q=37.865365728958764,32.5793755&z=17&output=embed&t=k'
  },
  {
    name: 'Ege Bölge Bayi (Çok Yakında)',
    address: 'İzmir, Türkiye',
    phone: 'Bilinmiyor',
    email: 'Bilinmiyor',
    mapUrl: '#'
  },
  {
    name: 'Marmara Bölge Bayi (Çok Yakında)',
    address: 'Bursa, Türkiye',
    phone: 'Bilinmiyor',
    email: 'Bilinmiyor',
    mapUrl: '#'
  }
];

const DealersPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Bayilerimiz ve Servis Noktalarımız | Toklu Tarım</title>
        <meta name="description" content="Size en yakın Toklu Tarım bayisini ve yetkili servis noktasını bulun. Türkiye genelindeki ağımızla satış ve satış sonrası hizmetlerde yanınızdayız." />
        <meta property="og:title" content="Bayilerimiz ve Servis Noktalarımız | Toklu Tarım Türkiye Ağı" />
        <meta property="og:description" content="Konya merkezli üretim gücümüzü, Türkiye geneline yayılmış bayi ve servis ağımızla birleştiriyoruz. Size en yakın hizmet noktamızı keşfedin." />
        <meta name="keywords" content="toklu tarım bayileri, toklu tarım servis, yem karma makinesi servisi, konya tarım servis, toklu tarım yetkili bayi" />
        <link rel="canonical" href="https://www.toklutarim.com/bayilerimiz" />
      </Helmet>
      
      <PageHeader 
        title="Bayi ve Servis Ağımız"
        subtitle="Türkiye'nin Her Yerinde, Kaliteli Hizmet Anlayışıyla Yanınızdayız."
      />
      <h1 className="sr-only">Toklu Tarım Bayileri ve Yetkili Servis Noktaları</h1>

      <div className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-secondary mb-4">Size Bir Telefon Kadar Yakınız</h2>
            <p className="text-lg text-muted-foreground">
              Toklu Tarım olarak, satış öncesi ve sonrası tüm süreçlerde müşterilerimize en iyi hizmeti sunmayı hedefliyoruz. Aşağıda merkez servis noktamızı ve yakında hizmete girecek olan bölge bayiliklerimizi bulabilirsiniz. Yeni bayilik ve servis noktaları için çalışmalarımız hızla devam etmektedir.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dealers.map((dealer, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-lg shadow-lg overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-3">{dealer.name}</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-secondary" />
                      <span>{dealer.address}</span>
                    </div>
                    {dealer.phone !== 'Bilinmiyor' && (
                       <div className="flex items-start">
                        <Phone className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-secondary" />
                        <a href={`tel:${dealer.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">{dealer.phone}</a>
                      </div>
                    )}
                     {dealer.email !== 'Bilinmiyor' && (
                       <div className="flex items-start">
                        <Mail className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-secondary" />
                        <a href={`mailto:${dealer.email}`} className="hover:text-primary transition-colors">{dealer.email}</a>
                      </div>
                    )}
                  </div>
                </div>
                 {dealer.mapUrl !== '#' && (
                    <div className="h-48 bg-muted">
                        <iframe
                            src={dealer.mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title={`${dealer.name} Harita Konumu`}
                        ></iframe>
                    </div>
                 )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <ContactCTA />
    </PageTransition>
  );
};

export default DealersPage;