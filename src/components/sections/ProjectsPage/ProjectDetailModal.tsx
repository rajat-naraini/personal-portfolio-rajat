import React from 'react';
import { X, ChevronUp, ChevronDown, Code } from 'lucide-react';
import { ProjectType } from '../../../types/Project';

interface ProjectDetailModalProps {
  project: ProjectType | null;
  expandedSection: {[key: string]: boolean};
  toggleSection: (section: string) => void;
  closeModal: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ 
  project, 
  expandedSection,
  toggleSection,
  closeModal
}) => {
  if (!project) return null;

  const isSectionExpanded = (section: string) => {
    return expandedSection[section] || false;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-gray-900 border border-gray-800 rounded-xl max-w-4xl w-full max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="relative h-60 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
          <div className="absolute top-4 right-4">
            <button
              onClick={closeModal}
              className="p-2 rounded-full bg-gray-800 bg-opacity-70 text-white hover:bg-opacity-100 transition-colors"
              aria-label="Close details"
            >
              <X size={20} />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-3xl font-bold text-white mb-1">{project.title}</h2>
            <p className="text-emerald-400">{project.year}</p>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <p className="text-gray-300 mb-6 text-lg">{project.fullDescription}</p>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-gray-800 text-emerald-400 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Technical Challenges and Solutions */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('challenges')}
              className="w-full flex justify-between items-center bg-gray-800 p-4 rounded-lg mb-4 hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-medium text-white">Challenges & Solutions</h3>
              {isSectionExpanded('challenges') ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            {isSectionExpanded('challenges') && (
              <div className="space-y-6 p-2">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-emerald-400 mb-2">{challenge.title}</h4>
                    <p className="text-gray-300 mb-3">{challenge.description}</p>
                    <div className="bg-gray-700 p-3 rounded-lg">
                      <h5 className="text-sm uppercase tracking-wide text-gray-400 mb-2">Solution</h5>
                      <p className="text-gray-300">{challenge.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Architecture Diagram */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('architecture')}
              className="w-full flex justify-between items-center bg-gray-800 p-4 rounded-lg mb-4 hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-medium text-white">System Architecture</h3>
              {isSectionExpanded('architecture') ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            {isSectionExpanded('architecture') && (
              <div className="p-2">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <img 
                    src={project.architectureDiagram} 
                    alt="Architecture Diagram"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>
          
          {/* Code Snippets */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('code')}
              className="w-full flex justify-between items-center bg-gray-800 p-4 rounded-lg mb-4 hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-medium text-white flex items-center">
                <Code className="mr-2 text-emerald-400" size={20} />
                Code Implementation
              </h3>
              {isSectionExpanded('code') ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            {isSectionExpanded('code') && (
              <div className="p-2">
                {project.codeSnippets.map((snippet, index) => (
                  <div key={index} className="mb-4 bg-gray-800 rounded-lg overflow-hidden">
                    <div className="bg-gray-700 px-4 py-2 flex justify-between items-center">
                      <h4 className="font-medium text-white">{snippet.title}</h4>
                      <span className="text-xs text-emerald-400 bg-gray-800 px-2 py-1 rounded">{snippet.language}</span>
                    </div>
                    <div className="p-4 overflow-x-auto">
                      <pre className="text-gray-300 font-mono text-sm">
                        <code>{snippet.code}</code>
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Technical Decisions */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('decisions')}
              className="w-full flex justify-between items-center bg-gray-800 p-4 rounded-lg mb-4 hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-medium text-white">Technical Decisions</h3>
              {isSectionExpanded('decisions') ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            {isSectionExpanded('decisions') && (
              <div className="p-2">
                <div className="space-y-4">
                  {project.technicalDecisions.map((decision, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-lg font-medium text-emerald-400 mb-2">
                        {decision.technology}
                      </h4>
                      <p className="text-gray-300">{decision.reasoning}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Links */}
          <div className="flex justify-between items-center border-t border-gray-800 pt-6">
            <div className="space-x-4">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg inline-flex items-center hover:bg-gray-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="mr-2">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.305-.535-1.54.117-3.205 0 0 1.01-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.29-1.23 3.29-1.23.653 1.665.24 2.9.117 3.205.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.1.81 2.22v3.293c0 .32.22.694.825.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              )}
              
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg inline-flex items-center hover:bg-emerald-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Live Demo
                </a>
              )}
            </div>
            
            <button
              onClick={closeModal}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;