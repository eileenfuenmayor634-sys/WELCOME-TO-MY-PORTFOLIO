import { services } from '../../data/services';
import { ServiceCard } from './ServiceCard';

export function ServicesSection() {
  return (
<section id="services" className="px-4 sm:px-6 py-10 md:py-16 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <div>
<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
             Full-Stack <br />Development Solutions
            </h2>
          </div>
          <div>
            <p className="text-gray-600 leading-relaxed text-justify">
              Discover a wide array of software solutions tailored to bring your ideas to life. From building interactive mobile applications to developing robust full-stack web platforms, my services are designed to ensure performance, usability, and scalability.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
