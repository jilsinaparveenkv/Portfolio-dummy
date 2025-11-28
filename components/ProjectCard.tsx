import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkIcon, Code } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-card-dark p-4 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50">
      <Link to={`/projects/${project.id}`} className="block overflow-hidden rounded-lg">
        <div 
            className="aspect-video w-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
            style={{ backgroundImage: `url("${project.imageUrl}")` }}
            role="img"
            aria-label={project.title}
        />
      </Link>
      
      <div className="flex flex-grow flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Link to={`/projects/${project.id}`} className="text-xl font-bold text-white hover:text-primary transition-colors">
            {project.title}
          </Link>
          <p className="text-sm text-text-secondary leading-relaxed">
            {project.description}
          </p>
        </div>
        
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="rounded-full bg-primary/20 px-2.5 py-1 text-xs font-semibold text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-2 flex items-center gap-4 border-t border-white/5 pt-4">
        {project.demoUrl && (
            <a href={project.demoUrl} className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
            <LinkIcon size={16} />
            Live Demo
            </a>
        )}
        {project.codeUrl && (
            <a href={project.codeUrl} className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
            <Code size={16} />
            View Code
            </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;