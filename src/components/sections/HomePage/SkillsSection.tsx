import React from 'react';

const SkillsSection: React.FC = () => {
    // Skills data organized by category
    const skillsData = {
        frontEnd: {
            title: 'Front-End:',
            skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Next.js'],
            color: '#A5B4FC' // Light indigo color
        },
        backEnd: {
            title: 'Back-End:',
            skills: ['Node.js', 'Express', 'Spring Boot', '.NET Core'],
            color: '#93C5FD' // Light blue color
        },
        databases: {
            title: 'Databases:',
            skills: ['PostgreSQL', 'MSSQL Server', 'MySQL', 'MongoDB',],
            color: '#6EE7B7' // Light green color
        },
        toolsPlatforms: {
            title: 'Tools & Platforms:',
            skills: ['Git', 'Docker', 'AWS', 'CI/CD'],
            color: '#FCD34D' // Light yellow color
        },
        others: {
            title: 'Others:',
            skills: ['RESTful APIs', 'Tailwind CSS', 'Bootstrap', 'Agile Methodologies'],
            color: '#FCA5A5' // Light red color
        },
        programmingLanguages: {
            title: 'Programming Languages:',
            skills: ['JAVA', 'Python', 'C#', 'JavaScript', 'TypeScript','SQL'],
            color: '#FB923C' // Orange color
        }
    };

    // Skills icons mapping (you can add more as needed)
    const skillIcons: { [key: string]: string } = {
        'Angular': '/assets/icons/angular.png',
        'React': '/assets/icons/react.png',
        'Node.js': '/assets/icons/nodejs.png',
        'Next.js': '/assets/icons/nextjs.png',
        'JavaScript': '/assets/icons/javascript.png',
        'HTML': '/assets/icons/html.png',
        'CSS': '/assets/icons/css.png',
        'MongoDB': '/assets/icons/mongodb.svg',
        'PostgreSQL': '/assets/icons/postgresql.png',
        'DOTNET': '/assets/icons/dotnet.png',
        'Express': '/assets/icons/express.png',
        'Git': '/assets/icons/git.png',
        'AWS': '/assets/icons/aws.png',
        'Java': '/assets/icons/java.png',
        'Spring Boot': '/assets/icons/springboot.png',
    };

    return (
        <div className="py-16 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-12">
                    <p className="text-emerald-400 text-sm font-mono mb-2">• Skills</p>
                    <h2 className="text-4xl font-mono font-bold mb-4">My Skills</h2>
                    <p className="text-gray-400 max-w-2xl text-center">
                        Here are some of the technologies and tools I have experience with, categorized by their respective domains.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Skills Icons Grid */}
                    <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
                            {Object.keys(skillIcons).slice(0, 15).map((skill) => (
                                <div key={skill} className="flex justify-center items-center">
                                    <img
                                        src={skillIcons[skill]}
                                        alt={skill}
                                        className="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills List */}
                    <div className="flex flex-col space-y-6 font-mono pt-7">
                        {Object.values(skillsData).map((category) => (
                            <div key={category.title} className="flex items-start">
                                <div className="flex items-center">
                                    <span className="text-gray-400 mr-2">•</span>
                                    <span className="text-gray-400">{category.title}</span>
                                </div>
                                <div className="ml-2">
                                    {category.skills.map((skill, idx) => (
                                        <React.Fragment key={skill}>
                                            <span style={{ color: category.color }}>{skill}</span>
                                            {idx < category.skills.length - 1 && <span className="text-gray-500">, </span>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;