import React, { useState, useEffect } from 'react';
import { Code, Server, Database, Terminal } from 'lucide-react';

const ProfessionalSummary: React.FC = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const fullText = "Full-Stack Developer with 5+ years of experience building enterprise applications";

    // Typing effect
    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prevText => prevText + fullText[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, 75);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);

    return (
        <section className="py-16 bg-black text-white" id="professional-summary">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-12">
                    <p className="text-emerald-400 text-sm font-mono mb-2">• About Me</p>
                    <h2 className="text-4xl font-mono font-bold mb-4">Professional Summary</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left side content */}
                    <div className="space-y-6">
                        <div className="h-16 flex items-center">
                            <h3 className="text-2xl font-bold text-emerald-400 font-mono">
                                {displayText}<span className="animate-pulse">_</span>
                            </h3>
                        </div>

                        <p className="text-gray-300 text-lg">
                            I'm passionate about crafting high-performance web applications using Angular, React/Next.js, Node.js, and Java Spring Boot. What drives me is the perfect balance between elegant code and practical business impact—I believe the best solutions emerge when technical excellence meets real-world understanding.
                        </p>

                        <p className="text-gray-300">
                            My journey through critical government system migrations and enterprise applications has shaped my approach to development. I genuinely enjoy diving into complex technical challenges, finding that moment when a difficult problem gives way to a clean, maintainable solution. From initial design conversations through deployment and beyond, I bring a thoughtful perspective and a collaborative spirit to every project I touch.
                        </p>

                        <div className="pt-4">
                            <h4 className="text-xl font-medium text-white mb-4">My Development Approach</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                                    <div className="flex items-center mb-2">
                                        <Code className="text-emerald-400 mr-2" size={20} />
                                        <span className="font-medium">Clean Architecture</span>
                                    </div>
                                    <p className="text-sm text-gray-400">
                                        Writing maintainable code with clear separation of concerns
                                    </p>
                                </div>

                                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                                    <div className="flex items-center mb-2">
                                        <Server className="text-emerald-400 mr-2" size={20} />
                                        <span className="font-medium">Performance Focused</span>
                                    </div>
                                    <p className="text-sm text-gray-400">
                                        Optimizing for speed, efficiency, and scalability
                                    </p>
                                </div>

                                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                                    <div className="flex items-center mb-2">
                                        <Database className="text-emerald-400 mr-2" size={20} />
                                        <span className="font-medium">Data-Driven</span>
                                    </div>
                                    <p className="text-sm text-gray-400">
                                        Making decisions based on metrics and user behavior
                                    </p>
                                </div>

                                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                                    <div className="flex items-center mb-2">
                                        <Terminal className="text-emerald-400 mr-2" size={20} />
                                        <span className="font-medium">Problem Solver</span>
                                    </div>
                                    <p className="text-sm text-gray-400">
                                        Finding elegant solutions to complex technical challenges
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side timeline */}
                    <div className="relative pl-8 border-l border-gray-800">
                        <div className="space-y-12">
                            <div className="relative">
                                <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border-4 border-black bg-emerald-500"></div>
                                <div>
                                    <h4 className="text-xl font-medium text-white">Started Professional Journey</h4>
                                    <p className="text-emerald-400 text-sm mb-2">2019</p>
                                    <p className="text-gray-400">
                                        Joined National Informatics Centre as a Software Developer, where I led development on the Chief Electrical Inspector (CEI) system. Designed and implemented a comprehensive licensing module for electrical contractors, automating the previously manual application and approval process. In late 2019, I also got the opportunity to work on the Integrated Financial Management System (IFMS), contributing to critical modules that improved government financial operations and reporting capabilities.
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border-4 border-black bg-emerald-500"></div>
                                <div>
                                    <h4 className="text-xl font-medium text-white">Led Major System Migration</h4>
                                    <p className="text-emerald-400 text-sm mb-2">2021</p>
                                    <p className="text-gray-400">
                                        Successfully led the complete overhaul of the Vehicle Management System (VMS), executing a phased migration from Angular 4 to Angular 13 while maintaining full functionality. Simultaneously transitioned the backend from Node.js to .NET Core 6 to align with departmental technology standards. Redesigned the system architecture for improved performance, implemented comprehensive SSRS reporting capabilities for vehicle usage metrics, and integrated real-time tracking features. The modernized system reduced response times by 40% and significantly improved fleet management efficiency for government departments.
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border-4 border-black bg-emerald-500"></div>
                                <div>
                                    <h4 className="text-xl font-medium text-white">Advanced to Current Role</h4>
                                    <p className="text-emerald-400 text-sm mb-2">2024</p>
                                    <p className="text-gray-400">
                                        Joined XLSoftek.Inc, where I took the lead on developing ClientFinder, a comprehensive client-caregiver management platform built with Next.js 14. Created a robust CSV parser in Node.js to streamline data processing from various sources with inconsistent formats. Implemented secure authentication with AWS Cognito, built a responsive UI with ShadCN components, and deployed the application on AWS Amplify with automated CI/CD pipelines. The system significantly improved client matching efficiency and reduced administrative overhead for healthcare staffing operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfessionalSummary;