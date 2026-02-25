import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuoteModal from '@/components/QuoteModal';
import ErrorBoundary from '@/components/ErrorBoundary';
import CookieBanner from '@/components/CookieBanner';

const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ProductsPage = lazy(() => import('@/pages/ProductsPage'));
const ProductDetailPage = lazy(() => import('@/pages/ProductDetailPage'));
const TechnicalDocsPage = lazy(() => import('@/pages/TechnicalDocsPage'));
const TechnicalCatalogPage = lazy(() => import('@/pages/TechnicalCatalogPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const KVKKPage = lazy(() => import('@/pages/KVKKPage'));
const CookiePolicyPage = lazy(() => import('@/pages/CookiePolicyPage'));
const ReferencesPage = lazy(() => import('@/pages/ReferencesPage'));


const LoadingFallback = () => (
  <div className="flex justify-center items-center h-screen bg-background">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  const location = useLocation();

  return (
    <ErrorBoundary>
    <HelmetProvider>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded">
          Ana içeriğe atla
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/hakkimizda" element={<AboutPage />} />
                <Route path="/urunler" element={<ProductsPage />} />
                <Route path="/urunler/:slug" element={<ProductDetailPage />} />
                <Route path="/teknik-dokumanlar" element={<TechnicalDocsPage />} />
                <Route path="/katalog" element={<TechnicalCatalogPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/iletisim" element={<ContactPage />} />
                <Route path="/kvkk" element={<KVKKPage />} />
                <Route path="/cerez-politikasi" element={<CookiePolicyPage />} />
                <Route path="/referanslar" element={<ReferencesPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        <Footer />
        <QuoteModal />
        <CookieBanner />
      </div>
    </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;