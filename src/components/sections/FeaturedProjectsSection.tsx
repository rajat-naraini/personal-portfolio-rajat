import React from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

const FeaturedProjects: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "ClientFinder",
            description: "A Next.js application for client-caregiver management with custom CSV parser integration and AWS deployment.",
            image: "/assets/images/projects/clientfinder.jpg",
            technologies: ["Next.js", "Node.js", "AWS", "Cognito"],
            githubUrl: "https://github.com/rajat-naraini/clientfinder",
            liveUrl: "https://clientfinder.example.com",
            featured: true
        },
        {
            id: 2,
            title: "Vehicle Management System",
            description: "Led the migration from Angular 4 to Angular 13 and transitioned the backend to .NET Core with SSRS integration.",
            image: "/assets/images/projects/vms.jpg",
            technologies: ["Angular", ".NET Core", "MSSQL", "SSRS"],
            githubUrl: "https://github.com/rajat-naraini/vms",
            liveUrl: "",
            featured: true
        },
        {
            id: 3,
            title: "MyOffice",
            description: "Redesigned the frontend architecture into modular components using Angular 17, improving scalability and error handling.",
            image: "/assets/images/projects/myoffice.jpg",
            technologies: ["Angular 17", "TypeScript", "RxJS", "NgRx"],
            githubUrl: "https://github.com/rajat-naraini/myoffice",
            liveUrl: "",
            featured: true
        }
    ];

    return (
        <section className="py-16 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-12">
                    <p className="text-emerald-400 text-sm font-mono mb-2">• Projects</p>
                    <h2 className="text-4xl font-mono font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl text-center">
                        A selection of my recent development work, showcasing my technical capabilities and problem-solving approach.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.filter(project => project.featured).map((project) => (
                        <div key={project.id} className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-800 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                            <div className="h-48 overflow-hidden relative">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech) => (
                                        <span 
                                            key={tech} 
                                            className="px-2 py-1 text-xs rounded-full bg-gray-800 text-emerald-400 font-mono"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {project.githubUrl && (
                                            <a 
                                                href={project.githubUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors"
                                                aria-label={`GitHub repository for ${project.title}`}
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a 
                                                href={project.liveUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors"
                                                aria-label={`Live demo for ${project.title}`}
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                    
                                    <a 
                                        href={`/projects/${project.id}`} 
                                        className="text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center transition-colors"
                                    >
                                        View Details
                                        <ArrowRight size={16} className="ml-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="flex justify-center mt-12">
                    <a 
                        href="/projects" 
                        className="px-6 py-3 border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black rounded-lg transition-colors duration-300 flex items-center"
                    >
                        View All Projects
                        <ArrowRight size={18} className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;