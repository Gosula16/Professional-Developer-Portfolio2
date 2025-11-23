import React from 'react';
import { Building, Calendar, ExternalLink, Code, Database, Globe } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'AI Research Lab',
      position: 'Machine Learning Intern',
      period: 'Jun 2023 - Aug 2023',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Worked on computer vision projects focusing on plant disease detection using deep learning. Developed and optimized CNN models achieving 94% accuracy.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'YOLOv8', 'Jupyter'],
      projects: [
        {
          name: 'Plant Disease Detection System',
          description: 'Developed a hybrid AI system combining object detection and classification for identifying plant diseases with treatment recommendations.',
          link: 'https://github.com/govindvinayak/plant-disease-detection'
        },
        {
          name: 'Data Augmentation Pipeline',
          description: 'Created automated data augmentation pipeline that improved model performance by 15% across different plant species.',
          link: 'https://github.com/govindvinayak/data-augmentation'
        }
      ]
    },
    {
      company: 'WebDev Solutions',
      position: 'Frontend Developer Intern',
      period: 'Dec 2022 - Feb 2023',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Developed responsive web applications using React.js and modern frontend technologies. Collaborated with design teams to implement pixel-perfect UI components.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Git', 'Figma'],
      projects: [
        {
          name: 'E-commerce Dashboard',
          description: 'Built a comprehensive admin dashboard for e-commerce platform with real-time analytics and inventory management.',
          link: 'https://github.com/govindvinayak/ecommerce-dashboard'
        },
        {
          name: 'Travel Booking Interface',
          description: 'Created responsive booking interface for travel application with advanced search and filtering capabilities.',
          link: 'https://github.com/govindvinayak/travel-booking-ui'
        }
      ]
    },
    {
      company: 'DataTech Analytics',
      position: 'Data Science Trainee',
      period: 'May 2022 - Jul 2022',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Gained hands-on experience in data analysis, machine learning model development, and statistical analysis. Worked on real-world datasets to solve business problems.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'SQL'],
      projects: [
        {
          name: 'Customer Churn Prediction',
          description: 'Developed machine learning model to predict customer churn with 89% accuracy using ensemble methods.',
          link: 'https://github.com/govindvinayak/customer-churn-prediction'
        },
        {
          name: 'Sales Forecasting Dashboard',
          description: 'Created interactive dashboard for sales forecasting using time series analysis and visualization.',
          link: 'https://github.com/govindvinayak/sales-forecasting'
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey through internships and professional development
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Company Info */}
                <div className="md:w-1/3">
                  <div className="flex items-center mb-4">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                      <p className="text-blue-600 font-semibold">{exp.position}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="md:w-2/3">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Projects</h4>
                  <div className="space-y-4">
                    {exp.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-200">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">{project.name}</h5>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                          </div>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-200 ml-4"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Overview */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Professional Skills Gained
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Machine Learning</h4>
              <p className="text-gray-600 dark:text-gray-400">TensorFlow, PyTorch, Scikit-learn, Computer Vision</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Web Development</h4>
              <p className="text-gray-600 dark:text-gray-400">React, JavaScript, Node.js, Responsive Design</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
                <Database className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Analysis</h4>
              <p className="text-gray-600 dark:text-gray-400">Python, Pandas, SQL, Statistical Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;