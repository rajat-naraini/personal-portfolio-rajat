import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const WorkExperience:React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);
  
  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  const experiences = [
    {
      id: 1,
      company: "XLSoftek.Inc",
      position: "Software Developer",
      period: "JUN 2024 - Present",
      location: "Nashville, TN",
      description: "Developing modern web applications with Next.js and AWS infrastructure.",
      achievements: [
        "Developed a custom CSV parser in Node.js to streamline data processing and storage in the database.",
        "Built a responsive front-end with Next.js (v14), integrating ShadCN UI components and AWS Cognito for secure authentication.",
        "Deployed the application on AWS Amplify and implemented CI/CD pipelines for automated, efficient build and deployment."
      ],
      technologies: ["Next.js", "Node.js", "AWS", "ShadCN UI", "CI/CD"],
      projectImage: "/assets/images/projects/clientfinder-home.png",
      projectName: "ClientFinder"
    },
    {
      id: 2,
      company: "National Informatics Centre",
      position: "Software Developer",
      period: "OCT 2019 - JUN 2024",
      location: "Patiala, India",
      description: "Developed and maintained government digital systems and applications.",
      achievements: [
        "Led the development and migration of state government projects, including the redesign of the MyOffice app, migration of the VMS (Vehicle Management System) from Angular 4 to Angular 13, and backend transition from Node.js to .NET Core 6.",
        "Developed and integrated critical modules for IFMS (Integrated Financial Management System) and CEI (Chief Electrical Inspector) projects using Angular, Node.js, and PostgreSQL.",
        "Enhanced system modularity and maintainability by implementing specialized services, strict typing, and robust error handling in multiple enterprise applications."
      ],
      technologies: ["Angular", "Node.js", ".NET Core", "PostgreSQL", "SSRS"],
      projectImage: "/assets/images/projects/vms-home.png",
      projectName: "Vehicle Management System"
    }
  ];

  return (
    <section className="py-16 bg-gray-950 text-white" id="work-experience">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <p className="text-emerald-400 text-sm font-mono mb-2">• Experience</p>
          <h2 className="text-4xl font-mono font-bold mb-4">Work Experience</h2>
          <p className="text-gray-400 max-w-2xl text-center">
            My professional journey building enterprise applications and government digital systems.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className={`mb-6 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 ${
                expandedId === exp.id ? 'bg-gray-900' : 'bg-gray-900/50 hover:bg-gray-900/80'
              }`}
            >
              {/* Header - Always Visible */}
              <div 
                className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer"
                onClick={() => toggleExpand(exp.id)}
              >
                <div className="flex items-start">
                  <div className="bg-emerald-500/20 p-3 rounded-lg mr-4">
                    <Briefcase className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                    <p className="text-emerald-400">{exp.company}</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start md:items-center mt-4 md:mt-0">
                  <div className="flex items-center mr-6 mb-2 md:mb-0">
                    <Calendar size={16} className="text-gray-400 mr-2" />
                    <span className="text-gray-300 text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center mr-6 mb-2 md:mb-0">
                    <MapPin size={16} className="text-gray-400 mr-2" />
                    <span className="text-gray-300 text-sm">{exp.location}</span>
                  </div>
                  <button 
                    className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center"
                    aria-label={expandedId === exp.id ? "Collapse details" : "Expand details"}
                  >
                    {expandedId === exp.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                </div>
              </div>
              
              {/* Expanded Content */}
              {expandedId === exp.id && (
                <div className="px-6 pb-6 pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Project Image */}
                    <div className="bg-slate-900 rounded-lg overflow-hidden">
                      <div className="relative pt-[60%]">
                        <img 
                          src={exp.projectImage} 
                          alt={exp.projectName}
                          className="absolute top-0 left-0 w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                        <div className="absolute bottom-3 left-3">
                          <h4 className="text-lg font-medium text-white">{exp.projectName}</h4>
                          <p className="text-sm text-emerald-400">Featured project</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div>
                      <div className="mb-4">
                        <h4 className="flex items-center text-lg font-medium text-white mb-3">
                          <Award className="text-emerald-400 mr-2" size={20} />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex items-start">
                              <span className="text-emerald-400 mr-2 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Technologies */}
                      <div className="mt-6">
                        <h4 className="text-white font-medium mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span 
                              key={tech} 
                              className="px-3 py-1 text-xs rounded-full bg-gray-800 text-emerald-400 font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;