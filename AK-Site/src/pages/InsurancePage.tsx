// import React from 'react';
// import { useParams, Navigate } from 'react-router-dom';
// import { Layout, ContactBar } from '../components';
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
//                                 <Link to="/contact" className="nav-link"><button className="button button-secondary button-large">
//                                     Speak to an Advisor
//                                 </button>
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
//                                     <Link to='/contact' className="nav-link">
//                                         <button className="button button-primary button-full-width">
//                                             Speak to an Advisor
//                                         </button>
//                                     </Link>
//                                     <div className="contact-methods">
//                                         <div className="contact-method">
//                                             <strong>Call:</strong> 0800 123 4567
//                                         </div>
//                                         <div className="contact-method">
//                                             <strong>Email:</strong> advice@company.co.uk
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="sidebar-card">
//                                     <h3>Quick Facts</h3>
//                                     <div className="quick-facts">
//                                         <div className="fact">
//                                             <span className="fact-label">Coverage:</span>
//                                             <span className="fact-value">{insurance.typicalCoverage}</span>
//                                         </div>
//                                         <div className="fact">
//                                             <span className="fact-label">Best for:</span>
//                                             <span className="fact-value">{insurance.whoNeedsIt}</span>
//                                         </div>
//                                     </div>
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
//                                 <button className="button button-primary button-large">
//                                     Get a Quote
//                                 </button>
//                                 <button className="button button-secondary button-large">
//                                     Call 0800 123 4567
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </Layout>
//     );
// };

// export default InsurancePage;

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Layout, ContactBar } from '../components';
import { getInsuranceById, INSURANCE_PRODUCTS } from '../data';
import { Link } from 'react-router-dom';

