import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AppContext } from '@/context/AppContext';
import { cn } from '@/lib/utils';
import { images } from '@/assets/images';

const navLinks = [
  { name: 'Ana Sayfa', path: '/' },
  { name: 'Hakkımızda', path: '/hakkimizda' },
  { 
    name: 'Ürünler', 
    path: '/urunler',
    submenu: [
      { name: 'Tüm Ürünler', path: '/urunler' },
      { name: 'Yem Karma Makineleri', path: '/urunler?category=yem-karma' },
      { name: 'Basküller', path: '/urunler?category=baskuller' },
      { name: 'Otomatik Kaşağı', path: '/urunler?category=otomatik-kasagi' },
    ]
  },
  { name: 'Teknik Bilgiler', path: '/teknik-dokumanlar' },
  { name: 'İletişim', path: '/iletisim' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { openQuoteModal } = useContext(AppContext);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" },
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl shadow-lg shadow-black/[0.03]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: 'spring' }} className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={images.logoHeader} alt="Toklu Tarım (Toklu Agro) Yem Karma Makinesi Üreticisi Logosu" className="h-20 w-auto" width="205" height="80" />
            </Link>
          </motion.div>
          <nav className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link, i) => (
              <motion.div 
                key={link.name} 
                className="relative" 
                onMouseEnter={() => link.submenu && setOpenDropdown(link.name)} 
                onMouseLeave={() => link.submenu && setOpenDropdown(null)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) => 
                    cn(
                      'flex items-center text-base font-medium transition-all duration-300 rounded-full px-4 py-3',
                      isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-accent/50'
                    )
                  }
                  end={link.path === '/urunler'}
                >
                  {link.name}
                  {link.submenu && <ChevronDown className="w-4 h-4 ml-1" />}
                </NavLink>
                <AnimatePresence>
                {link.submenu && openDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-0 mt-2 w-64 origin-top-left rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5"
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          to={sublink.path}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-primary"
                          role="menuitem"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
                </AnimatePresence>
              </motion.div>
            ))}
          </nav>
          <div className="hidden lg:block">
             <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
              <Button onClick={() => openQuoteModal()} className="bg-gradient-to-r from-toklu-blue to-toklu-blue-dark text-white">
                Teklif Al
              </Button>
            </motion.div>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-background/95 backdrop-blur-sm"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                 <div key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={() => {
                        if (!link.submenu) setIsOpen(false);
                    }}
                    className={({ isActive }) => `block px-3 py-3 rounded-md text-base font-medium ${isActive && !link.submenu ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-accent'}`}
                  >
                    {link.name}
                  </NavLink>
                  {link.submenu && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.submenu.map((sublink) => (
                        <NavLink
                          key={sublink.name}
                          to={sublink.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-accent"
                        >
                          {sublink.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="p-4">
                <Button onClick={() => { openQuoteModal(); setIsOpen(false); }} className="w-full bg-gradient-to-r from-toklu-blue to-toklu-blue-dark text-white">
                  Teklif Al
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;