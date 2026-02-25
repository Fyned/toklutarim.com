import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuoteRequest = () => {
    toast({
      title: "🚧 Bu özellik henüz uygulanmadı",
      description: "Endişelenmeyin! Bir sonraki istekte talep edebilirsiniz! 🚀"
    });
  };

  const navigation = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { 
      name: 'Ürünler', 
      href: '/urunler',
      submenu: [
        { name: 'Yem Karma Makineleri', href: '/urunler?kategori=yem-karma' },
        { name: 'Basküller', href: '/urunler?kategori=baskul' },
        { name: 'Otomatik Kaşağı', href: '/urunler?kategori=otomatik-kasagi' }
      ]
    },
    { name: 'Teknik Dökümanlar', href: '/teknik-dokumanlar' },
    { name: 'Referanslar', href: '/referanslar' },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/iletisim' }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gray-900 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+905545069499" className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
              <Phone className="w-3 h-3" />
              <span>+90 554 506 94 99</span>
            </a>
            <a href="mailto:tokluagro@gmail.com" className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
              <Mail className="w-3 h-3" />
              <span>tokluagro@gmail.com</span>
            </a>
          </div>
          <div className="hidden md:block text-xs">
            Konya / Türkiye
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 toklu-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div>
                <div className="font-bold text-xl text-gray-900">Toklu Tarım</div>
                <div className="text-xs text-gray-600">Güvenilir Çözümler</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsProductsOpen(true)}
                      onMouseLeave={() => setIsProductsOpen(false)}
                    >
                      <Link
                        to={item.href}
                        className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          location.pathname === item.href || location.pathname.startsWith('/urun')
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </Link>
                      <AnimatePresence>
                        {isProductsOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border py-2 z-50"
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        location.pathname === item.href
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button onClick={handleQuoteRequest} className="toklu-gradient text-white hover:opacity-90">
                Teklif Al
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        location.pathname === item.href
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <Button onClick={handleQuoteRequest} className="w-full toklu-gradient text-white">
                    Teklif Al
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;