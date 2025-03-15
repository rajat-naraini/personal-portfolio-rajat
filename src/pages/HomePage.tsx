import React from 'react';

interface HomeProps {
  title?: string;
}

const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;