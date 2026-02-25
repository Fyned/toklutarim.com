import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const NewsletterCTA = () => {
  const { toast } = useToast();

  const handleSubscription = (e) => {
    e.preventDefault();
    toast({
      title: "✅ Abonelik Başarılı!",
      description: "Yeniliklerden ilk siz haberdar olacaksınız. Teşekkürler!",
    });
    e.target.reset();
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-toklu-blue to-toklu-blue-dark text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Daha Fazla İçerik İster misiniz?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Hayvancılık ve tarım makineleri hakkında güncel bilgileri ve özel teklifleri e-posta ile alın.
          </p>
          <form onSubmit={handleSubscription} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 text-foreground"
              required
            />
            <Button type="submit" variant="secondary" className="bg-white text-primary hover:bg-muted">
              Abone Ol
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterCTA;