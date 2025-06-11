import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  showHeader = true,
  showFooter = true,
  className = ""
}) => {
  return (
    <div className={`layout ${className}`}>
      {showHeader && <Header title={title} />}
      <main className="layout-main">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
