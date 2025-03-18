import React, { useState, useEffect } from 'react';
import { Code, Server, Database, Terminal } from 'lucide-react';

const ProfessionalSummary:React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full-Stack Developer with 5+ years of experience building enterprise applications";
  
  // Typing effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + fullText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 75);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="py-16 bg-black text-white" id="professional-summary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <p className="text-emerald-400 text-sm font-mono mb-2">• About Me</p>
          <h2 className="text-4xl font-mono font-bold mb-4">Professional Summary</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side content */}
          <div className="space-y-6">
            <div className="h-16 flex items-center">
              <h3 className="text-2xl font-bold text-emerald-400 font-mono">
                {displayText}<span className="animate-pulse">_</span>
              </h3>
            </div>
            
            <p className="text-gray-300 text-lg">
              I specialize in building high-performance web applications with Angular, React/Next.js, Node.js, and Java Spring Boot. 
              My approach combines technical excellence with business understanding to deliver scalable, robust solutions.
            </p>
            
            <p className="text-gray-300">
              Having led critical government system migrations and developed enterprise applications, I thrive on solving 
              complex technical challenges while maintaining clean, maintainable code. My experience spans full application 
              lifecycles from design to deployment, with particular expertise in system migration and optimization.
            </p>
            
            <div className="pt-4">
              <h4 className="text-xl font-medium text-white mb-4">My Development Approach</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-2">
                    <Code className="text-emerald-400 mr-2" size={20} />
                    <span className="font-medium">Clean Architecture</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Writing maintainable code with clear separation of concerns
                  </p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-2">
                    <Server className="text-emerald-400 mr-2" size={20} />
                    <span className="font-medium">Performance Focused</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Optimizing for speed, efficiency, and scalability
                  </p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-2">
                    <Database className="text-emerald-400 mr-2" size={20} />
                    <span className="font-medium">Data-Driven</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Making decisions based on metrics and user behavior
                  </p>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-2">
                    <Terminal className="text-emerald-400 mr-2" size={20} />
                    <span className="font-medium">Problem Solver</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Finding elegant solutions to complex technical challenges
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side timeline */}
          <div className="relative pl-8 border-l border-gray-800">
            <div className="space-y-12">
              <div className="relative">
                <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border-4 border-black bg-emerald-500"></div>
                <div>
                  <h4 className="text-xl font-medium text-white">Started Professional Journey</h4>
                  <p className="text-emerald-400 text-sm mb-2">2019</p>
                  <p className="text-gray-400">
                    Joined National Informatics Centre as a Software Developer, working on government digital initiatives.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border-4 border-black bg-emerald-500"></div>
                <div>
                  <h4 className="text-xl font-medium text-white">Led Major System Migration</h4>
                  <p className="text-emerald-400 text-sm mb-2">2021</p>
                  <p className="text-gray-400">
                    Successfully migrated VMS from Angular 4 to Angular 13 and transitioned backend to .NET Core.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border-4 border-black bg-emerald-500"></div>
                <div>
                  <h4 className="text-xl font-medium text-white">Advanced to Current Role</h4>
                  <p className="text-emerald-400 text-sm mb-2">2024</p>
                  <p className="text-gray-400">
                    Joined XLSoftek.Inc, focusing on Next.js applications with AWS deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;