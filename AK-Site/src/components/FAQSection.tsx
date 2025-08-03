import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./";

interface FAQItem {
  question: string;
  answer: string;
  icon: string;
}

interface FAQSectionProps {
  className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ className = "" }) => {
  const faqItems: FAQItem[] = [
    {
      question: "How much can I borrow for a mortgage?",
      answer:
        "Most lenders will lend up to 4.5 times your annual income, though this can vary. We assess your full financial situation including income, expenses, and credit history to find you the best deal from our panel of 90+ lenders.",
      icon: "💰",
    },
    {
      question: "What's involved in the mortgage application process?",
      answer:
        "We handle all the paperwork, liaise with lenders on your behalf, and guide you through each step of the process. Our expert team ensures a smooth journey from initial consultation to completion, taking care of all the complex details so you don't have to.",
      icon: "⏱️",
    },
    {
      question: "Do I need a deposit to buy a house?",
      answer:
        "While most mortgages require a deposit, the amount varies. First-time buyers can get mortgages with as little as 5% deposit. We'll help you explore all options including government schemes and 95% LTV mortgages.",
      icon: "🏠",
    },
  ];

  return (
    <section
      className={`faq-section ${className}`}
      aria-label="Frequently Asked Questions"
    >
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
                {/* Leave button in place for future implementation */}
                {/* <button
                  className="faq-learn-more"
                  aria-label={`Learn more about: ${item.question}`}
                >
                  Learn More →
                </button> */}
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
