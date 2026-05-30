import mkDigitalImg from '../../imports/mk-digital.png';
import ecommerceImg from '../../imports/ecommerce.png';
import financeAgentImg from '../../imports/WhatsApp Image 2026-05-30 at 2.47.06 PM.jpeg';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: 'Digital Marketing',
    'description': 'Plataforma de marketing digital con analytics y gestión de campañas',
    tech: ['React', 'Vercel', 'Tailwind'],
    image: mkDigitalImg,

    url: 'https://digital-marketing-flame-phi.vercel.app/'
  },
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with advanced filtering and checkout',
    tech: ['React', 'TypeScript', 'Tailwind'],
    image: ecommerceImg,

    url: 'https://ecommerce-topaz-omega.vercel.app/'
  },
  {
    title: 'Sistema de Gestion Financiera con Agente',
    description: 'Plataforma de gestión financiera personal que utiliza agentes inteligentes para el análisis y monitoreo de datos en tiempo real.',
    tech: ['Next.js', 'Supabase', 'IA Agents', 'Tailwind CSS'],
    image: financeAgentImg,
    url: 'https://gestion-financiera-app-omega.vercel.app/'
  }
];

