import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  image,
  imageAlt = '',
  className = '',
  onClick,
  hoverable = false
}) => {
  const cardClass = [
    'card',
    hoverable ? 'card--hoverable' : '',
    onClick ? 'card--clickable' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClass} onClick={onClick}>
      {image && (
        <div className="card-image">
          <img src={image} alt={imageAlt} />
        </div>
      )}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        <div className="card-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
