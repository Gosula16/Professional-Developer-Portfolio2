import React, { useState } from 'react';
import { Github, ExternalLink, X, Code, Database, Brain, Globe } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'ml', label: 'Machine Learning', icon: Brain },
    { id: 'web', label: 'Web Development', icon: Globe },
    { id: 'mobile', label: 'Mobile Apps', icon: Database },
  ];

  const projects = [
    {
      id: 1,
      title: 'Hybrid AI for Plant Disease Detection',
      category: 'ml',
      shortDescription: 'Advanced plant disease detection system using YOLOv8 and CNN',
      fullDescription: 'Developed a comprehensive plant disease detection system combining YOLOv8 for object detection and CNN for classification. The system can identify various plant diseases with 94% accuracy and provides treatment recommendations.',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'YOLOv8', 'TensorFlow', 'OpenCV', 'Flask', 'React'],
      github: 'https://github.com/govindvinayak/plant-disease-detection',
      demo: 'https://plant-disease-demo.web.app',
      challenges: [
        'Handling diverse plant species and disease variations',
        'Optimizing model performance for real-time detection',
        'Creating an intuitive user interface for farmers'
      ],
      solutions: [
        'Implemented data augmentation and transfer learning',
        'Used model quantization for faster inference',
        'Designed mobile-first responsive interface'
      ],
      keyLearnings: [
        'Advanced computer vision techniques',
        'Model optimization for production deployment',
        'User-centered design for agricultural applications'
      ]
    },
    {
      id: 2,
      title: 'Breast Cancer ML Classification',
      category: 'ml',
      shortDescription: 'Machine learning model for breast cancer diagnosis with 97% accuracy',
      fullDescription: 'Built a comprehensive machine learning pipeline for breast cancer classification using multiple algorithms. Achieved 97% accuracy with ensemble methods and deployed as a web application for medical professionals.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Streamlit', 'Docker'],
      github: 'https://github.com/govindvinayak/breast-cancer-ml',
      demo: 'https://breast-cancer-ml.herokuapp.com',
      challenges: [
        'Handling imbalanced dataset',
        'Feature selection and engineering',
        'Model interpretability for medical use'
      ],
      solutions: [
        'Applied SMOTE for data balancing',
        'Used recursive feature elimination',
        'Implemented SHAP for model explainability'
      ],
      keyLearnings: [
        'Medical data preprocessing techniques',
        'Ensemble learning methods',
        'Ethical considerations in healthcare AI'
      ]
    },
    {
      id: 3,
      title: 'ALPR System',
      category: 'ml',
      shortDescription: 'Automatic License Plate Recognition using computer vision',
      fullDescription: 'Developed an end-to-end ALPR system using OpenCV and deep learning. The system can detect and recognize license plates from various angles and lighting conditions with high accuracy.',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'YOLO', 'Tesseract OCR', 'Flask'],
      github: 'https://github.com/govindvinayak/alpr-system',
      demo: 'https://alpr-demo.web.app',
      challenges: [
        'Handling various plate formats and fonts',
        'Processing in different lighting conditions',
        'Real-time performance optimization'
      ],
      solutions: [
        'Trained custom YOLO model for plate detection',
        'Implemented image preprocessing pipeline',
        'Used GPU acceleration for real-time processing'
      ],
      keyLearnings: [
        'Object detection and OCR integration',
        'Real-time computer vision applications',
        'Performance optimization techniques'
      ]
    },
    {
      id: 4,
      title: 'Travely - Travel Planning App',
      category: 'web',
      shortDescription: 'Full-stack travel planning application with AI recommendations',
      fullDescription: 'Built a comprehensive travel planning platform with AI-powered recommendations, itinerary planning, and social features. Users can discover destinations, plan trips, and share experiences.',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Stripe API'],
      github: 'https://github.com/govindvinayak/travely',
      demo: 'https://travely-app.web.app',
      challenges: [
        'Implementing real-time collaboration features',
        'Integrating multiple travel APIs',
        'Handling complex user authentication'
      ],
      solutions: [
        'Used Socket.io for real-time updates',
        'Created unified API layer for travel data',
        'Implemented JWT-based authentication system'
      ],
      keyLearnings: [
        'Full-stack application architecture',
        'Real-time web application development',
        'Third-party API integration strategies'
      ]
    },
    {
      id: 5,
      title: 'E-Commerce Platform',
      category: 'web',
      shortDescription: 'Modern e-commerce solution with advanced features',
      fullDescription: 'Developed a full-featured e-commerce platform with product management, payment processing, order tracking, and admin dashboard. Includes advanced search, filtering, and recommendation features.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com/govindvinayak/ecommerce-platform',
      demo: 'https://ecommerce-gv.vercel.app',
      challenges: [
        'Implementing secure payment processing',
        'Building scalable product search',
        'Managing complex state across components'
      ],
      solutions: [
        'Integrated Stripe for secure payments',
        'Used Elasticsearch for advanced search',
        'Implemented Redux for state management'
      ],
      keyLearnings: [
        'E-commerce application patterns',
        'Payment gateway integration',
        'Database design for complex relationships'
      ]
    },
    {
      id: 6,
      title: 'Task Management Mobile App',
      category: 'mobile',
      shortDescription: 'Cross-platform task management app with offline support',
      fullDescription: 'Built a feature-rich task management application using React Native with offline synchronization, push notifications, and collaborative features for team productivity.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Redux', 'SQLite', 'Firebase', 'Push Notifications'],
      github: 'https://github.com/govindvinayak/task-manager-mobile',
      demo: 'https://play.google.com/store/apps/details?id=com.taskmanager',
      challenges: [
        'Implementing offline-first architecture',
        'Handling data synchronization conflicts',
        'Optimizing performance on low-end devices'
      ],
      solutions: [
        'Used SQLite for local storage with sync queue',
        'Implemented conflict resolution algorithms',
        'Applied performance optimization techniques'
      ],
      keyLearnings: [
        'Mobile app development best practices',
        'Offline-first application design',
        'Cross-platform development challenges'
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openProjectModal = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my work spanning machine learning, web development, and mobile applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openProjectModal(project.id)}
                    className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && selectedProjectData && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProjectData.image}
                  alt={selectedProjectData.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedProjectData.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                  {selectedProjectData.fullDescription}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Challenges
                    </h3>
                    <ul className="space-y-2">
                      {selectedProjectData.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 dark:text-gray-400">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Solutions
                    </h3>
                    <ul className="space-y-2">
                      {selectedProjectData.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 dark:text-gray-400">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectData.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Key Learnings
                  </h3>
                  <ul className="space-y-2">
                    {selectedProjectData.keyLearnings.map((learning, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600 dark:text-gray-400">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={selectedProjectData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                  <a
                    href={selectedProjectData.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
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