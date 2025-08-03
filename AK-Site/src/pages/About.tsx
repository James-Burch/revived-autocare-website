import React from 'react';
import { Layout, ContactBar, Button } from '../components';
import { Link } from 'react-router-dom';

// Import team/office images if you have them
import aboutHeroImage from '../assets/images/consultationimage.webp';

const About: React.FC = () => {
    return (
        <Layout 
            title="About Noble Mortgages - Expert UK Mortgage Advisors"
            description="Learn about Noble Mortgages, your trusted UK mortgage advisors. FCA regulated with access to 90+ lenders, providing expert advice since establishment."
            keywords="about noble mortgages, UK mortgage advisors, FCA regulated, mortgage broker team, expert mortgage advice"
        >
            <div className="about-page">
                {/* Hero Section */}
                <section className="about-hero">
                    <div className="container">
                        <div className="about-hero-content">
                            <div className="about-hero-text">
                                <h1>About Noble Mortgages</h1>
                                <p className="about-hero-description">
                                    Your trusted mortgage advisors, committed to finding you the perfect 
                                    mortgage solution with expert guidance and whole-of-market access.
                                </p>
                            </div>
                            <div className="about-hero-image">
                                <img
                                    src={aboutHeroImage}
                                    alt="Noble Mortgages team providing expert mortgage advice"
                                    className="hero-about-image"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="our-story-section">
                    <div className="container">
                        <div className="our-story-content">
                            <div className="story-text">
                                <h2>Our Story</h2>
                                <p>
                                    Noble Mortgages was founded with a simple mission: to make the mortgage 
                                    process straightforward, transparent, and stress-free for every client. 
                                    We understand that buying a home or remortgaging is one of life's biggest 
                                    financial decisions, and we're here to guide you every step of the way.
                                </p>
                                <p>
                                    Our team of qualified mortgage advisors brings years of combined experience 
                                    in the UK mortgage market. We pride ourselves on our personalized approach, 
                                    taking the time to understand your unique circumstances and finding solutions 
                                    that work for you.
                                </p>
                            </div>
                            <div className="story-highlights">
                                <div className="highlight-card">
                                    <div className="highlight-icon">🏆</div>
                                    <h3>Award Winning</h3>
                                    <p>Recognized for excellence in mortgage advisory services</p>
                                </div>
                                <div className="highlight-card">
                                    <div className="highlight-icon">🔒</div>
                                    <h3>FCA Regulated</h3>
                                    <p>Fully regulated and authorized for your peace of mind</p>
                                </div>
                                <div className="highlight-card">
                                    <div className="highlight-icon">💯</div>
                                    <h3>100% Independent</h3>
                                    <p>Completely independent advice with no bias towards any lender</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="why-choose-section">
                    <div className="container">
                        <div className="section-header-professional">
                            <h2>Why Choose Noble Mortgages?</h2>
                            <p>We go above and beyond to ensure you get the best possible mortgage deal</p>
                        </div>
                        
                        <div className="benefits-grid-large">
                            <div className="benefit-card">
                                <div className="benefit-icon">💰</div>
                                <h3>No Fees to You</h3>
                                <p>
                                    Our comprehensive mortgage advice service is completely free to you. 
                                    We're paid by the lender once your mortgage completes.
                                </p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">⚡</div>
                                <h3>Fast Track Service</h3>
                                <p>
                                    Get your Agreement in Principle quickly and benefit from our 
                                    streamlined application process.
                                </p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🤝</div>
                                <h3>Personal Service</h3>
                                <p>
                                    You'll have a dedicated advisor throughout your journey, ensuring 
                                    consistent, personalized support.
                                </p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">📋</div>
                                <h3>Complete Support</h3>
                                <p>
                                    From initial consultation to completion, we handle all the paperwork 
                                    and liaise with all parties involved.
                                </p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🛡️</div>
                                <h3>Protection Advice</h3>
                                <p>
                                    We also provide expert insurance advice to protect your home, 
                                    income, and family's future.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values Section */}
                <section className="values-section">
                    <div className="container">
                        <div className="values-content">
                            <div className="values-text">
                                <h2>Our Values</h2>
                                <div className="value-item">
                                    <h3>Transparency</h3>
                                    <p>
                                        We believe in complete transparency. No hidden fees, no surprises, 
                                        just honest advice you can trust.
                                    </p>
                                </div>
                                <div className="value-item">
                                    <h3>Expertise</h3>
                                    <p>
                                        Our team stays up-to-date with market changes and regulations 
                                        to provide you with the most current advice.
                                    </p>
                                </div>
                                <div className="value-item">
                                    <h3>Client-First</h3>
                                    <p>
                                        Your needs come first. We take the time to understand your 
                                        situation and provide tailored solutions.
                                    </p>
                                </div>
                            </div>
                            <div className="values-stats">
                                <div className="stat-item">
                                    <div className="stat-number">90+</div>
                                    <div className="stat-label">Lenders</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">1000+</div>
                                    <div className="stat-label">Happy Clients</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">100%</div>
                                    <div className="stat-label">Independent</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Accreditations Section */}
                <section className="accreditations-section">
                    <div className="container">
                        <div className="section-header-professional">
                            <h2>Our Accreditations</h2>
                            <p>Regulated and recognized by leading industry bodies</p>
                        </div>
                        
                        <div className="accreditations-grid">
                            <div className="accreditation-item">
                                <div className="accreditation-logo">FCA</div>
                                <h3>FCA Regulated</h3>
                                <p>Authorized and regulated by the Financial Conduct Authority</p>
                            </div>
                            <div className="accreditation-item">
                                <div className="accreditation-logo">CeMAP</div>
                                <h3>CeMAP Qualified</h3>
                                <p>Our advisors hold Certificate in Mortgage Advice & Practice</p>
                            </div>
                            <div className="accreditation-item">
                                <div className="accreditation-logo">FSCS</div>
                                <h3>FSCS Protected</h3>
                                <p>Your funds are protected by the Financial Services Compensation Scheme</p>
                            </div>
                        </div>
                    </div>
                </section>

                <ContactBar />

                {/* CTA Section */}
                <section className="cta-professional">
                    <div className="container">
                        <div className="cta-content-professional">
                            <h2>Ready to Start Your Mortgage Journey?</h2>
                            <p>
                                Get in touch today for your free, no-obligation consultation with one of 
                                our expert mortgage advisors.
                            </p>
                            <div className="cta-buttons-professional">
                                <Link to="/contact">
                                    <Button variant="primary" size="lg">
                                        Get Free Advice
                                    </Button>
                                </Link>
                                <Button variant="secondary" size="lg">
                                    Call 0800 123 4567
                                </Button>
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

export default About;