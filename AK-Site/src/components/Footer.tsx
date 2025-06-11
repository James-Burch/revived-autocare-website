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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
