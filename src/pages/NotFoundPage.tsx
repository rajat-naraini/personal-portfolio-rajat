import React from 'react';

interface NotFoundProps {
  title?: string;
}

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <div>
      <h1>Not Found</h1>
    </div>
  );
};

export default NotFound;