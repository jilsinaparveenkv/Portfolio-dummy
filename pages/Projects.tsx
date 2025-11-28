import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-12 md:py-16">
      <div className="mx-auto max-w-[960px] flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-white">
            Selected Work
          </h1>
          <p className="text-text-secondary text-base font-normal">
            A collection of my high-impact projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Projects;