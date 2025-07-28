import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './';

interface ServiceCardProps {
  title: string;
  description?: string;
  icon: string;
  link: string;
  isActive?: boolean;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  isActive = false,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (description) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.location.href = link;
  };

  // For cards without description (like additional services)
  if (!description) {
    return (
      <div 
        className={`service-card-new ${className.includes('additional') ? 'additional' : ''}`}
        onClick={handleClick}
      >
        <div className="service-icon-new">{icon}</div>
        <h3>{title}</h3>
      </div>
    );
  }

  // For cards with description, use simple hover effect (no flipping)
  return (
    <div 
      className={`service-card-interactive ${className} ${isHovered || isActive ? 'flipped' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="service-icon-new">{icon}</div>
      <h3>{title}</h3>
      
      {description && (
        <>
          <div className="card-description">
            {description}
          </div>
          <div className="card-actions">
            <Link to={link}>
              <Button variant="outline" size="small">Learn More</Button>
            </Link>
            <div className="arrow-icon">→</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceCard;