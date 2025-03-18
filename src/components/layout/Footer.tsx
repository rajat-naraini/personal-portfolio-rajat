// src/components/layout/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, Facebook, ArrowUp, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-2xl font-normal flex items-center justify-center">
              <span className="text-emerald-400">&lt;&gt;</span> 
              <span className="ml-2">RAJAT NARAINI</span>
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a href="https://github.com/rajat-naraini" target='_blank' className="hover:text-gray-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/rajat-naraini" target='_blank' className="hover:text-gray-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://instagram.com/rajatnaraini" target='_blank' className="hover:text-gray-300 transition-colors">
              <Instagram size={24} />
            </a>
            
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-8 mb-4 md:mb-0">
            <Link to="/about" className="hover:text-gray-300 transition-colors">
              About Me
            </Link>
            <a href="/path/to/your/resume.pdf" download className="hover:text-gray-300 transition-colors">
              Resume
            </a>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>

          {/* Scroll to top button */}
          <button 
            onClick={scrollToTop}
            className="p-3 bg-gray-900 border border-gray-700 rounded-md hover:bg-gray-800 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-green-500" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;