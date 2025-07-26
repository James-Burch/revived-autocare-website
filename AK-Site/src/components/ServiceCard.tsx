import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '.';

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
  const [isFlipped, setIsFlipped] = useState(isActive);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (description) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!isActive) {
      setIsFlipped(false);
    }
  };

  return (
    <div 
      className={`service-card-interactive ${className} ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-inner">
        {/* Front of card */}
        <div className="card-front">
          <div className="service-icon-new">{icon}</div>
          <h3>{title}</h3>
        </div>
        
        {/* Back of card */}
        {description && (
          <div className="card-back">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="card-actions">
              <Link to={link}>
                <Button variant="secondary" size="small">Learn More</Button>
              </Link>
              <div className="arrow-icon">→</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;