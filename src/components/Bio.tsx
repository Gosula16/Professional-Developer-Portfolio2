// import React from 'react';
import { Download, User, Code, Heart, MapPin, Mail, Phone } from 'lucide-react';

const Bio = () => {
  const stats = [
    { icon: Code, value: '1+', label: 'Years Experience' },
    { icon: User, value: '15+', label: 'Projects Completed' },
    { icon: Heart, value: '∞', label: 'Passion for Innovation' },
  ];

  const downloadResume = (type: 'developer' | 'datascientist') => {
    // In a real implementation, these would be actual file URLs
    const resumeUrls = {
      developer: '/resumes/developer-cv.pdf',
      datascientist: '/resumes/data-scientist-cv.pdf'
    };
    
    const link = document.createElement('a');
    link.href = resumeUrls[type];
    link.download = `${type}-resume.pdf`;
    link.click();
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="bio" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know the person behind the code and algorithms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate Computer Science student at SASTRA University with a deep interest 
              in both Data Science and Full Stack Development. My journey began with curiosity 
              about how technology can solve real-world problems, and it has evolved into expertise 
              in machine learning, web development, and software engineering.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              B. Tech IT graduate and Software Developer Intern at Harman International, specializing in Bluetooth
              connectivity with experience in profiles like A2DP, AVRCP, HFP, PBAP, and MAP. Proficient in Java,
              React.js, Node.js, and full-stack development, with strong analytical and teamwork skills.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              When I'm not coding or training models, you'll find me contributing to open-source 
              projects, participating in hackathons, or volunteering with NSS. I believe in 
              continuous learning and the power of technology to create positive impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative group">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  <button
                    onClick={() => downloadResume('developer')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-md"
                  >
                    Developer Resume
                  </button>
                  <button
                    onClick={() => downloadResume('datascientist')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-md"
                  >
                    Data Scientist Resume
                  </button>
                </div>
              </div>
              <button 
                onClick={scrollToProjects}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                View Portfolio
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Stats</h3>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full mb-3">
                      <stat.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3" />
                  <span className="font-medium text-gray-900 dark:text-white w-20">Email:</span>
                  <span className="text-gray-700 dark:text-gray-300">gosulavenkatesh461@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3" />
                  <span className="font-medium text-gray-900 dark:text-white w-20">Phone:</span>
                  <span className="text-gray-700 dark:text-gray-300">+91 7337514702</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3" />
                  <span className="font-medium text-gray-900 dark:text-white w-20">Location:</span>
                  <span className="text-gray-700 dark:text-gray-300">Bengaluru, India</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Current Focus</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700 dark:text-gray-300">Completed B.Tech in Information Technology</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700 dark:text-gray-300">Building & Developing applications</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span className="text-gray-700 dark:text-gray-300">Contributing to open-source projects</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  <span className="text-gray-700 dark:text-gray-300">Seeking Full Time opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;