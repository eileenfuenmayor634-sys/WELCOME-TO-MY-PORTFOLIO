import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
return (
<section id="projects" className="py-6 md:py-8 px-4 sm:px-6 bg-[#2C2C2C]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-end gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">Featured Projects</h2>
            <p className="text-gray-400 text-sm">Some of my recent work</p>
          </div>
<a href="#projects" className="bg-[#FFD93D] text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#FFC93D] transition-colors">
            View all
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
