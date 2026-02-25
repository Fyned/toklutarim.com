import React, { createContext, useState, useCallback } from 'react';
import { productsData as initialProductsData } from '@/data/productsData';

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState('');
  const [products, setProducts] = useState(initialProductsData);

  const openQuoteModal = useCallback((productName = '') => {
    setQuoteProduct(productName);
    setIsQuoteModalOpen(true);
  }, []);

  const closeQuoteModal = useCallback(() => {
    setIsQuoteModalOpen(false);
    setQuoteProduct('');
  }, []);

  const value = {
    isQuoteModalOpen,
    quoteProduct,
    openQuoteModal,
    closeQuoteModal,
    products,
    setProducts,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};