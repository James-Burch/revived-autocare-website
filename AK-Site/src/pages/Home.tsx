import React from 'react';
import { Layout, Button } from '../components';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServicesGrid from '../components/ServicesGrid';
import ChatWidget from '../components/ChatWidget';

const Home: React.FC = () => {
  // Service data configuration
  const mainServices = [
    {
      id: 'first-time-buyers',
      title: 'Purchase (First Time Buyers)',
      description: 'Get on the property ladder with our first-time buyer mortgage options.',
      icon: '🏠',
      link: '/products/first-time-buyers'
    },
    {
      id: 'home-mover',
      title: 'Home Mover',
      description: 'Whether it be upsize, downsize or just because you fancy a change...',
      icon: '🔄',
      link: '/products/home-mover'
    },
    {
      id: 'remortgage',
      title: 'Remortgage',
      description: 'Switch to a better deal and potentially save thousands on your monthly payments.',
      icon: '💱',
      link: '/products/remortgage'
    },
    {
      id: 'buy-to-let',
      title: 'Buy To Let',
      description: 'Investment property finance with competitive rates and flexible terms.',
      icon: '🏢',
      link: '/products/buy-to-let'
    },
    {
      id: 'new-build',
      title: 'New Build',
      description: 'New construction financing with specialist advice for new builds.',
      icon: '🏗️',
      link: '/products/new-build'
    },
    {
      id: 'help-to-buy',
      title: 'Help To Buy',
      description: 'Government assistance schemes to help you get on the property ladder.',
      icon: '🎯',
      link: '/products/help-to-buy'
    }
  ];

  const additionalServices = [
    {
      id: 'limited-companies',
      title: 'Limited Companies (BTL)',
      icon: '🏛️',
      link: '/products/limited-companies'
    },
    {
      id: 'calculators',
      title: 'Mortgage Calculators',
      icon: '📊',
      link: '/calculators'
    }
  ];

  return (
    <Layout title="UK Mortgage Advisor - Best Rates Guaranteed">
      <div className="home-page">
        {/* Hero Section */}
        <HeroSection
          title="WE KEEP THINGS SIMPLE"
          subtitle="BECAUSE LIFE IS COMPLICATED ENOUGH."
          description="Whatever your financial needs, from mortgages to protection insurance, you can rely on us for clear, uncomplicated choices for your next move."
          primaryButtonText="Contact us"
          primaryButtonLink="/contact"
          secondaryButtonText="Meet Our Team"
          secondaryButtonLink="/about"
          showContactWidget={false}
        />

        {/* Our Lenders Section */}
        <section className="lenders-section">
          <div className="container">
            <div className="section-header">
              <h2>Our Lenders</h2>
              <p>
                We're not limited by a handful of lenders, we have access to the biggest players 
                in the market as well as niche lenders. We'll search over 90 lenders to find you 
                the right available product tailored to you and your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <ServicesGrid 
          services={mainServices}
          additionalServices={additionalServices}
        />

        {/* Client Reviews Section */}
        <section className="reviews-section">
          <div className="container">
            <div className="section-header">
              <h2>Our Clients' Reviews</h2>
              <h3>Insurance</h3>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-content">
              <h2>Got a question? Contact us today!</h2>
              <div className="contact-methods">
                <div className="contact-method">
                  <span>📧</span>
                  <span>admin@example.co.uk</span>
                </div>
                <div className="contact-method">
                  <span>📞</span>
                  <span>01234 567890</span>
                  <span>Text: 07123456789</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-new">
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

        {/* Floating Chat Widget */}
        <ChatWidget />
      </div>
    </Layout>
  );
};

export default Home;
