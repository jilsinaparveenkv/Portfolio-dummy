import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { DETAIL_IMAGES, PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find project data
  const project = PROJECTS.find((p) => p.id === id);
  // Default to the detail image if specific one exists, else use project card image
  // For the specific "quantum-leap" example in prompt, we use the specific high-res image
  const heroImage = id === 'quantum-leap' ? DETAIL_IMAGES.quantumLeap : project?.imageUrl;

  useEffect(() => {
    window.scrollTo(0,0);
  }, [id]);

  if (!project) {
     return (
        <div className="flex h-[50vh] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-2xl font-bold text-white">Project Not Found</h2>
            <button onClick={() => navigate('/projects')} className="text-primary hover:underline">Back to Projects</button>
        </div>
     )
  }

  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-40 py-10">
      <div className="mx-auto max-w-[960px] flex flex-col gap-12">
        
        {/* Breadcrumb & Header */}
        <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2 text-base font-medium">
                <Link to="/projects" className="text-text-secondary hover:text-primary transition-colors">Projects</Link>
                <span className="text-text-secondary">/</span>
                <span className="text-white">{project.title}</span>
            </div>
            
            <div className="flex flex-col gap-3 mt-4">
                <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-white">
                    {project.title}
                </h1>
                <p className="text-lg text-text-secondary font-normal">
                    {project.fullDescription || project.description}
                </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
                <a href={project.demoUrl} className="flex h-12 min-w-[140px] items-center justify-center rounded-lg bg-primary px-5 text-base font-bold text-white transition-colors hover:bg-primary/90">
                    Live Demo
                </a>
                <a href={project.codeUrl} className="flex h-12 min-w-[140px] items-center justify-center rounded-lg bg-white/10 px-5 text-base font-bold text-white transition-colors hover:bg-white/20">
                    View on GitHub
                </a>
            </div>
        </div>

        {/* Hero Image */}
        <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-card-dark">
            <img 
                src={heroImage} 
                alt={project.title} 
                className="w-full h-auto object-cover min-h-[300px] md:min-h-[420px]"
            />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 flex flex-col gap-12">
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Problem & Solution</h2>
                    <div className="text-white/80 space-y-4 leading-relaxed whitespace-pre-line">
                        {project.problemSolution || "Detailed problem and solution description goes here..."}
                    </div>
                </section>
                
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Lessons Learned</h2>
                    <div className="text-white/80 space-y-4 leading-relaxed whitespace-pre-line">
                         {project.lessonsLearned || "Key takeaways and lessons learned from this project..."}
                    </div>
                </section>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
                <aside className="sticky top-24 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-6">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="flex items-center rounded-full bg-[#2A2A2A] px-3 py-1.5 text-sm font-medium text-white/90 border border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>
                </aside>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;