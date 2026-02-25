import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { relatedPosts } from '@/data/blogData';
import PageTransition from '@/components/PageTransition';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostBody from '@/components/blog/BlogPostBody';
import BlogPostFooter from '@/components/blog/BlogPostFooter';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedPosts from '@/components/blog/RelatedPosts';
import NewsletterCTA from '@/components/blog/NewsletterCTA';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        // Dinamik import ile ilgili blog yazısını yüklüyoruz.
        const postModule = await import(`../../data/blog/${slug}.js`);
        setPost(postModule.post);
        setError(false);
      } catch (err) {
        console.error("Blog post could not be loaded:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    
    loadPost();
  }, [slug]);

  if (loading) {
     return (
      <div className="flex justify-center items-center h-screen bg-background">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (error || !post) {
    return <Navigate to="/404" replace />;
  }
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faq ? post.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    })) : []
  };

  return (
    <PageTransition>
      <Helmet>
        <title>{`${post.title} | Toklu Tarım Blog`}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} | Toklu Tarım Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.toklutarim.com/blog/${slug}`} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        {post.tags.map(tag => (
          <meta property="article:tag" content={tag} key={tag} />
        ))}
        <meta name="keywords" content={`toklu tarım, toklu agro, ${post.tags.join(', ')}`} />
        <link rel="canonical" href={`https://www.toklutarim.com/blog/${slug}`} />
        {post.faq && post.faq.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      <Breadcrumbs title={post.title} />

      <article className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <BlogPostHeader post={post} />
            <BlogPostBody post={post} />
            <BlogPostFooter post={post} />
          </motion.div>
        </div>
      </article>

      <AuthorBio author={post.author} />
      <RelatedPosts relatedPosts={relatedPosts} currentSlug={slug} />
      <NewsletterCTA />
    </PageTransition>
  );
};

export default BlogPostPage;