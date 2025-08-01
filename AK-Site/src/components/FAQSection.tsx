// import React from 'react';
// import { Link } from 'react-router-dom';

// interface FAQItem {
//     question: string;
//     answer: string;
//     icon: string;
// }

// interface FAQSectionProps {
//     className?: string;
// }

// const FAQSection: React.FC<FAQSectionProps> = ({ className = '' }) => {
//     const faqItems: FAQItem[] = [
//         {
//             question: "How much can I borrow for a mortgage?",
//             answer: "Most lenders will lend up to 4.5 times your annual income, though this can vary. We assess your full financial situation including income, expenses, and credit history to find you the best deal from our panel of 90+ lenders.",
//             icon: "💰"
//         },
//         {
//             question: "How long does the mortgage process take?",
//             answer: "Typically 2-6 weeks from application to completion. We streamline the process by handling all paperwork and liaising with lenders directly. Get your Agreement in Principle in just 24 hours with our expert guidance.",
//             icon: "⏱️"
//         },
//         {
//             question: "Do I need a deposit to buy a house?",
//             answer: "While most mortgages require a deposit, the amount varies. First-time buyers can get mortgages with as little as 5% deposit. We'll help you explore all options including government schemes and 95% LTV mortgages.",
//             icon: "🏠"
//         }
//     ];

//     return (
//         <section className={`faq-section ${className}`} aria-label="Frequently Asked Questions">
//             <div className="container">
//                 <div className="faq-header">
//                     <h2>Frequently Asked Questions</h2>
//                     <p>Get instant answers to the most common mortgage questions</p>
//                 </div>

//                 <div className="faq-grid">
//                     {faqItems.map((item, index) => (
//                         <article key={index} className="faq-card">
//                             <div className="faq-card-header">
//                                 <div className="faq-icon" aria-hidden="true">
//                                     {item.icon}
//                                 </div>
//                                 <h3>{item.question}</h3>
//                             </div>
//                             <div className="faq-card-content">
//                                 <p>{item.answer}</p>
//                                 <button
//                                     className="faq-learn-more"
//                                     aria-label={`Learn more about: ${item.question}`}
//                                 >
//                                     Learn More →
//                                 </button>
//                             </div>
//                         </article>
//                     ))}
//                 </div>

//                 <div className="faq-footer">
//                     <p>Still have questions?</p>
//                     <div className="faq-actions">
//                         <Link to="/contact">
//                             <button className="faq-contact-btn primary">
//                                 Speak to an Advisor
//                             </button>
//                         </Link>

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FAQSection;

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './';

interface FAQItem {
    question: string;
    answer: string;
    icon: string;
}

interface FAQSectionProps {
    className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ className = '' }) => {
    const faqItems: FAQItem[] = [
        {
            question: "How much can I borrow for a mortgage?",
            answer: "Most lenders will lend up to 4.5 times your annual income, though this can vary. We assess your full financial situation including income, expenses, and credit history to find you the best deal from our panel of 90+ lenders.",
            icon: "💰"
        },
        {
            question: "How long does the mortgage process take?",
            answer: "Typically 2-6 weeks from application to completion. We streamline the process by handling all paperwork and liaising with lenders directly. Get your Agreement in Principle in just 24 hours with our expert guidance.",
            icon: "⏱️"
        },
        {
            question: "Do I need a deposit to buy a house?",
            answer: "While most mortgages require a deposit, the amount varies. First-time buyers can get mortgages with as little as 5% deposit. We'll help you explore all options including government schemes and 95% LTV mortgages.",
            icon: "🏠"
        }
    ];

    return (
        <section className={`faq-section ${className}`} aria-label="Frequently Asked Questions">
            <div className="container">
                <div className="faq-header">
                    <h2>Frequently Asked Questions</h2>
                    <p>Get instant answers to the most common mortgage questions</p>
                </div>

                <div className="faq-grid">
                    {faqItems.map((item, index) => (
                        <article key={index} className="faq-card">
                            <div className="faq-card-header">
                                <div className="faq-icon" aria-hidden="true">
                                    {item.icon}
                                </div>
                                <h3>{item.question}</h3>
                            </div>
                            <div className="faq-card-content">
                                <p>{item.answer}</p>
                                <button
                                    className="faq-learn-more"
                                    aria-label={`Learn more about: ${item.question}`}
                                >
                                    Learn More →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="faq-footer">
                    <p>Still have questions?</p>
                    <div className="faq-actions">
                        <Link to="/contact">
                            <Button variant="primary" size="lg">
                                Speak to an Advisor
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;