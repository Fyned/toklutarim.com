import React from 'react';
import { motion } from 'framer-motion';
import { productsData } from '@/data/productsData';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const CategorySection = ({ title, products, defaultOpen = false }) => (
    <motion.section 
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
    >
        <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6 border-b-2 border-primary pb-3">{title}</h3>
        <Accordion type="single" collapsible className="w-full space-y-4" defaultValue={defaultOpen ? `item-${products[0].id}` : undefined}>
            {products.map((product) => (
                 <AccordionItem value={`item-${product.id}`} key={product.id} className="border rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
                    <AccordionTrigger className="p-6 text-xl font-semibold text-primary hover:no-underline text-left">
                        {product.name}
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0">
                        <div className="overflow-x-auto rounded-lg border">
                            <Table>
                                <TableBody>
                                    {product.specs.slice(0, 5).map((spec, specIndex) => (
                                        <TableRow key={specIndex} className={specIndex % 2 === 0 ? 'bg-muted/40' : ''}>
                                            <TableCell className="font-semibold text-secondary w-1/2">{spec.label}</TableCell>
                                            <TableCell>{spec.value}</TableCell>
                                        </TableRow>
                                    ))}
                                    {product.specs.length > 5 && (
                                      <TableRow>
                                        <TableCell colSpan={2} className="text-center p-3">
                                          <Button asChild variant="link" className="text-primary font-semibold">
                                            <Link to={`/urunler/${product.slug}`}>
                                                Tüm teknik özellikleri ve detayları gör...
                                            </Link>
                                          </Button>
                                        </TableCell>
                                      </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    </motion.section>
);


const TechDocs = () => {
  const yemKarmaProducts = productsData.filter(p => p.category === 'yem-karma').slice(0, 3);
  const baskulProducts = productsData.filter(p => p.category === 'baskuller').slice(0, 1);
  const kasagiProducts = productsData.filter(p => p.category === 'otomatik-kasagi').slice(0, 1);

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">Teknik Bilgiler ve Dökümanlar</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Toklu Tarım makinelerinin temel teknik özelliklerine hızlıca göz atın. Karşılaştırma ve detaylı analiz için tüm dökümanlar sayfamızı ziyaret edin.</p>
        </motion.div>
        
        {yemKarmaProducts.length > 0 && (
            <CategorySection title="Yem Karma Makineleri" products={yemKarmaProducts} defaultOpen={true} />
        )}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            {baskulProducts.length > 0 && (
                <CategorySection title="Hayvan Baskülleri" products={baskulProducts} />
            )}
            {kasagiProducts.length > 0 && (
                <CategorySection title="Otomatik Hayvan Kaşağısı" products={kasagiProducts} />
            )}
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-center mt-16"
        >
            <Button asChild size="lg" className="bg-gradient-to-r from-toklu-blue to-toklu-blue-dark text-white">
                <Link to="/katalog">
                    Genel Ürün Kataloğunu Görüntüle
                    <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
            </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default TechDocs;