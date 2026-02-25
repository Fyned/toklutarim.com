import React from 'react';
import { Calendar, User, Clock, Share2, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const BlogPostHeader = ({ post }) => {
  const { toast } = useToast();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "✅ Bağlantı Kopyalandı!",
      description: "Blog yazısı bağlantısını panoya kopyaladınız.",
    });
  };

  return (
    <header className="mb-8">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1.5" />
          <span>{new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div className="flex items-center">
          <User className="w-4 h-4 mr-1.5" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1.5" />
          <span>{post.readTime} okuma</span>
        </div>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4 leading-tight">{post.title}</h1>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map((tag) => (
          <span key={tag} className="inline-flex items-center text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full">
            <Tag className="w-3 h-3 mr-1.5" />
            {tag}
          </span>
        ))}
      </div>
    </header>
  );
};

export default BlogPostHeader;