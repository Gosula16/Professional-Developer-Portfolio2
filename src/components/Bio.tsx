import { Download, User, Code, Heart, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

const Bio = () => {
  const stats = [
    { icon: Code, value: '1+', label: 'Years of hands-on industry experience' },
    { icon: User, value: '15+', label: 'Projects built across AI and web' },
    { icon: Heart, value: 'Infinite', label: 'Curiosity for better systems and design' },
  ];

  const downloadResume = (type: 'developer' | 'datascientist') => {
    const resumeUrls = {
      developer: '/resumes/developer-cv.pdf',
      datascientist: '/resumes/data-scientist-cv.pdf',
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
    <section id="bio" className="section-frame">
      <div className="content-shell">
        <div className="section-heading">
          <span className="section-kicker">About</span>
          <h2 className="section-title">Built around product feel and engineering depth</h2>
          <p className="section-subtitle">
            I work across frontend, backend, and applied AI, with a practical
            mindset shaped by product building and systems debugging.
          </p>
        </div>

        <div className="bento-grid">
          <div className="bento-card lg:col-span-7 lg:row-span-2">
            <div className="max-w-3xl">
              <p className="text-lg leading-7 text-slate-200">
                I am a B.Tech IT graduate and software developer with experience in
                Bluetooth connectivity, Java, React.js, Node.js, API integration,
                and shipping user-facing web applications. I enjoy solving
                technical problems in a way that still respects the final user
                experience.
              </p>

              <p className="mt-5 text-base leading-7 text-slate-300">
                My background spans automotive-oriented systems work and modern web
                development, which makes me comfortable moving between logs,
                debugging, architecture, UI polish, and product iteration. I care
                about clarity, execution speed, and interfaces that feel thought
                through.
              </p>

              <p className="mt-5 text-base leading-7 text-slate-300">
                Outside the code itself, I value ownership, learning fast, and
                building things that can actually be deployed, used, and improved
                over time.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div className="group relative">
                <button className="premium-button">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </button>
                <div className="invisible absolute left-0 top-full mt-3 w-56 rounded-2xl border border-white/10 bg-slate-950/90 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <button
                    onClick={() => downloadResume('developer')}
                    className="block w-full rounded-xl px-4 py-3 text-left text-sm text-slate-200 hover:bg-white/10"
                  >
                    Developer Resume
                  </button>
                  <button
                    onClick={() => downloadResume('datascientist')}
                    className="block w-full rounded-xl px-4 py-3 text-left text-sm text-slate-200 hover:bg-white/10"
                  >
                    Data Scientist Resume
                  </button>
                </div>
              </div>
              <button onClick={scrollToProjects} className="ghost-button">
                See project archive
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="bento-card lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Contact Snapshot
            </p>
            <div className="mt-5 space-y-3">
              <div className="info-pill w-full justify-start">
                <Mail className="h-4 w-4 text-sky-300" />
                gosulavenkatesh461@gmail.com
              </div>
              <div className="info-pill w-full justify-start">
                <Phone className="h-4 w-4 text-sky-300" />
                +91 7337514702
              </div>
              <div className="info-pill w-full justify-start">
                <MapPin className="h-4 w-4 text-sky-300" />
                Bengaluru, India
              </div>
            </div>
          </div>

          {stats.map((stat) => (
            <div key={stat.label} className="bento-card lg:col-span-4">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <stat.icon className="h-5 w-5 text-sky-200" />
              </div>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bio;
