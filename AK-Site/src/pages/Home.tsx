import React, { lazy, Suspense } from 'react';
import { ChatWidget, Layout, ContactBar } from '../components';
import ServicesGrid from '../components/ServicesGrid';
import { getMainServices, getAdditionalServices, INSURANCE_PRODUCTS } from '../data';
import { Link } from 'react-router-dom';

// Lazy load heavy components that appear below the fold
const LendersCarousel = lazy(() => import('../components/LendersCarousel'));
const FAQSection = lazy(() => import('../components/FAQSection'));

const Home: React.FC = () => {
  // Get data from centralized data layer
  const mainServices = getMainServices();
  const additionalServices = getAdditionalServices();
  const allInsurance = INSURANCE_PRODUCTS; // Show all insurance products, not just featured

  return (
    <Layout title="UK Mortgage Advisor - Expert Mortgage Advice">
      <div className="home-page">
        {/* Hero Section - Clean Professional Design */}
        <section className="hero-professional">
          <div className="container">
            <div className="hero-content-professional">
              <div className="hero-text-professional">
                <h1>
                  Your <span className="hero-accent">Trusted</span> UK Mortgage Advisor
                </h1>
                <p>
                  Get expert mortgage advice and access to exclusive deals from whole-of-market
                  lenders. We'll find you the perfect mortgage solution.
                </p>
                <div className="hero-buttons-professional">
                  <Link to="/contact" className="nav-link">
                    <button className="button button-primary button-large">
                      Get Free Advice
                    </button>
                  </Link>
                  <Link to="/contact" className="nav-link">
                    <button className="button button-secondary button-large">
                      Call 0800 123 4567
                    </button>
                  </Link>
                </div>
              </div>
              <ChatWidget />
            </div>
          </div>
        </section>

        {/* Mortgage Services Section */}
        <section className="services-section-professional">
          <div className="container">
            <div className="section-header-professional">
              <h2>Our Mortgage Services</h2>
              <p>
                Comprehensive mortgage solutions tailored to your needs,
                with access to the whole of market rates and expert guidance.
              </p>
            </div>
            <ServicesGrid
              services={mainServices}
              additionalServices={additionalServices}
              showDescriptions={true}
            />
          </div>
        </section>

        {/* Lenders Section */}
        <section className="lenders-section-professional">
          <div className="container">
            <div className="section-header-professional">
              <h2>We Work With Leading UK Lenders</h2>
              <p>
                Access to exclusive deals from major banks, building societies,
                and specialist lenders across the UK mortgage market.
              </p>
            </div>
          </div>
        </section>

        {/* Lazy load lenders carousel */}
        <Suspense fallback={
          <div className="lenders-loading">
            <div className="container">
              <div className="loading-placeholder">Loading lenders...</div>
            </div>
          </div>
        }>
          <LendersCarousel />
        </Suspense>

        {/* Protection Section */}
        <section className="protection-section">
          <div className="container">
            <div className="section-header-professional">
              <h2>Protection We Offer</h2>
              <p>
                See our list of insurance covers below - We can advise you on the most suitable solutions to fit
                your budget and personal circumstances.
              </p>
            </div>

            <div className="protection-grid">
              {allInsurance.map((insurance) => (
                <div key={insurance.id} className="card card--insurance">
                  <div className="card__inner">
                    <div className="card__image">
                      <div className="insurance-icon">
                        {insurance.id === 'life-insurance' && (
                          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="var(--color-accent)" />
                          </svg>
                        )}
                        {insurance.id === 'income-protection' && (
                          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M12 2L3 7L12 12L21 7L12 2Z" fill="var(--color-accent)" />
                            <path d="M3 17L12 22L21 17" stroke="var(--color-accent)" strokeWidth="2" />
                            <path d="M3 12L12 17L21 12" stroke="var(--color-accent)" strokeWidth="2" />
                          </svg>
                        )}
                        {insurance.id === 'critical-illness' && (
                          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M22 12H18L15 21L9 3L6 12H2" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                        {insurance.id === 'accident-sickness-unemployment' && (
                          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="var(--color-accent)" fillOpacity="0.2" />
                            <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="var(--color-accent)" strokeWidth="2" />
                            <path d="M9 12L11 14L15 10" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                        {insurance.id === 'home-buildings-contents' && (
                          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" fill="var(--color-accent)" fillOpacity="0.2" />
                            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="var(--color-accent)" strokeWidth="2" />
                            <path d="M9 22V12H15V22" stroke="var(--color-accent)" strokeWidth="2" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="card__content">
                      <h3 className="card__title">{insurance.title}</h3>
                      <p className="card__description">{insurance.description}</p>
                      <div className="card__coverage">{insurance.typicalCoverage}</div>
                      <div className="card__actions">
                        <Link to={insurance.link} className="nav-link">
                          <span className="card__action-text">Find Out More</span>
                        </Link>
                        <span className="card__arrow" aria-hidden="true">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactBar />

        {/* Lazy load FAQ section */}
        <Suspense fallback={
          <div className="faq-loading">
            <div className="container">
              <div className="loading-placeholder">Loading FAQ...</div>
            </div>
          </div>
        }>
          <FAQSection />
        </Suspense>

        {/* Reviews Section */}
        <section className="reviews-section">
          <div className="container">
            <div className="section-header-professional">
              <h2>What Our Clients Say</h2>
              <p>Trusted by thousands of homeowners across the UK</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-professional">
          <div className="container">
            <div className="cta-content-professional">
              <h2>Ready to Find Your Perfect Mortgage?</h2>
              <p>
                Get expert advice from our qualified mortgage advisors.
                We'll guide you through every step of the process.
              </p>
              <div className="cta-buttons-professional">
                <Link to="/contact" className="nav-link">
                  <button className="button button-primary button-large">
                    Contact Us Here
                  </button>
                </Link>
                <Link to="/contact" className="nav-link">
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