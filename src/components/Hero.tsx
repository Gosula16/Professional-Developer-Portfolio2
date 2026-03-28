import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Briefcase,
} from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Gosula16', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/gosula-venkatesh-52b067233',
      label: 'LinkedIn',
    },
    { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
    { icon: Mail, href: 'mailto:gosulavenkatesh461@gmail.com', label: 'Email' },
  ];

  const scrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section-frame pt-32 md:pt-36">
      <div className="content-shell">
        <div className="mb-8 flex items-center justify-center lg:justify-start">
          <div className="info-pill">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            Bluetooth systems engineer, full-stack builder, and AI-focused developer
          </div>
        </div>

        <div className="bento-grid">
          <div className="bento-card lg:col-span-7 lg:row-span-2">
            <div className="flex h-full flex-col justify-between gap-10">
              <div>
                <span className="section-kicker">Design-forward engineering</span>
                <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] text-white md:text-7xl">
                  I build
                  <span className="text-gradient"> systems that feel premium </span>
                  and still ship like real products.
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                  I am Gosula Venkatesh, a B.Tech IT graduate and software developer
                  with hands-on experience in Bluetooth connectivity, React apps,
                  backend APIs, deployment workflows, and applied AI projects.
                  I like turning technically complex ideas into polished, usable
                  interfaces.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => scrollTo('contact')}
                    className="premium-button"
                  >
                    <Briefcase className="mr-2 h-4 w-4" />
                    Available for work
                  </button>
                  <button
                    onClick={() => scrollTo('projects')}
                    className="ghost-button"
                  >
                    Explore selected work
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="info-pill">
                    <MapPin className="h-4 w-4 text-cyan-300" />
                    Bengaluru, India
                  </div>
                  <div className="info-pill">Open to full-time roles</div>
                  <div className="info-pill">React, Node.js, Python, Java</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bento-card lg:col-span-5">
            <div className="flex h-full flex-col gap-5 md:flex-row md:items-center">
              <div className="relative mx-auto w-full max-w-[260px] shrink-0">
                <div className="absolute inset-0 rounded-[32px] bg-cyan-300/20 blur-2xl"></div>
                <img
                  src="https://cdn.pixabay.com/photo/2024/12/03/08/08/ai-generated-9241538_1280.jpg"
                  alt="Gosula Venkatesh"
                  className="relative h-[300px] w-full rounded-[28px] object-cover shadow-2xl ring-1 ring-white/10"
                />
              </div>

              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">
                  Profile Snapshot
                </p>
                <h2 className="mt-3 text-3xl font-bold text-white">
                  Full stack + AI with embedded systems discipline
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  From automotive Bluetooth debugging to deployable web products, I
                  enjoy the intersection of reliability, interface quality, and
                  engineering clarity.
                </p>
                <a
                  href="https://professional-developer-portfolio2.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-cyan-200 hover:text-white"
                >
                  Live portfolio
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="bento-card lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/70">
              Current Momentum
            </p>
            <div className="mt-5 space-y-5">
              <div>
                <p className="text-4xl font-bold text-white">15+</p>
                <p className="mt-1 text-sm text-slate-300">Public projects and assignments</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">3</p>
                <p className="mt-1 text-sm text-slate-300">Core strengths: product, backend, AI</p>
              </div>
            </div>
          </div>

          <div className="bento-card lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/70">
              Connect
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ghost-button h-14 rounded-2xl px-0 py-0"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
