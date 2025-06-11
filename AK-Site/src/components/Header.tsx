import React from 'react';

interface HeaderProps {
  title?: string;
  showNav?: boolean;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  title = "My React App", 
  showNav = true,
  className = ""
}) => {
  return (
    <header className={`header ${className}`}>
      <div className="header-container">
        <h1 className="header-title">{title}</h1>
        {showNav && (
          <nav className="header-nav">
            <a href="/" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/contact" className="nav-link">Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
