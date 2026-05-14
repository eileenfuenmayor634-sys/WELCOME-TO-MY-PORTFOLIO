import { ImageWithFallback } from '../figma/ImageWithFallback';
import profileImg from '../../../imports/Gemini_Generated_Image_gp9uh4gp9uh4gp9u (1).png';

export function HeroSection() {

  return (
<section id="home" className="px-4 sm:px-6 pt-6 md:pt-8 pb-0">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-t-[2rem] md:rounded-t-[3rem] px-4 sm:px-8 md:px-16 pt-8 md:pt-12 pb-0 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left Content */}
            <div className="pt-0 -mt-12 pb-0">
              <p className="text-sm text-gray-600 mb-2">Full Stack Web Developer</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 leading-tight">
                Building the modern web.
              </h1>
              <p className="text-gray-600 text-base mb-5 max-w-lg leading-relaxed">
                Transforming complex ideas into robust digital products.
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="bg-[#FFD93D] text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-[#FFC93D] transition-colors">
                  Get Started
                </a>
                <a href="#projects" className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                  See Our Work
                </a>
              </div>
            </div>

            {/* Right Image - Container maintains 500px height */}
            <div className="relative flex justify-center items-center h-[500px]">
              {/* Group of decorative elements and profile image - use translate-y to adjust position */}
<div className="translate-y-[-52px]">
{/* Decorative SVG sparkles */}
                <div className="absolute -top-4 -right-4 w-20 h-20 z-50">
                  <svg viewBox="0 0 100 100" className="w-full h-full" style={{color: '#FFD93D'}}>
                    {/* Large 4-point sparkle */}
                    <path d="M50 0 L55 35 L90 40 L55 50 L50 100 L45 50 L10 40 L45 35 Z" 
                          fill="#FFD93D"/>
                  </svg>
                </div>
                {/* Small sparkle 1 */}
                <div className="absolute top-8 right-24 w-10 h-10 z-40">
                  <svg viewBox="0 0 100 100" className="w-full h-full" style={{color: '#FFD93D'}}>
                    <path d="M50 0 L55 35 L90 40 L55 50 L50 100 L45 50 L10 40 L45 35 Z" 
                          fill="#FFD93D" opacity="0.8"/>
                  </svg>
                </div>
                {/* Small sparkle 2 */}
                <div className="absolute bottom-32 right-4 w-8 h-8 z-40">
                  <svg viewBox="0 0 100 100" className="w-full h-full" style={{color: '#FFD93D'}}>
                    <path d="M50 0 L55 35 L90 40 L55 50 L50 100 L45 50 L10 40 L45 35 Z" 
                          fill="#FFD93D" opacity="0.6"/>
                  </svg>
                </div>

                {/* Profile image with circular frame */}
                <div className="relative w-[300px] h-[300px] bg-black rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <ImageWithFallback
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  {/* Decorative waves at the bottom */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 400 80" className="w-full h-20" preserveAspectRatio="none">
                      <path d="M0,40 Q50,20 100,40 T200,40 T300,40 T400,40 L400,80 L0,80 Z" fill="#FFD93D"/>
                      <path d="M0,50 Q50,30 100,50 T200,50 T300,50 T400,50 L400,80 L0,80 Z" fill="#FFC93D" opacity="0.7"/>
                      <path d="M0,60 Q50,45 100,60 T200,60 T300,60 T400,60 L400,80 L0,80 Z" fill="#FFB93D" opacity="0.5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
