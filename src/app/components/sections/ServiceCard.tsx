import { ExternalLink, Package, Laptop, Smartphone, Cloud } from 'lucide-react';
import { Service } from '../../data/services';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const bgClass = service.bgColor === 'white' ? 'bg-white border border-gray-200' : service.bgColor === '#F5EFE6' ? 'bg-[#F5EFE6]' : service.bgColor === '#FFD93D' ? 'bg-[#FFD93D]' : 'bg-[#1C1C1C]';
  const textClass = service.textColor === 'white' ? 'text-white' : 'text-gray-900';
  
const getIcon = () => {
    const iconClass = `w-6 h-6 ${textClass}`;
    switch (service.iconType) {
      case 'boxes':
        return <Package className={iconClass} />;
      case 'laptop':
        return <Laptop className={iconClass} />;
      case 'mobile':
        return <Smartphone className={iconClass} />;
      case 'cloud':
        return <Cloud className={iconClass} />;
      default:
        return <Package className={iconClass} />;
    }
  };

  return (
    <div className={`${bgClass} rounded-lg p-0.5 md:p-1 lg:p-1.5 relative overflow-hidden h-auto min-h-[60px] md:min-h-[80px] lg:min-h-[100px] flex flex-col justify-between transition-all duration-200 hover:scale-[1.01] hover:brightness-110 cursor-pointer`}>
      <div className="flex justify-between items-start h-full gap-1">
        <div>
          <h3 className={`text-xs md:text-sm font-bold ${textClass}`}>
            {service.title}<br />{service.subtitle}
          </h3>
        </div>
        <div className="flex-shrink-0 mt-0.5">{getIcon()}</div>
      </div>
<div className="flex justify-end items-end">
        <a href="#" className={`flex items-center gap-1 ${textClass} font-medium hover:gap-2 transition-all text-xs md:text-sm`}>
          <span className="text-xs">Learn More</span>
          <div className={`w-5 md:w-6 h-5 md:h-6 ${service.textColor === 'white' ? 'bg-white' : 'bg-gray-900'} rounded-full flex items-center justify-center`}>
            <ExternalLink size={12} className={service.textColor === 'white' ? 'text-gray-900' : 'text-white'} />
          </div>
        </a>
      </div>
    </div>
  );
}
