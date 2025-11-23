import React from 'react';
import { GraduationCap, Calendar, Award, Users, Trophy } from 'lucide-react';

const Education = () => {
  const education = {
    degree: 'Bachelor of Technology in Computer Science',
    university: 'SASTRA Deemed University',
    location: 'Tamil Nadu, India',
    duration: '2021 - 2025 (Expected)',
    cgpa: '8.3/10',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800'
  };

  const activities = [
    {
      icon: Users,
      title: 'NSS Volunteer',
      description: 'Active participant in National Service Scheme, contributing to community service and social development initiatives.',
      period: '2022 - Present'
    },
    {
      icon: Trophy,
      title: 'Gaming Club Member',
      description: 'Member of the university gaming club, organizing esports tournaments and gaming events.',
      period: '2021 - Present'
    },
    {
      icon: Award,
      title: 'Mathematics Club',
      description: 'Active member of the mathematics club, participating in problem-solving competitions and mathematical discussions.',
      period: '2021 - 2023'
    }
  ];

  const coursework = [
    'Data Structures and Algorithms',
    'Machine Learning',
    'Database Management Systems',
    'Computer Networks',
    'Software Engineering',
    'Artificial Intelligence',
    'Web Technologies',
    'Operating Systems',
    'Computer Graphics',
    'Distributed Systems'
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic journey and university experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Education Details */}
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {education.degree}
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold">
                    {education.university}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">{education.duration}</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">CGPA: {education.cgpa}</span>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Relevant Coursework
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {coursework.map((course, index) => (
                    <div
                      key={index}
                      className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 px-2 py-1 rounded"
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* University Image */}
          <div className="flex justify-center">
            <img
              src={education.image}
              alt="SASTRA University"
              className="w-full max-w-md rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Activities and Involvement */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Activities & Involvement
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <activity.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {activity.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {activity.period}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-teal-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Academic Highlights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">8.5/10</div>
              <p className="text-gray-600 dark:text-gray-400">Current CGPA</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
              <p className="text-gray-600 dark:text-gray-400">Certifications Earned</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;