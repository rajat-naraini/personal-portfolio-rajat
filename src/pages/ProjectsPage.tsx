import React from 'react';

interface ProjectsProps {
  title?: string;
}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div>
      <h1>Projects Page</h1>
    </div>
  );
};

export default Projects;