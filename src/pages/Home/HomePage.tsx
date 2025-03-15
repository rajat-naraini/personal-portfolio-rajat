// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image with diamond shape */}
          <div className="justify-items-center relative">
            <div className="diamond-shape">
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src="/assets/images/profile.png" 
                  alt="Developer portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-20 bg-green-700/80 p-3 rounded-md">
              <div className="text-green-400 text-xl">&lt;/&gt;</div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div>
            <div className="mb-4">
              <p className="font-mono">
                <span className="text-red-400">&lt;span&gt;</span> 
                <span className="text-gray-300">Hey, I'm Rajat</span> 
                <span className="text-red-400">&lt;/span&gt;</span>
              </p>
            </div>
            
            <h1 className="text-5xl font-mono mb-6">
              Senior <span className="text-green-500">{'{'}Full Stack{'}'}</span>
              <br/>Web & App Developer<span className="animate-pulse">_</span>
            </h1>
            {/* With expertise in Angular, React/Next.js, Node.js, and Java Spring Boot RESTful services, I develop robust web applications that balance cutting-edge technology with enterprise-grade reliability, delivering exceptional digital experiences that drive business value */}
            <div className="mb-10">
              <p className="font-mono text-gray-400">
              <span className="text-red-400">&lt;p&gt;</span> 
              With over {new Date().getFullYear() - 2020} years of experience in cutting-edge technologies such as
              <span className="text-red-400"> Angular, React/Next.js, Node.js, </span> 
              <br/>
              <span className="text-red-400">Java Spring Boot, .NET Core </span>
              <span> and </span>
              <span className="text-red-400">PostgreSQL with AWS Cloud </span> <br />
                <span> I build reliable web applications that deliver exceptional digital experiences.</span>
              {/* <br/> */}
              {/* <span>solutions that are both innovative and robust.</span>  */}
              <span className="text-red-400"> &lt;/p&gt;</span>
              </p>
            </div>
            
            {/* Technology icons */}
            <div className="flex items-center">
                <div className="flex gap-2">
                <img src="/assets/icons/angular.png" alt="Angular" className="w-8 h-8" />
                <img src="/assets/icons/react.png" alt="React" className="w-7 h-6 mt-1" />
                <img src="/assets/icons/nextjs.png" alt="Next.js" className="w-8 h-8" />
                <img src="/assets/icons/nodejs.png" alt="Node.js" className="w-7 h-8" />
                <img src="/assets/icons/dotnet.png" alt=".NET Core" className="w-8 h-8" />
                <img src="/assets/icons/java.png" alt="Java" className="w-8 h-8" />
                <img src="/assets/icons/springboot.png" alt="Spring Boot" className="w-8 h-8" />
                <img src="/assets/icons/postgresql.png" alt="PostgreSQL" className="w-8 h-8" />
                <img src="/assets/icons/aws.png" alt="AWS" className="w-8 h-8" />
                </div>
              <span className="text-gray-500 ml-4">... and more</span>
            </div>
            
            {/* Call to action buttons */}
            <div className="mt-8 flex gap-4">
              <Link 
                to="/projects" 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                View Projects
              </Link>
              <Link 
                to="/contact" 
                className="border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;