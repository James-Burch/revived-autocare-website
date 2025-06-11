import React, { useState } from 'react';
import { Layout, Button, Card, Modal } from '../components';
import MortgageCalculator from '../components/MortgageCalculator';
import LoanPrograms from '../components/LoanPrograms';

const Home: React.FC = () => {
 const [showCalculator, setShowCalculator] = useState(false);

 const services = [
   {
     title: "Residential Mortgages",
     description: "Competitive rates for first-time buyers, home movers, and remortgaging clients across the UK.",
     icon: "🏠"
   },
   {
     title: "Remortgaging",
     description: "Switch to a better deal and potentially save thousands on your monthly payments.",
     icon: "🔄"
   },
   {
     title: "Buy-to-Let Mortgages", 
     description: "Specialist financing for property investors with competitive rates and flexible terms.",
     icon: "🏛️"
   },
   {
     title: "Help to Buy",
     description: "Government schemes to help first-time buyers get on the property ladder with smaller deposits.",
     icon: "🎖️"
   },
   {
     title: "Right to Buy",
     description: "Specialist advice for council tenants looking to purchase their homes at a discount.",
     icon: "💎"
   },
   {
     title: "Commercial Mortgages",
     description: "Business property financing for offices, retail units, and commercial investments.",
     icon: "📈"
   }
 ];

 const stats = [
   { number: "£2.8B+", label: "Mortgages Arranged" },
   { number: "8,500+", label: "Happy Customers" },
   { number: "4.9/5", label: "Trustpilot Rating" },
   { number: "18+", label: "Years Experience" }
 ];

 return (
   <Layout title="UK Mortgage Broker - Best Rates Guaranteed">
     <div className="mortgage-home">
       {/* Hero Section */}
       <section className="hero-section">
         <div className="container">
           <div className="hero-content">
             <div className="hero-text">
               <h1>UK's Leading Mortgage Broker</h1>
               <p className="hero-subtitle">
                 Access exclusive rates from 90+ lenders. Get your Agreement in Principle 
                 in minutes and save thousands with our expert mortgage advice.
               </p>
               <div className="hero-buttons">
                 <Button variant="primary" size="large">
                   Get Agreement in Principle
                 </Button>
                 <Button 
                   variant="outline" 
                   size="large"
                   onClick={() => setShowCalculator(true)}
                 >
                   Calculate Payments
                 </Button>
               </div>
               <div className="hero-features">
                 <span>✓ Whole of market access</span>
                 <span>✓ No broker fees</span>
                 <span>✓ FCA regulated advisers</span>
               </div>
             </div>
             <div className="hero-image">
               <div className="rate-card">
                 <h3>Today's Best Rates</h3>
                 <div className="rate-item">
                   <span>2-Year Fixed</span>
                   <span className="rate">4.89%</span>
                 </div>
                 <div className="rate-item">
                   <span>5-Year Fixed</span>
                   <span className="rate">4.65%</span>
                 </div>
                 <div className="rate-item">
                   <span>10-Year Fixed</span>
                   <span className="rate">4.95%</span>
                 </div>
                 <div className="rate-item">
                   <span>Tracker Rate</span>
                   <span className="rate">5.25%</span>
                 </div>
                 <small>*Rates from 4.65% APRC. Representative example based on 60% LTV.</small>
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
             <p>Comprehensive mortgage solutions from experienced, FCA-regulated advisers</p>
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

       {/* Benefits Section */}
       <section className="benefits-section">
         <div className="container">
           <div className="section-header">
             <h2>Why Choose Our Mortgage Service?</h2>
           </div>
           <div className="benefits-grid">
             <Card className="benefit-card" hoverable>
               <div className="benefit-icon">🏆</div>
               <h3>Award-Winning Service</h3>
               <p>
                 Winner of 'Best Mortgage Broker 2024' with over 18 years of experience 
                 helping clients secure the best mortgage deals.
               </p>
             </Card>
             
             <Card className="benefit-card" hoverable>
               <div className="benefit-icon">💰</div>
               <h3>No Broker Fees</h3>
               <p>
                 Our mortgage advice is completely free to you. We're paid by the lender 
                 only when your mortgage completes successfully.
               </p>
             </Card>
             
             <Card className="benefit-card" hoverable>
               <div className="benefit-icon">🔒</div>
               <h3>FCA Regulated</h3>
               <p>
                 Fully regulated by the Financial Conduct Authority, giving you complete 
                 peace of mind and protection when choosing your mortgage.
               </p>
             </Card>
             
             <Card className="benefit-card" hoverable>
               <div className="benefit-icon">⚡</div>
               <h3>Fast Approvals</h3>
               <p>
                 Get your Agreement in Principle in minutes and full mortgage approval 
                 typically within 2-3 weeks with our streamlined process.
               </p>
             </Card>
             
             <Card className="benefit-card" hoverable>
               <div className="benefit-icon">🏪</div>
               <h3>Whole of Market</h3>
               <p>
                 Access to over 90 lenders including exclusive rates not available 
                 directly to the public or through other brokers.
               </p>
             </Card>
             
             <Card className="benefit-card" hoverable>
               <div className="benefit-icon">📞</div>
               <h3>Personal Service</h3>
               <p>
                 Dedicated mortgage adviser from start to finish, available 7 days 
                 a week to guide you through every step of the process.
               </p>
             </Card>
           </div>
         </div>
       </section>

       {/* CTA Section */}
       <section className="cta-section">
         <div className="container">
           <div className="cta-content">
             <h2>Ready to Find Your Perfect Mortgage?</h2>
             <p>
               Join thousands of satisfied customers who've saved money with our expert mortgage advice. 
               Get your free consultation today and discover how much you could save.
             </p>
             <div className="cta-buttons">
               <Button variant="primary" size="large">
                 Get Free Mortgage Advice
               </Button>
               <Button variant="secondary" size="large">
                 Call 0800 123 4567
               </Button>
             </div>
             <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.9 }}>
               Your home may be repossessed if you do not keep up repayments on your mortgage.
             </p>
           </div>
         </div>
       </section>

       {/* Calculator Modal */}
       <Modal 
         isOpen={showCalculator}
         onClose={() => setShowCalculator(false)}
         title="UK Mortgage Calculator"
         size="large"
       >
         <MortgageCalculator />
       </Modal>
     </div>
   </Layout>
 );
};

export default Home;
