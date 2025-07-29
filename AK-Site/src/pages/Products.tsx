import React from 'react';
import { Layout, Button } from '../components';
import ProductsGrid from '../components/ProductsGrid';
import { getFeaturedProducts } from '../data';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  // Get products from centralized data layer
  const featuredProducts = getFeaturedProducts();

  return (
    <Layout title="UK Mortgage Products - Find Your Perfect Mortgage">
      <div className="products-page">
        {/* Hero Section */}
        <section className="products-hero">
          <div className="container">
            <h1>UK Mortgage Products</h1>
            <p>Find the right mortgage product for your unique circumstances</p>
          </div>
        </section>

        {/* Products Grid - Now using reusable component */}
        <ProductsGrid
          products={featuredProducts}
          showActions={true}
        />

        {/* CTA Section */}
        <section className="products-cta">
          <div className="container">
            <div className="cta-content">
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
        </section>
      </div>
    </Layout>
  );
};

export default Products;