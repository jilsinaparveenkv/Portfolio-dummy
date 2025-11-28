import React, { useState } from 'react';
import { NavLink as RouterNavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Moon, Github, Linkedin, Twitter, Download } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNav = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-background-dark font-bold text-sm">
              JD
            </div>
            <h2 className="text-white text-lg font-bold">John Doe</h2>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              {links.map((link) => (
                <RouterNavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive ? 'text-white' : 'text-white/70 hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </RouterNavLink>
              ))}
            </nav>
            <a 
              href="#" 
              className="flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary/90 transition-colors"
            >
              Resume
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
             {/* Simple theme toggler placeholder if needed, though design implies mostly dark */}
            <button className="text-white">
              <Moon size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-background-dark px-4 py-6">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNav(link.path)}
                className={`text-left text-base font-medium ${
                    location.pathname === link.path ? 'text-white' : 'text-white/70'
                }`}
              >
                {link.name}
              </button>
            ))}
            <a 
              href="#" 
              className="mt-4 flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-background-dark px-4 py-10 text-center sm:px-6 lg:px-8 mt-auto">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:justify-around text-text-secondary">
          <RouterNavLink to="/about" className="hover:text-white transition-colors">About</RouterNavLink>
          <RouterNavLink to="/projects" className="hover:text-white transition-colors">Projects</RouterNavLink>
          <RouterNavLink to="/contact" className="hover:text-white transition-colors">Contact</RouterNavLink>
          <a href="#" className="hover:text-white transition-colors">Resume</a>
        </div>
        
        <div className="flex justify-center gap-6">
          {SOCIAL_LINKS.map((link) => {
            const Icon = link.icon === 'github' ? Github : link.icon === 'linkedin' ? Linkedin : Twitter;
            return (
              <a 
                key={link.platform}
                href={link.url}
                className="text-text-secondary hover:text-white transition-colors"
                aria-label={link.platform}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
        
        <p className="text-sm text-text-secondary">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background-dark font-sans text-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;