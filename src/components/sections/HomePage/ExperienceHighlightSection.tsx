import React, { useRef } from 'react';
import { Briefcase, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import './styles/ExperienceHighlightSection.css';

const ExperienceSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      id: 1,
      company: "XLSoftek.Inc",
      position: "Senior Full-Stack Developer",
      period: "JUL 2024 - Present",
      achievements: [
        "Developed a custom CSV parser in Node.js to streamline data processing and storage in the database.",
        "Built a responsive front-end with Next.js (v14), integrating ShadCN UI components and AWS Cognito for secure authentication.",
        "Deployed the application on AWS Amplify and implemented CI/CD pipelines for automated, efficient build and deployment."
      ],
      technologies: ["Next.js", "Node.js", "AWS", "ShadCN UI", "CI/CD"],
      current: true,
      projectImage: "/assets/images/projects/clientfinder-home.png",
      projectName: "ClientFinder",
      isFeatured: true
    },
    {
      id: 2,
      company: "National Informatics Centre",
      position: "Lead Developer (Full-Stack)",
      period: "JUN 2021 - JUN 2024",
      achievements: [
        "Led the development and migration of state government projects, including the redesign of the MyOffice app, migration of the VMS (Vehicle Management System) from Angular 4 to Angular 13, and backend transition from Node.js to .NET Core 6.",
        "Developed and integrated critical modules for IFMS (Integrated Financial Management System).",
        "Enhanced system modularity and maintainability by implementing specialized services, strict typing, and robust error handling in multiple enterprise applications."
      ],
      technologies: ["Angular", "Node.js", ".NET Core", "PostgreSQL", "SSRS"],
      current: false,
      projectImage: "/assets/images/projects/vms-home.png",
      projectName: "Vehicle Management System",
      isFeatured: true
    },
    {
      id: 3,
      company: "National Informatics Centre",
      position: "Software Developer (Frontend & Backend)",
      period: "OCT 2019 - JUN 2021",
      achievements: [
        "Developed the Licensing Module for the Chief Electrical Inspector (CEI) using Angular 8, enabling efficient registration and management of electrical contractors.",
        "Implemented a role-based authentication system with secure REST APIs using Node.js and Express, ensuring proper access control for different user types.",
        "Created responsive UI components with Angular Material, improving user experience and accessibility across desktop and mobile devices.",
        "Designed and optimized PostgreSQL database queries for storing contractor information and license documentation."
      ],
      technologies: ["Angular 8", "Node.js", "Express.js", "PostgreSQL", "Angular Material"],
      current: false,
      projectImage: "/assets/images/projects/cei-home.png",
      projectName: "Chief Electrical Inspector (CEI)",
      isFeatured: true
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current: container } = scrollContainerRef;
      const scrollAmount = direction === 'left' 
        ? -container.clientWidth / 1.5
        : container.clientWidth / 1.5;
      
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <p className="text-emerald-400 text-sm font-mono mb-2">• Experience</p>
          <h2 className="text-4xl font-mono font-bold mb-4">Work Experience</h2>
          <p className="text-gray-400 max-w-2xl text-center">
            Over 5 years of professional experience developing high-performance web applications and enterprise systems.
          </p>
        </div>

        {/* Web View - Horizontal Scrolling */}
        <div className="hidden md:block relative">
          <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 z-10">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-gray-800 text-emerald-400 hover:bg-gray-700 transition-colors shadow-lg focus:outline-none"
              aria-label="Scroll left"
            >
              <ArrowLeft size={20} />
            </button>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory space-x-6 py-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {experiences.map((exp) => (
              <div 
                key={exp.id} 
                className="flex-shrink-0 w-[600px] snap-center"
              >
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg hover:border-emerald-500/30 transition-all duration-300 min-h-[350px] h-full">
                  <div className="flex flex-col h-full">
                    {/* Project Image */}
                    <div className="mb-4 h-40 overflow-hidden rounded-lg relative">
                      <img 
                        src={exp.projectImage} 
                        alt={exp.projectName}
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                      <div className="absolute bottom-3 left-3">
                        <h4 className="text-lg font-medium text-white">{exp.projectName}</h4>
                        {exp.isFeatured && (
                          <p className="text-sm text-emerald-400">Featured project</p>
                        )}
                      </div>
                    </div>

                    {/* Company and position */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                      <div className="flex items-center text-emerald-400 mt-1">
                        <Briefcase size={16} className="mr-2" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center text-gray-400 mt-1">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                        {exp.current && <span className="ml-2 px-2 py-0.5 text-xs bg-emerald-500/20 text-emerald-400 rounded-full">Current</span>}
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div className="mb-4 flex-grow">
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <span className="text-emerald-400 mr-2 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-1 text-xs rounded-full bg-gray-800 text-emerald-400 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-gray-800 text-emerald-400 hover:bg-gray-700 transition-colors shadow-lg focus:outline-none"
              aria-label="Scroll right"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Mobile View - Timeline */}
        <div className="md:hidden relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-700"></div>

          {experiences.map((exp) => (
            <div key={exp.id} className="mb-12 relative">
              <div className="flex flex-col items-start">
                {/* Timeline dot */}
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-black"></div>
                
                {/* Content */}
                <div className="w-full pl-8">
                  <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden shadow-lg">
                    {/* Project Image */}
                    <div className="w-full h-48 relative">
                      <img 
                        src={exp.projectImage} 
                        alt={exp.projectName}
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                    </div>

                    <div className="p-6">
                      {/* Company and position */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                        <div className="flex items-center text-emerald-400 mt-1">
                          <Briefcase size={16} className="mr-2" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center text-gray-400 mt-1">
                          <Calendar size={16} className="mr-2" />
                          <span>{exp.period}</span>
                          {exp.current && <span className="ml-2 px-2 py-0.5 text-xs bg-emerald-500/20 text-emerald-400 rounded-full">Current</span>}
                        </div>
                      </div>
                      
                      {/* Achievements */}
                      <div className="mb-4">
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex items-start">
                              <span className="text-emerald-400 mr-2 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-2 py-1 text-xs rounded-full bg-gray-800 text-emerald-400 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;