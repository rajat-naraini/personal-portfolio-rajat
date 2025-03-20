import React, { useState } from 'react';

type TabKey = 'frontend' | 'backend' | 'database' | 'devops';

const TechSkills:React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('frontend');
  
  const tabData: Record<TabKey, { title: string; description: string; skills: { name: string; proficiency: number; years: number; image: string; }[] }> = {
    frontend: {
      title: 'Frontend',
      description: 'Building responsive, accessible, and performant user interfaces',
      skills: [
        { name: 'Angular', proficiency: 90, years: 5, image: '/assets/icons/angular.png' },
        { name: 'React', proficiency: 85, years: 4, image: '/assets/icons/react.png' },
        { name: 'Next.js', proficiency: 80, years: 2, image: '/assets/icons/nextjs.png' },
        { name: 'TypeScript', proficiency: 90, years: 5, image: '/assets/icons/typescript.png' },
        { name: 'HTML/CSS', proficiency: 95, years: 5, image: '/assets/icons/html.png' },
        { name: 'Tailwind CSS', proficiency: 85, years: 3, image: '/assets/icons/tailwind.png' },
        { name: 'Bootstrap', proficiency: 90, years: 5, image: '/assets/icons/bootstrap.png' },
        { name: 'ShadCN UI', proficiency: 75, years: 1, image: '/assets/icons/shadcn.png' },
      ]
    },
    backend: {
      title: 'Backend',
      description: 'Creating robust APIs and server-side applications',
      skills: [
        { name: 'Node.js', proficiency: 85, years: 5, image: '/assets/icons/nodejs.png' },
        { name: 'Express.js', proficiency: 85, years: 5, image: '/assets/icons/express.png' },
        { name: 'Java', proficiency: 75, years: 3, image: '/assets/icons/java.png' },
        { name: 'Spring Boot', proficiency: 75, years: 3, image: '/assets/icons/springboot.png' },
        { name: '.NET Core', proficiency: 70, years: 2, image: '/assets/icons/dotnet.png' },
        { name: 'RESTful APIs', proficiency: 90, years: 5, image: '/assets/icons/rest.png' },
      ]
    },
    database: {
      title: 'Database',
      description: 'Designing and optimizing database systems',
      skills: [
        { name: 'PostgreSQL', proficiency: 85, years: 5, image: '/assets/icons/postgresql.png' },
        { name: 'MSSQL', proficiency: 80, years: 4, image: '/assets/icons/mssql.png' },
        { name: 'MySQL', proficiency: 75, years: 3, image: '/assets/icons/mysql.svg' },
        { name: 'MongoDB', proficiency: 70, years: 3, image: '/assets/icons/mongodb.svg' },
        { name: 'SSRS', proficiency: 80, years: 3, image: '/assets/icons/ssrs.png' },
      ]
    },
    devops: {
      title: 'DevOps & Tools',
      description: 'Streamlining deployment and development workflows',
      skills: [
        { name: 'AWS', proficiency: 75, years: 2, image: '/assets/icons/aws.png' },
        { name: 'CI/CD', proficiency: 80, years: 3, image: '/assets/icons/cicd.png' },
        { name: 'Git', proficiency: 90, years: 5, image: '/assets/icons/git.png' },
        { name: 'Docker', proficiency: 65, years: 2, image: '/assets/icons/docker.png' },
      ]
    }
  };

  // Function to determine color based on proficiency
  const getProficiencyColor = (proficiency:number) => {
    if (proficiency >= 90) return 'bg-emerald-500';
    if (proficiency >= 80) return 'bg-emerald-400';
    if (proficiency >= 70) return 'bg-emerald-300';
    return 'bg-emerald-200';
  };

  return (
    <section className="py-16 bg-black text-white" id="tech-skills">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <p className="text-emerald-400 text-sm font-mono mb-2">• Expertise</p>
          <h2 className="text-4xl font-mono font-bold mb-4">Tech Stack & Skills</h2>
          <p className="text-gray-400 max-w-2xl text-center">
            My professional toolkit built over 5+ years of development experience.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as TabKey)}
              className={`px-5 py-2 rounded-full transition-colors ${
                activeTab === tab 
                  ? 'bg-emerald-500 text-black font-medium' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tabData[tab as TabKey].title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">{tabData[activeTab].title}</h3>
            <p className="text-gray-400">{tabData[activeTab].description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tabData[activeTab].skills.map((skill) => (
              <div 
                key={skill.name} 
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-emerald-500/30 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gray-800 p-2 rounded-lg mr-4">
                    <img 
                      src={skill.image} 
                      alt={skill.name} 
                      className="w-8 h-8"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/assets/images/skills/default.svg'; // Fallback image
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">{skill.name}</h4>
                    <p className="text-sm text-gray-400">{skill.years} {skill.years === 1 ? 'year' : 'years'} experience</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Proficiency</span>
                    <span className="text-sm font-medium text-emerald-400">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${getProficiencyColor(skill.proficiency)}`}
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSkills;