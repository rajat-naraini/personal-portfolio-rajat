import React from 'react';

interface ProjectDetailProps {
  title?: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = () => {
  return (
    <div>
      <h1>Project Detail</h1>
    </div>
  );
};

export default ProjectDetail;