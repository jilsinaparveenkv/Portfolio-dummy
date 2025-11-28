import React, { FormEvent } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Message sent! (Simulation)');
  };

  return (
    <div className="px-4 py-12 md:py-20 flex justify-center">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Info */}
            <div className="flex flex-col gap-8">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-3">Get In Touch</h2>
                    <p className="text-text-secondary text-base leading-normal">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-4 rounded-xl p-4 transition-colors duration-200 hover:bg-white/5 border border-transparent hover:border-white/5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary shrink-0">
                            <Mail size={24} />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-text-secondary">Email me at</p>
                            <p className="text-white text-base font-medium">{PROFILE.email}</p>
                        </div>
                    </a>
                </div>

                <div className="flex items-center gap-4 pt-4">
                     <a href="#" className="flex flex-col items-center justify-center gap-2 w-24 p-4 rounded-xl transition-colors duration-200 hover:bg-white/5 border border-transparent hover:border-white/5 group">
                        <div className="rounded-full bg-primary/10 p-3 text-white transition-colors group-hover:bg-primary/20 group-hover:text-primary">
                            <Github size={24} />
                        </div>
                        <span className="text-sm font-medium text-white">GitHub</span>
                     </a>
                     
                     <a href="#" className="flex flex-col items-center justify-center gap-2 w-24 p-4 rounded-xl transition-colors duration-200 hover:bg-white/5 border border-transparent hover:border-white/5 group">
                        <div className="rounded-full bg-primary/10 p-3 text-white transition-colors group-hover:bg-primary/20 group-hover:text-primary">
                            <Linkedin size={24} />
                        </div>
                        <span className="text-sm font-medium text-white">LinkedIn</span>
                     </a>
                </div>
            </div>

            {/* Right Column: Form */}
            <div className="rounded-xl bg-white/5 p-6 sm:p-8 border border-white/10">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-white text-sm font-medium">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            className="w-full rounded-lg border border-white/10 bg-background-dark/50 p-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-white text-sm font-medium">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="w-full rounded-lg border border-white/10 bg-background-dark/50 p-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-white text-sm font-medium">Message</label>
                        <textarea 
                            id="message" 
                            rows={4}
                            className="w-full rounded-lg border border-white/10 bg-background-dark/50 p-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-y"
                            placeholder="Your message..."
                            required
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        className="flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-dark"
                    >
                        <span>Send Message</span>
                        <Send size={18} />
                    </button>
                </form>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;