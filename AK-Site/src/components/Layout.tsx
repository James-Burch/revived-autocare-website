import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SEOHead from './SEOHead';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  serviceType?: string;
  city?: string;
  noindex?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  keywords,
  canonical,
  serviceType,
  city,
  noindex = false
}) => {
  return (
    <div className="layout">
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        canonical={canonical}
        serviceType={serviceType}
        city={city}
        noindex={noindex}
      />
      <Header />
      <main className="main-content" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;