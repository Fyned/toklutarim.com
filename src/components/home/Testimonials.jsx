import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    quote: "Toklu Tarım makinesi sayesinde işlerimiz çok kolaylaştı. Sağlam ve güvenilir.",
    author: "- Ahmet Yılmaz, Konya",
    alt: "Memnun müşteri Ahmet Yılmaz",
    image: "/images/testimonials/person-1.jpg"
  },
  {
    quote: "Servis desteği harika. Herhangi bir sorunda anında çözüm buluyorlar.",
    author: "- Ayşe Kaya, Afyon",
    alt: "Memnun müşteri Ayşe Kaya",
    image: "/images/testimonials/person-1.jpg"
  },
  {
    quote: "Fiyat-performans olarak piyasanın en iyisi. Kesinlikle tavsiye ederim.",
    author: "- Mustafa Öztürk, Erzurum",
    alt: "Memnun müşteri Mustafa Öztürk",
    image: "/images/testimonials/person-2.jpg"
  }
];

const Testimonials = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">Referanslarımız</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Türkiye'nin dört bir yanındaki mutlu müşterilerimiz.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-center items-center p-8 text-center bg-background">
              <img alt={testimonial.alt} className="w-24 h-24 rounded-full mb-4 object-cover ring-4 ring-primary/20" src={testimonial.image} />
              <p className="text-muted-foreground italic text-base">"{testimonial.quote}"</p>
              <p className="font-semibold mt-4 text-secondary">{testimonial.author}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
