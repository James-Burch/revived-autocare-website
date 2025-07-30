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
            'limited-companies': 'Limited Companies (BTL)',
            'bridging-loans': 'Bridging Loans',
        };
        return titles[type] || 'Product';
    };

    const getDescription = (type: string) => {
        const descriptions: { [key: string]: string } = {
            'first-time-buyers': 'Buying your first home can feel daunting — but it does not have to be. The idea of becoming a first-time buyer can be overwhelming, especially when you are faced with so many lenders, mortgage products, and industry jargon. Sure, you could spend hours researching online, calling banks, and trying to compare offers — but why not let us take the stress off your shoulders? We will take the time to sit down with you, understand what is important to you, and guide you through the entire process. We search the whole market to find a mortgage that suits your needs, and once we have found the right deal, we will arrange an Agreement in Principle — something most estate agents or sellers will expect before accepting your offer. We also explore a full range of options, including Guarantor Mortgages and Shared Ownership or Shared Equity schemes, to make sure you are fully aware of what is available. And when you have found the perfect property, we will continue to support you — liaising with estate agents, solicitors, and surveyors to help everything go smoothly from start to finish.',
            'home-mover': 'Moving home can be stressful — but your mortgage does not have to be. Whether you are searching for a new deal or considering transferring or porting your existing mortgage to your next home, we will walk you through the options and help you choose what works best for your circumstances. From the early stages — working out the true cost of moving, how much you can borrow, and what your monthly repayments might look like — we will make sure your finances are in order before you have even found your next place. We search the market to find a mortgage tailored to your needs, and we will always offer clear, honest advice to help you make confident decisions. Our goal is to make your move as smooth and stress-free as possible.',
            'remortgage': 'Thinking about remortgaging? Whether it is about saving money or unlocking new opportunities, we are here to help you make the right move. You might be looking to reduce your monthly repayments, concerned about rising interest rates, or thinking about releasing equity — whether that is for home improvements, consolidating debts into one manageable payment, investing in a new venture, or helping a loved one onto the property ladder. Whatever your motivation, we will provide clear, unbiased advice and search the market to find a mortgage deal that fits your unique situation. Even if you are not sure it is the right time, it can be worth reviewing your current mortgage. We will carry out a full review and let you know if there is a better option available. A quick check could end up saving you thousands over the long term.',
            'buy-to-let': 'The rental market remains highly active across the UK, making buy-to-let an appealing route for both new and experienced property investors. With many first-time buyers still struggling to get on the ladder, the demand for good rental properties continues to grow — and shows no signs of slowing down. Whether you are purchasing your first buy-to-let, remortgaging an existing property, or managing a larger portfolio, we will provide clear, tailored advice and search the market to find the most suitable mortgage solutions for your individual needs.',
            'lifetime-mortgages': 'We are proud to collaborate with a specialist in lifetime mortgages. If you are thinking about accessing the equity in your home — whether to enjoy a dream holiday, help family members onto the property ladder, fund home improvements, or simply improve your lifestyle — a lifetime mortgage could be the right choice. The lifetime mortgage market has expanded to offer a range of flexible options. You can choose to pay the interest monthly or let it accumulate over time. Plus, you can decide to take a lump sum, receive a regular income, or combine both to best fit your needs. Because a lifetime mortgage is a major financial decision, we will also review other possibilities with you, including traditional mortgages, Retirement Interest Only (RIO) loans, or whether borrowing is the best path given your circumstances. Important: Lifetime mortgages are long-term agreements. Please ask for a personalised illustration to fully understand the features and risks. Make sure this option fits your future plans, especially if you intend to move, sell your home, or want to leave an inheritance. Independent advice is strongly recommended if you have any doubts.',
            'new-build': 'Specialist financing for new construction properties with expert advice tailored to new builds.',
            'help-to-buy': 'Government assistance schemes to help you get on the property ladder with reduced deposits.',
            'limited-companies': 'Corporate buy-to-let mortgages for property investment through limited companies.',
            'bridging-loans': 'Short-term financing solutions to bridge the gap between property transactions'
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