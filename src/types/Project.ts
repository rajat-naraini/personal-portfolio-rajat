// src/types/project.ts

export interface Challenge {
    title: string;
    description: string;
    solution: string;
  }
  
  export interface CodeSnippet {
    title: string;
    language: string;
    code: string;
  }
  
  export interface TechnicalDecision {
    technology: string;
    reasoning: string;
  }
  
  export interface ProjectType {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    technologies: string[];
    year: number;
    githubUrl: string;
    liveUrl: string;
    challenges: Challenge[];
    architectureDiagram: string;
    codeSnippets: CodeSnippet[];
    technicalDecisions: TechnicalDecision[];
  }