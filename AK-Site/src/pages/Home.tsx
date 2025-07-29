import React from 'react';
import { ChatWidget, Layout } from '../components';
import ServicesGrid from '../components/ServicesGrid';
import { getMainServices, getAdditionalServices } from '../data';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // Get data from centralized data layer
  const mainServices = getMainServices();
  const additionalServices = getAdditionalServices();

  return (
    <Layout title="UK Mortgage Advisor - Expert Mortgage Advice">
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero-new">
          <div className="container">
            <div className="hero-content-new">
              <div className="hero-text-new">
                <h1>
                  Your <span className="hero-accent">Trusted</span> UK Mortgage Advisor
                </h1>
                <p>
                  Get expert mortgage advice and access to exclusive deals from whole-of-market
                  lenders. We'll find you the perfect mortgage solution.
                </p>
                <div className="hero-buttons-new">
                  <Link to="/contact"
                    className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>
                    <button className="button button-primary button-large">
                      Get Free Advice
                    </button>
                  </Link>
                  <Link to="/contact"
                    className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>
                    <button className="button button-secondary button-large">
                      Call 0800 123 4567
                    </button>
                  </Link>
                </div>
              </div>

              {/* Contact Widget */}
              <ChatWidget />
            </div>
          </div>
        </section>


        {/* Services Section */}
        <ServicesGrid
          services={mainServices}
          additionalServices={additionalServices}
          showDescriptions={true}
        />

        {/* Lenders Section */}
        <section className="lenders-section">
          <div className="container">
            <div className="section-header">
              <h2>We Work With Leading UK Lenders</h2>
              <p>
                Access to exclusive deals from major banks, building societies,
                and specialist lenders across the UK mortgage market.
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="reviews-section">
          <div className="container">
            <div className="section-header">
              <h2>What Our Clients Say</h2>
              <h3>Trusted by thousands of homeowners</h3>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-new">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Find Your Perfect Mortgage?</h2>
              <p>
                Get expert advice from our qualified mortgage advisors.
                We'll guide you through every step of the process.
              </p>
              <div className="cta-buttons">
                <Link to="/contact"
                  className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>
                  <button className="button button-primary button-large">
                    Start Your Application
                  </button>
                </Link>
                <Link to="/contact"
                  className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>
                  <button className="button button-secondary button-large">
                    Book Free Consultation
                  </button>
                </Link>
              </div>
              <p className="cta-disclaimer">
                *Your home may be repossessed if you do not keep up repayments on your mortgage.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;