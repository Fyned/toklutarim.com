import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';

const NotFoundPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>404 - Sayfa Bulunamadı</title>
        <meta name="description" content="Aradığınız sayfa bulunamadı. Lütfen ana sayfaya dönün." />
      </Helmet>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-6xl md:text-9xl font-bold text-toklu-blue">404</p>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold text-toklu-gray tracking-tight">Sayfa Bulunamadı</h1>
          <p className="mt-6 text-lg text-gray-600">Üzgünüz, aradığınız sayfayı bulamadık.</p>
          <div className="mt-10">
            <Link to="/">
              <Button size="lg">Ana Sayfaya Dön</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default NotFoundPage;