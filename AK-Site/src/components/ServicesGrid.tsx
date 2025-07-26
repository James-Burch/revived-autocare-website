import React from 'react';
import ServiceCard from './ServiceCard';

interface Service {
  id: string;
  title: string;
  description?: string;
  icon: string;
  link: string;
  isActive?: boolean;
}

interface ServicesGridProps {
  services: Service[];
  additionalServices?: Service[];
  className?: string;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({
  services,
  additionalServices = [],
  className = ''
}) => {
  return (
    <section className={`services-new ${className}`}>
      <div className="container">
        {/* Main 6-card grid */}
        <div className="services-grid-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              isActive={service.isActive}
            />
          ))}
        </div>

        {/* Additional services if provided */}
        {additionalServices.length > 0 && (
          <div className="additional-services">
            <div className="services-grid-2">
              {additionalServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  icon={service.icon}
                  link={service.link}
                  className="additional"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;