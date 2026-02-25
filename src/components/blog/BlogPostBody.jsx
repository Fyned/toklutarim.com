import React from 'react';
import { images } from '@/assets/images';

const BlogPostBody = ({ post }) => {
  return (
    <>
      <div className="mb-8">
        <img
          alt={post.alt}
          className="w-full h-auto max-h-[450px] object-cover rounded-lg shadow-lg"
          src={post.image || images.blogDefault} 
        />
      </div>
      <div
        className="prose prose-lg max-w-none prose-p:text-foreground prose-h2:text-secondary prose-h3:text-secondary prose-strong:text-secondary prose-a:text-primary hover:prose-a:text-primary/80 prose-blockquote:border-primary prose-li:marker:text-primary"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </>
  );
};

export default BlogPostBody;