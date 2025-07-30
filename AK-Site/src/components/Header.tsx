import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationItem {
  name: string;
  path: string;
}

const Header: React.FC = () => {
  const location = useLocation();
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
    { name: 'Bridging Loans', path: '/mortgages/bridging-loans'}
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

  const toggleMortgages = () => {
    setIsMortgagesOpen(!isMortgagesOpen);
    setIsInsuranceOpen(false); // Close insurance when opening mortgages
  };

  const toggleInsurance = () => {
    setIsInsuranceOpen(!isInsuranceOpen);
    setIsMortgagesOpen(false); // Close mortgages when opening insurance
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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

  const isMortgagesActive = location.pathname.startsWith('/mortgages');
  const isInsuranceActive = location.pathname.startsWith('/insurance');

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Insert Company Name Here Once Decided</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav">
            <Link
              to="/"
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>

            {/* Mortgages Dropdown */}
            <div className="nav-dropdown" ref={mortgagesDropdownRef}>
              <button
                className={`nav-link dropdown-toggle ${isMortgagesActive ? 'active' : ''}`}
                onClick={toggleMortgages}
                aria-expanded={isMortgagesOpen}
              >
                Mortgages
                <span className={`dropdown-arrow ${isMortgagesOpen ? 'open' : ''}`}>▼</span>
              </button>

              <div className={`dropdown-menu ${isMortgagesOpen ? 'open' : ''}`}>
                <div className="dropdown-content">
                  {mortgages.map((mortgage) => (
                    <Link
                      key={mortgage.path}
                      to={mortgage.path}
                      className="dropdown-item"
                      onClick={() => setIsMortgagesOpen(false)}
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
              >
                Insurance
                <span className={`dropdown-arrow ${isInsuranceOpen ? 'open' : ''}`}>▼</span>
              </button>

              <div className={`dropdown-menu ${isInsuranceOpen ? 'open' : ''}`}>
                <div className="dropdown-content">
                  {insurance.map((insuranceItem) => (
                    <Link
                      key={insuranceItem.path}
                      to={insuranceItem.path}
                      className="dropdown-item"
                      onClick={() => setIsInsuranceOpen(false)}
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
            >
              Calculator
            </Link>

            <Link
              to="/contact"
              className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <span className="hamburger-icon">☰</span>
          </button>
        </div>
      </div>

      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open fade-in-up' : ''}`}>
        <div className="mobile-nav-header">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <h2>UK Mortgage Advisor</h2>
          </Link>
          <button
            onClick={closeMobileMenu}
            className="mobile-close-btn"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="mobile-nav-menu">
          <Link
            to="/"
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            onClick={closeMobileMenu}
          >
            Home
          </Link>

          {/* Mobile Mortgages Dropdown */}
          <div>
            <button
              className="mobile-dropdown-toggle"
              onClick={toggleMobileMortgages}
            >
              Mortgages
              <span>{isMobileMortgagesOpen ? '▲' : '▼'}</span>
            </button>

            <div className={`mobile-dropdown-menu ${isMobileMortgagesOpen ? 'open fade-in-up' : ''}`}>
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
            >
              Insurance
              <span>{isMobileInsuranceOpen ? '▲' : '▼'}</span>
            </button>

            <div className={`mobile-dropdown-menu ${isMobileInsuranceOpen ? 'open fade-in-up' : ''}`}>
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
            >
              Calculator
            </Link>

          <Link
            to="/contact"
            className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;