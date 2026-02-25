import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const AuthorBio = ({ author }) => {
  const { toast } = useToast();

  const handleShowOtherPosts = () => {
    toast({
      title: "🚧 Bu özellik yakında!",
      description: "Yazara ait diğer yazıları listeleme özelliği üzerinde çalışıyoruz. 🚀",
    });
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-background p-8 rounded-lg shadow-md">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-3xl font-bold">
                {author.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Yazar Hakkında</p>
                <h3 className="text-xl font-bold text-secondary mb-2">{author}</h3>
                <p className="text-foreground mb-4">
                  Toklu Tarım uzmanı olarak hayvancılık sektöründe 15 yılı aşkın deneyime sahiptir. 
                  Yem karma teknolojileri, hayvan beslenmesi ve çiftlik verimliliği konularında uzmanlaşmıştır.
                </p>
                <Button onClick={handleShowOtherPosts} variant="outline" size="sm">
                  Diğer Yazıları
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorBio;