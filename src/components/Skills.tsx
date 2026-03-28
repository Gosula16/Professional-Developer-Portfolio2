import { useState } from 'react';
import { Code, Database, Brain, Globe, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: Code },
    { id: 'languages', label: 'Languages', icon: Code },
    { id: 'frontend', label: 'Frontend', icon: Globe },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'datascience', label: 'Data Science', icon: Brain },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
  ];

  const skills = [
    { name: 'Python', level: 95, category: 'languages' },
    { name: 'JavaScript', level: 90, category: 'languages' },
    { name: 'Java', level: 85, category: 'languages' },
    { name: 'TypeScript', level: 80, category: 'languages' },
    { name: 'React.js', level: 90, category: 'frontend' },
    { name: 'Next.js', level: 85, category: 'frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend' },
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Express.js', level: 80, category: 'backend' },
    { name: 'FastAPI', level: 70, category: 'backend' },
    { name: 'TensorFlow', level: 85, category: 'datascience' },
    { name: 'Scikit-learn', level: 90, category: 'datascience' },
    { name: 'OpenCV', level: 85, category: 'datascience' },
    { name: 'MongoDB', level: 85, category: 'database' },
    { name: 'PostgreSQL', level: 80, category: 'database' },
    { name: 'React Native', level: 75, category: 'mobile' },
  ];

  const filteredSkills =
    selectedCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="section-frame">
      <div className="content-shell">
        <div className="section-heading">
          <span className="section-kicker">Capabilities</span>
          <h2 className="section-title">Focused skills, presented with less noise</h2>
          <p className="section-subtitle">
            I work across frontend, backend, and AI, but I care most about using
            the right stack for a product that feels reliable and clear.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-5 py-3 text-sm font-medium ${
                selectedCategory === category.id
                  ? 'bg-sky-300 text-slate-950 shadow-[0_12px_28px_rgba(102,179,255,0.18)]'
                  : 'border border-white/10 bg-white/5 text-slate-200 hover:bg-white/7'
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <category.icon className="h-4 w-4" />
                {category.label}
              </span>
            </button>
          ))}
        </div>

        <div className="bento-grid">
          <div className="bento-card lg:col-span-8">
            <div className="grid gap-3 md:grid-cols-2">
              {filteredSkills.map((skill) => (
                <div
                  key={`${skill.category}-${skill.name}`}
                  className="rounded-[22px] border border-white/10 bg-white/4 p-4"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-base font-semibold text-white">{skill.name}</h3>
                    <span className="text-sm font-medium text-sky-200">{skill.level}%</span>
                  </div>
                  <div className="skill-meter">
                    <span style={{ width: `${skill.level}%` }}></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-card lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Focus Areas
            </p>
            <div className="mt-5 space-y-3">
              <div className="rounded-[22px] border border-white/10 bg-white/4 p-4">
                <h3 className="text-lg font-semibold text-white">AI + Data</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Machine learning, computer vision, and turning analysis into
                  practical product features.
                </p>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/4 p-4">
                <h3 className="text-lg font-semibold text-white">Frontend Craft</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Responsive React interfaces with strong hierarchy and clear
                  interaction design.
                </p>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/4 p-4">
                <h3 className="text-lg font-semibold text-white">Backend Systems</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  APIs, service integration, deployment, debugging, and practical
                  system workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
