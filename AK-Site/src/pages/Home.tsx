import React from 'react';
import { Layout, Button, Card } from '../components';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Layout title="UK Mortgage Broker - Best Rates Guaranteed">
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>UK's Leading Mortgage Broker</h1>
                <p>
                  Access exclusive rates from 90+ lenders. Get your Agreement in Principle
                  in minutes and save thousands with our expert mortgage advice.
                </p>
                <div className="hero-buttons">
                  <Link to="/contact">
                    <Button variant="primary" size="large">Get Agreement in Principle</Button>
                  </Link>
                  <Button variant="secondary" size="large">Calculate Payments</Button>
                </div>
                <div className="hero-features">
                  <div className="feature">✓ Whole of market access</div>
                  <div className="feature">✓ No broker fees</div>
                  <div className="feature">✓ FCA regulated advisers</div>
                </div>
              </div>
              <div className="hero-sidebar">
                <Card className="rates-card">
                  <h3>Today's Best Rates</h3>
                  <div className="rates-list">
                    <div className="rate-item">
                      <span>2-Year Fixed</span>
                      <span className="rate">4.89%</span>
                    </div>
                    <div className="rate-item">
                      <span>5-Year Fixed</span>
                      <span className="rate">4.65%</span>
                    </div>
                    <div className="rate-item">
                      <span>10-Year Fixed</span>
                      <span className="rate">4.95%</span>
                    </div>
                    <div className="rate-item">
                      <span>Tracker Rate</span>
                      <span className="rate">5.25%</span>
                    </div>
                  </div>
                  <p className="rates-disclaimer">
                    *Rates from 4.65% APRC. Representative example based on 60% LTV.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">£2.8B+</div>
                <div className="stat-label">Mortgages Arranged</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">8,500+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4.9/5</div>
                <div className="stat-label">Trustpilot Rating</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">18+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services">
          <div className="container">
            <div className="section-header">
              <h2>Our Mortgage Services</h2>
              <p>Comprehensive mortgage solutions from experienced, FCA-regulated advisers</p>
            </div>
            <div className="services-grid">
              <Card className="service-card">
                <div className="service-icon">🏠</div>
                <h3>Residential Mortgages</h3>
                <p>Competitive rates for first-time buyers, home movers, and remortgaging clients across the UK.</p>
                <Link to="/products">
                  <Button variant="outline" size="small">Learn More</Button>
                </Link>
              </Card>
              <Card className="service-card">
                <div className="service-icon">🔄</div>
                <h3>Remortgaging</h3>
                <p>Switch to a better deal and potentially save thousands on your monthly payments.</p>
                <Link to="/products">
                  <Button variant="outline" size="small">Learn More</Button>
                </Link>
              </Card>
              <Card className="service-card">
                <div className="service-icon">🏛️</div>
                <h3>Buy-to-Let Mortgages</h3>
                <p>Specialist financing for property investors with competitive rates and flexible terms.</p>
                <Link to="/products">
                  <Button variant="outline" size="small">Learn More</Button>
                </Link>
              </Card>
              <Card className="service-card">
                <div className="service-icon">🥇</div>
                <h3>Help to Buy</h3>
                <p>Government schemes to help first-time buyers get on the property ladder.</p>
                <Link to="/products">
                  <Button variant="outline" size="small">Learn More</Button>
                </Link>
              </Card>
              <Card className="service-card">
                <div className="service-icon">💎</div>
                <h3>Right to Buy</h3>
                <p>Specialist advice for council tenants looking to purchase their home.</p>
                <Link to="/products">
                  <Button variant="outline" size="small">Learn More</Button>
                </Link>
              </Card>
              <Card className="service-card">
                <div className="service-icon">📈</div>
                <h3>Commercial Mortgages</h3>
                <p>Business property financing with competitive rates and flexible terms.</p>
                <Link to="/products">
                  <Button variant="outline" size="small">Learn More</Button>
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-us">
          <div className="container">
            <div className="section-header">
              <h2>Why Choose Our Mortgage Service?</h2>
            </div>
            <div className="features-grid">
              <Card className="feature-card">
                <div className="feature-icon">🏆</div>
                <h3>Award-Winning Service</h3>
                <p>Winner of 'Best Mortgage Broker 2024' with over 18 years of experience helping clients secure the best mortgage deals.</p>
              </Card>
              <Card className="feature-card">
                <div className="feature-icon">💰</div>
                <h3>No Broker Fees</h3>
                <p>Our mortgage advice is completely free to you. We're paid by the lender only when your mortgage completes successfully.</p>
              </Card>
              <Card className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>FCA Regulated</h3>
                <p>Fully regulated by the Financial Conduct Authority, giving you complete peace of mind and protection when choosing your mortgage.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Find Your Perfect Mortgage?</h2>
              <p>Join thousands of satisfied customers who've saved money with our expert mortgage advice. Get your free consultation today and discover how much you could save.</p>
              <div className="cta-buttons">
                <Link to="/contact">
                  <Button variant="primary" size="large">Get Free Mortgage Advice</Button>
                </Link>
                <Button variant="secondary" size="large">Call 0800 123 4567</Button>
              </div>
              <p className="cta-disclaimer">
                Your home may be repossessed if you do not keep up repayments on your mortgage.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
