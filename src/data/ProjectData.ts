// src/data/projectData.ts
import { ProjectType } from '../types/Project';

export const allTechnologies = [
  'React', 'Next.js', 'Angular', 'Node.js', 'Java', 'Spring Boot', 
  'PostgreSQL', 'MySQL', 'AWS', '.NET Core', 'TypeScript'
];

export const projects: ProjectType[] = [
  {
    id: 'clientfinder',
    title: 'ClientFinder',
    shortDescription: 'Client-caregiver management application with CSV data processing',
    fullDescription: 'A comprehensive platform for managing client-caregiver relationships with custom data processing capabilities.',
    image: '/assets/images/projects/clientfinder.jpg',
    technologies: ['Next.js', 'Node.js', 'AWS', 'TypeScript'],
    year: 2024,
    githubUrl: 'https://github.com/rajat-naraini/clientfinder',
    liveUrl: 'https://clientfinder.example.com',
    challenges: [
      {
        title: 'Complex CSV Parsing',
        description: 'Needed to handle varied CSV formats with inconsistent data while ensuring accuracy.',
        solution: 'Developed a robust parser with validation rules and data normalization techniques.'
      },
      {
        title: 'User Authentication',
        description: 'Required secure authentication with different permission levels.',
        solution: 'Implemented AWS Cognito for authentication with custom attribute-based access control.'
      }
    ],
    architectureDiagram: '/assets/images/projects/clientfinder-architecture.jpg',
    codeSnippets: [
      {
        title: 'CSV Parser Function',
        language: 'javascript',
        code: `const parseCSV = async (file) => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.trim(),
      complete: (results) => {
        const processedData = results.data.map(row => ({
          ...row,
          // Normalize client ID format
          clientId: normalizerId(row.clientId || row.client_id),
          // Convert date strings to ISO format
          startDate: normalizeDate(row.startDate || row.start_date)
        }));
        resolve(processedData);
      },
      error: (error) => reject(error)
    });
  });
};`
      }
    ],
    technicalDecisions: [
      {
        technology: 'Next.js',
        reasoning: 'Chosen for its server-side rendering capabilities which improved initial load performance by 40% and enhanced SEO.'
      },
      {
        technology: 'AWS Amplify',
        reasoning: 'Selected for streamlined deployment and CI/CD capabilities, reducing deployment time from hours to minutes.'
      }
    ]
  },
  {
    id: 'vms',
    title: 'Vehicle Management System',
    shortDescription: 'Government vehicle tracking and management platform',
    fullDescription: 'A comprehensive system for tracking and managing government vehicles, including maintenance scheduling, fuel monitoring, and driver assignment.',
    image: '/assets/images/projects/vms.jpg',
    technologies: ['Angular', '.NET Core', 'PostgreSQL', 'SSRS'],
    year: 2022,
    githubUrl: 'https://github.com/rajat-naraini/vms',
    liveUrl: '',
    challenges: [
      {
        title: 'Legacy System Migration',
        description: 'Needed to migrate from Angular 4 to Angular 13 while maintaining functionality.',
        solution: 'Implemented a phased migration approach with comprehensive testing to ensure feature parity.'
      },
      {
        title: 'Complex Reporting',
        description: 'Required detailed vehicle usage and maintenance reports with various filtering options.',
        solution: 'Integrated SSRS reporting with parameterized queries and dynamic filtering.'
      }
    ],
    architectureDiagram: '/assets/images/projects/vms-architecture.jpg',
    codeSnippets: [
      {
        title: 'Angular Service Module',
        language: 'typescript',
        code: `@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = environment.apiBaseUrl + '/vehicles';

  constructor(private http: HttpClient) {}

  getVehicles(filters: VehicleFilters): Observable<PaginatedResult<Vehicle>> {
    let params = new HttpParams()
      .set('page', filters.page.toString())
      .set('pageSize', filters.pageSize.toString());
    
    if (filters.departmentId) {
      params = params.set('departmentId', filters.departmentId);
    }
    
    if (filters.status) {
      params = params.set('status', filters.status);
    }
    
    return this.http.get<PaginatedResult<Vehicle>>(this.apiUrl, { params });
  }
  
  // Additional methods for CRUD operations
}`
      }
    ],
    technicalDecisions: [
      {
        technology: '.NET Core',
        reasoning: 'Migrated from Node.js to improve performance and leverage existing .NET expertise within the organization.'
      },
      {
        technology: 'Angular State Management',
        reasoning: 'Implemented NgRx to manage application state, reducing bugs related to state inconsistency by 60%.'
      }
    ]
  },
  {
    id: 'myoffice',
    title: 'MyOffice',
    shortDescription: 'Government office workflow and document management system',
    fullDescription: 'A comprehensive digital platform for managing office workflows, document processing, and administrative tasks for government offices.',
    image: '/assets/images/projects/myoffice.jpg',
    technologies: ['Angular', 'Node.js', 'PostgreSQL', 'TypeScript'],
    year: 2021,
    githubUrl: 'https://github.com/rajat-naraini/myoffice',
    liveUrl: '',
    challenges: [
      {
        title: 'Complex Workflow Rules',
        description: 'Needed to implement sophisticated document routing with hierarchical approval workflows.',
        solution: 'Designed a flexible workflow engine using a rule-based system with dynamic routing capabilities.'
      },
      {
        title: 'Performance at Scale',
        description: 'System needed to handle thousands of concurrent users with minimal latency.',
        solution: 'Implemented data caching, lazy loading, and database query optimization to improve performance.'
      }
    ],
    architectureDiagram: '/assets/images/projects/myoffice-architecture.jpg',
    codeSnippets: [
      {
        title: 'Workflow Engine',
        language: 'typescript',
        code: `class WorkflowEngine {
  private ruleEngine: RuleEngine;
  private workflowRepository: WorkflowRepository;
  
  constructor(
    ruleEngine: RuleEngine,
    workflowRepository: WorkflowRepository
  ) {
    this.ruleEngine = ruleEngine;
    this.workflowRepository = workflowRepository;
  }
  
  async processDocument(document: Document, user: User): Promise<WorkflowResult> {
    // Get the appropriate workflow for this document type
    const workflow = await this.workflowRepository.getWorkflowByDocumentType(
      document.type,
      document.department
    );
    
    // Determine the current state and possible transitions
    const currentState = document.workflowState || workflow.initialState;
    const possibleTransitions = workflow.transitions.filter(
      t => t.fromState === currentState && this.ruleEngine.evaluate(t.conditions, { document, user })
    );
    
    // Return available actions based on transitions
    return {
      currentState,
      availableActions: possibleTransitions.map(t => ({
        id: t.id,
        name: t.name,
        targetState: t.toState,
        requiresComment: t.requiresComment,
        requiresAttachment: t.requiresAttachment
      }))
    };
  }
}`
      }
    ],
    technicalDecisions: [
      {
        technology: 'Angular Component Architecture',
        reasoning: 'Implemented a modular component design that improved code reusability and reduced development time for new features by 30%.'
      },
      {
        technology: 'PostgreSQL JSON Features',
        reasoning: 'Used PostgreSQL JSON capabilities for flexible document storage while maintaining relational integrity for structured data.'
      }
    ]
  }
];