import React from 'react';
import { ChevronDown } from 'lucide-react';
import { ProjectType } from '../../../types/Project';

interface ProjectGridViewProps {
  projects: ProjectType[];
  toggleProject: (id: string) => void;
}

const ProjectGridView: React.FC<ProjectGridViewProps> = ({ projects, toggleProject }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(project => (
        <div 
          key={project.id}
          className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
        >
          <div className="relative h-48 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-sm text-emerald-400">{project.year}</p>
            </div>
          </div>
          
          <div className="p-6">
            <p className="text-gray-300 mb-4">{project.shortDescription}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech:any) => (
                <span 
                  key={tech}
                  className="px-2 py-1 text-xs rounded-full bg-gray-800 text-emerald-400 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex space-x-3">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.305-.535-1.54.117-3.205 0 0 1.01-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.29-1.23 3.29-1.23.653 1.665.24 2.9.117 3.205.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.1.81 2.22v3.293c0 .32.22.694.825.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                )}
                
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
              
              <button
                onClick={() => toggleProject(project.id)}
                className="text-emerald-400 hover:text-emerald-300 font-medium text-sm flex items-center transition-colors"
              >
                View Details
                <ChevronDown size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGridView;