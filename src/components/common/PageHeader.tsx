import React from 'react';

interface PageHeaderProps {
  tagline: string;
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ tagline, title, description }) => {
  return (
    <div className="flex flex-col items-center mb-12">
      <p className="text-emerald-400 text-sm font-mono mb-2">• {tagline}</p>
      <h1 className="text-5xl font-mono font-bold mb-4">{title}</h1>
      <p className="text-gray-400 max-w-2xl text-center">
        {description}
      </p>
    </div>
  );
};

export default PageHeader;