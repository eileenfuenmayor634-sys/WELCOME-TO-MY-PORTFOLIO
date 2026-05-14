export interface Service {
  title: string;
  subtitle: string;
  bgColor: string;
  textColor: string;
  iconType: 'boxes' | 'laptop' | 'mobile' | 'cloud';
}

export const services: Service[] = [
  {
    title: 'Custom Software',
    subtitle: 'Development',
    bgColor: '#F5EFE6',
    textColor: 'gray-900',
    iconType: 'boxes'
  },
  {
    title: 'Web Development',
    subtitle: 'Services',
    bgColor: '#FFD93D',
    textColor: 'gray-900',
    iconType: 'laptop'
  },
  {
    title: 'Mobile App',
    subtitle: 'Development',
    bgColor: '#1C1C1C',
    textColor: 'white',
    iconType: 'mobile'
  },
  {
    title: 'Cloud',
    subtitle: 'Infrastructure',
    bgColor: 'white',
    textColor: 'gray-900',
    iconType: 'cloud'
  }
];
