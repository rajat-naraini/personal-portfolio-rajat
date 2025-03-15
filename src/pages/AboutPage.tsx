import React from 'react';

interface AboutProps {
  title?: string;
}

const About: React.FC<AboutProps> = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

export default About;