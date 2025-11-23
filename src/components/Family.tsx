import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Family = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const familyPhotos = [
    {
      src: 'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Family vacation at the beach',
      caption: 'Summer vacation 2023 - Creating memories that last a lifetime'
    },
    {
      src: 'https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Family dinner celebration',
      caption: 'Holiday celebrations bring us together'
    },
    {
      src: 'https://images.pexels.com/photos/1128316/pexels-photo-1128316.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Family hiking adventure',
      caption: 'Weekend adventures in nature'
    },
    {
      src: 'https://images.pexels.com/photos/1128315/pexels-photo-1128315.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Family at home',
      caption: 'Quiet moments at home are the most precious'
    }
  ];

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % familyPhotos.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + familyPhotos.length) % familyPhotos.length);
  };

  return (
    <section id="family" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Family
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The people who inspire and support me every day
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Story
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Family is everything to me. Growing up in a close-knit household taught me 
              the values of hard work, compassion, and the importance of supporting one 
              another. My parents always encouraged curiosity and learning, which shaped 
              my passion for technology and problem-solving.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              Today, I'm blessed to have a wonderful family of my own. We love spending 
              time together, whether it's exploring new places, trying new restaurants, 
              or simply enjoying quiet evenings at home. They're my biggest supporters 
              and my greatest source of motivation.
            </p>

            <div className="bg-blue-50 rounded-lg p-6">
              <blockquote className="text-lg italic text-blue-800 mb-4">
                "Family isn't always blood. It's the people in your life who want you 
                in theirs; the ones who accept you for who you are."
              </blockquote>
              <p className="text-blue-700 font-medium">- My family motto</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Family Gallery
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {familyPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Photo
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            
            <img
              src={familyPhotos[currentImage].src}
              alt={familyPhotos[currentImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            <p className="text-white text-center mt-4 text-lg">
              {familyPhotos[currentImage].caption}
            </p>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Family;