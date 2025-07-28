import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Button } from '../components';
import { Link } from 'react-router-dom';

const ProductPage: React.FC = () => {
    const { productType } = useParams<{ productType: string }>();

    // Convert URL param to readable title
    const getTitle = (type: string) => {
        const titles: { [key: string]: string } = {
            'first-time-buyers': 'Purchase (First Time Buyers)',
            'home-mover': 'Home Mover',
            'remortgage': 'Remortgage',
            'buy-to-let': 'Buy To Let',
            'new-build': 'New Build',
            'help-to-buy': 'Help To Buy',
            'limited-companies': 'Limited Companies (BTL)'
        };
        return titles[type] || 'Product';
    };

    const getDescription = (type: string) => {
        const descriptions: { [key: string]: string } = {
            'first-time-buyers': 'Get on the property ladder with our comprehensive first-time buyer mortgage options. We\'ll guide you through every step of the process.',
            'home-mover': 'Whether you\'re upsizing, downsizing, or just fancy a change, we\'ll help you find the perfect mortgage for your next move.',
            'remortgage': 'Switch to a better deal and potentially save thousands on your monthly payments with our remortgage options.',
            'buy-to-let': 'Investment property finance with competitive rates and flexible terms for property investors.',
            'new-build': 'Specialist financing for new construction properties with expert advice tailored to new builds.',
            'help-to-buy': 'Government assistance schemes to help you get on the property ladder with reduced deposits.',
            'limited-companies': 'Corporate buy-to-let mortgages for property investment through limited companies.'
        };
        return descriptions[type] || 'Learn more about our mortgage products and services.';
    };

    return (
        <Layout title={`${getTitle(productType || '')} - UK Mortgage Advisor`}>
            <div className="product-page">
                {/* Hero Section */}
                <section className="products-hero">
                    <div className="container">
                        <h1>{getTitle(productType || '')}</h1>
                        <p>{getDescription(productType || '')}</p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="products-grid-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>About {getTitle(productType || '')}</h2>
                            <p>
                                Our expert mortgage advisors are here to help you find the best {getTitle(productType || '').toLowerCase()}
                                options available. With access to over 90 lenders, we'll search the market to find you the most
                                competitive rates and terms.
                            </p>
                        </div>

                        <div className="product-features">
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h3>Expert Advice</h3>
                                    <p>Our FCA-regulated advisors provide personalized guidance throughout your mortgage journey.</p>
                                </div>
                                <div className="feature-item">
                                    <h3>Whole of Market</h3>
                                    <p>Access to over 90 lenders means we can find you the most competitive rates available.</p>
                                </div>
                                <div className="feature-item">
                                    <h3>No Advisor Fees</h3>
                                    <p>Our mortgage advice is completely free to you - we're paid by the lender when your mortgage completes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="products-cta">
                    <div className="container">
                        <h2>Ready to Get Started?</h2>
                        <p>Contact us today for your free mortgage consultation and discover how much you could save.</p>
                        <div className="cta-buttons">
                            <Link to="/contact">
                                <Button variant="primary" size="large">Get Free Advice</Button>
                            </Link>
                            <Button variant="secondary" size="large">Call 0800 123 4567</Button>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default ProductPage;