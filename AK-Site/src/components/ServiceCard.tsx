import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  linkTo: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, linkTo, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={linkTo}
      className={`service-card-interactive scroll-animate fade-up ${isHovered ? 'hovered' : ''}`}
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-inner">
        <div className="service-icon-new">
          {icon}
        </div>
        <h3>{title}</h3>
        <p className="card-description">
          {description}
        </p>
        <div className="card-actions">
          <span className="learn-more">Learn More</span>
          <span className="arrow-icon">→</span>
        </div>

        {/* Hover effect elements */}
        <div className="card-glow"></div>
        <div className="card-shine"></div>
      </div>
    </Link>
  );
};

export default ServiceCard;