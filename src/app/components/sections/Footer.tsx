import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const openGitHub = () => {
    window.open('https://github.com/eileenfuenmayor634-sys', '_blank', 'noopener,noreferrer');
  };

const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/eileen-fuenmayor', '_blank', 'noopener,noreferrer');
  };

const openEmail = () => {
    window.open('mailto:eileendevc@gmail.com?subject=Portfolio Contact', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="py-6 md:py-8 px-4 sm:px-6 bg-[#2C2C2C]" style={{ position: 'relative', zIndex: 10 }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <div className="w-8 h-8 bg-[#FFD93D] rounded-full"></div>
          <span className="font-bold text-white">Portfolio</span>
        </div>
        <div className="flex gap-4" style={{ position: 'relative', zIndex: 20 }}>
          <div 
            onClick={openGitHub}
            onKeyDown={(e) => e.key === 'Enter' && openGitHub()}
            role="link"
            tabIndex={0}
            style={{ cursor: 'pointer', position: 'relative', zIndex: 20 }}
            className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
          >
            <Github size={18} />
          </div>

          <div 
            onClick={openLinkedIn}
            onKeyDown={(e) => e.key === 'Enter' && openLinkedIn()}
            role="link"
            tabIndex={0}
            style={{ cursor: 'pointer', position: 'relative', zIndex: 20 }}
            className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
          >
            <Linkedin size={18} />
          </div>
          
<div 
            onClick={openEmail}
            onKeyDown={(e) => e.key === 'Enter' && openEmail()}
            role="link"
            tabIndex={0}
            style={{ cursor: 'pointer', position: 'relative', zIndex: 20 }}
            className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
          >
            <Mail size={18} />
          </div>
        </div>
        <div className="text-gray-400 text-sm mt-4 md:mt-0">
          © {currentYear} All rights reserved
        </div>
      </div>
    </footer>
  );
}
