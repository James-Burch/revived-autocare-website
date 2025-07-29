import React from 'react';
import { Layout, Button } from '../components';
import UnifiedCard from '../components/UnifiedCard'; // Import the new unified card
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  // Product data - you can move this to a separate file later
  const products = [
    {
      title: "Residential Mortgage",
      description: "Standard residential mortgages for home purchases and remortgaging",
      rate: "4.65%",
      bestFor: "Home buyers and those looking to remortgage",
      specs: [
        { label: "Max LTV", value: "95%" },
        { label: "Min. Deposit", value: "5%" },
        { label: "Credit Score", value: "Good" }
      ],
      actions: [
        { label: "Key Benefits", variant: "primary" as const },
        { label: "Get Quote", variant: "outline" as const, linkTo: "/contact" }
      ]
    },
    {
      title: "First Time Buyer",
      description: "Specialist mortgages and government schemes for first-time buyers",
      rate: "4.89%",
      bestFor: "Those buying their first home",
      specs: [
        { label: "Max LTV", value: "95%" },
        { label: "Min. Deposit", value: "5%" },
        { label: "Credit Score", value: "Fair to Good" }
      ],
      actions: [
        { label: "Key Benefits", variant: "primary" as const },
        { label: "Get Quote", variant: "outline" as const, linkTo: "/contact" }
      ]
    },
    {
      title: "Buy-to-Let Mortgage",
      description: "Specialist financing for property investors with competitive rates and flexible terms",
      rate: "5.25%",
      bestFor: "Property investors and landlords",
      specs: [
        { label: "Max LTV", value: "75%" },
        { label: "Min. Deposit", value: "25%" },
        { label: "Credit Score", value: "Good to Excellent" }
      ],
      actions: [
        { label: "Key Benefits", variant: "primary" as const },
        { label: "Get Quote", variant: "outline" as const, linkTo: "/contact" }
      ]
    },
    {
      title: "Self-Employed Mortgage",
      description: "Flexible mortgage solutions for contractors, freelancers, and business owners",
      rate: "4.95%",
      bestFor: "Self-employed and contractors",
      specs: [
        { label: "Max LTV", value: "85%" },
        { label: "Min. Deposit", value: "15%" },
        { label: "Credit Score", value: "Good" }
      ],
      actions: [
        { label: "Key Benefits", variant: "primary" as const },
        { label: "Get Quote", variant: "outline" as const, linkTo: "/contact" }
      ]
    }
  ];

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

        {/* Products Grid */}
        <section className="products-grid-section">
          <div className="container">
            <div className="products-grid">
              {products.map((product, index) => (
                <UnifiedCard
                  key={index}
                  variant="product"
                  title={product.title}
                  description={product.description}
                  rate={product.rate}
                  bestFor={product.bestFor}
                  specs={product.specs}
                  actions={product.actions}
                  animated={true}
                />
              ))}
            </div>
          </div>
        </section>

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