import { Github, Linkedin, Twitter, Mail, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
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

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#bio' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="section-frame pt-10">
      <div className="content-shell">
        <div className="glass-panel p-8 md:p-10">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/70">
                Gosula Venkatesh
              </p>
              <h3 className="mt-3 text-3xl font-bold text-white">
                Engineering product quality with a systems mindset
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                Full-stack developer with interests across AI, backend systems,
                deployment, and polished user-facing products.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ghost-button h-12 w-12 rounded-full px-0 py-0"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>

              <a
                href="https://professional-developer-portfolio2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-200 hover:text-white"
              >
                Live portfolio
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="mt-4 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-slate-300 hover:text-white"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white">Contact</h4>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <p>gosulavenkatesh461@gmail.com</p>
                <p>+91 7337514702</p>
                <p>Bengaluru, India</p>
                <p className="pt-3">
                  SASTRA University
                  <br />
                  Information Technology
                  <br />
                  CGPA: 8.3/10
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Gosula Venkatesh. All rights reserved.</p>
            <p className="mt-3 flex items-center md:mt-0">
              Built with care
              <Heart className="mx-2 h-4 w-4 text-rose-400" />
              using React and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
