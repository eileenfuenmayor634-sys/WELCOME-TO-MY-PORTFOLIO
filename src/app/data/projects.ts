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
    image: '/src/imports/mk-digital.png',
    url: 'https://digital-marketing-flame-phi.vercel.app/'
  },
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with advanced filtering and checkout',
    tech: ['React', 'TypeScript', 'Tailwind'],
    image: '/src/imports/ecommerce.png',
    url: 'https://ecommerce-topaz-omega.vercel.app/'
  },
  {
    title: 'News Aggregator',
    description: 'Real-time news platform with category filtering',
    tech: ['Next.js', 'API', 'Redux'],
    image: '',
    url: '#'
  }
];
