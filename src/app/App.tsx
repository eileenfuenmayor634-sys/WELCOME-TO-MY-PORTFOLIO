import {
  Navigation,
  HeroSection,
  ServicesSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
  Footer
} from './components/sections';

import { SonnerToaster } from './components/ui/SonnerToaster';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <SonnerToaster />
    </div>
  );
}

