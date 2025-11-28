import React from 'react';
import { Download } from 'lucide-react';
import { PROFILE } from '../constants';

const About: React.FC = () => {
  return (
    <div className="px-4 md:px-10 lg:px-40 py-12 md:py-16">
      <div className="mx-auto max-w-[960px] flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-white">
            About Me
          </h1>
          <p className="text-text-secondary text-base font-normal">
            A little more about my journey, interests, and how I approach my work.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-4">
            
            {/* Image Column */}
            <div className="w-full md:col-span-1">
                <div className="sticky top-24">
                    <div className="aspect-square w-full overflow-hidden rounded-xl bg-card-dark border border-white/10">
                        <img 
                            src={PROFILE.headshotAbout} 
                            alt="John Doe" 
                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </div>
            </div>

            {/* Text Content Column */}
            <div className="md:col-span-2 flex flex-col gap-10">
                
                <div className="flex flex-col gap-3">
                    <h3 className="text-white text-xl font-bold leading-tight">Who I Am</h3>
                    <p className="text-white/80 text-base leading-relaxed">
                        {PROFILE.shortBio}
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-white text-xl font-bold leading-tight">Interests</h3>
                    <p className="text-white/80 text-base leading-relaxed">
                        {PROFILE.interests}
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-white text-xl font-bold leading-tight">My Philosophy</h3>
                    <p className="text-white/80 text-base leading-relaxed">
                        {PROFILE.philosophy}
                    </p>
                </div>

                <div className="pt-4">
                    <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-primary bg-transparent px-6 py-2.5 text-sm font-bold text-primary transition-all hover:bg-primary/10">
                        <span>View My Resume</span>
                        <Download size={18} />
                    </button>
                </div>

            </div>

        </div>

      </div>
    </div>
  );
};

export default About;