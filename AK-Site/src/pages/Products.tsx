// import React from 'react';
// import { Layout, Card, Button } from '../components';
// import { Link } from 'react-router-dom';

// const Products: React.FC = () => {
//   return (
//     <Layout title="UK Mortgage Products - Find Your Perfect Mortgage">
//       <div className="products-page">
//         {/* Hero Section */}
//         <section className="products-hero">
//           <div className="container">
//             <h1>UK Mortgage Products</h1>
//             <p>Find the right mortgage product for your unique circumstances</p>
//           </div>
//         </section>

//         {/* Products Grid */}
//         <section className="products-grid-section">
//           <div className="container">
//             <div className="products-grid">
//               <Card className="product-card">
//                 <h3>Residential Mortgage</h3>
//                 <p>Standard residential mortgages for home purchases and remortgaging</p>
//                 <div className="product-details">
//                   <div className="best-for">
//                     <strong>Best for:</strong> Home buyers and those looking to remortgage
//                   </div>
//                   <div className="rate-badge">From 4.65%</div>
//                   <div className="product-specs">
//                     <div className="spec-row">
//                       <span>Max LTV:</span>
//                       <span className="spec-value">95%</span>
//                     </div>
//                     <div className="spec-row">
//                       <span>Min. Deposit:</span>
//                       <span className="spec-value">5%</span>
//                     </div>
//                     <div className="spec-row">
//                       <span>Credit Score:</span>
//                       <span className="spec-value">Good</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="product-actions">
//                   <Button variant="primary" size="small">Key Benefits</Button>
//                   <Link to="/contact">
//                     <Button variant="outline" size="small">Get Quote</Button>
//                   </Link>
//                 </div>
//               </Card>

//               <Card className="product-card">
//                 <h3>First Time Buyer</h3>
//                 <p>Specialist mortgages and government schemes for first-time buyers</p>
//                 <div className="product-details">
//                   <div className="best-for">
//                     <strong>Best for:</strong> Those buying their first home
//                   </div>
//                   <div className="rate-badge">From 4.89%</div>
//                   <div className="product-specs">
//                     <div className="spec-row">
//                       <span>Max LTV:</span>
//                       <span className="spec-value">95%</span>
//                     </div>
//                     <div className="spec-row">
//                       <span>Min. Deposit:</span>
//                       <span className="spec-value">5%</span>
//                     </div>
//                     <div className="spec-row">
//                       <span>Credit Score:</span>
//                       <span className="spec-value">Fair to Good</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="product-actions">
//                   <Button variant="primary" size="small">Key Benefits</Button>
//                   <Link to="/contact">
//                     <Button variant="outline" size="small">Get Quote</Button>
//                   </Link>
//                 </div>
//               </Card>

//               <Card className="product-card">
//                 <h3>Buy-to-Let Mortgage</h3>
//                 <p>Specialist financing for property investors with competitive rates and flexible terms</p>
//                 <div className="product-details">
//                   <div className="best-for">
//                     <strong>Best for:</strong> Property investors and landlords
//                   </div>
//                   <div className="rate-badge">From 5.25%</div>
//                   <div className="product-specs">
//                     <div className="spec-row">
//                       <span>Max LTV:</span>
//                       <span className="spec-value">75%</span>
//                     </div>
//                     <div className="spec-row">
//                       <span>Min. Deposit:</span>
//                       <span className="spec-value">25%</span>
//                     </div>
//                     <div className="spec-row">
//                       <span>Credit Score:</span>
//                       <span className="spec-value">Good to Excellent</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="product-actions">
//                   <Button variant="primary" size="small">Key Benefits</Button>
//                   <Link to="/contact">
//                     <Button variant="outline" size="small">Get Quote</Button>
//                   </Link>
//                 </div>
//               </Card>

