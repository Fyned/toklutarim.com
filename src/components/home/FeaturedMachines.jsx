import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '@/context/AppContext';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedMachines = () => {
  const { products } = useContext(AppContext);

  const featuredSlugs = ['yem-karma-1m3', 'yem-karma-1-5m3-eco', 'otomatik-kasagi'];
  
  const featuredMachines = featuredSlugs.map(slug => 
    products.find(p => p.slug === slug)
  ).filter(Boolean);

  return (
    <section className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">Öne Çıkan Makinelerimiz</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Türkiye genelinde çiftçilerimizin en çok tercih ettiği, performansı ve dayanıklılığı ile kendini kanıtlamış Toklu Tarım çözümleri.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredMachines.map((machine, index) => (
            <motion.div 
              key={machine.slug} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            >
              <ProductCard product={machine} />
            </motion.div>
          ))}
        </div>
         <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-center mt-16"
        >
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/80 text-white">
                <Link to="/konya-yem-karma-makinesi">
                    Tüm Yem Karma Makinesi Modellerini Gör
                    <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
            </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedMachines;