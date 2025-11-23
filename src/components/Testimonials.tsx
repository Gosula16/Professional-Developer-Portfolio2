import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      role: 'Professor, Computer Science Department',
      company: 'SASTRA University',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'Govind is an exceptional student with a remarkable ability to bridge theoretical concepts with practical applications. His work on machine learning projects demonstrates both technical excellence and innovative thinking.',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'Working with Govind on the plant disease detection project was incredible. His attention to detail and problem-solving skills are outstanding. He consistently delivers high-quality code and innovative solutions.',
      rating: 5
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Data Science Team Lead',
      company: 'AI Innovations Ltd.',
      image: 'https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'Govind\'s expertise in both machine learning and web development makes him a valuable asset. His ability to translate complex ML models into user-friendly applications is impressive.',
      rating: 5
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'Digital Ventures',
      image: 'https://images.pexels.com/photos/2379007/pexels-photo-2379007.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'Govind is a reliable team player who consistently meets deadlines and exceeds expectations. His communication skills and technical expertise make him an ideal collaborator.',
      rating: 5
    },
    {
      id: 5,
      name: 'Michael Chen',
      role: 'Full Stack Developer',
      company: 'StartupHub',
      image: 'https://images.pexels.com/photos/2379008/pexels-photo-2379008.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'I had the pleasure of collaborating with Govind on several projects. His code quality is exceptional, and he has a great eye for user experience design. Highly recommended!',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What People Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Testimonials from colleagues, professors, and collaborators
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 text-center">
            <div className="mb-6">
              <Quote className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-blue-600 font-medium">
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial
                    ? 'bg-blue-600'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid (Hidden on mobile, shown on larger screens) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                index === currentTestimonial % 3 ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
                "{testimonial.quote}"
              </p>
              <div className="flex mt-3">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;