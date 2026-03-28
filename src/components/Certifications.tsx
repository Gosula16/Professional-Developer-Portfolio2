import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, Building, X } from 'lucide-react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const certifications = [
    {
      id: 1,
      title: 'JP Morgan Software Engineering Virtual Experience',
      issuer: 'JP Morgan Chase & Co.',
      date: 'March 2023',
      credentialId: 'JPMC-SWE-2023-001',
      image:
        'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
      description:
        'Completed a virtual software engineering program focused on financial technology, trading systems, and development practices.',
      skills: ['Python', 'React', 'Financial Systems', 'Git', 'Unit Testing'],
      verifyUrl: 'https://forage.com/certificate/verify',
      category: 'Software Engineering',
    },
    {
      id: 2,
      title: 'AI & Data Scientist Professional Certificate',
      issuer: 'IBM',
      date: 'January 2023',
      credentialId: 'IBM-AI-DS-2023-456',
      image:
        'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
      description:
        'Covered machine learning, deep learning, data analysis, and practical AI workflows.',
      skills: ['Python', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'Pandas'],
      verifyUrl: 'https://coursera.org/verify',
      category: 'Data Science',
    },
    {
      id: 3,
      title: 'Front-End Web Development Certificate',
      issuer: 'freeCodeCamp',
      date: 'November 2022',
      credentialId: 'FCC-FE-2022-789',
      image:
        'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
      description:
        'Built a broad frontend base across responsive design, JavaScript, and component-driven web development.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'],
      verifyUrl: 'https://freecodecamp.org/certification',
      category: 'Web Development',
    },
    {
      id: 4,
      title: 'Full Stack Web Development Certificate',
      issuer: 'The Odin Project',
      date: 'September 2022',
      credentialId: 'TOP-FS-2022-321',
      image:
        'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
      description:
        'Strengthened both frontend and backend fundamentals with project-based full-stack work.',
      skills: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'React'],
      verifyUrl: 'https://theodinproject.com/certificate',
      category: 'Web Development',
    },
  ];

  const categories = ['All', 'Software Engineering', 'Data Science', 'Web Development'];

  const filteredCertifications =
    selectedCategory === 'All'
      ? certifications
      : certifications.filter((cert) => cert.category === selectedCategory);

  const selectedCertData = certifications.find((cert) => cert.id === selectedCert);

  return (
    <section id="certifications" className="section-frame">
      <div className="content-shell">
        <div className="section-heading">
          <span className="section-kicker">Certifications</span>
          <h2 className="section-title">Credentials that support the project work</h2>
          <p className="section-subtitle">
            A concise record of programs and certificates that complement my
            hands-on development and AI work.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-3 text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-cyan-300 text-slate-950 shadow-[0_14px_30px_rgba(121,242,255,0.18)]'
                  : 'border border-white/10 bg-white/5 text-slate-200 hover:bg-white/8'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {filteredCertifications.map((cert) => (
            <button
              key={cert.id}
              onClick={() => setSelectedCert(cert.id)}
              className="glass-panel hover-lift overflow-hidden text-left"
            >
              <img src={cert.image} alt={cert.title} className="h-44 w-full object-cover" />
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-slate-300">
                  <Building className="h-4 w-4 text-cyan-200" />
                  {cert.issuer}
                </div>
                <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                  <Calendar className="h-4 w-4" />
                  {cert.date}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cert.skills.slice(0, 2).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/6 px-2 py-1 text-xs text-cyan-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        {selectedCertData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="glass-panel max-h-[90vh] max-w-2xl overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedCertData.image}
                  alt={selectedCertData.title}
                  className="h-56 w-full object-cover"
                />
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute right-4 top-4 rounded-full bg-slate-950/80 p-2"
                >
                  <X className="h-5 w-5 text-slate-200" />
                </button>
                <div className="absolute left-4 top-4 rounded-full bg-slate-950/80 p-2">
                  <Award className="h-5 w-5 text-amber-300" />
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Building className="h-4 w-4 text-cyan-200" />
                  {selectedCertData.issuer}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white">
                  {selectedCertData.title}
                </h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="info-pill justify-start">
                    <Calendar className="h-4 w-4 text-cyan-300" />
                    {selectedCertData.date}
                  </div>
                  <div className="info-pill justify-start">
                    Credential: {selectedCertData.credentialId}
                  </div>
                </div>
                <p className="mt-6 text-base leading-8 text-slate-300">
                  {selectedCertData.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedCertData.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-sm text-cyan-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={selectedCertData.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button mt-8"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
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
