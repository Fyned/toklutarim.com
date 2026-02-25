import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
    // GA4'u devre disi birak
    window['ga-disable-G-MN7EG1RGXS'] = true;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-card border shadow-lg rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Cookie className="w-8 h-8 text-primary flex-shrink-0 hidden sm:block" />
              <div className="flex-grow">
                <p className="text-sm text-foreground">
                  Deneyiminizi geliştirmek için çerezler kullanıyoruz.{' '}
                  <Link to="/cerez-politikasi" className="text-primary underline hover:text-primary/80">
                    Çerez Politikamızı
                  </Link>{' '}
                  inceleyebilirsiniz.
                </p>
              </div>
              <div className="flex gap-2 flex-shrink-0 w-full sm:w-auto">
                <Button variant="outline" size="sm" onClick={handleReject} className="flex-1 sm:flex-initial">
                  Reddet
                </Button>
                <Button size="sm" onClick={handleAccept} className="flex-1 sm:flex-initial">
                  Kabul Et
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
