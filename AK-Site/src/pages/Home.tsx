import React, { useState } from 'react';
import { Layout, Button, Card, Modal } from '../components';
import MortgageCalculator from '../components/MortgageCalculator';
import LoanPrograms from '../components/LoanPrograms';

const Home: React.FC = () => {
  const [showCalculator, setShowCalculator] = useState(false);

  const services = [
    {
      title: "Home Purchase Loans",
      description: "Find the perfect mortgage for your dream home with competitive rates and flexible terms.",
      icon: "🏠"
    },
    {
      title: "Refinancing",
      description: "Lower your monthly payments or tap into your home's equity with our refinancing options.",
      icon: "🔄"
    },
    {
      title: "FHA Loans", 
      description: "Government-backed loans with low down payments and flexible credit requirements.",
      icon: "🏛️"
    },
    {
      title: "VA Loans",
      description: "Zero down payment loans exclusively for veterans and active military personnel.",
      icon: "🎖️"
    },
    {
      title: "Jumbo Loans",
      description: "Financing for luxury homes and high-value properties that exceed conforming limits.",
      icon: "��"
    },
    {
      title: "Investment Properties",
      description: "Specialized financing solutions for rental properties and real estate investments.",
      icon: "📈"
    }
  ];

  const stats = [
    { number: "5,000+", label: "Happy Homeowners" },
    { number: "$2.5B+", label: "Loans Funded" },
    { number: "4.8/5", label: "Customer Rating" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <Layout title="Premier Mortgage Solutions">
      <div className="mortgage-home">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>Your Trusted Mortgage Partner</h1>
                <p className="hero-subtitle">
                  Get pre-approved in minutes with competitive rates, expert guidance, 
                  and personalized service. We make home financing simple and stress-free.
                </p>
                <div className="hero-buttons">
                  <Button variant="primary" size="large">
                    Get Pre-Approved
                  </Button>
                  <Button 
                    variant="outline" 
                    size="large"
                    onClick={() => setShowCalculator(true)}
                  >
                    Calculate Payment
                  </Button>
                </div>
                <div className="hero-features">
                  <span>✓ No application fees</span>
                  <span>✓ Quick approval process</span>
                  <span>✓ Expert loan officers</span>
                </div>
              </div>
              <div className="hero-image">
                <div className="rate-card">
                  <h3>Today's Rates</h3>
                  <div className="rate-item">
                    <span>30-Year Fixed</span>
                    <span className="rate">6.750%</span>
                  </div>
                  <div className="rate-item">
                    <span>15-Year Fixed</span>
                    <span className="rate">6.125%</span>
                  </div>
                  <div className="rate-item">
                    <span>5/1 ARM</span>
                    <span className="rate">5.875%</span>
                  </div>
                  <small>*Rates updated daily. APR may vary.</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="container">
            <div className="section-header">
              <h2>Our Mortgage Services</h2>
              <p>Comprehensive mortgage solutions tailored to your unique needs</p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => (
                <Card key={index} className="service-card" hoverable>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Button variant="outline" size="small">
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Programs Section */}
        <LoanPrograms />

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Get Started?</h2>
              <p>
                Take the first step toward homeownership. Our experienced loan officers 
                are here to guide you through every step of the mortgage process.
              </p>
              <div className="cta-buttons">
                <Button variant="primary" size="large">
                  Apply Now
                </Button>
                <Button variant="secondary" size="large">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Modal */}
        <Modal 
          isOpen={showCalculator}
          onClose={() => setShowCalculator(false)}
          title="Mortgage Calculator"
          size="large"
        >
          <MortgageCalculator />
        </Modal>
      </div>
    </Layout>
  );
};

export default Home;
