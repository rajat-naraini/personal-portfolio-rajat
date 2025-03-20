// src/data/projectData.ts
import { ProjectType } from '../types/Project';

export const allTechnologies = [
    'React', 'Next.js', 'Angular', 'Node.js', 'Java', 'Spring Boot',
    'PostgreSQL', 'MySQL', 'AWS', '.NET Core', 'TypeScript', 'Express.js',
    'MongoDB', 'SSRS', 'RxJS', 'NgRx', 'Tailwind CSS', 'Vite'
];

export const projects: ProjectType[] = [
    {
        id: 'clientfinder',
        title: 'ClientFinder',
        shortDescription: 'Client-caregiver management application with CSV data processing',
        fullDescription: 'A comprehensive platform for managing client-caregiver relationships with custom data processing capabilities. Built with Next.js and deployed on AWS, this application streamlines the matching process between clients and caregivers while handling complex data importation and transformation requirements.',
        image: '/assets/images/projects/clientfinder-home.png',
        technologies: ['Next.js', 'Node.js', 'AWS', 'TypeScript', 'ShadCN UI'],
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
            },
            {
                title: 'Deployment and CI/CD',
                description: 'Needed an efficient deployment pipeline for continuous delivery.',
                solution: 'Set up AWS Amplify with automated build and deployment processes triggered by GitHub commits.'
            }
        ],
        architectureDiagram: '/assets/images/projects/clientfinder-home.png',
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
        id: 'cei',
        title: 'Chief Electrical Inspector (CEI)',
        shortDescription: 'Licensing and contractor management system for electrical inspectors',
        fullDescription: 'A comprehensive system for the Chief Electrical Inspector department that manages licensing, contractor registrations, and inspection workflows. The system digitized the previously paper-based process, enabling efficient license applications, renewals, and inspection scheduling.',
        image: '/assets/images/projects/cei-home.png',
        technologies: ['Angular 8', 'Node.js', 'Express.js', 'PostgreSQL', 'Angular Material'],
        year: 2020,
        githubUrl: 'https://github.com/rajat-naraini/cei',
        liveUrl: '',
        challenges: [
            {
                title: 'Role-Based Access Control',
                description: 'Needed to implement a complex permission system for different user types including inspectors, contractors, and administrators.',
                solution: 'Designed a flexible RBAC system with hierarchical permissions and contextual access rules.'
            },
            {
                title: 'Document Management',
                description: 'Required secure storage and retrieval of license documents and certificates.',
                solution: 'Implemented a document management system with versioning and secure access controls.'
            },
            {
                title: 'Workflow Automation',
                description: 'Needed to automate the multi-step approval process for licenses.',
                solution: 'Created a configurable workflow engine that guides applications through various approval stages.'
            }
        ],
        architectureDiagram: '/assets/images/projects/cei-architecture.jpg',
        codeSnippets: [
            {
                title: 'Authentication Middleware',
                language: 'javascript',
                code: `const authMiddleware = (allowedRoles) => {
                return (req, res, next) => {
                    const token = req.headers.authorization?.split(' ')[1];
                    
                    if (!token) {
                    return res.status(401).json({ message: 'Authentication required' });
                    }
                    
                    try {
                    const decoded = jwt.verify(token, process.env.JWT_SECRET);
                    req.user = decoded;
                    
                    if (allowedRoles && !allowedRoles.includes(req.user.role)) {
                        return res.status(403).json({ message: 'Insufficient permissions' });
                    }
                    
                    next();
                    } catch (error) {
                    return res.status(401).json({ message: 'Invalid token' });
                    }
                };
                };`
            }
        ],
        technicalDecisions: [
            {
                technology: 'Angular Material',
                reasoning: 'Chosen for its comprehensive UI component library that enabled rapid development while maintaining a consistent user experience.'
            },
            {
                technology: 'Node.js with Express',
                reasoning: 'Selected for building a flexible REST API that could easily integrate with the existing PostgreSQL database and handle complex business logic.'
            }
        ]
    },
    {
        id: 'ifms',
        title: 'Integrated Financial Management System (IFMS)',
        shortDescription: 'Comprehensive financial management platform for government departments',
        fullDescription: 'A robust financial management system designed to streamline budgeting, expenditure tracking, and financial reporting for government departments. The system includes modules for budget allocation, expense management, pension processing, and integrated financial reporting.',
        image: '/assets/images/projects/ifms-home.png',
        technologies: ['Angular 10', 'Java', 'Spring Boot', 'PostgreSQL', 'SSRS'],
        year: 2020,
        githubUrl: 'https://github.com/rajat-naraini/ifms',
        liveUrl: '',
        challenges: [
            {
                title: 'Complex Financial Calculations',
                description: 'Needed to implement intricate pension and benefits calculations with regulatory compliance.',
                solution: 'Developed a calculation engine with rule-based configuration to handle various pension schemes and regulations.'
            },
            {
                title: 'Data Integration',
                description: 'Required integration with multiple existing financial systems and databases.',
                solution: 'Created a data integration layer with adapters for each external system, normalizing data formats and handling synchronization.'
            },
            {
                title: 'Reporting Requirements',
                description: 'Needed comprehensive financial reports with various aggregation levels and export options.',
                solution: 'Implemented SSRS reporting with parameterized templates and multiple export formats including PDF, Excel, and CSV.'
            }
        ],
        architectureDiagram: '/assets/images/projects/ifms-architecture.jpg',
        codeSnippets: [
            {
                title: 'Pension Calculation Service',
                language: 'java',
                code: `@Service
                public class PensionCalculationService {
                    
                    @Autowired
                    private RuleEngineService ruleEngine;
                    
                    @Autowired
                    private EmployeeRepository employeeRepository;
                    
                    public PensionDetail calculatePension(String employeeId, LocalDate retirementDate) {
                        Employee employee = employeeRepository.findById(employeeId)
                            .orElseThrow(() -> new ResourceNotFoundException("Employee not found"));
                        
                        // Get applicable pension rules based on employee join date
                        Set<PensionRule> applicableRules = ruleEngine.getApplicableRules(
                            employee.getJoinDate(), 
                            retirementDate
                        );
                        
                        // Calculate basic pension amount
                        BigDecimal basicPension = calculateBasicPension(employee, applicableRules);
                        
                        // Apply additional benefits
                        Map<String, BigDecimal> benefits = calculateAdditionalBenefits(
                            employee, 
                            basicPension, 
                            applicableRules
                        );
                        
                        return new PensionDetail(employee, basicPension, benefits, retirementDate);
                    }
                    
                    // Other calculation methods
                }`
            }
        ],
        technicalDecisions: [
            {
                technology: 'Spring Boot',
                reasoning: 'Selected for its robust transactional support and integration capabilities with financial systems and databases.'
            },
            {
                technology: 'Angular 10',
                reasoning: 'Chosen for building a responsive front-end with complex forms and real-time validation for financial data entry.'
            }
        ]
    },
    {
        id: 'vms',
        title: 'Vehicle Management System',
        shortDescription: 'Government vehicle tracking and management platform',
        fullDescription: 'A comprehensive system for tracking and managing government vehicles, including maintenance scheduling, fuel monitoring, and driver assignment. The platform provides real-time insights into vehicle usage, helps optimize fleet operations, and ensures compliance with maintenance schedules.',
        image: '/assets/images/projects/vms-home.png',
        technologies: ['Angular 13', '.NET Core 6', 'PostgreSQL', 'SSRS'],
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
            },
            {
                title: 'Backend Platform Change',
                description: 'Needed to transition from Node.js to .NET Core without service disruption.',
                solution: 'Created a parallel implementation with API compatibility layer before gradually transitioning endpoints.'
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
        fullDescription: 'A comprehensive digital platform for managing office workflows, document processing, and administrative tasks for government offices. The system facilitates paperless operations, streamlines approval processes, and provides analytics on workflow efficiency and document processing times.',
        image: '/assets/images/projects/myoffice-home.png',
        technologies: ['Angular 17', 'Node.js', 'PostgreSQL', 'TypeScript', 'RxJS'],
        year: 2023,
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
            },
            {
                title: 'Architecture Redesign',
                description: 'Required modernizing the existing monolithic application into a more maintainable structure.',
                solution: 'Restructured the application using a modular component architecture and service-based design.'
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
    },
    {
        id: 'shopeasy',
        title: 'ShopEasy',
        shortDescription: 'Modern e-commerce platform with comprehensive shopping features',
        fullDescription: 'A full-featured e-commerce platform built with React and Node.js, offering product catalog management, shopping cart functionality, user accounts, and secure payment processing. The responsive design provides an optimal shopping experience across all devices.',
        image: '/assets/images/projects/shopeasy-home.png',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Redux'],
        year: 2021,
        githubUrl: 'https://github.com/rajat-naraini/shopeasy',
        liveUrl: '',
        challenges: [
            {
                title: 'Shopping Cart Persistence',
                description: 'Needed to maintain cart state across sessions and devices.',
                solution: 'Implemented cart synchronization between local storage and database with conflict resolution.'
            },
            {
                title: 'Payment Processing',
                description: 'Required secure integration with payment gateways.',
                solution: 'Developed a payment abstraction layer with Stripe integration and robust error handling.'
            },
            {
                title: 'Product Search and Filtering',
                description: 'Needed efficient product search with multiple filter options.',
                solution: 'Implemented text search with MongoDB indexing and client-side filter combinators for real-time filtering.'
            }
        ],
        architectureDiagram: '/assets/images/projects/shopeasy-architecture.jpg',
        codeSnippets: [
            {
                title: 'Shopping Cart Hook',
                language: 'javascript',
                code: `export const useShoppingCart = () => {
                const [cart, setCart] = useState([]);
                const [loading, setLoading] = useState(true);
                const [error, setError] = useState(null);
                const { user } = useAuth();
                
                // Load cart from API or local storage
                useEffect(() => {
                    const loadCart = async () => {
                    try {
                        setLoading(true);
                        let cartData;
                        
                        if (user) {
                        // Load from API if user is logged in
                        const response = await api.get('/cart');
                        cartData = response.data;
                        } else {
                        // Load from local storage if guest
                        const localCart = localStorage.getItem('cart');
                        cartData = localCart ? JSON.parse(localCart) : [];
                        }
                        
                        setCart(cartData);
                    } catch (err) {
                        setError('Failed to load cart');
                        console.error(err);
                    } finally {
                        setLoading(false);
                    }
                    };
                    
                    loadCart();
                }, [user]);
                
                // Save cart changes
                const saveCart = async (newCart) => {
                    try {
                    setLoading(true);
                    
                    if (user) {
                        // Save to API if user is logged in
                        await api.put('/cart', newCart);
                    }
                    
                    // Always save to local storage as backup
                    localStorage.setItem('cart', JSON.stringify(newCart));
                    
                    setCart(newCart);
                    } catch (err) {
                    setError('Failed to update cart');
                    console.error(err);
                    return false;
                    } finally {
                    setLoading(false);
                    }
                    
                    return true;
                };
                
                // Add item to cart
                const addItem = async (product, quantity = 1) => {
                    const existingItem = cart.find(item => item.productId === product._id);
                    let newCart;
                    
                    if (existingItem) {
                    // Update quantity if product already in cart
                    newCart = cart.map(item => 
                        item.productId === product._id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                    );
                    } else {
                    // Add new item if not in cart
                    newCart = [...cart, {
                        productId: product._id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        quantity
                    }];
                    }
                    
                    return saveCart(newCart);
                };
                
                // Other cart methods (removeItem, updateQuantity, clearCart, etc.)
                
                return {
                    cart,
                    loading,
                    error,
                    addItem,
                    // Other methods
                };
                };`
            }
        ],
        technicalDecisions: [
            {
                technology: 'MongoDB',
                reasoning: 'Selected for its flexibility with product data that has varying attributes across different categories.'
            },
            {
                technology: 'Redux',
                reasoning: 'Implemented for centralized state management, particularly important for handling cart state and user sessions.'
            }
        ]
    },
    {
        id: 'portfolio',
        title: 'Personal Portfolio',
        shortDescription: 'Modern developer portfolio built with React and TypeScript',
        fullDescription: 'My personal portfolio website showcasing my projects, skills, and professional experience. Built with React, TypeScript, and Tailwind CSS, the site features a responsive design, dark theme, and interactive project showcases.',
        image: '/assets/images/projects/portfolio-home.png',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        year: 2024,
        githubUrl: 'https://github.com/rajat-naraini/portfolio',
        liveUrl: 'https://rajatnaraini.dev',
        challenges: [
            {
                title: 'Interactive User Experience',
                description: 'Wanted to create an engaging portfolio that showcases technical skills while providing a great user experience.',
                solution: 'Implemented subtle animations, interactive project cards, and smooth transitions using React hooks and Tailwind CSS.'
            },
            {
                title: 'Responsive Design',
                description: 'Needed a design that works flawlessly across devices of all sizes.',
                solution: 'Used Tailwind CSS with a mobile-first approach and custom breakpoints for optimal viewing on all screen sizes.'
            },
            {
                title: 'Performance Optimization',
                description: 'Aimed for fast loading times and smooth interactions.',
                solution: 'Implemented code splitting, lazy loading of components, and optimized assets to achieve excellent performance metrics.'
            }
        ],
        architectureDiagram: '/assets/images/projects/portfolio-architecture.jpg',
        codeSnippets: [
            {
                title: 'Project Filter Hook',
                language: 'typescript',
                code: `import { useState, useMemo } from 'react';
                    import { ProjectType } from '../types/Project';

                    export const useProjectFilter = (projects: ProjectType[]) => {
                    const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
                    
                    const allTechnologies = useMemo(() => {
                        const techSet = new Set<string>();
                        
                        projects.forEach(project => {
                        project.technologies.forEach(tech => {
                            techSet.add(tech);
                        });
                        });
                        
                        return Array.from(techSet).sort();
                    }, [projects]);
                    
                    const filteredProjects = useMemo(() => {
                        if (selectedTechnologies.length === 0) {
                        return projects;
                        }
                        
                        return projects.filter(project => 
                        selectedTechnologies.some(tech => project.technologies.includes(tech))
                        );
                    }, [projects, selectedTechnologies]);
                    
                    const toggleTechnology = (tech: string) => {
                        setSelectedTechnologies(prev => 
                        prev.includes(tech)
                            ? prev.filter(t => t !== tech)
                            : [...prev, tech]
                        );
                    };
                    
                    const clearFilters = () => {
                        setSelectedTechnologies([]);
                    };
                    
                    return {
                        selectedTechnologies,
                        allTechnologies,
                        filteredProjects,
                        toggleTechnology,
                        clearFilters
                    };
                    };`
            }
        ],
        technicalDecisions: [
            {
                technology: 'TypeScript',
                reasoning: 'Chosen for type safety and improved developer experience, helping prevent common errors during development.'
            },
            {
                technology: 'Vite',
                reasoning: 'Selected for its fast development server and optimized production builds, significantly improving development workflow.'
            }
        ]
    }
];