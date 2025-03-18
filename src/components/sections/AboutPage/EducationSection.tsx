import React, { useState, useRef } from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const Education: React.FC = () => {
  const [activeTab, setActiveTab] = useState('formal');
  const formalSliderRef = useRef<HTMLDivElement>(null);
  const continuousSliderRef = useRef<HTMLDivElement>(null);
  
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Engineering",
      field: "Computer Engineering",
      institution: "Thapar Institute of Engineering and Technology",
      location: "Patiala, Punjab",
      period: "2016 - 2019",
      description: "Studied computer architecture, data structures, algorithms, and software engineering principles.",
      highlights: [
        "Focused on full-stack development and database management",
        "Developed multiple academic projects with Java and web technologies",
        "Participated in coding competitions and hackathons"
      ]
    },
    {
      id: 2,
      degree: "Associate Degree",
      field: "Computer Engineering",
      institution: "Thapar Polytechnic College",
      location: "Patiala, Punjab",
      period: "2013 - 2016",
      description: "Built a foundation in computer science fundamentals and programming basics.",
      highlights: [
        "Introduction to programming concepts and logic development",
        "Basic web development and database management",
        "Early experience with technical documentation and project planning"
      ]
    }
  ];
  
  const continuousLearning = [
    {
      name: "AWS Cloud Practitioner",
      provider: "Amazon Web Services",
      year: "2023",
      description: "Cloud infrastructure fundamentals and AWS service knowledge"
    },
    {
      name: "Modern React with NextJS",
      provider: "Udemy",
      year: "2022",
      description: "Advanced React patterns and Next.js application development"
    },
    {
      name: "Angular Advanced Concepts",
      provider: "Pluralsight",
      year: "2021",
      description: "Performance optimization and component architecture"
    },
    {
      name: "Spring Boot Microservices",
      provider: "Baeldung",
      year: "2020",
      description: "Building and deploying microservices with Spring Boot"
    }
  ];

  // Slider navigation functions
  const scrollFormal = (direction: 'left' | 'right') => {
    if (formalSliderRef.current) {
      const scrollAmount = direction === 'left' 
        ? -formalSliderRef.current.offsetWidth
        : formalSliderRef.current.offsetWidth;
      
      formalSliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollContinuous = (direction: 'left' | 'right') => {
    if (continuousSliderRef.current) {
      const scrollAmount = direction === 'left' 
        ? -350 // Approximate card width + gap
        : 350;
      
      continuousSliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gray-950 text-white" id="education">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <p className="text-emerald-400 text-sm font-mono mb-2">• Learning</p>
          <h2 className="text-4xl font-mono font-bold mb-4">Education</h2>
          <p className="text-gray-400 max-w-2xl text-center">
            My academic background and commitment to continuous learning.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-900 p-1 rounded-full">
            <button
              className={`px-5 py-2 rounded-full transition-colors ${
                activeTab === 'formal' 
                ? 'bg-emerald-500 text-black font-medium' 
                : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveTab('formal')}
            >
              Formal Education
            </button>
            <button
              className={`px-5 py-2 rounded-full transition-colors ${
                activeTab === 'continuous' 
                ? 'bg-emerald-500 text-black font-medium' 
                : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveTab('continuous')}
            >
              Continuous Learning
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Formal Education Slider */}
          {activeTab === 'formal' && (
            <div className="relative">
              <div className="absolute top-1/2 -left-4 md:-left-10 transform -translate-y-1/2 z-10">
                <button 
                  onClick={() => scrollFormal('left')}
                  className="p-2 md:p-3 rounded-full bg-gray-800 text-emerald-400 hover:bg-gray-700 transition-colors shadow-lg focus:outline-none"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={20} />
                </button>
              </div>
              
              <h3 className="text-2xl font-bold flex items-center mb-6">
                <GraduationCap className="text-emerald-400 mr-3" size={24} />
                Formal Education
              </h3>
              
              <div 
                ref={formalSliderRef}
                className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar space-x-6 pb-6"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {educationData.map((edu) => (
                  <div 
                    key={edu.id} 
                    className="flex-shrink-0 min-w-[500px] w-[calc(100%-40px)] md:w-[45%] snap-center"
                  >
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 h-full hover:border-emerald-500/30 transition-colors">
                      <div>
                        <h4 className="text-xl font-medium text-white mb-1">{edu.degree}</h4>
                        <p className="text-emerald-400 mb-1">{edu.field}</p>
                        <p className="text-gray-300 mb-1">{edu.institution}</p>
                        
                        <div className="flex items-center text-gray-400 mb-4 text-sm">
                          <Calendar size={14} className="mr-2" />
                          <span>{edu.period}</span>
                          <span className="mx-2">•</span>
                          <MapPin size={14} className="mr-2" />
                          <span>{edu.location}</span>
                        </div>
                        
                        <p className="text-gray-300 mb-4 border-l-2 border-emerald-500 pl-4 italic">
                          {edu.description}
                        </p>
                        
                        <h5 className="text-white font-medium mb-2">Key Focus Areas:</h5>
                        <ul className="space-y-1">
                          {edu.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex items-start">
                              <span className="text-emerald-400 mr-2 mt-1">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="absolute top-1/2 -right-4 md:-right-10 transform -translate-y-1/2 z-10">
                <button 
                  onClick={() => scrollFormal('right')}
                  className="p-2 md:p-3 rounded-full bg-gray-800 text-emerald-400 hover:bg-gray-700 transition-colors shadow-lg focus:outline-none"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
          
          {/* Continuous Learning Slider */}
          {activeTab === 'continuous' && (
            <div className="relative">
              <div className="absolute top-1/2 -left-4 md:-left-10 transform -translate-y-1/2 z-10">
                <button 
                  onClick={() => scrollContinuous('left')}
                  className="p-2 md:p-3 rounded-full bg-gray-800 text-emerald-400 hover:bg-gray-700 transition-colors shadow-lg focus:outline-none"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={20} />
                </button>
              </div>
              
              <h3 className="text-2xl font-bold flex items-center mb-6">
                <BookOpen className="text-emerald-400 mr-3" size={24} />
                Continuous Learning
              </h3>
              
              <div 
                ref={continuousSliderRef}
                className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar space-x-6 pb-6"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {continuousLearning.map((course, idx) => (
                  <div 
                    key={idx} 
                    className="flex-shrink-0 w-80 snap-center"
                  >
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 h-full hover:border-emerald-500/30 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-medium text-white">{course.name}</h4>
                        <span className="text-xs font-medium bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">
                          {course.year}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{course.provider}</p>
                      <p className="text-gray-300 text-sm">{course.description}</p>
                    </div>
                  </div>
                ))}
                
                {/* Current Learning Card */}
                <div className="flex-shrink-0 w-80 snap-center">
                  <div className="bg-gradient-to-br from-gray-900 to-emerald-900/20 border border-emerald-500/30 rounded-lg p-6 h-full">
                    <h4 className="text-lg font-medium text-white mb-3">Currently Learning</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      I am always expanding my skillset. Right now I am focused on:
                    </p>
                    <ul className="space-y-2">
                      <li className="text-gray-300 text-sm flex items-start">
                        <span className="text-emerald-400 mr-2 mt-1">•</span>
                        <span>Advanced AWS architecture patterns</span>
                      </li>
                      <li className="text-gray-300 text-sm flex items-start">
                        <span className="text-emerald-400 mr-2 mt-1">•</span>
                        <span>Server-side rendering optimization in Next.js</span>
                      </li>
                      <li className="text-gray-300 text-sm flex items-start">
                        <span className="text-emerald-400 mr-2 mt-1">•</span>
                        <span>Performance engineering for large-scale applications</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-4 md:-right-10 transform -translate-y-1/2 z-10">
                <button 
                  onClick={() => scrollContinuous('right')}
                  className="p-2 md:p-3 rounded-full bg-gray-800 text-emerald-400 hover:bg-gray-700 transition-colors shadow-lg focus:outline-none"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* CSS for hiding scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Education;