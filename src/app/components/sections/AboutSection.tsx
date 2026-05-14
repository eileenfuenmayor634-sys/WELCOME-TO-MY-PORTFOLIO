import { Github, Linkedin, Mail } from 'lucide-react';
import { skills } from '../../data/skills';

export function AboutSection() {
return (
<section id="about" className="py-8 md:py-12 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Left side - About text (floating directly on black background) */}
          <div className="md:col-span-7 text-white p-4 md:p-8 lg:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Full Stack Developers</h2>
            <p className="text-white leading-relaxed mb-6 text-justify">
             I am a Full Stack Developer experienced in building modern interfaces and solid server-side and database integrations. My background includes technical leadership in mobile projects and the development of end-to-end web solutions, always prioritizing performance and scalability.
            </p>
            <p className="text-white leading-relaxed text-justify">
              My approach combines proactive problem-solving with proficiency in modern technologies, ensuring the delivery of high-quality, functional products in agile environments.
            </p>
          </div>

          {/* Right side - Skills (floating directly on black background) */}
          <div className="md:col-span-5 text-white p-8">
            <h3 className="text-xl font-bold mb-6">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="bg-[#FFD93D] text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
<div className="mt-8 pt-8 border-t border-gray-700">
              <div className="flex gap-4">
                <a href="https://github.com/eileenfuenmayor634-sys" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/eileen-fuenmayor" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
                  <Linkedin size={18} />
                </a>
<a href="mailto:eileendevc@gmail.com?subject=Portfolio Contact" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
