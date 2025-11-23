import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['All', 'University', 'Projects', 'Events', 'Personal'];

  const photos = [
    {
      src: 'https://lh3.googleusercontent.com/p/AF1QipNt3cPrjZ6C85hdwerKeRlS5fDesoaRXRDP4Pgt=s1360-w1360-h1020-rw',
      category: 'University',
      title: 'SASTRA University Campus',
      description: 'Beautiful campus where I\'m pursuing my Information Technology degree'
    },
    {
      src: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Projects',
      title: 'ML Project Demo',
      description: 'Presenting plant disease detection project at university showcase'
    },
    {
      src: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Events',
      title: 'Tech Conference',
      description: 'Attending AI/ML conference and networking with industry professionals'
    },
    {
      src: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Projects',
      title: 'Coding Session',
      description: 'Working on machine learning algorithms for computer vision'
    },
    {
      src: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Personal',
      title: 'Hackathon Victory',
      description: 'Celebrating first place win at university hackathon'
    },
    {
      src: 'https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'University',
      title: 'NSS Volunteer Work',
      description: 'Community service activities with National Service Scheme'
    },
    {
      src: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Projects',
      title: 'Web Development',
      description: 'Building responsive web applications with modern frameworks'
    },
    {
      src: 'https://images.pexels.com/photos/1591382/pexels-photo-1591382.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Events',
      title: 'Gaming Club Event',
      description: 'Organizing esports tournament at university gaming club'
    },
    {
      src: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Projects',
      title: 'Data Science Workshop',
      description: 'Conducting workshop on machine learning for fellow students'
    },
    {
      src: 'https://images.pexels.com/photos/1331324/pexels-photo-1331324.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Personal',
      title: 'Study Session',
      description: 'Late night coding and algorithm practice sessions'
    }
  ];

  const filteredPhotos = selectedCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Photo Gallery
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Moments captured from my academic journey, projects, and experiences
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 shadow-sm'
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => openLightbox(index)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <h3 className="text-lg font-semibold mb-2">{photo.title}</h3>
                  <p className="text-sm">{photo.description}</p>
                </div>
              </div>
              <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                {photo.category}
              </div>
            </div>
          ))}
        </div>

        {/* Show filtered count */}
        <div className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredPhotos.length} of {photos.length} photos
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            
            <img
              src={filteredPhotos[currentImageIndex].src}
              alt={filteredPhotos[currentImageIndex].title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <h3 className="text-xl font-semibold mb-2">
                {filteredPhotos[currentImageIndex].title}
              </h3>
              <p className="text-gray-300">
                {filteredPhotos[currentImageIndex].description}
              </p>
            </div>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {filteredPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;