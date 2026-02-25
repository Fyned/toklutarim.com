import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { productsData } from '@/data/productsData';
import PageHeader from '@/components/layout/PageHeader';

const CatalogSection = ({ title, children }) => (
    <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
    >
        <h2 className="text-3xl font-bold text-secondary mb-6 border-b-2 border-primary pb-2">{title}</h2>
        {children}
    </motion.section>
);

const TechnicalCatalogPage = () => {
    const yemKarmaProducts = productsData.filter(p => p.category === 'yem-karma');
    const baskulProducts = productsData.filter(p => p.category === 'baskuller');
    const kasagiProducts = productsData.filter(p => p.category === 'otomatik-kasagi');
    
    const renderFlexibleTable = (products, allHeaders) => (
        <div className="overflow-x-auto border rounded-lg">
            <Table>
                <TableHeader>
                    <TableRow className="bg-muted/50 hover:bg-muted/50">
                        <TableHead className="font-semibold">Model</TableHead>
                        {allHeaders.map(header => <TableHead key={header} className="font-semibold text-center">{header}</TableHead>)}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map(product => (
                        <TableRow key={product.id}>
                            <TableCell className="font-medium text-secondary">{product.name}</TableCell>
                            {allHeaders.map(header => {
                                const spec = product.specs.find(s => s.label === header);
                                return <TableCell key={header} className="text-center">{spec ? spec.value : '-'}</TableCell>
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );

    const yemKarmaHeaders = [...new Set(yemKarmaProducts.flatMap(p => p.specs.map(s => s.label)))];
    const baskulHeaders = [...new Set(baskulProducts.flatMap(p => p.specs.map(s => s.label)))];
    const kasagiHeaders = [...new Set(kasagiProducts.flatMap(p => p.specs.map(s => s.label)))];

    return (
        <PageTransition>
            <Helmet>
                <title>Genel Ürün Kataloğu | Tüm Toklu Tarım Makineleri</title>
                <meta name="description" content="Tüm Toklu Tarım ürünlerinin detaylı teknik özelliklerini içeren ve karşılaştırma imkanı sunan genel ürün kataloğu. Yem karma makineleri, basküller ve kaşağılar." />
                <meta property="og:title" content="Genel Ürün Kataloğu | Tüm Toklu Tarım Makineleri" />
                <meta property="og:description" content="Yem karma makineleri, basküller ve otomatik kaşağı ürünlerimizin teknik karşılaştırmalarını ve tüm özelliklerini tek bir sayfada görün." />
                <meta name="keywords" content="toklu tarım katalog, ürün kataloğu, yem karma makinesi karşılaştırma, teknik özellikler, toklu agro katalog" />
                <link rel="canonical" href="https://www.toklutarim.com/katalog" />
            </Helmet>
            
            <PageHeader 
                title="Genel Ürün Kataloğu"
                subtitle="Tüm ürünlerimizin teknik detaylarını karşılaştırmalı olarak inceleyin."
            />
            <h1 className="sr-only">Toklu Tarım Genel Ürün Kataloğu ve Teknik Özellikler</h1>

            <main className="container mx-auto px-4 py-16 sm:py-24">
                <CatalogSection title="Yem Karma Makineleri Karşılaştırma Tablosu">
                    {renderFlexibleTable(yemKarmaProducts, yemKarmaHeaders)}
                </CatalogSection>

                <CatalogSection title="Hayvan Baskülleri Karşılaştırma Tablosu">
                    {renderFlexibleTable(baskulProducts, baskulHeaders)}
                </CatalogSection>
                
                <CatalogSection title="Otomatik Hayvan Kaşağısı Teknik Özellikleri">
                    {renderFlexibleTable(kasagiProducts, kasagiHeaders)}
                </CatalogSection>
            </main>
        </PageTransition>
    );
};

export default TechnicalCatalogPage;