import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { images } from '@/assets/images';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/toklutarim', name: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/toklutarim', name: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/toklutarim', name: 'Youtube' },
  ];

  const quickLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'Ürünler', path: '/urunler' },
    { name: 'Katalog', path: '/katalog' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  return (
    <footer className="bg-footer text-footer-foreground border-t-4 border-primary relative overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full h-full bg-footer-animated"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-12">

          <div className="space-y-4 col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2">
            <Link to="/">
              <img src={images.logoFooter} alt="Toklu Tarım Konya Yem Karma Makinesi Footer Logosu" className="h-20 w-auto mb-4" width="205" height="80" />
            </Link>
            <p className="text-white font-body max-w-sm">
              Toklu Tarım, dayanıklı, verimli ve servis dostu tarım makineleri ile gücünüze güç katıyor. Konya'dan tüm Türkiye'ye hizmet veriyoruz.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors duration-300 bg-white/10 p-2 rounded-full">
                  <link.icon size={20} />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-start-3 xl:col-start-3">
            <h3 className="text-lg font-semibold font-heading mb-4 text-white">Hızlı Erişim</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white hover:text-primary transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="xl:col-span-2">
            <h3 className="text-lg font-semibold font-heading mb-4 text-white">İletişim</h3>
            <div className="space-y-4">
              <div className="flex items-start text-white">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-primary" />
                <span>Tatlıcak Mah. Konya Ereğli Cad. No:17CA, 42100 Karatay/Konya</span>
              </div>
              <a href="mailto:tokluagro@gmail.com" className="flex items-center text-white hover:text-primary transition-colors duration-200 group">
                <Mail className="w-5 h-5 mr-3 text-primary group-hover:animate-pulse" />
                <span>tokluagro@gmail.com</span>
              </a>
              <a href="tel:+905545069499" className="flex items-center text-white hover:text-primary transition-colors duration-200 group">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <span>+90 554 506 94 99</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-sm text-white">
          <p>&copy; {new Date().getFullYear()} Toklu Tarım Mak. San. Tic. Ltd. Şti. Tüm Hakları Saklıdır.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link to="/kvkk" className="hover:text-primary">KVKK</Link>
            <Link to="/cerez-politikasi" className="hover:text-primary">Çerez Politikası</Link>
          </div>
        </div>
        <div className="text-center text-xs text-white/70 mt-4">
          <span>Web Tasarım: </span>
          <a href="https://dmckreatif.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">DMC Kreatif</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
