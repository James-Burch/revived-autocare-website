import React, { useState } from 'react';
import { Layout, Button, UnifiedCard } from '../components';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    mortgageType: '',
    propertyValue: '',
    deposit: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - Replace with actual IDs
      const serviceId = 'YOUR_SERVICE_ID';  // Replace with Service ID
      const templateId = 'YOUR_TEMPLATE_ID'; // Replace with Template ID
      const publicKey = 'YOUR_PUBLIC_KEY';   // Replace with Public Key

      // Template parameters that match your EmailJS template
      const templateParams = {
        to_name: 'Noble Mortgages',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        mortgage_type: formData.mortgageType || 'Not specified',
        property_value: formData.propertyValue || 'Not specified',
        deposit: formData.deposit || 'Not specified',
        message: formData.message || 'No additional message',
        reply_to: formData.email
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setSubmitStatus('success');

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        mortgageType: '',
        propertyValue: '',
        deposit: '',
        message: ''
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');

      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout title="Contact Us - Get Your Free Mortgage Advice">
      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container">
            <h1>Get Your Free Mortgage Advice</h1>
            <p>Complete the form below and one of our expert advisers will be in touch within 24 hours</p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-form-container">
                <UnifiedCard className="contact-form-card">
                  <h2>Tell Us About Your Requirements</h2>

                  {submitStatus === 'success' && (
                    <div className="success-message">
                      <p>✅ Thank you! We've received your enquiry and will be in touch within 24 hours.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="error-message">
                      <p>❌ Sorry, there was an error sending your message. Please try again or call us directly on 0800 123 4567.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          placeholder="07123 456789"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="mortgageType">Mortgage Type</label>
                        <select
                          id="mortgageType"
                          name="mortgageType"
                          value={formData.mortgageType}
                          onChange={handleChange}
                          disabled={isSubmitting}
                        >
                          <option value="">Select mortgage type</option>
                          <option value="first-time-buyer">First Time Buyer</option>
                          <option value="remortgage">Remortgage</option>
                          <option value="home-mover">Home Mover</option>
                          <option value="buy-to-let">Buy-to-Let</option>
                          <option value="self-employed">Self-Employed</option>
                          <option value="new-build">New Build</option>
                          <option value="help-to-buy">Help to Buy</option>
                          <option value="bridging-loan">Bridging Loan</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="propertyValue">Property Value (Optional)</label>
                        <input
                          type="text"
                          id="propertyValue"
                          name="propertyValue"
                          value={formData.propertyValue}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          placeholder="£250,000"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="deposit">Deposit Amount (Optional)</label>
                        <input
                          type="text"
                          id="deposit"
                          name="deposit"
                          value={formData.deposit}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          placeholder="£25,000"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Additional Information</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        disabled={isSubmitting}
                        placeholder="Tell us about your situation, timeline, or any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      loading={isSubmitting}
                      className="submit-button"
                    >
                      {isSubmitting ? 'Sending...' : 'Get Free Mortgage Advice'}
                    </Button>

                    <p className="form-disclaimer">
                      By submitting this form, you consent to being contacted by our mortgage advisers.
                      Your home may be repossessed if you do not keep up repayments on your mortgage.
                    </p>
                  </form>
                </UnifiedCard>
              </div>

              <div className="contact-info">
                <UnifiedCard className="contact-info-card">
                  <h3>Get In Touch</h3>
                  <div className="contact-methods">
                    <div className="contact-method">
                      <strong>📞 Phone</strong>
                      <p><a href="tel:08001234567">0800 123 4567</a></p>
                      <small>Mon-Fri 8am-8pm, Sat 9am-5pm</small>
                    </div>
                    <div className="contact-method">
                      <strong>📧 Email</strong>
                      <p><a href="mailto:admin@noblemortgages.co.uk">admin@noblemortgages.co.uk</a></p>
                      <small>We respond within 24 hours</small>
                    </div>
                    <div className="contact-method">
                      <strong>📍 Office</strong>
                      <p>123 High Street<br />Your Town, AB12 3CD</p>
                      <small>By appointment only</small>
                    </div>
                  </div>
                </UnifiedCard>

                <UnifiedCard className="why-choose-card">
                  <h3>Why Choose Us?</h3>
                  <ul className="benefits-list">
                    <li>✅ No fees to you - completely free advice</li>
                    <li>✅ Access to 90+ lenders</li>
                    <li>✅ FCA regulated for your protection</li>
                    <li>✅ Award-winning service</li>
                    <li>✅ Typically complete in 2-3 weeks</li>
                  </ul>
                </UnifiedCard>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;