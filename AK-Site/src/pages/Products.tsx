import React from 'react';
import { Layout, Button } from '../components';
import ProductsGrid from '../components/ProductsGrid';
import { getFeaturedProducts } from '../data';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  // Get products from centralized data layer
  const featuredProducts = getFeaturedProducts();

  return (
    <Layout title="UK Mortgage Products - Expert Mortgage Solutions">
      <div className="products-page">
        {/* Hero Section */}
        <section className="products-hero">
          <div className="container">
            <div className="products-hero-content">
              <h1>UK Mortgage Products</h1>
              <p>Find the right mortgage product for your unique circumstances</p>
            </div>
          </div>
        </section>

        {/* Products Grid - Now using reusable component */}
        <ProductsGrid products={featuredProducts} />

        {/* CTA Section */}
        <section className="products-cta">
          <div className="container">
            <div className="cta-content">
              <div className="cta-text">
                <h2>Ready to Find Your Perfect Mortgage?</h2>
                <p>Get expert advice on which mortgage product is right for you</p>
                <div className="cta-buttons">
                  <Link to="/contact">
                    <Button variant="primary" size="large">Get Free Advice</Button>
                  </Link>
                  <Button variant="secondary" size="large">Call 0800 123 4567</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Products;