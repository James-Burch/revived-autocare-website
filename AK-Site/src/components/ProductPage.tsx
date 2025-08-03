import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Layout, ContactBar } from '../components';
import { Link } from 'react-router-dom';
import { getServiceById } from '../data';

const ProductPage: React.FC = () => {
    const { productType } = useParams<{ productType: string }>();

    // Get the service data which includes the imported image
    const serviceData = getServiceById(productType || '');

    // Memoize the title, short description, full description, and image
    const { title, shortDescription, fullDescription, heroImage } = useMemo(() => {
        // Convert URL param to readable title
        const getTitle = (type: string) => {
            const titles: { [key: string]: string } = {
                'first-time-buyers': 'Purchase (First Time Buyers)',
                'home-mover': 'Home Mover',
                'remortgage': 'Remortgage',
                'buy-to-let': 'Buy To Let',
                'new-build': 'New Build',
                'help-to-buy': 'Help To Buy',
                'limited-companies': 'Limited Companies (BTL)',
                'bridging-loans': 'Bridging Loans',
            };
            return titles[type] || 'Product';
        };

        // Short descriptions for hero section
        const getShortDescription = (type: string) => {
            const shortDescriptions: { [key: string]: string } = {
                'first-time-buyers': 'Expert guidance for first-time buyers with access to specialist lenders and government schemes.',
                'home-mover': 'Seamless mortgage solutions for your next move with whole-of-market advice.',
                'remortgage': 'Save money or release equity with our comprehensive remortgage service.',
                'buy-to-let': 'Specialist buy-to-let mortgages for property investors and landlords.',
                'new-build': 'Specialist financing for new construction properties with expert advice.',
                'help-to-buy': 'Government assistance schemes to help you get on the property ladder.',
                'limited-companies': 'Corporate buy-to-let mortgages for property investment through limited companies.',
                'bridging-loans': 'Short-term financing solutions to bridge the gap between property transactions.',
                'lifetime-mortgages': 'Access the equity in your home with flexible lifetime mortgage options.'
            };
            return shortDescriptions[type] || 'Expert mortgage advice tailored to your needs.';
        };

        // Full descriptions for overview section
        const getFullDescription = (type: string) => {
            const fullDescriptions: { [key: string]: string } = {
                'first-time-buyers': 'Buying your first home can feel daunting — but it does not have to be. The idea of becoming a first-time buyer can be overwhelming, especially when you are faced with so many lenders, mortgage products, and industry jargon. Sure, you could spend hours researching online, calling banks, and trying to compare offers — but why not let us take the stress off your shoulders? We will take the time to sit down with you, understand what is important to you, and guide you through the entire process. We search the whole market to find a mortgage that suits your needs, and once we have found the right deal, we will arrange an Agreement in Principle — something most estate agents or sellers will expect before accepting your offer. We also explore a full range of options, including Guarantor Mortgages and Shared Ownership or Shared Equity schemes, to make sure you are fully aware of what is available. And when you have found the perfect property, we will continue to support you — liaising with estate agents, solicitors, and surveyors to help everything go smoothly from start to finish.',
                'home-mover': 'Moving home can be stressful — but your mortgage does not have to be. Whether you are searching for a new deal or considering transferring or porting your existing mortgage to your next home, we will walk you through the options and help you choose what works best for your circumstances. From the early stages — working out the true cost of moving, how much you can borrow, and what your monthly repayments might look like — we will make sure your finances are in order before you have even found your next place. We search the market to find a mortgage tailored to your needs, and we will always offer clear, honest advice to help you make confident decisions. Our goal is to make your move as smooth and stress-free as possible.',
                'remortgage': 'Thinking about remortgaging? Whether it is about saving money or unlocking new opportunities, we are here to help you make the right move. You might be looking to reduce your monthly repayments, concerned about rising interest rates, or thinking about releasing equity — whether that is for home improvements, consolidating debts into one manageable payment, investing in a new venture, or helping a loved one onto the property ladder. Whatever your motivation, we will provide clear, unbiased advice and search the market to find a mortgage deal that fits your unique situation. Even if you are not sure it is the right time, it can be worth reviewing your current mortgage. We will carry out a full review and let you know if there is a better option available. A quick check could end up saving you thousands over the long term.',
                'buy-to-let': 'The rental market remains highly active across the UK, making buy-to-let an appealing route for both new and experienced property investors. With many first-time buyers still struggling to get on the ladder, the demand for good rental properties continues to grow — and shows no signs of slowing down. Whether you are purchasing your first buy-to-let, remortgaging an existing property, or managing a larger portfolio, we will provide clear, tailored advice and search the market to find the most suitable mortgage solutions for your individual needs.',
                'lifetime-mortgages': 'We are proud to collaborate with a specialist in lifetime mortgages. If you are thinking about accessing the equity in your home — whether to enjoy a dream holiday, help family members onto the property ladder, fund home improvements, or simply improve your lifestyle — a lifetime mortgage could be the right choice. The lifetime mortgage market has expanded to offer a range of flexible options. You can choose to pay the interest monthly or let it accumulate over time. Plus, you can decide to take a lump sum, receive a regular income, or combine both to best fit your needs. Because a lifetime mortgage is a major financial decision, we will also review other possibilities with you, including traditional mortgages, Retirement Interest Only (RIO) loans, or whether borrowing is the best path given your circumstances. Important: Lifetime mortgages are long-term agreements. Please ask for a personalised illustration to fully understand the features and risks. Make sure this option fits your future plans, especially if you intend to move, sell your home, or want to leave an inheritance. Independent advice is strongly recommended if you have any doubts.',
                'new-build': 'Specialist financing for new construction properties with expert advice tailored to new builds and developer incentives. New build properties often come with unique considerations including build stages, retention amounts, and specialist lender criteria.',
                'help-to-buy': 'Government assistance schemes to help you get on the property ladder with reduced deposits and shared equity options. We can guide you through Help to Buy ISAs, Shared Ownership, and other government-backed schemes.',
                'limited-companies': 'Corporate buy-to-let mortgages for property investment through limited companies with specialist tax and structural advice. Many investors now choose limited company structures for tax efficiency and portfolio growth.',
                'bridging-loans': 'Short-term financing solutions to bridge the gap between property transactions with flexible terms and quick completion. Ideal for chain breaks, auction purchases, or when quick completion is required.'
            };
            return fullDescriptions[type] || 'Expert mortgage advice tailored to your specific circumstances.';
        };

        const getHeroImage = () => {
            if (serviceData && serviceData.image) {
                return serviceData.image;
            }
            return '/images/image1.webp';
        };

        return {
            title: getTitle(productType || ''),
            shortDescription: getShortDescription(productType || ''),
            fullDescription: getFullDescription(productType || ''),
            heroImage: getHeroImage()
        };
    }, [productType, serviceData]);

    return (
        <Layout title={`${title} - UK Mortgage Advisor`}>
            <div className="product-page">
                {/* Hero Section - Using PRODUCT-specific classes */}
                <section className="product-hero">
                    <div className="container">
                        <div className="product-hero-content">
                            <div className="product-hero-text">
                                <h1>{title}</h1>
                                <p className="product-hero-description">{shortDescription}</p>
                                <div className="product-hero-actions">
                                    <Link to="/contact" className="nav-link">
                                        <button className="button button-primary button-large">
                                            Get Free Advice
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="product-hero-image">
                                <img
                                    src={heroImage}
                                    alt={`${title} - UK Mortgage Advisor`}
                                    className="hero-product-image"
                                    loading="eager"
                                />
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
                                    <p>{fullDescription}</p>
                                    <div className="insurance-coverage-highlight">
                                        <h3>Why Choose Our Service</h3>
                                        <p className="coverage-amount">Expert whole-of-market advice</p>
                                    </div>
                                </div>

                                {/* Key Benefits */}
                                <div className="insurance-section">
                                    <h2>Key Benefits</h2>
                                    <div className="benefits-grid">
                                        <div className="benefit-item">
                                            <div className="benefit-icon" aria-hidden="true">✓</div>
                                            <span>FCA-regulated advisors provide personalized guidance</span>
                                        </div>
                                        <div className="benefit-item">
                                            <div className="benefit-icon" aria-hidden="true">✓</div>
                                            <span>Access to over 90 lenders nationwide</span>
                                        </div>
                                        <div className="benefit-item">
                                            <div className="benefit-icon" aria-hidden="true">✓</div>
                                            <span>Completely free mortgage advice</span>
                                        </div>
                                        <div className="benefit-item">
                                            <div className="benefit-icon" aria-hidden="true">✓</div>
                                            <span>Support throughout the entire process</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Who Needs This */}
                                <div className="insurance-section">
                                    <h2>Who Can Benefit?</h2>
                                    <p>
                                        Anyone looking for {title.toLowerCase()} advice can benefit from our whole-of-market approach.
                                        We help first-time buyers, experienced property owners, and investors find the most suitable mortgage deals.
                                    </p>
                                </div>

                                {/* How It Works */}
                                <div className="insurance-section">
                                    <h2>How It Works</h2>
                                    <div className="how-it-works">
                                        <div className="step">
                                            <div className="step-number" aria-hidden="true">1</div>
                                            <div className="step-content">
                                                <h4>Free Consultation</h4>
                                                <p>Tell us about your circumstances and we'll assess your mortgage needs.</p>
                                            </div>
                                        </div>
                                        <div className="step">
                                            <div className="step-number" aria-hidden="true">2</div>
                                            <div className="step-content">
                                                <h4>Market Search</h4>
                                                <p>We search across 90+ lenders to find the best rates and terms for you.</p>
                                            </div>
                                        </div>
                                        <div className="step">
                                            <div className="step-number" aria-hidden="true">3</div>
                                            <div className="step-content">
                                                <h4>Complete Support</h4>
                                                <p>We guide you through the application and completion process.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="insurance-sidebar">
                                <div className="sidebar-card">
                                    <h3>Get Expert Advice</h3>
                                    <p>Speak to one of our qualified mortgage advisors about your needs.</p>
                                    <Link to='/contact' className="nav-link">
                                        <button className="button button-primary button-full-width">
                                            Get Free Advice
                                        </button>
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
                                    <h3>Why Choose Us?</h3>
                                    <ul className="benefits-list">
                                        <li>No fees to you - completely free advice</li>
                                        <li>Access to 90+ lenders</li>
                                        <li>FCA regulated for your protection</li>
                                        <li>Award-winning service</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ContactBar />

                {/* CTA Section */}
                <section className="cta-professional">
                    <div className="container">
                        <div className="cta-content-professional">
                            <h2>Ready to Get Started?</h2>
                            <p>
                                Contact us today for your free {title.toLowerCase()} consultation and discover how much you could save.
                            </p>
                            <div className="cta-buttons-professional">
                                <Link to="/contact">
                                    <button className="button button-primary button-large">
                                        Get Free Advice
                                    </button>
                                </Link>
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

export default ProductPage;