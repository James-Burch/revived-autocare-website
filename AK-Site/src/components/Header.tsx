import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface ProductItem {
  name: string;
  path: string;
  description?: string;
}

const Header: React.FC = () => {
  const location = useLocation();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const products: ProductItem[] = [
    { name: 'Purchase (First Time Buyers)', path: '/products/first-time-buyers', description: 'Get on the property ladder' },
    { name: 'Home Mover', path: '/products/home-mover', description: 'Moving to your next home' },
    { name: 'Remortgage', path: '/products/remortgage', description: 'Switch to a better deal' },
    { name: 'Buy To Let', path: '/products/buy-to-let', description: 'Investment property finance' },
    { name: 'New Build', path: '/products/new-build', description: 'New construction financing' },
    { name: 'Help To Buy', path: '/products/help-to-buy', description: 'Government assistance schemes' },
    { name: 'Limited Companies (BTL)', path: '/products/limited-companies', description: 'Corporate buy-to-let' },
    { name: 'Mortgage Calculators', path: '/calculators', description: 'Plan your mortgage' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const isProductsActive = location.pathname.startsWith('/products') || location.pathname.startsWith('/calculators');

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>UK Mortgage Advisor - Best Rates Guaranteed</h1>
          </Link>

          <nav className="nav">
            <Link
              to="/"
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div className="nav-dropdown" ref={dropdownRef}>
              <button
                className={`nav-link dropdown-toggle ${isProductsActive ? 'active' : ''}`}
                onClick={toggleProducts}
                aria-expanded={isProductsOpen}
              >
                Products
                <span className={`dropdown-arrow ${isProductsOpen ? 'open' : ''}`}>▼</span>
              </button>

              <div className={`dropdown-menu ${isProductsOpen ? 'open' : ''}`}>
                <div className="dropdown-content">
                  <div className="dropdown-section">
                    <h4>Mortgage Products</h4>
                    {products.slice(0, 6).map((product) => (
                      <Link
                        key={product.path}
                        to={product.path}
                        className="dropdown-item"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        <div className="item-content">
                          <span className="item-name">{product.name}</span>
                          {product.description && (
                            <span className="item-description">{product.description}</span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="dropdown-section">
                    <h4>Additional Services</h4>
                    {products.slice(6).map((product) => (
                      <Link
                        key={product.path}
                        to={product.path}
                        className="dropdown-item"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        <div className="item-content">
                          <span className="item-name">{product.name}</span>
                          {product.description && (
                            <span className="item-description">{product.description}</span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;