import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Briefcase, Twitter } from 'lucide-react';
import { PROFILE } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex min-h-[calc(100vh-64px)] w-full items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-5xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        
        {/* Text Section */}
        <div className="flex flex-1 flex-col items-center gap-6 text-center lg:items-start lg:gap-8 lg:text-left">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-black tracking-tighter text-white sm:text-6xl md:text-7xl">
              {PROFILE.name}
            </h1>
            <h2 className="text-lg text-text-secondary md:text-xl max-w-lg">
              {PROFILE.title} {PROFILE.tagline}
            </h2>
          </div>
          
          <Link
            to="/projects"
            className="flex h-12 w-full max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-8 text-base font-bold text-white transition-all hover:bg-primary/90 hover:scale-105 sm:w-auto"
          >
            View Projects
          </Link>
        </div>
        
        {/* Image & Socials Section */}
        <div className="flex flex-1 flex-col items-center gap-8">
          <div 
            className="h-64 w-64 rounded-full bg-cover bg-center shadow-2xl shadow-primary/20 sm:h-80 sm:w-80 border-4 border-white/5"
            style={{ backgroundImage: `url("${PROFILE.headshotHome}")` }}
          />
          
          <div className="flex flex-wrap justify-center gap-4">
            <a className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-text-secondary transition-all hover:bg-white/20 hover:text-white hover:-translate-y-1" href="#">
              <Code size={24} />
            </a>
            <a className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-text-secondary transition-all hover:bg-white/20 hover:text-white hover:-translate-y-1" href="#">
              <Briefcase size={24} />
            </a>
            <a className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-text-secondary transition-all hover:bg-white/20 hover:text-white hover:-translate-y-1" href="#">
              <Twitter size={24} />
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;