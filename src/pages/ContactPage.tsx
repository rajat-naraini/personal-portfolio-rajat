import React from 'react';

interface ContactProps {
  title?: string;
}

const Contact: React.FC<ContactProps> = () => {
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  );
};

export default Contact;