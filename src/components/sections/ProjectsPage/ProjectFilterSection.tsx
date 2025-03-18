import React from 'react';
import { Filter, LayoutGrid, List, X } from 'lucide-react';

interface ProjectFilterProps {
  viewMode: string;
  setViewMode: (mode: string) => void;
  allTechnologies: string[];
  selectedTechnologies: string[];
  toggleTechnology: (tech: string) => void;
  clearFilters: () => void;
}

const ProjectFilterSection: React.FC<ProjectFilterProps> = ({
  viewMode,
  setViewMode,
  allTechnologies,
  selectedTechnologies,
  toggleTechnology,
  clearFilters
}) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <Filter size={20} className="text-emerald-400 mr-2" />
          <h2 className="text-xl font-medium">Filter Projects</h2>
        </div>
        
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-gray-800 text-emerald-400' : 'text-gray-400 hover:text-white'}`}
            aria-label="Grid view"
            title="Grid view"
          >
            <LayoutGrid size={20} />
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-gray-800 text-emerald-400' : 'text-gray-400 hover:text-white'}`}
            aria-label="List view"
            title="List view"
          >
            <List size={20} />
          </button>
        </div>
      </div>
      
      <div className="bg-gray-900 rounded-lg p-4 flex flex-wrap gap-2">
        {allTechnologies.map(tech => (
          <button
            key={tech}
            onClick={() => toggleTechnology(tech)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedTechnologies.includes(tech)
                ? 'bg-emerald-500 text-black font-medium'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {tech}
          </button>
        ))}
        
        {selectedTechnologies.length > 0 && (
          <button
            onClick={clearFilters}
            className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300 hover:bg-gray-700 flex items-center"
          >
            <X size={14} className="mr-1" />
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectFilterSection;