import React from 'react';
import { Mail, MapPin, Linkedin, AtSign } from 'lucide-react';

const ContactInfoSection:React.FC = () => {
  return (
    <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 h-full">
      <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-emerald-500/20 p-3 rounded-lg mr-4">
            <Mail className="text-emerald-400" size={24} />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1">Email</h3>
            <p className="text-gray-400 mb-1">Feel free to email me directly</p>
            <a 
              href="mailto:rajat2985@gmail.com" 
              className="text-emerald-400 hover:underline inline-flex items-center"
            >
              rajat2985@gmail.com
              <AtSign className="ml-1" size={14} />
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-emerald-500/20 p-3 rounded-lg mr-4">
            <MapPin className="text-emerald-400" size={24} />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1">Location</h3>
            <p className="text-gray-400 mb-1">Based in</p>
            <p>Nashville, TN, United States</p>
          </div>
        </div>
{/*         
        <div className="flex items-start">
          <div className="bg-emerald-500/20 p-3 rounded-lg mr-4">
            <Phone className="text-emerald-400" size={24} />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1">Phone</h3>
            <p className="text-gray-400 mb-1">Available during business hours</p>
            <a 
              href="tel:+1615XXXXXXX" 
              className="hover:text-emerald-400 transition-colors"
            >
              +1 (615)-XXX-XXXX
            </a>
          </div>
        </div> */}
      </div>
      
      <div className="mt-10">
        <h3 className="text-lg font-medium mb-4">Connect on Social Media</h3>
        <div className="flex space-x-4">
          <a 
            href="https://github.com/rajat-naraini" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 transition-colors p-3 rounded-lg"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-white" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.305-.535-1.54.117-3.205 0 0 1.01-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.29-1.23 3.29-1.23.653 1.665.24 2.9.117 3.205.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.1.81 2.22v3.293c0 .32.22.694.825.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a 
            href="https://linkedin.com/in/rajat-naraini" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 transition-colors p-3 rounded-lg"
            aria-label="LinkedIn"
          >
            <Linkedin className="text-white" size={24} />
          </a>
        </div>
      </div>
      
      <div className="mt-10 pt-6 border-t border-gray-800">
        <h3 className="text-lg font-medium mb-4">Current Availability</h3>
        <div className="px-4 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
          <p className="text-gray-300">
            I'm currently available for new opportunities and freelance projects. My typical response time is within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;