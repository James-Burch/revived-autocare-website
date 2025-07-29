// import React from 'react';
// import UnifiedCard from './UnifiedCard';
// import type { ServiceData } from '../data';

// interface ServicesGridProps {
//   services: ServiceData[];
//   additionalServices?: ServiceData[];
//   className?: string;
//   showDescriptions?: boolean;
// }

// const ServicesGrid: React.FC<ServicesGridProps> = ({
//   services,
//   additionalServices = [],
//   className = '',
//   showDescriptions = true
// }) => {
//   return (
//     <section className={`services-new ${className}`}>
//       <div className="container">
//         {/* Main 6-card grid */}
//         {services.length > 0 && (
//           <div className="services-grid-6">
//             {services.map((service) => (
//               <UnifiedCard
//                 key={service.id}
//                 variant="service"
//                 title={service.title}
//                 description={showDescriptions ? service.description : undefined}
//                 icon={service.icon}
//                 linkTo={service.link}
//                 animated={true}
//               />
//             ))}
//           </div>
//         )}

//         {/* Additional services if provided */}
//         {additionalServices.length > 0 && (
//           <div className="additional-services">
//             <div className="services-grid-2">
//               {additionalServices.map((service) => (
//                 <UnifiedCard
//                   key={service.id}
//                   variant="service"
//                   title={service.title}
//                   description={showDescriptions ? service.description : undefined}
//                   icon={service.icon}
//                   linkTo={service.link}
//                   size="small"
//                   animated={true}
//                 />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ServicesGrid;

import React from 'react';
import UnifiedCard from './UnifiedCard';
import type { ServiceData } from '../data';

interface ServicesGridProps {
  services: ServiceData[];
  additionalServices?: ServiceData[];
  className?: string;
  showDescriptions?: boolean;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({
  services,
  additionalServices = [],
  className = '',
  showDescriptions = true
}) => {
  return (
    <section className={`services-new ${className}`}>
      <div className="container">
        {/* Main 6-card grid */}
        {services.length > 0 && (
          <div className="services-grid-6">
            {services.map((service) => (
              <UnifiedCard
                key={service.id}
                variant="service"
                title={service.title}
                description={showDescriptions ? service.description : undefined}
                icon={service.icon}
                image={service.image} // Pass the image to UnifiedCard
                linkTo={service.link}
                animated={true}
              />
            ))}
          </div>
        )}

        {/* Additional services if provided */}
        {additionalServices.length > 0 && (
          <div className="additional-services">
            <div className="services-grid-2">
              {additionalServices.map((service) => (
                <UnifiedCard
                  key={service.id}
                  variant="service"
                  title={service.title}
                  description={showDescriptions ? service.description : undefined}
                  icon={service.icon}
                  image={service.image} // Pass the image to UnifiedCard
                  linkTo={service.link}
                  size="small"
                  animated={true}
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