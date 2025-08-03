import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com/burchstudio', external: true },
    { label: 'TikTok', href: 'https://tiktok.com/@burchstudio', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/jamesburch', external: true },
    { label: 'GitHub', href: 'https://github.com/James-Burch', external: true },
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Templates', href: '/templates' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-charcoal section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              Burch<span className="text-electric-green">.</span>
            </div>
            <p className="text-gray-300 text-sm">
              Building modern, responsive websites and applications for small businesses and startups.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-electric-green transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-electric-green transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Burch Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
