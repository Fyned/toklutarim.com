import React from 'react';
import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const BlogPostFooter = ({ post }) => {
  const { toast } = useToast();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "✅ Bağlantı Kopyalandı!",
      description: "Blog yazısı bağlantısını panoya kopyaladınız.",
    });
  };

  return (
    <footer className="border-t pt-8 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm font-semibold text-secondary">Etiketler:</span>
          {post.tags.map((tag) => (
            <span key={tag} className="text-sm bg-muted text-muted-foreground px-2 py-1 rounded">
              #{tag}
            </span>
          ))}
        </div>
        <Button onClick={handleShare} variant="outline">
          <Share2 className="w-4 h-4 mr-2" />
          Bu Yazıyı Paylaş
        </Button>
      </div>
    </footer>
  );
};

export default BlogPostFooter;