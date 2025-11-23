import React, { useState } from 'react';
import { Camera, Music, Mountain, Book, Palette, Globe } from 'lucide-react';

const Hobbies = () => {
  const [selectedHobby, setSelectedHobby] = useState(0);

  const hobbies = [
    {
      icon: Camera,
      title: 'Photography',
      description: 'Capturing moments and telling stories through the lens',
      fullDescription: 'Photography has been my passion for over 8 years. I love capturing the beauty in everyday moments, from stunning landscapes to intimate portraits. My camera is always with me, ready to document life\'s precious moments.',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Music,
      title: 'Music Production',
      description: 'Creating beats and melodies in my home studio',
      fullDescription: 'Music is my creative outlet outside of coding. I enjoy experimenting with different genres, from electronic to indie rock. My home studio is equipped with various instruments and software where I spend hours crafting sounds.',
      image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Mountain,
      title: 'Hiking',
      description: 'Exploring nature trails and conquering new peaks',
      fullDescription: 'There\'s nothing quite like the feeling of reaching a mountain summit after a challenging hike. I love exploring new trails, breathing fresh air, and disconnecting from the digital world to reconnect with nature.',
      image: 'https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Book,
      title: 'Reading',
      description: 'Diving into sci-fi novels and tech publications',
      fullDescription: 'Reading keeps me intellectually curious and inspired. I particularly enjoy science fiction novels and technical books about emerging technologies. My reading list is always growing with recommendations from fellow developers and thought leaders.',
      image: 'https://images.pexels.com/photos/1331324/pexels-photo-1331324.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Palette,
      title: 'Digital Art',
      description: 'Creating digital illustrations and UI designs',
      fullDescription: 'Digital art allows me to express creativity in a different medium. I enjoy creating illustrations, experimenting with color palettes, and designing user interfaces. This hobby directly complements my development work.',
      image: 'https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Globe,
      title: 'Travel',
      description: 'Discovering new cultures and cuisines around the world',
      fullDescription: 'Traveling broadens my perspective and inspires creativity. I love experiencing different cultures, trying local cuisines, and meeting people from all walks of life. Each journey teaches me something new about the world and myself.',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hobbies & Interests
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The activities that fuel my creativity and keep me inspired
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hobby Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className={`bg-gray-50 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedHobby === index ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedHobby(index)}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${
                      selectedHobby === index ? 'bg-blue-100' : 'bg-white'
                    }`}>
                      {React.createElement(hobby.icon, {
                        className: `w-6 h-6 ${
                        selectedHobby === index ? 'text-blue-600' : 'text-gray-600'
                        }`
                      })}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 ml-3">
                      {hobby.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {hobby.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Hobby Details */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6">
            <div className="mb-6">
              <img
                src={hobbies[selectedHobby].image}
                alt={hobbies[selectedHobby].title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                {React.createElement(hobbies[selectedHobby].icon, {
                  className: "w-6 h-6 text-blue-600"
                })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-3">
                {hobbies[selectedHobby].title}
              </h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              {hobbies[selectedHobby].fullDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;