// Insurance icon component
const InsuranceIcon: React.FC<{ insuranceId: string }> = ({ insuranceId }) => {
    const iconProps = {
        width: "48",
        height: "48",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    };

    switch (insuranceId) {
        case 'life-insurance':
            return (
                <svg {...iconProps}>
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="var(--color-accent)" />
                </svg>
            );
        case 'income-protection':
            return (
                <svg {...iconProps}>
                    <path d="M12 2L3 7L12 12L21 7L12 2Z" fill="var(--color-accent)" />
                    <path d="M3 17L12 22L21 17" stroke="var(--color-accent)" strokeWidth="2" />
                    <path d="M3 12L12 17L21 12" stroke="var(--color-accent)" strokeWidth="2" />
                </svg>
            );
        case 'critical-illness':
            return (
                <svg {...iconProps}>
                    <path d="M22 12H18L15 21L9 3L6 12H2" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case 'accident-sickness-unemployment':
            return (
                <svg {...iconProps}>
                    <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="var(--color-accent)" fillOpacity="0.2" />
                    <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="var(--color-accent)" strokeWidth="2" />
                    <path d="M9 12L11 14L15 10" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case 'home-buildings-contents':
            return (
                <svg {...iconProps}>
                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" fill="var(--color-accent)" fillOpacity="0.2" />
                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="var(--color-accent)" strokeWidth="2" />
                    <path d="M9 22V12H15V22" stroke="var(--color-accent)" strokeWidth="2" />
                </svg>
            );
        default:
            return (
                <svg {...iconProps}>
                    <circle cx="12" cy="12" r="10" fill="var(--color-accent)" fillOpacity="0.2" />
                    <path d="M12 6v6l4 2" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
                </svg>
            );
    }
};

const InsurancePage: React.FC = () => {
    const { insuranceType } = useParams<{ insuranceType: string }>();

    if (!insuranceType) {
        return <Navigate to="/insurance" replace />;
    }

    const insurance = getInsuranceById(insuranceType);

    if (!insurance) {
        return <Navigate to="/insurance" replace />;
    }

    // Get related insurance products (exclude current)
    const relatedInsurance = INSURANCE_PRODUCTS.filter(p => p.id !== insurance.id).slice(0, 3);

    return (
        <Layout title={`${insurance.title} - UK Mortgage Advisor`}>
            <div className="insurance-page">
                {/* Hero Section */}
                <section className="insurance-hero">
                    <div className="container">
                        <div className="insurance-hero-content">
                            <h1>{insurance.title}</h1>
                            <p className="insurance-hero-description">{insurance.description}</p>
                            <div className="insurance-hero-actions">
                                <Link to="/contact" className="nav-link">
                                    <button className="button button-secondary button-large">
                                        Speak to an Advisor
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
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
                                        <p className="coverage-amount">{insurance.typicalCoverage}</p>
                                    </div>
                                </div>

                                {/* Key Benefits */}
                                <div className="insurance-section">
                                    <h2>Key Benefits</h2>
                                    <div className="benefits-grid">
                                        {insurance.keyBenefits.map((benefit, index) => (
                                            <div key={index} className="benefit-item">
                                                <div className="benefit-icon" aria-hidden="true">✓</div>
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
                                            <div className="step-number" aria-hidden="true">1</div>
                                            <div className="step-content">
                                                <h4>Get a Quote</h4>
                                                <p>Tell us about your circumstances and we'll find the best policy for you.</p>
                                            </div>
                                        </div>
                                        <div className="step">
                                            <div className="step-number" aria-hidden="true">2</div>
                                            <div className="step-content">
                                                <h4>Compare Options</h4>
                                                <p>We'll present you with suitable options from leading UK insurers.</p>
                                            </div>
                                        </div>
                                        <div className="step">
                                            <div className="step-number" aria-hidden="true">3</div>
                                            <div className="step-content">
                                                <h4>Get Covered</h4>
                                                <p>Complete your application and get the protection you need.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="insurance-sidebar">
                                <div className="sidebar-card">
                                    <h3>Get Expert Advice</h3>
                                    <p>Speak to one of our qualified advisors about your insurance needs.</p>
                                    <Link to='/contact' className="nav-link">
                                        <button className="button button-primary button-full-width">
                                            Speak to an Advisor
                                        </button>
                                    </Link>
                                    <div className="contact-methods">
                                        <div className="contact-method">
                                            <strong>Call:</strong> 0800 123 4567
                                        </div>
                                        <div className="contact-method">
                                            <strong>Email:</strong> advice@company.co.uk
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebar-card">
                                    <h3>Quick Facts</h3>
                                    <div className="quick-facts">
                                        <div className="fact">
                                            <span className="fact-label">Coverage:</span>
                                            <span className="fact-value">{insurance.typicalCoverage}</span>
                                        </div>
                                        <div className="fact">
                                            <span className="fact-label">Best for:</span>
                                            <span className="fact-value">{insurance.whoNeedsIt}</span>
                                        </div>
                                    </div>
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
                                <p>Explore our other insurance options to complete your protection.</p>
                            </div>
                            <div className="related-grid">
                                {relatedInsurance.map((related) => (
                                    <div key={related.id} className="card card--insurance">
                                        <div className="card__inner">
                                            <div className="card__image">
                                                <div className="insurance-icon">
                                                    <InsuranceIcon insuranceId={related.id} />
                                                </div>
                                            </div>
                                            <div className="card__content">
                                                <h3 className="card__title">{related.title}</h3>
                                                <p className="card__description">{related.description}</p>
                                                <div className="card__coverage">{related.typicalCoverage}</div>
                                                <div className="card__actions">
                                                    <Link to={related.link} className="card__action-text">Learn More</Link>
                                                    <span className="card__arrow" aria-hidden="true">→</span>
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
                                Get expert advice on {insurance.title.toLowerCase()} from our qualified advisors.
                                We'll help you find the right coverage at the right price.
                            </p>
                            <div className="cta-buttons-professional">
                                <button className="button button-primary button-large">
                                    Get a Quote
                                </button>
                                <button className="button button-secondary button-large">
                                    Call 0800 123 4567
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default InsurancePage;