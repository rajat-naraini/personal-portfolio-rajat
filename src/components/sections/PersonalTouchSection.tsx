import React from 'react';
import { Code, BookOpen, Coffee, Puzzle } from 'lucide-react';

const PersonalTouchSection: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <p className="text-emerald-400 text-sm font-mono mb-2">• About Me</p>
          <h2 className="text-4xl font-mono font-bold mb-4">Beyond The Code</h2>
          <p className="text-gray-400 max-w-2xl text-center">
            A glimpse into my approach, values, and what drives me as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left column - Philosophy & Approach */}
          <div className="space-y-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-lg">
              <div className="flex items-center mb-4">
                <Code className="text-emerald-400 mr-3" size={24} />
                <h3 className="text-xl font-bold">My Development Philosophy</h3>
              </div>
              <p className="text-gray-300">
                I believe great software is born at the intersection of technical excellence and user empathy. 
                My approach to development is centered on creating solutions that are not just functional, 
                but intuitive and delightful to use. Every line of code I write is guided by three principles: 
                maintainability, performance, and accessibility.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-lg">
              <div className="flex items-center mb-4">
                <Puzzle className="text-emerald-400 mr-3" size={24} />
                <h3 className="text-xl font-bold">Problem-Solving Approach</h3>
              </div>
              <p className="text-gray-300">
                Complex challenges excite me. My problem-solving approach combines analytical thinking 
                with creative solutions, breaking down complex issues into manageable components. I value 
                collaboration and am always eager to learn from others. Some of my most satisfying moments 
                have been untangling intricate technical challenges that initially seemed insurmountable.
              </p>
            </div>
          </div>
          
          {/* Right column - Learning & Personal */}
          <div className="space-y-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="text-emerald-400 mr-3" size={24} />
                <h3 className="text-xl font-bold">Continuous Learning</h3>
              </div>
              <p className="text-gray-300">
                Technology evolves rapidly, and I embrace this pace of change. I'm committed to continuous 
                learning and regularly explore new frameworks, languages, and methodologies. Currently, I'm 
                deepening my knowledge in cloud architecture patterns and expanding my expertise in modern 
                front-end development practices with a focus on performance optimization.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-lg">
              <div className="flex items-center mb-4">
                <Coffee className="text-emerald-400 mr-3" size={24} />
                <h3 className="text-xl font-bold">When I'm Not Coding</h3>
              </div>
              <p className="text-gray-300">
                Beyond the keyboard, I enjoy reading technical blogs and books to stay current with industry 
                trends. I'm also passionate about mentoring junior developers and contributing to the tech 
                community through knowledge sharing. In my free time, I enjoy exploring new coffee shops, 
                solving puzzles, and spending time outdoors.
              </p>
            </div>
          </div>
        </div>
        
        {/* Quote Section */}
        <div className="mt-14 max-w-3xl mx-auto text-center">
          <blockquote className="text-emerald-400 text-xl font-medium italic relative">
            <span className="text-5xl text-emerald-500 absolute -top-6 -left-6 opacity-50">"</span>
            I believe technology should solve real problems and improve lives. Every project is an opportunity 
            to create something meaningful that makes a difference.
            <span className="text-5xl text-emerald-500 absolute -bottom-10 -right-6 opacity-50">"</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default PersonalTouchSection;