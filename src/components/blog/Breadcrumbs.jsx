import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ title }) => {
  return (
    <section className="py-4 bg-muted/50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Ana Sayfa</Link>
          <span className="text-muted-foreground/50">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="text-muted-foreground/50">/</span>
          <span className="text-foreground truncate">{title}</span>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumbs;