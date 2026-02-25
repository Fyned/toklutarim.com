import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = () => {
    toast({
      title: "🚧 Bu özellik henüz uygulanmadı",
      description: "Endişelenmeyin! Bir sonraki istekte talep edebilirsiniz! 🚀"
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 toklu-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <div>
                <span className="font-bold text-lg">Toklu Tarım</span>
                <p className="text-sm text-gray-400">Güvenilir Çözümler</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Yem karma ve hayvancılık ekipmanlarında dayanıklı, servis dostu çözümler sunuyoruz. 
              Kaliteli üretim ve müşteri memnuniyeti önceliğimizdir.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="font-semibold text-lg">Hızlı Linkler</span>
            <nav className="space-y-2">
              <Link to="/hakkimizda" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Hakkımızda
              </Link>
              <Link to="/urunler" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Ürünler
              </Link>
              <Link to="/teknik-dokumanlar" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Teknik Dökümanlar
              </Link>
              <Link to="/referanslar" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Referanslar
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Blog
              </Link>
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <span className="font-semibold text-lg">Ürünlerimiz</span>
            <nav className="space-y-2">
              <Link to="/urunler?kategori=yem-karma" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Yem Karma Makineleri
              </Link>
              <Link to="/urunler?kategori=baskul" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Basküller
              </Link>
              <Link to="/urunler?kategori=otomatik-kasagi" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Otomatik Kaşağı
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <span className="font-semibold text-lg">İletişim</span>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Tatlıcak Mah. Konya Ereğli Cad.</p>
                  <p>No:17CA Karatay / KONYA</p>
                </div>
              </div>
              <a href="tel:+905545069499" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-sm">+90 554 506 94 99</span>
              </a>
              <a href="mailto:tokluagro@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-sm">tokluagro@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>&copy; 2024 Toklu Tarım Mak. San. Tic. Ltd. Şti. Tüm hakları saklıdır.</p>
              <div className="flex space-x-4">
                <button onClick={handleSocialClick} className="hover:text-blue-400 transition-colors">
                  KVKK
                </button>
                <button onClick={handleSocialClick} className="hover:text-blue-400 transition-colors">
                  Çerez Politikası
                </button>
              </div>
            </div>
            <div className="flex space-x-4">
              <button onClick={handleSocialClick} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button onClick={handleSocialClick} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button onClick={handleSocialClick} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;