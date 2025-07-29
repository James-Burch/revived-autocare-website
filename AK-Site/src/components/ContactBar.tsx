import React from 'react';

// --- Helper Icon Components (Inline SVGs) ---
const MailIcon = ({ className = '' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

const PhoneIcon = ({ className = '' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const MessageIcon = ({ className = '' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

// --- Component Definition ---
interface ContactBarProps {
    className?: string;
}

const ContactBar: React.FC<ContactBarProps> = ({ className = '' }) => {
    return (
        <div className={`contact-bar ${className}`}>
            <div className="contact-bar-container">
                <div className="contact-message">
                    <p>Got a question? Contact us today!</p>
                </div>
                
                <div className="contact-info">
                    <a 
                        href="mailto:admin@youremailhere.co.uk" 
                        className="contact-link"
                        aria-label="Send email to admin@youremailhere.co.uk"
                    >
                        <MailIcon className="contact-icon" />
                        <span>admin@youremailhere.co.uk</span>
                    </a>
                    
                    <a 
                        href="tel:01536428824" 
                        className="contact-link"
                        aria-label="Call 01536 428824"
                    >
                        <PhoneIcon className="contact-icon" />
                        <span>0800 123 4567</span>
                    </a>
                    
                    <div className="contact-text">
                        <MessageIcon className="contact-icon" />
                        <span>Text: 07123 456789</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactBar;