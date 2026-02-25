import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
          <h1 className="text-3xl font-bold text-secondary mb-4">Bir Hata Oluştu</h1>
          <p className="text-muted-foreground mb-6 text-center max-w-md">
            Sayfa yüklenirken beklenmedik bir hata meydana geldi. Lütfen sayfayı yenileyin veya ana sayfaya dönün.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Sayfayı Yenile
            </button>
            <a
              href="/"
              className="px-6 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
            >
              Ana Sayfaya Dön
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
