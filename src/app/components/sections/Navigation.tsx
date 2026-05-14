import { navLinks } from '../../data/navigation';

export function Navigation() {
  return (
<nav className="sticky top-4 md:top-6 left-2 md:left-0 right-2 md:right-0 z-[1000] bg-[#1C1C1C] w-full max-w-6xl mx-auto rounded-full px-4 md:px-6 py-3 md:py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 md:w-8 h-6 md:h-8 bg-[#FFD93D] rounded-full"></div>
          <span className="font-bold text-white text-base md:text-lg">Eileen</span>
        </div>
        <div className="hidden md:flex gap-6 lg:gap-8 text-sm text-white">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-[#FFD93D] transition-colors">
              {link.label}
            </a>
          ))}
        </div>
<a href="https://www.fiverr.com/s/jjBLm4a" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-4 md:px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
         Hire Me on Fiverr
        </a>
      </div>
    </nav>
  );
}