//               <Card className="product-card">
//                 <h3>Self-Employed Mortgage</h3>
//                 <p>Flexible mortgage solutions for contractors, freelancers, and business owners</p>
//                 <div className="product-details">
//                   <div className="best-for">
//                     <strong>Best for:</strong> Self-employed and contractors
//                   </div>
//                   <div className="rate-badge">From 4.95%</div>
//                   <div className="product-specs">
//                     <div className="spec-row">
//                       <span>Max LTV:</span>
//                       <span className="spec-value">85%</span>
//                     </div>
//                     <div className="spec-row">
//                       <span>Min. Deposit:</span>
//                       <span className="spec-value">15%</span>
//                     </div>
//                     <div className="spec-row">
//                       <span>Credit Score:</span>
//                       <span className="spec-value">Good</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="product-actions">
//                   <Button variant="primary" size="small">Key Benefits</Button>
//                   <Link to="/contact">
//                     <Button variant="outline" size="small">Get Quote</Button>
//                   </Link>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="products-cta">
//           <div className="container">
//             <div className="cta-content">
//               <h2>Ready to Find Your Perfect Mortgage?</h2>
//               <p>Get expert advice on which mortgage product is right for you</p>
//               <div className="cta-buttons">
//                 <Link to="/contact">
//                   <Button variant="primary" size="large">Get Free Advice</Button>
//                 </Link>
//                 <Button variant="secondary" size="large">Call 0800 123 4567</Button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </Layout>
//   );
// };

// export default Products;

import React from 'react';
import { Layout, Card, Button } from '../components';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  const products = [
    {
      id: 'residential',
      title: 'Residential Mortgage',
      description: 'Standard residential mortgages for home purchases and remortgaging',
      bestFor: 'Home buyers and those looking to remortgage',
      rate: 'From 4.65%',
      maxLTV: 95,
      minDeposit: 5,
      creditScore: 'Good'
    },
    {
      id: 'first-time-buyer',
      title: 'First Time Buyer',
      description: 'Specialist mortgages and government schemes for first-time buyers',
      bestFor: 'Those buying their first home',
      rate: 'From 4.89%',
      maxLTV: 95,
      minDeposit: 5,
      creditScore: 'Fair to Good'
    },
    {
      id: 'buy-to-let',
      title: 'Buy-to-Let Mortgage',
      description: 'Specialist financing for property investors with competitive rates and flexible terms',
      bestFor: 'Property investors and landlords',
      rate: 'From 5.25%',
      maxLTV: 75,
      minDeposit: 25,
      creditScore: 'Good to Excellent'
    },
    {
      id: 'self-employed',
      title: 'Self-Employed Mortgage',
      description: 'Flexible mortgage solutions for contractors, freelancers, and business owners',
      bestFor: 'Self-employed and contractors',
      rate: 'From 4.95%',
      maxLTV: 85,
      minDeposit: 15,
      creditScore: 'Good'
    }
  ];

  return (
    <Layout title="UK Mortgage Products - Find Your Perfect Mortgage">
      <div className="products-page page-transition">
        {/* Hero Section */}
        <section className="products-hero scroll-animate fade-up">
          <div className="container">
            <h1>UK Mortgage Products</h1>
            <p>Find the right mortgage product for your unique circumstances</p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="products-grid-section">
          <div className="container">
            <div className="products-grid animate-stagger">
              {products.map((product, index) => (
                <Card
                  key={product.id}
                  className="product-card scroll-animate fade-up card-modern"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <div className="product-details">
                    <div className="best-for">
                      <strong>Best for:</strong> {product.bestFor}
                    </div>
                    <div className="rate-badge">{product.rate}</div>
                    <div className="product-specs">
                      <div className="spec-row">
                        <span>Max LTV:</span>
                        <span className="spec-value">{product.maxLTV}%</span>
                      </div>
                      <div className="spec-row">
                        <span>Min. Deposit:</span>
                        <span className="spec-value">{product.minDeposit}%</span>
                      </div>
                      <div className="spec-row">
                        <span>Credit Score:</span>
                        <span className="spec-value">{product.creditScore}</span>
                      </div>
                    </div>
                  </div>
                  <div className="product-actions">
                    <Button variant="primary" size="small" className="btn-modern hover-lift">
                      Key Benefits
                    </Button>
                    <Link to="/contact">
                      <Button variant="outline" size="small" className="btn-modern hover-grow">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="products-cta scroll-animate fade-up">
          <div className="container">
            <div className="cta-content">
              <h2 className="scroll-animate fade-up">Ready to Find Your Perfect Mortgage?</h2>
              <p className="scroll-animate fade-up" style={{ animationDelay: '0.2s' }}>
                Get expert advice on which mortgage product is right for you
              </p>
              <div className="cta-buttons scroll-animate fade-up" style={{ animationDelay: '0.4s' }}>
                <Link to="/contact">
                  <Button variant="primary" size="large" className="btn-modern hover-lift">
                    Get Free Advice
                  </Button>
                </Link>
                <Button variant="secondary" size="large" className="btn-modern hover-grow">
                  Call 0800 123 4567
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Products;