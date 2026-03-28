import React, { useState } from 'react';
import {
  Github,
  ExternalLink,
  X,
  Code,
  Brain,
  Globe,
  Shield,
  Database,
} from 'lucide-react';

type ProjectCategory = 'ai' | 'web' | 'security' | 'systems';

type Project = {
  id: number;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
  challenges: string[];
  solutions: string[];
  keyLearnings: string[];
};

const categories = [
  { id: 'all', label: 'All Projects', icon: Code },
  { id: 'ai', label: 'AI / ML', icon: Brain },
  { id: 'web', label: 'Web Apps', icon: Globe },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'systems', label: 'Systems', icon: Database },
] as const;

const projects: Project[] = [
  {
    id: 1,
    title: 'STOCK-PREDICT',
    category: 'systems',
    shortDescription:
      'AI-assisted trading control plane with Next.js, NestJS, FastAPI, Groww hooks, and deployment guardrails.',
    fullDescription:
      'Built a multi-service trading platform with a production-ready dashboard, gateway, and orchestrator. The project includes health and readiness probes, risk controls, broker mutation gates, Hugging Face sentiment hooks, Docker deployment, and Render Blueprint support.',
    image:
      'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'NestJS', 'FastAPI', 'Docker', 'Redis', 'Groww API'],
    github: 'https://github.com/Gosula16/STOCK-PREDICT',
    demo: 'https://frontend-rho-flame-38.vercel.app/',
    challenges: [
      'Coordinating frontend, gateway, and orchestrator services in one deployable system',
      'Adding real broker controls without making production defaults unsafe',
      'Handling degraded backend states cleanly in the UI',
    ],
    solutions: [
      'Split responsibilities into a dashboard, API gateway, and FastAPI orchestrator',
      'Added kill switch checks, mutation flags, and stricter production secret validation',
      'Implemented resilient API error handling and a Render Blueprint for repeatable deployment',
    ],
    keyLearnings: [
      'Production hardening across multiple services',
      'Safer trading-system defaults and operational guardrails',
      'Practical deployment workflows for Vercel and Render',
    ],
  },
  {
    id: 2,
    title: 'Professional Developer Portfolio 2',
    category: 'web',
    shortDescription:
      'Modern React and Vite portfolio site deployed on Vercel with GitHub-backed updates.',
    fullDescription:
      'Created and deployed a polished developer portfolio with a responsive UI, dark mode support, and a project showcase section. The site is set up for automated hosting and now reflects real live links and repository-backed content.',
    image:
      'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/Gosula16/Professional-Developer-Portfolio2',
    demo: 'https://professional-developer-portfolio2.vercel.app/',
    challenges: [
      'Replacing template content with a portfolio that reflects current work',
      'Getting a static Vite app live on a reliable host quickly',
      'Keeping project links and deployment docs aligned with the repo',
    ],
    solutions: [
      'Refactored the content structure to use real project references',
      'Deployed the site on Vercel for fast production hosting',
      'Updated the repo documentation with the working hosted URL',
    ],
    keyLearnings: [
      'Rapid deployment of modern frontend apps',
      'Portfolio curation around live work instead of placeholder content',
      'Keeping README and deployment setup in sync',
    ],
  },
  {
    id: 3,
    title: 'Travely',
    category: 'web',
    shortDescription:
      'Travel-focused full-stack application centered on planning, discovery, and trip workflows.',
    fullDescription:
      'This repository represents a substantial travel application project with a larger codebase and full-stack structure. It is positioned as a destination-planning and user-facing product, covering travel discovery, planning flows, and richer application state than a small demo app.',
    image:
      'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/Gosula16/Travely-1',
    challenges: [
      'Managing a larger end-to-end product structure',
      'Designing user flows for travel discovery and planning',
      'Keeping the application experience cohesive across features',
    ],
    solutions: [
      'Structured the app around travel-oriented user journeys',
      'Used a full-stack architecture to connect UI and data flows',
      'Organized the project for broader product-style development instead of a simple demo',
    ],
    keyLearnings: [
      'Building larger product-oriented web apps',
      'Feature organization in a full-stack project',
      'Balancing UX and implementation complexity',
    ],
  },
  {
    id: 4,
    title: 'One Stop Solution Focusing on Tourism',
    category: 'web',
    shortDescription:
      'Tourism platform project aimed at consolidating destination, planning, and user experience flows in one system.',
    fullDescription:
      'Built a broad tourism-focused application around a one-stop travel experience. The project combines multiple user-facing flows into a single platform, making it useful as a showcase of application structure, feature breadth, and domain-focused product thinking.',
    image:
      'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'JavaScript', 'CSS', 'Node.js', 'Web APIs'],
    github: 'https://github.com/Gosula16/ONE-STOP-SOLUTION-FOCUSING-ON-TOURISM',
    challenges: [
      'Combining multiple tourism workflows into one product',
      'Maintaining clarity while handling broad domain scope',
      'Designing a user-friendly interface for travel exploration',
    ],
    solutions: [
      'Grouped travel features into a unified tourism experience',
      'Focused on modular project organization for easier growth',
      'Used frontend-driven flows to keep the experience approachable',
    ],
    keyLearnings: [
      'Domain modeling for tourism products',
      'Organizing feature-rich web apps',
      'Designing around end-user exploration flows',
    ],
  },
  {
    id: 5,
    title: 'Online Shopping Platform',
    category: 'web',
    shortDescription:
      'E-commerce application exploring storefront, product, and shopping workflow implementation.',
    fullDescription:
      'Developed an online shopping platform as a practical e-commerce project. The repository highlights application flows around products, storefront interaction, and broader commercial app structure, making it a strong portfolio example for full-stack product work.',
    image:
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'CSS'],
    github: 'https://github.com/Gosula16/ONLINE-SHOPPING-PLATFORM',
    challenges: [
      'Designing product-centric user flows',
      'Structuring a shopping experience across multiple screens and states',
      'Managing a larger application footprint than a simple CRUD demo',
    ],
    solutions: [
      'Built around familiar e-commerce navigation and shopping patterns',
      'Organized the codebase for product, cart, and user-facing flows',
      'Used a full application structure suited to expansion',
    ],
    keyLearnings: [
      'E-commerce application design',
      'Feature grouping for product-based platforms',
      'Frontend and backend coordination in user transaction flows',
    ],
  },
  {
    id: 6,
    title: 'Earthquake Prediction Using Machine Learning Techniques',
    category: 'ai',
    shortDescription:
      'Machine learning exploration focused on earthquake prediction techniques and data-driven analysis.',
    fullDescription:
      'This project explores predictive modeling for earthquake-related datasets using machine learning methods. It represents a data-intensive AI workflow involving preprocessing, experimentation, and evaluation in a scientific problem domain.',
    image:
      'https://images.pexels.com/photos/73873/earthquake-calfat-roman-ruins-73873.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Data Analysis'],
    github: 'https://github.com/Gosula16/Earthquake_Predication_Machine_Learning_Techniques',
    challenges: [
      'Working with noisy real-world geoscience data',
      'Choosing suitable ML techniques for prediction and evaluation',
      'Turning experimental notebook work into a coherent project',
    ],
    solutions: [
      'Applied structured preprocessing and feature-oriented analysis',
      'Explored multiple learning techniques for comparative insight',
      'Organized the repository around a clear predictive modeling goal',
    ],
    keyLearnings: [
      'Scientific machine learning workflows',
      'Handling domain-specific prediction problems',
      'Data preparation as a major factor in model quality',
    ],
  },
  {
    id: 7,
    title: 'Automated License Plate Recognition',
    category: 'ai',
    shortDescription:
      'Computer vision project for number-plate detection and recognition using generalized character sequence detection.',
    fullDescription:
      'Built an ALPR-oriented computer vision project focused on recognizing license plates from image inputs. The repo reflects practical work with detection, sequence recognition, and the challenges of real-world visual data pipelines.',
    image:
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'OpenCV', 'Deep Learning', 'OCR', 'Computer Vision'],
    github:
      'https://github.com/Gosula16/Automated_License_Plate_Recognition_using_generalized_character_sequence_detection',
    challenges: [
      'Dealing with varying plate formats and image conditions',
      'Combining detection and recognition into one usable pipeline',
      'Handling the practical limitations of real image inputs',
    ],
    solutions: [
      'Used a computer vision pipeline oriented around plate localization and recognition',
      'Framed the project around generalized sequence detection rather than a brittle single-case setup',
      'Structured the repository to demonstrate an end-to-end ALPR workflow',
    ],
    keyLearnings: [
      'OCR and detection pipeline integration',
      'Robustness challenges in vision systems',
      'Applied AI problem-solving for real-world imagery',
    ],
  },
  {
    id: 8,
    title: 'CyberWarFare Assignment',
    category: 'security',
    shortDescription:
      'Security-oriented project work around cyber workflows, implementation, and assignment-driven system thinking.',
    fullDescription:
      'Developed a cybersecurity-themed assignment project that showcases security-domain problem solving and structured implementation. It adds a different dimension to the portfolio by highlighting work beyond pure frontend and ML applications.',
    image:
      'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['JavaScript', 'Security Concepts', 'Web Development', 'Systems Thinking'],
    github: 'https://github.com/Gosula16/CyberWarFare_Assignment',
    challenges: [
      'Translating security concepts into practical implementation',
      'Structuring an assignment project so it still reads like real work',
      'Balancing correctness, clarity, and time constraints',
    ],
    solutions: [
      'Focused the repository around a concrete cybersecurity task',
      'Kept the implementation organized and demonstrable',
      'Used the project to show applied problem-solving beyond standard CRUD apps',
    ],
    keyLearnings: [
      'Security-minded development thinking',
      'Assignment execution under practical constraints',
      'How to present domain-specific technical work clearly',
    ],
  },
  {
    id: 9,
    title: 'MERN Sensors Data',
    category: 'systems',
    shortDescription:
      'MERN-based project for handling sensor-driven data flows and application-level data presentation.',
    fullDescription:
      'Built a MERN application around sensor data handling and presentation, showing comfort with full-stack application structure and data-oriented user interfaces. It reflects work that sits closer to systems and monitoring than standard content-driven web apps.',
    image:
      'https://images.pexels.com/photos/3912477/pexels-photo-3912477.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Data Visualization'],
    github: 'https://github.com/Gosula16/mernSensorsData',
    challenges: [
      'Representing sensor-oriented information in a useful web interface',
      'Connecting backend data handling to a responsive frontend',
      'Structuring a project around data flow instead of purely static content',
    ],
    solutions: [
      'Used the MERN stack to support end-to-end data handling',
      'Focused the UI on making incoming data easier to inspect and understand',
      'Organized the repository as a practical full-stack data app',
    ],
    keyLearnings: [
      'Data-centric MERN application design',
      'Presenting live or structured data clearly in the UI',
      'Full-stack coordination around monitoring-style use cases',
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const selectedProjectData = projects.find((project) => project.id === selectedProject);

  return (
    <section id="projects" className="section-frame">
      <div className="content-shell">
        <div className="section-heading">
          <span className="section-kicker">Selected Work</span>
          <h2 className="section-title">Real projects, real repositories, real shipped work</h2>
          <p className="section-subtitle">
            Real projects pulled from my GitHub work across AI, full-stack apps,
            security, and systems-focused builds.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center rounded-full px-6 py-3 font-medium ${
                selectedCategory === category.id
                  ? 'bg-cyan-300 text-slate-950 shadow-[0_14px_30px_rgba(121,242,255,0.18)]'
                  : 'border border-white/10 bg-white/5 text-slate-200 hover:bg-white/8'
              }`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel hover-lift overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedProject(project.id)}
                      className="opacity-0 group-hover:opacity-100 bg-white text-gray-950 px-4 py-2 rounded-full font-medium transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-7">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-full border border-white/10 bg-white/8 text-cyan-100 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 rounded-full border border-white/10 bg-white/6 text-slate-300 text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProjectData && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="glass-panel max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProjectData.image}
                  alt={selectedProjectData.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-slate-950/80 p-2 rounded-full hover:bg-slate-900 transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-slate-200" />
                </button>
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {selectedProjectData.title}
                </h2>

                <p className="text-slate-300 mb-6 text-lg leading-8">
                  {selectedProjectData.fullDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Challenges
                    </h3>
                    <ul className="space-y-2">
                      {selectedProjectData.challenges.map((challenge) => (
                        <li key={challenge} className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-slate-300">
                            {challenge}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Solutions
                    </h3>
                    <ul className="space-y-2">
                      {selectedProjectData.solutions.map((solution) => (
                        <li key={solution} className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-slate-300">
                            {solution}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectData.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full border border-white/10 bg-white/8 text-cyan-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Key Learnings
                  </h3>
                  <ul className="space-y-2">
                    {selectedProjectData.keyLearnings.map((learning) => (
                      <li key={learning} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-300">
                          {learning}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={selectedProjectData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ghost-button"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                  {selectedProjectData.demo ? (
                    <a
                      href={selectedProjectData.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="premium-button"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
