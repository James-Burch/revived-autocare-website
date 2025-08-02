// import React from 'react';
// import { useParams, Navigate } from 'react-router-dom';
// import { Layout, ContactBar, Button } from '../components';
// import { getInsuranceById, INSURANCE_PRODUCTS } from '../data';
// import { Link } from 'react-router-dom';

// const InsurancePage: React.FC = () => {
//     const { insuranceType } = useParams<{ insuranceType: string }>();

//     if (!insuranceType) {
//         return <Navigate to="/insurance" replace />;
//     }

//     const insurance = getInsuranceById(insuranceType);

//     if (!insurance) {
//         return <Navigate to="/insurance" replace />;
//     }

//     // Get related insurance products (exclude current)
//     const relatedInsurance = INSURANCE_PRODUCTS.filter(p => p.id !== insurance.id).slice(0, 3);

//     return (
//         <Layout title={`${insurance.title} - UK Mortgage Advisor`}>
//             <div className="insurance-page">
//                 {/* Hero Section */}
//                 <section className="insurance-hero">
//                     <div className="container">
//                         <div className="insurance-hero-content">
//                             <h1>{insurance.title}</h1>
//                             <p className="insurance-hero-description">{insurance.description}</p>
//                             <div className="insurance-hero-actions">
//                                 <Link to="/contact">
//                                     <Button variant="primary" size="lg">
//                                         Speak to an Advisor
//                                     </Button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Main Content */}
//                 <section className="insurance-content">
//                     <div className="container">
//                         <div className="insurance-content-grid">
//                             {/* Main Content */}
//                             <div className="insurance-main">
//                                 {/* Overview */}
//                                 <div className="insurance-section">
//                                     <h2>Overview</h2>
//                                     <p>{insurance.description}</p>
//                                     <div className="insurance-coverage-highlight">
//                                         <h3>Typical Coverage</h3>
//                                         <p className="coverage-amount">{insurance.typicalCoverage}</p>
//                                     </div>
//                                 </div>

//                                 {/* Key Benefits */}
//                                 <div className="insurance-section">
//                                     <h2>Key Benefits</h2>
//                                     <div className="benefits-grid">
//                                         {insurance.keyBenefits.map((benefit, index) => (
//                                             <div key={index} className="benefit-item">
//                                                 <div className="benefit-icon">✓</div>
//                                                 <span>{benefit}</span>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>

//                                 {/* Who Needs This */}
//                                 <div className="insurance-section">
//                                     <h2>Who Needs This Cover?</h2>
//                                     <p>{insurance.whoNeedsIt}</p>
//                                 </div>

//                                 {/* How It Works */}
//                                 <div className="insurance-section">
//                                     <h2>How It Works</h2>
//                                     <div className="how-it-works">
//                                         <div className="step">
//                                             <div className="step-number">1</div>
//                                             <div className="step-content">
//                                                 <h4>Get a Quote</h4>
//                                                 <p>Tell us about your circumstances and we'll find the best policy for you.</p>
//                                             </div>
//                                         </div>
//                                         <div className="step">
//                                             <div className="step-number">2</div>
//                                             <div className="step-content">
//                                                 <h4>Compare Options</h4>
//                                                 <p>We'll present you with suitable options from leading UK insurers.</p>
//                                             </div>
//                                         </div>
//                                         <div className="step">
//                                             <div className="step-number">3</div>
//                                             <div className="step-content">
//                                                 <h4>Get Covered</h4>
//                                                 <p>Complete your application and get the protection you need.</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Sidebar */}
//                             <div className="insurance-sidebar">
//                                 <div className="sidebar-card">
//                                     <h3>Get Expert Advice</h3>
//                                     <p>Speak to one of our qualified advisors about your insurance needs.</p>
//                                     <Link to='/contact'>
//                                         <Button variant="primary" className="button-full-width">
//                                             Speak to an Advisor
//                                         </Button>
//                                     </Link>
//                                     <div className="contact-methods">
//                                         <div className="contact-method">
//                                             <strong>Call:</strong> 0800 123 4567
//                                         </div>
//                                         <div className="contact-method">
//                                             <strong>Email:</strong> admin@noblemortgages.co.uk
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="why-choose-card">
//                                     <h3>Quick Facts</h3>
//                                     <ul className="benefits-list">
//                                         <li>Coverage: {insurance.typicalCoverage}</li>
//                                         <li>Best for: {insurance.whoNeedsIt}</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Related Products */}
//                 {relatedInsurance.length > 0 && (
//                     <section className="related-insurance">
//                         <div className="container">
//                             <div className="section-header-professional">
//                                 <h2>Other Insurance Products</h2>
//                                 <p>Explore our other insurance options to complete your protection.</p>
//                             </div>
//                             <div className="related-grid">
//                                 {relatedInsurance.map((related) => (
//                                     <div key={related.id} className="card card--insurance">
//                                         <div className="card__inner">
//                                             <div className="card__image">
//                                                 <div className="insurance-icon">
//                                                     <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                         <circle cx="12" cy="12" r="10" fill="var(--color-accent)" fillOpacity="0.2" />
//                                                         <path d="M12 6v6l4 2" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
//                                                     </svg>
//                                                 </div>
//                                             </div>
//                                             <div className="card__content">
//                                                 <h3 className="card__title">{related.title}</h3>
//                                                 <p className="card__description">{related.description}</p>
//                                                 <div className="card__coverage">{related.typicalCoverage}</div>
//                                                 <div className="card__actions">
//                                                     <a href={related.link} className="card__action-text">Learn More</a>
//                                                     <span className="card__arrow">→</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </section>
//                 )}

