import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

interface NavigationItem {
  name: string;
  path: string;
}

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMortgagesOpen, setIsMortgagesOpen] = useState(false);
  const [isInsuranceOpen, setIsInsuranceOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMortgagesOpen, setIsMobileMortgagesOpen] = useState(false);
  const [isMobileInsuranceOpen, setIsMobileInsuranceOpen] = useState(false);
  const mortgagesDropdownRef = useRef<HTMLDivElement>(null);
  const insuranceDropdownRef = useRef<HTMLDivElement>(null);

  const mortgages: NavigationItem[] = [
    { name: 'First Time Buyers', path: '/mortgages/first-time-buyers' },
    { name: 'Home Mover', path: '/mortgages/home-mover' },
    { name: 'Remortgage', path: '/mortgages/remortgage' },
    { name: 'Buy to Let', path: '/mortgages/buy-to-let' },
    { name: 'New Build', path: '/mortgages/new-build' },
    { name: 'Help to Buy', path: '/mortgages/help-to-buy' },
    { name: 'Limited Companies', path: '/mortgages/limited-companies' },
    { name: 'Bridging Loans', path: '/mortgages/bridging-loans' }
  ];

  const insurance: NavigationItem[] = [
    { name: 'Life Insurance', path: '/insurance/life-insurance' },
    { name: 'Income Protection', path: '/insurance/income-protection' },
    { name: 'Critical Illness', path: '/insurance/critical-illness' },
    { name: 'Accident, Sickness & Unemployment', path: '/insurance/accident-sickness-unemployment' },
    { name: 'Home, Buildings & Contents Insurance', path: '/insurance/home-buildings-contents' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mortgagesDropdownRef.current && !mortgagesDropdownRef.current.contains(event.target as Node)) {
        setIsMortgagesOpen(false);
      }
      if (insuranceDropdownRef.current && !insuranceDropdownRef.current.contains(event.target as Node)) {
        setIsInsuranceOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Enhanced keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMortgagesOpen(false);
        setIsInsuranceOpen(false);
        setIsMobileMenuOpen(false);
        setIsMobileMortgagesOpen(false);
        setIsMobileInsuranceOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleMortgages = () => {
    setIsMortgagesOpen(!isMortgagesOpen);
    setIsInsuranceOpen(false);
  };

  const toggleInsurance = () => {
    setIsInsuranceOpen(!isInsuranceOpen);
    setIsMortgagesOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close dropdowns when toggling mobile menu
    if (!isMobileMenuOpen) {
      setIsMobileMortgagesOpen(false);
      setIsMobileInsuranceOpen(false);
    }
  };

  const toggleMobileMortgages = () => {
    setIsMobileMortgagesOpen(!isMobileMortgagesOpen);
  };

  const toggleMobileInsurance = () => {
    setIsMobileInsuranceOpen(!isMobileInsuranceOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileMortgagesOpen(false);
    setIsMobileInsuranceOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    closeMobileMenu();
  };

  const isMortgagesActive = location.pathname.startsWith('/mortgages');
  const isInsuranceActive = location.pathname.startsWith('/insurance');

  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="header-content">
          {/* Single Logo - Responsive variants handled by CSS */}
          <Logo
            variant="full"
            size="md"
            onClick={handleLogoClick}
            className="header-logo"
          />

          {/* Desktop Navigation */}
          <nav className="nav" role="navigation" aria-label="Main navigation">
            <Link
              to="/"
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
              aria-current={location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>

            {/* Mortgages Dropdown */}
            <div className="nav-dropdown" ref={mortgagesDropdownRef}>
              <button
                className={`nav-link dropdown-toggle ${isMortgagesActive ? 'active' : ''}`}
                onClick={toggleMortgages}
                aria-expanded={isMortgagesOpen}
                aria-haspopup="true"
                aria-label="Mortgages menu"
              >
                Mortgages
                <span className={`dropdown-arrow ${isMortgagesOpen ? 'open' : ''}`} aria-hidden="true">▼</span>
              </button>

              <div
                className={`dropdown-menu ${isMortgagesOpen ? 'open' : ''}`}
                role="menu"
                aria-labelledby="mortgages-dropdown"
              >
                <div className="dropdown-content">
                  {mortgages.map((mortgage) => (
                    <Link
                      key={mortgage.path}
                      to={mortgage.path}
                      className="dropdown-item"
                      role="menuitem"
                      onClick={() => setIsMortgagesOpen(false)}
                      tabIndex={isMortgagesOpen ? 0 : -1}
                    >
                      <div className="item-content">
                        <span className="item-name">{mortgage.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Insurance Dropdown */}
            <div className="nav-dropdown" ref={insuranceDropdownRef}>
              <button
                className={`nav-link dropdown-toggle ${isInsuranceActive ? 'active' : ''}`}
                onClick={toggleInsurance}
                aria-expanded={isInsuranceOpen}
                aria-haspopup="true"
                aria-label="Insurance menu"
              >
                Insurance
                <span className={`dropdown-arrow ${isInsuranceOpen ? 'open' : ''}`} aria-hidden="true">▼</span>
              </button>

              <div
                className={`dropdown-menu ${isInsuranceOpen ? 'open' : ''}`}
                role="menu"
                aria-labelledby="insurance-dropdown"
              >
                <div className="dropdown-content">
                  {insurance.map((insuranceItem) => (
                    <Link
                      key={insuranceItem.path}
                      to={insuranceItem.path}
                      className="dropdown-item"
                      role="menuitem"
                      onClick={() => setIsInsuranceOpen(false)}
                      tabIndex={isInsuranceOpen ? 0 : -1}
                    >
                      <div className="item-content">
                        <span className="item-name">{insuranceItem.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/mortgage-calculator"
              className={location.pathname === '/mortgage-calculator' ? 'nav-link active' : 'nav-link'}
              aria-current={location.pathname === '/mortgage-calculator' ? 'page' : undefined}
            >
              Calculator
            </Link>

            <Link
              to="/contact"
              className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
              aria-current={location.pathname === '/contact' ? 'page' : undefined}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            <span className="hamburger-icon" aria-hidden="true">
              {isMobileMenuOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open fade-in-up' : ''}`}
        id="mobile-nav-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-nav-title"
      >
        <div className="mobile-nav-header">
          <Logo
            variant="compact"
            size="md"
            onClick={handleLogoClick}
            className="logo-mobile-nav"
          />
          <button
            onClick={closeMobileMenu}
            className="mobile-close-btn"
            aria-label="Close navigation menu"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <nav className="mobile-nav-menu" role="navigation" aria-label="Mobile navigation">
          <Link
            to="/"
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            onClick={closeMobileMenu}
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>

          {/* Mobile Mortgages Dropdown */}
          <div>
            <button
              className="mobile-dropdown-toggle"
              onClick={toggleMobileMortgages}
              aria-expanded={isMobileMortgagesOpen}
              aria-controls="mobile-mortgages-menu"
            >
              Mortgages
              <span aria-hidden="true">{isMobileMortgagesOpen ? '▲' : '▼'}</span>
            </button>

            <div
              className={`mobile-dropdown-menu ${isMobileMortgagesOpen ? 'open fade-in-up' : ''}`}
              id="mobile-mortgages-menu"
            >
              {mortgages.map((mortgage) => (
                <Link
                  key={mortgage.path}
                  to={mortgage.path}
                  className="dropdown-item"
                  onClick={closeMobileMenu}
                >
                  {mortgage.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Insurance Dropdown */}
          <div>
            <button
              className="mobile-dropdown-toggle"
              onClick={toggleMobileInsurance}
              aria-expanded={isMobileInsuranceOpen}
              aria-controls="mobile-insurance-menu"
            >
              Insurance
              <span aria-hidden="true">{isMobileInsuranceOpen ? '▲' : '▼'}</span>
            </button>

            <div
              className={`mobile-dropdown-menu ${isMobileInsuranceOpen ? 'open fade-in-up' : ''}`}
              id="mobile-insurance-menu"
            >
              {insurance.map((insuranceItem) => (
                <Link
                  key={insuranceItem.path}
                  to={insuranceItem.path}
                  className="dropdown-item"
                  onClick={closeMobileMenu}
                >
                  {insuranceItem.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/mortgage-calculator"
            className={location.pathname === '/mortgage-calculator' ? 'nav-link active' : 'nav-link'}
            onClick={closeMobileMenu}
            aria-current={location.pathname === '/mortgage-calculator' ? 'page' : undefined}
          >
            Calculator
          </Link>

          <Link
            to="/contact"
            className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
            onClick={closeMobileMenu}
            aria-current={location.pathname === '/contact' ? 'page' : undefined}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;