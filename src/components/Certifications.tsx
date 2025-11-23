import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, Building, X } from 'lucide-react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certifications = [
    {
      id: 1,
      title: 'JP Morgan Software Engineering Virtual Experience',
      issuer: 'JP Morgan Chase & Co.',
      date: 'March 2023',
      credentialId: 'JPMC-SWE-2023-001',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Completed virtual software engineering program focusing on financial technology, trading systems, and software development best practices.',
      skills: ['Python', 'React', 'Financial Systems', 'Git', 'Unit Testing'],
      verifyUrl: 'https://forage.com/certificate/verify',
      category: 'Software Engineering'
    },
    {
      id: 2,
      title: 'AI & Data Scientist Professional Certificate',
      issuer: 'IBM',
      date: 'January 2023',
      credentialId: 'IBM-AI-DS-2023-456',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Comprehensive program covering machine learning, deep learning, data analysis, and AI applications in real-world scenarios.',
      skills: ['Python', 'Machine Learning', 'Deep Learning', 'Data Analysis', 'TensorFlow', 'Pandas'],
      verifyUrl: 'https://coursera.org/verify',
      category: 'Data Science'
    },
    {
      id: 3,
      title: 'Front-End Web Development Certificate',
      issuer: 'freeCodeCamp',
      date: 'November 2022',
      credentialId: 'FCC-FE-2022-789',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Completed comprehensive front-end development curriculum including responsive web design, JavaScript algorithms, and front-end libraries.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design', 'APIs'],
      verifyUrl: 'https://freecodecamp.org/certification',
      category: 'Web Development'
    },
    {
      id: 4,
      title: 'Full Stack Web Development Certificate',
      issuer: 'The Odin Project',
      date: 'September 2022',
      credentialId: 'TOP-FS-2022-321',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Intensive full-stack development program covering both front-end and back-end technologies with hands-on projects.',
      skills: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'React', 'Git'],
      verifyUrl: 'https://theodinproject.com/certificate',
      category: 'Web Development'
    },
    {
      id: 5,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'June 2023',
      credentialId: 'AWS-CP-2023-654',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Foundational certification demonstrating understanding of AWS cloud services, architecture, and best practices.',
      skills: ['AWS Services', 'Cloud Computing', 'Security', 'Pricing', 'Support'],
      verifyUrl: 'https://aws.amazon.com/verification',
      category: 'Cloud Computing'
    }
  ];

  const categories = ['All', 'Software Engineering', 'Data Science', 'Web Development', 'Cloud Computing'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCertifications = selectedCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const openCertModal = (certId: number) => {
    setSelectedCert(certId);
  };

  const closeCertModal = () => {
    setSelectedCert(null);
  };

  const selectedCertData = certifications.find(cert => cert.id === selectedCert);

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => openCertModal(cert.id)}
            >
              <div className="relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full">
                  <Award className="w-5 h-5 text-yellow-500" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Building className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                
                <div className="flex items-center mb-4">
                  <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{cert.date}</span>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
                    {cert.category}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Modal */}
        {selectedCert && selectedCertData && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedCertData.image}
                  alt={selectedCertData.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeCertModal}
                  className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 p-2 rounded-full">
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Building className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-gray-600 dark:text-gray-400">{selectedCertData.issuer}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedCertData.title}
                </h2>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                    <span className="text-gray-600 dark:text-gray-400">{selectedCertData.date}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Credential ID:</span>
                    <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                      {selectedCertData.credentialId}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {selectedCertData.description}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Skills Covered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCertData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href={selectedCertData.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Verify Certificate
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;