//                 <ContactBar />

//                 {/* CTA Section */}
//                 <section className="cta-professional">
//                     <div className="container">
//                         <div className="cta-content-professional">
//                             <h2>Ready to Get Protected?</h2>
//                             <p>
//                                 Get expert advice on {insurance.title.toLowerCase()} from our qualified advisors.
//                                 We'll help you find the right coverage at the right price.
//                             </p>
//                             <div className="cta-buttons-professional">
//                                 <Button variant="primary" size="lg">
//                                     Get a Quote
//                                 </Button>
//                                 <Button variant="secondary" size="lg">
//                                     Call 0800 123 4567
//                                 </Button>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </Layout>
//     );
// };

// export default InsurancePage;

import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Layout, ContactBar, Button } from "../components";
import { getInsuranceById, INSURANCE_PRODUCTS } from "../data";
import { Link } from "react-router-dom";

// Import insurance images
import lifeInsuranceImage from "../assets/images/lifeinsurance.webp";
import incomeProtectionImage from "../assets/images/incomeprotection.webp";
import homeInsuranceImage from "../assets/images/homeinsurance.webp";
import injuryImage from "../assets/images/injuryimage.webp";
import unemploymentImage from "../assets/images/unemploymentinsurance.webp";

const InsurancePage: React.FC = () => {
  const { insuranceType } = useParams<{ insuranceType: string }>();

  if (!insuranceType) {
    return <Navigate to="/insurance" replace />;
  }

  const insurance = getInsuranceById(insuranceType);

  if (!insurance) {
    return <Navigate to="/insurance" replace />;
  }

  // Get hero image based on insurance type
  const getHeroImage = (type: string) => {
    const imageMap: { [key: string]: string } = {
      "life-insurance": lifeInsuranceImage,
      "income-protection": incomeProtectionImage,
      "critical-illness": injuryImage,
      "accident-sickness-unemployment": unemploymentImage,
      "home-buildings-contents": homeInsuranceImage,
    };
    return imageMap[type] || lifeInsuranceImage;
  };

  const heroImage = getHeroImage(insuranceType);

  // Get related insurance products (exclude current)
  const relatedInsurance = INSURANCE_PRODUCTS.filter(
    (p) => p.id !== insurance.id
  ).slice(0, 3);

  return (
    <Layout title={`${insurance.title} - UK Mortgage Advisor`}>
      <div className="insurance-page">
        {/* Hero Section with Image */}
        <section className="insurance-hero">
          <div className="container">
            <div className="insurance-hero-content">
              <div className="insurance-hero-text">
                <h1>{insurance.title}</h1>
                <p className="insurance-hero-description">
                  {insurance.description}
                </p>
                <div className="insurance-hero-actions">
                  <Link to="/contact">
                    <Button variant="primary" size="lg">
                      Speak to an Advisor
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="insurance-hero-image">
                <img
                  src={heroImage}
                  alt={`${insurance.title} - UK Insurance Advisor`}
                  className="hero-insurance-image"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content - Keep original styling */}
        <section className="insurance-content">
          <div className="container">
            <div className="insurance-content-grid">
              {/* Main Content */}
              <div className="insurance-main">
                {/* Overview */}
                <div className="insurance-section">
                  <h2>Overview</h2>
                  <p>{insurance.description}</p>
                  <div className="insurance-coverage-highlight">
                    <h3>Typical Coverage</h3>
                    <p className="coverage-amount">
                      {insurance.typicalCoverage}
                    </p>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="insurance-section">
                  <h2>Key Benefits</h2>
                  <div className="benefits-grid">
                    {insurance.keyBenefits.map((benefit, index) => (
                      <div key={index} className="benefit-item">
                        <div className="benefit-icon">✓</div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Who Needs This */}
                <div className="insurance-section">
                  <h2>Who Needs This Cover?</h2>
                  <p>{insurance.whoNeedsIt}</p>
                </div>

                {/* How It Works */}
                <div className="insurance-section">
                  <h2>How It Works</h2>
                  <div className="how-it-works">
                    <div className="step">
                      <div className="step-number">1</div>
                      <div className="step-content">
                        <h4>Get a Quote</h4>
                        <p>
                          Tell us about your circumstances and we'll find the
                          best policy for you.
                        </p>
                      </div>
                    </div>
                    <div className="step">
                      <div className="step-number">2</div>
                      <div className="step-content">
                        <h4>Compare Options</h4>
                        <p>
                          We'll present you with suitable options from leading
                          UK insurers.
                        </p>
                      </div>
                    </div>
                    <div className="step">
                      <div className="step-number">3</div>
                      <div className="step-content">
                        <h4>Get Covered</h4>
                        <p>
                          Complete your application and get the protection you
                          need.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="insurance-sidebar">
                <div className="sidebar-card">
                  <h3>Get Expert Advice</h3>
                  <p>
                    Speak to one of our qualified advisors about your insurance
                    needs.
                  </p>
                  <Link to="/contact">
                    <Button variant="primary" className="button-full-width">
                      Speak to an Advisor
                    </Button>
                  </Link>
                  <div className="contact-methods">
                    <div className="contact-method">
                      <strong>Call:</strong> 0800 123 4567
                    </div>
                    <div className="contact-method">
                      <strong>Email:</strong> admin@noblemortgages.co.uk
                    </div>
                  </div>
                </div>

                <div className="why-choose-card">
                  <h3>Quick Facts</h3>
                  <ul className="benefits-list">
                    <li>Coverage: {insurance.typicalCoverage}</li>
                    <li>Best for: {insurance.whoNeedsIt}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedInsurance.length > 0 && (
          <section className="related-insurance">
            <div className="container">
              <div className="section-header-professional">
                <h2>Other Insurance Products</h2>
                <p>
                  Explore our other insurance options to complete your
                  protection.
                </p>
              </div>
              <div className="related-grid">
                {relatedInsurance.map((related) => (
                  <div key={related.id} className="card card--insurance">
                    <div className="card__inner">
                      <div className="card__image">
                        <div className="insurance-icon">
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              fill="var(--color-accent)"
                              fillOpacity="0.2"
                            />
                            <path
                              d="M12 6v6l4 2"
                              stroke="var(--color-accent)"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="card__content">
                        <h3 className="card__title">{related.title}</h3>
                        <p className="card__description">
                          {related.description}
                        </p>
                        <div className="card__coverage">
                          {related.typicalCoverage}
                        </div>
                        <div className="card__actions">
                          <a href={related.link} className="card__action-text">
                            Learn More
                          </a>
                          <span className="card__arrow">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <ContactBar />

        {/* CTA Section */}
        <section className="cta-professional">
          <div className="container">
            <div className="cta-content-professional">
              <h2>Ready to Get Protected?</h2>
              <p>
                Get expert advice on {insurance.title.toLowerCase()} from our
                qualified advisors. We'll help you find the right coverage at
                the right price.
              </p>
              <div className="cta-buttons-professional">
                <Button variant="primary" size="lg">
                  Get a Quote
                </Button>
                <Button variant="secondary" size="lg">
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

export default InsurancePage;
