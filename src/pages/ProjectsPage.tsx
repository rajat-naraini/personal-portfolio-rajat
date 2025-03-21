// src/pages/ProjectsPage.tsx
import React, { useState } from 'react';
import ProjectFilterSection from '../components/sections/ProjectsPage/ProjectFilterSection';
import ProjectGridView from '../components/sections/ProjectsPage/ProjectGridView';
import ProjectListView from '../components/sections/ProjectsPage/ProjectListView';
import ProjectDetailModal from '../components/sections/ProjectsPage/ProjectDetailModal';
import { projects, allTechnologies } from '../data/ProjectData';
import { Helmet } from 'react-helmet-async';

const Projects: React.FC = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<{ [key: string]: boolean }>({});

  // Filter projects based on selected technologies
  const filteredProjects = selectedTechnologies.length > 0
    ? projects.filter(project =>
      selectedTechnologies.some(tech => project.technologies.includes(tech))
    )
    : projects;

  // Toggle technology selection
  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedTechnologies([]);
  };

  // Toggle project expansion
  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
    // Reset expanded sections when changing projects
    if (expandedProject !== projectId) {
      setExpandedSection({});
    }
  };

  // Toggle section expansion
  const toggleSection = (section: string) => {
    setExpandedSection(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Get the current expanded project
  const currentProject = expandedProject
    ? projects.find(p => p.id === expandedProject) || null
    : null;

  return (
    <>
      <Helmet>
        <title>Projects | Rajat Naraini</title>
        <meta name="description" content="Browse my portfolio of full-stack development projects including web applications, enterprise systems, and technical solutions." />
        <link rel="canonical" href="https://rajatnaraini.com/projects" />
      </Helmet>
      <section className="py-16 bg-black text-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <p className="text-emerald-400 text-sm font-mono mb-2">• My Work</p>
            <h1 className="text-5xl font-mono font-bold mb-4">Projects</h1>
            <p className="text-gray-400 max-w-2xl text-center">
              Explore my portfolio of web applications, enterprise systems, and technical solutions.
            </p>
          </div>

          {/* Filtering and View Options */}
          <ProjectFilterSection
            viewMode={viewMode}
            setViewMode={setViewMode}
            allTechnologies={allTechnologies}
            selectedTechnologies={selectedTechnologies}
            toggleTechnology={toggleTechnology}
            clearFilters={clearFilters}
          />

          {/* Projects Display */}
          {viewMode === 'grid' ? (
            <ProjectGridView
              projects={filteredProjects}
              toggleProject={toggleProject}
            />
          ) : (
            <ProjectListView
              projects={filteredProjects}
              toggleProject={toggleProject}
            />
          )}

          {/* No results message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-4">No projects match your selected filters.</p>
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-emerald-500 text-black rounded-md hover:bg-emerald-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Project Details Modal */}
          {expandedProject && (
            <ProjectDetailModal
              project={currentProject}
              expandedSection={expandedSection}
              toggleSection={toggleSection}
              closeModal={() => setExpandedProject(null)}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;