import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { images } from '@/assets/images';

const RelatedPosts = ({ relatedPosts, currentSlug }) => {
  const postsToShow = relatedPosts.filter(p => p.slug !== currentSlug).slice(0, 3);

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">İlginizi Çekebilecek Diğer Yazılar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {postsToShow.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <Link to={`/blog/${post.slug}`}>
                      <img
                        alt={post.alt}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        src={post.image || images.blogDefault}
                      />
                    </Link>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-semibold text-secondary mb-4 flex-grow">
                      <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <Link to={`/blog/${post.slug}`} className="mt-auto">
                      <Button variant="outline" className="w-full">
                        Yazıyı Oku <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedPosts;