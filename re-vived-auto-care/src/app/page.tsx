import ServiceCard from '@/components/ServiceCard';
import Gallery from '@/components/Gallery';
import { services } from '@/data/services';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Auto Care
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Professional car detailing services that restore your vehicle's
            beauty and protect its value.
          </p>
          <button className="btn-primary text-lg mr-4">Get Started</button>
          <button className="btn-secondary text-lg">View Services</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our range of professional detailing packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* CTA Section */}
      <section className="bg-yellow-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Get in touch today for a free quote and see the Re-vived difference
            for yourself.
          </p>
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-4 rounded-lg text-lg transition-colors duration-200">
            Get Free Quote
          </button>
        </div>
      </section>
    </div>
  );
}
