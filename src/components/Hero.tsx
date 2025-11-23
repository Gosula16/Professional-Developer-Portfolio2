import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, ExternalLink } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Gosula16', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/gosula-venkatesh-52b067233', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
    { icon: Mail, href: 'mailto:gosulavenkatesh461@gmail.com', label: 'Email' },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{' '}
              <span className="text-blue-600">Gosula Venkatesh</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Software Developer & Full Stack Developer
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-8 max-w-2xl">
              I am Venkatesh Gosula, a B.Tech IT graduate and Software Developer Intern at Harman International with hands-on experience in Bluetooth connectivity across A2DP, AVRCP, HFP, PBAP, and MAP profiles. I also bring strong full-stack development skills in Java, React.js, Node.js, and API integration. With experience in both automotive systems and web development, I excel in problem-solving, log analysis, and building efficient, user-centric applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button 
                onClick={scrollToContact}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Get In Touch
              </button>
              <button 
                onClick={scrollToProjects}
                className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                View My Work
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
              <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400">Tamil Nadu, India</span>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>

            <div className="flex items-center justify-center lg:justify-start">
              <a
                href="https://portfolio-gv.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                <span className="mr-2">View Live Portfolio</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 dark:bg-blue-800 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Gosula Venkatesh"
                className="relative w-80 h-80 rounded-full object-cover border-8 border-white dark:border-gray-800 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;