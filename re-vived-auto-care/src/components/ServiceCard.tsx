import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-yellow-400 transition-colors duration-200">
      {service.popular && (
        <div className="inline-block bg-yellow-500 text-gray-900 text-sm font-medium px-3 py-1 rounded-full mb-4">
          Most Popular
        </div>
      )}

      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>

      <p className="text-gray-300 mb-4">{service.description}</p>

      <div className="text-2xl font-bold text-yellow-400 mb-4">
        {service.price}
      </div>

      <ul className="space-y-2 mb-6">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-300">
            <svg
              className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button className="btn-primary w-full">Book Now</button>
    </div>
  );
}
