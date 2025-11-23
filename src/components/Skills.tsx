import React, { useState } from 'react';
import { Code, Database, Brain, Globe, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: Code },
    { id: 'languages', label: 'Languages', icon: Code },
    { id: 'frontend', label: 'Frontend', icon: Globe },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'datascience', label: 'Data Science', icon: Brain },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
  ];

  const skills = [
    // Languages
    { name: 'Python', level: 95, category: 'languages', color: 'bg-yellow-500' },
    { name: 'JavaScript', level: 90, category: 'languages', color: 'bg-yellow-400' },
    { name: 'Java', level: 85, category: 'languages', color: 'bg-red-500' },
    { name: 'TypeScript', level: 80, category: 'languages', color: 'bg-blue-500' },
    { name: 'C++', level: 75, category: 'languages', color: 'bg-blue-600' },
    
    // Frontend
    { name: 'React.js', level: 90, category: 'frontend', color: 'bg-cyan-500' },
    { name: 'Next.js', level: 85, category: 'frontend', color: 'bg-gray-800' },
    { name: 'HTML/CSS', level: 95, category: 'frontend', color: 'bg-orange-500' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend', color: 'bg-teal-500' },
    { name: 'Vue.js', level: 75, category: 'frontend', color: 'bg-green-500' },
    
    // Backend
    { name: 'Node.js', level: 85, category: 'backend', color: 'bg-green-600' },
    { name: 'Express.js', level: 80, category: 'backend', color: 'bg-gray-600' },
    { name: 'Django', level: 75, category: 'backend', color: 'bg-green-700' },
    { name: 'Flask', level: 80, category: 'backend', color: 'bg-blue-700' },
    { name: 'FastAPI', level: 70, category: 'backend', color: 'bg-teal-600' },
    
    // Data Science
    { name: 'TensorFlow', level: 85, category: 'datascience', color: 'bg-orange-600' },
    { name: 'PyTorch', level: 80, category: 'datascience', color: 'bg-red-600' },
    { name: 'Scikit-learn', level: 90, category: 'datascience', color: 'bg-blue-600' },
    { name: 'Pandas', level: 95, category: 'datascience', color: 'bg-purple-600' },
    { name: 'NumPy', level: 90, category: 'datascience', color: 'bg-blue-500' },
    { name: 'OpenCV', level: 85, category: 'datascience', color: 'bg-green-600' },
    { name: 'YOLOv8', level: 80, category: 'datascience', color: 'bg-yellow-600' },
    
    // Database
    { name: 'MongoDB', level: 85, category: 'database', color: 'bg-green-500' },
    { name: 'PostgreSQL', level: 80, category: 'database', color: 'bg-blue-700' },
    { name: 'MySQL', level: 85, category: 'database', color: 'bg-blue-600' },
    { name: 'Firebase', level: 75, category: 'database', color: 'bg-yellow-500' },
    
    // Mobile
    { name: 'React Native', level: 75, category: 'mobile', color: 'bg-cyan-600' },
    { name: 'Flutter', level: 70, category: 'mobile', color: 'bg-blue-400' },
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My expertise spans across multiple domains - from data science and machine learning 
            to full-stack web development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Data Science</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Machine Learning, Deep Learning, Computer Vision, NLP
              </p>
            </div>
            
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Full Stack</h3>
              <p className="text-gray-600 dark:text-gray-400">
                React, Node.js, Python, Database Design, API Development
              </p>
            </div>
            
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
                <Code className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Clean Code, Testing, DevOps, Version Control, Agile
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;