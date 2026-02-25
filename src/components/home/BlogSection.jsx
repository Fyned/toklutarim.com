import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blogData';
import { images } from '@/assets/images';

const BlogSection = () => {
  const latestPosts = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">Blog'dan Son Yazılar</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Sektörden haberler, verimlilik ipuçları ve teknolojik yenilikler.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <motion.div 
              key={post.id} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            >
              <Card className="overflow-hidden group h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <Link to={`/blog/${post.slug}`}>
                    <div className="overflow-hidden rounded-t-lg">
                      <img alt={post.alt} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" src={post.image || images.blogDefault} />
                    </div>
                  </Link>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                     <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0 mt-auto">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-primary font-semibold flex items-center group-hover:underline"
                  >
                    Devamını Oku <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;