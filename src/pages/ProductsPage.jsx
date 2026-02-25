import React, { useState, useMemo, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '@/components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AppContext } from '@/context/AppContext';
import PageHeader from '@/components/layout/PageHeader';
import ProductCard from '@/components/products/ProductCard';

const categories = [
    { key: 'all', name: 'Tüm Ürünler' },
    { key: 'yem-karma', name: 'Yem Karma Makineleri' },
    { key: 'baskuller', name: 'Hayvan Baskülleri' },
    { key: 'otomatik-kasagi', name: 'Otomatik Kaşağılar' },
];

const ProductsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
    const { products } = useContext(AppContext);

    const filteredProducts = useMemo(() => {
        if (activeCategory === 'all') return products;
        return products.filter(p => p.category === activeCategory);
    }, [activeCategory, products]);
    
    const handleCategoryChange = (categoryKey) => {
        setActiveCategory(categoryKey);
        setSearchParams(categoryKey === 'all' ? {} : { category: categoryKey });
    };

    return (
        <PageTransition>
            <Helmet>
                <title>Konya Yem Karma Makinesi ve Tüm Ürünlerimiz | Toklu Tarım</title>
                <meta name="description" content="Konya'da üretilen Toklu Tarım (Toklu Agro) yem karma makineleri, hayvan baskülleri ve otomatik kaşağılar gibi yüksek kaliteli ve dayanıklı tarım makinelerimizi inceleyin." />
                <meta property="og:title" content="Konya Yem Karma Makinesi ve Diğer Tarım Ekipmanları | Toklu Tarım" />
                <meta property="og:description" content="Çiftliğinizin verimini artıracak modern ve güvenilir tarım ekipmanları. Lider üretici Toklu Tarım kalitesiyle tanışın." />
                <meta name="keywords" content="konya yem karma makinesi, toklu tarım ürünler, toklu agro ürünler, yem karma makinesi fiyatları, hayvan baskülü, otomatik hayvan kaşağı" />
                <link rel="canonical" href="https://www.toklutarim.com/urunler" />
            </Helmet>

            <PageHeader 
                title="Ürünlerimiz"
                subtitle="Verimliliğiniz İçin Tasarlanan, Dayanıklılıkla Üretilen Çözümler"
            />
            <h1 className="sr-only">Konya Yem Karma Makinesi ve Diğer Ürünlerimiz</h1>

            <div className="py-16 sm:py-24">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center flex-wrap gap-2 mb-12">
                        {categories.map(cat => (
                            <Button
                                key={cat.key}
                                variant={activeCategory === cat.key ? 'default' : 'outline'}
                                onClick={() => handleCategoryChange(cat.key)}
                                className="transition-all duration-200"
                            >
                                {cat.name}
                            </Button>
                        ))}
                    </div>

                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence>
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default ProductsPage;