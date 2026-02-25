import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import { productsData } from '@/data/productsData';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const CategorySection = ({ title, products }) => (
    <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
    >
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 border-b-2 border-primary pb-4">{title}</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
            {products.map((product) => (
                 <AccordionItem value={`item-${product.id}`} key={product.id} className="border rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
                    <AccordionTrigger className="p-6 text-xl font-semibold text-primary hover:no-underline">
                        {product.name}
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0">
                        <div className="overflow-x-auto rounded-lg border">
                            <Table>
                                <TableBody>
                                    {product.specs.map((spec, specIndex) => (
                                        <TableRow key={specIndex} className={specIndex % 2 === 0 ? 'bg-muted/40' : ''}>
                                            <TableCell className="font-semibold text-secondary w-1/2">{spec.label}</TableCell>
                                            <TableCell>{spec.value}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    </motion.section>
);

const TechnicalDocsPage = () => {
    const yemKarmaProducts = productsData.filter(p => p.category === 'yem-karma');
    const baskulProducts = productsData.filter(p => p.category === 'baskuller');
    const kasagiProducts = productsData.filter(p => p.category === 'otomatik-kasagi');

    return (
        <PageTransition>
            <Helmet>
                <title>Teknik Dökümanlar | Toklu Tarım (Toklu Agro) Makineleri</title>
                <meta name="description" content="Toklu Tarım makinelerine ait detaylı teknik özellikler. Yem karma makineleri, basküller ve otomatik kaşağı ürünlerimizin tüm teknik bilgilerine buradan ulaşın." />
                <meta property="og:title" content="Teknik Dökümanlar | Toklu Tarım (Toklu Agro) Makineleri" />
                <meta property="og:description" content="Toklu Tarım ürünlerinin detaylı teknik özelliklerini ve karşılaştırmalarını inceleyin." />
                <meta name="keywords" content="toklu tarım teknik, toklu agro teknik, yem karma makinesi özellikleri, hayvan baskülü teknik, otomatik kaşağı özellikleri" />
                <link rel="canonical" href="https://www.toklutarim.com/teknik-dokumanlar" />
            </Helmet>
            
            <PageHeader 
              title="Teknik Dökümanlar"
              subtitle="Tüm Toklu Tarım ürünlerinin detaylı teknik özelliklerini burada bulabilirsiniz."
            />
            <h1 className="sr-only">Toklu Tarım Makineleri Teknik Dökümanları</h1>

            <div className="py-16 sm:py-24">
                <div className="container mx-auto px-4">
                    {yemKarmaProducts.length > 0 && (
                        <CategorySection title="Yem Karma Makineleri" products={yemKarmaProducts} />
                    )}
                    {baskulProducts.length > 0 && (
                        <CategorySection title="Hayvan Baskülleri" products={baskulProducts} />
                    )}
                    {kasagiProducts.length > 0 && (
                        <CategorySection title="Otomatik Hayvan Kaşağısı" products={kasagiProducts} />
                    )}
                </div>
            </div>
        </PageTransition>
    );
};

export default TechnicalDocsPage;