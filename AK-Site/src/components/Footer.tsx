import React from 'react';

interface FooterProps {
  copyright?: string;
  links?: Array<{ label: string; href: string; }>;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  copyright = "© 2025 My React App",
  links = [],
  className = ""
}) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-copyright">{copyright}</p>
          <p className="footer-disclaimer">
            Your home may be repossessed if you do not keep up repayments on your mortgage.
          </p>
          {links.length > 0 && (
            <div className="footer-links">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="footer-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {/* Developer Credits */}
          <div className="footer-credits-small">
            <small>
              <a
                href="https://jamesburch.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="dev-credit"
                aria-label="Website development by James Burch"
              >
                Web Development By James Burch
              </a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;