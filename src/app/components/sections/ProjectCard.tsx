import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
<div className="bg-[#3C3C3C] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
      <div className="w-full h-auto aspect-video overflow-hidden bg-gray-800">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3 md:p-4">
        <h3 className="text-base font-bold text-white mb-1">{project.title}</h3>
        <p className="text-gray-400 text-xs mb-2">{project.description}</p>
        <div className="flex flex-wrap gap-1 mb-2">
          {project.tech.map((tech, i) => (
            <span key={i} className="bg-[#2C2C2C] text-gray-300 px-2 py-0.5 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
{project.url && project.url !== '#' ? (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#FFD93D] hover:gap-2 transition-all text-xs font-medium">
            View project <ExternalLink size={12} />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1 text-gray-500 text-xs font-medium cursor-not-allowed">
            Coming soon
          </span>
        )}
      </div>
    </div>
  );
}
