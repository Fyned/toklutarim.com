import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { blogPosts } from '@/data/blogData';
import PageHeader from '@/components/layout/PageHeader';
import { images } from '@/assets/images';
import NewsletterCTA from '@/components/blog/NewsletterCTA';

const BlogPage = () => {
    return (
        <PageTransition>
            <Helmet>
                <title>Toklu Tarım Blog | Sektörel Bilgi ve Tarım İpuçları</title>
                <meta name="description" content="Tarım ve hayvancılık sektöründeki son gelişmeler, verimlilik ipuçları ve makine bakımı hakkında uzman görüşleri. Toklu Tarım (Toklu Agro) blogu ile rakiplerinizden bir adım önde olun." />
                <meta property="og:title" content="Toklu Tarım Blog | Sektörel Bilgi ve Tarım İpuçları" />
                <meta property="og:description" content="Yem karma, hayvan refahı, makine bakımı ve çiftlik yönetimi hakkında Toklu Tarım uzmanlarının hazırladığı en güncel ve faydalı bilgilere blogumuzdan ulaşın." />
                <meta name="keywords" content="tarım blog, hayvancılık blog, yem karma ipuçları, toklu tarım blog, toklu agro blog, çiftlik yönetimi" />
                <link rel="canonical" href="https://www.toklutarim.com/blog" />
            </Helmet>
            
            <PageHeader 
                title="Toklu Tarım Blog"
                subtitle="Sektörden Haberler, İpuçları ve Uzman Görüşleri"
            />
            <h1 className="sr-only">Toklu Tarım Blog - Tarım ve Hayvancılık Yazıları</h1>

            <div className="py-16 sm:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date)).map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="overflow-hidden group h-full flex flex-col">
                                    <CardHeader className="p-0">
                                        <Link to={`/blog/${post.slug}`}>
                                            <div className="overflow-hidden">
                                                <img loading="lazy" alt={post.alt} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" src={post.image || images.blogDefault} width="400" height="224" />
                                            </div>
                                        </Link>
                                    </CardHeader>
                                    <CardContent className="p-6 flex-grow">
                                        <div className="flex items-center text-sm text-muted-foreground mb-2 space-x-4">
                                            <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {post.author}</span>
                                            <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {new Date(post.date).toLocaleDateString('tr-TR')}</span>
                                        </div>
                                        <h2 className="text-xl font-semibold mb-2">
                                            <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                                                {post.title}
                                            </Link>
                                        </h2>
                                        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                                    </CardContent>
                                    <CardFooter className="p-6 pt-0 mt-auto">
                                        <Link to={`/blog/${post.slug}`} className="text-primary font-semibold flex items-center group-hover:underline">
                                            Devamını Oku <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <NewsletterCTA />
        </PageTransition>
    );
};

export default BlogPage;