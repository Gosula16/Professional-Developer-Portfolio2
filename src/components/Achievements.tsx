import React from 'react';
import { Award, Trophy, Star, Target, Medal, Zap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      year: '2023',
      category: 'Academic',
      icon: Trophy,
      title: 'Best Project Award - Plant Disease Detection',
      description: 'Won the best project award for developing an AI-powered plant disease detection system with 94% accuracy using YOLOv8 and CNN.',
      color: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600'
    },
    {
      year: '2023',
      category: 'Professional',
      icon: Star,
      title: 'JP Morgan Virtual Experience Program',
      description: 'Successfully completed JP Morgan Chase Software Engineering Virtual Experience, demonstrating proficiency in financial technology and software development.',
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-600'
    },
    {
      year: '2023',
      category: 'Technical',
      icon: Award,
      title: 'IBM AI & Data Science Certification',
      description: 'Achieved IBM Professional Certificate in AI & Data Science, showcasing expertise in machine learning, deep learning, and data analysis.',
      color: 'bg-purple-100 dark:bg-purple-900 text-purple-600'
    },
    {
      year: '2022',
      category: 'Community',
      icon: Target,
      title: 'NSS Volunteer Recognition',
      description: 'Recognized for outstanding contribution to National Service Scheme activities and community development initiatives.',
      color: 'bg-green-100 dark:bg-green-900 text-green-600'
    },
    {
      year: '2022',
      category: 'Academic',
      icon: Medal,
      title: 'Dean\'s List - Academic Excellence',
      description: 'Achieved Dean\'s List recognition for maintaining CGPA of 8.5+ and demonstrating consistent academic performance.',
      color: 'bg-red-100 dark:bg-red-900 text-red-600'
    },
    {
      year: '2022',
      category: 'Technical',
      icon: Zap,
      title: 'Hackathon Winner - Smart Agriculture',
      description: 'Won first place in university hackathon for developing a smart agriculture solution using IoT and machine learning.',
      color: 'bg-orange-100 dark:bg-orange-900 text-orange-600'
    }
  ];

  const categories = ['All', 'Academic', 'Professional', 'Technical', 'Community'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredAchievements = selectedCategory === 'All' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Milestones and recognitions that mark my academic and professional journey
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-gray-300 dark:bg-gray-600 h-full"></div>
          
          <div className="space-y-12">
            {filteredAchievements.map((achievement, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 border-4 border-blue-500 rounded-full flex items-center justify-center">
                  <achievement.icon className="w-4 h-4 text-blue-500" />
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-lg ${achievement.color}`}>
                        <achievement.icon className="w-5 h-5" />
                      </div>
                      <div className="ml-3">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{achievement.year}</span>
                        <span className="ml-2 text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                          {achievement.category}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Achievement Summary
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <p className="text-gray-600 dark:text-gray-400">Total Awards</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
              <p className="text-gray-600 dark:text-gray-400">Certifications</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">8.5</div>
              <p className="text-gray-600 dark:text-gray-400">CGPA</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <p className="text-gray-600 dark:text-gray-400">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;