import React, { useEffect, useMemo, useState } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/useTheme';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  const navItems = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'bio', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'experience', label: 'Experience' },
      { id: 'education', label: 'Education' },
      { id: 'certifications', label: 'Certifications' },
      { id: 'contact', label: 'Contact' },
    ],
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 140;

      sections.forEach((section, index) => {
        if (!section) return;
        const { offsetTop, offsetHeight } = section;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(navItems[index].id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

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

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      <div className="content-shell">
        <div className="glass-panel mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="text-left"
          >
            <span className="block text-[0.65rem] uppercase tracking-[0.35em] text-cyan-200/80">
              Portfolio
            </span>
            <span className="text-lg font-bold text-white sm:text-xl">
              Gosula Venkatesh
            </span>
          </button>

          <nav className="hidden items-center gap-2 xl:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  activeSection === item.id
                    ? 'bg-white/12 text-white shadow-[0_0_0_1px_rgba(174,222,255,0.18)]'
                    : 'text-slate-300 hover:bg-white/6 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={toggleTheme}
              className="ghost-button h-11 w-11 rounded-full px-0 py-0"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <div className="relative group">
              <button className="premium-button px-5 py-3 text-xs sm:text-sm">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </button>
              <div className="invisible absolute right-0 top-full mt-3 w-52 rounded-2xl border border-white/10 bg-slate-950/90 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                <button
                  onClick={() => downloadResume('developer')}
                  className="block w-full rounded-xl px-4 py-3 text-left text-sm text-slate-200 hover:bg-white/8"
                >
                  Developer Resume
                </button>
                <button
                  onClick={() => downloadResume('datascientist')}
                  className="block w-full rounded-xl px-4 py-3 text-left text-sm text-slate-200 hover:bg-white/8"
                >
                  Data Scientist Resume
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={toggleTheme}
              className="ghost-button h-10 w-10 rounded-full px-0 py-0"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen((open) => !open)}
              className="ghost-button h-10 w-10 rounded-full px-0 py-0"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="glass-panel mt-3 p-4 xl:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-2xl px-4 py-3 text-left text-sm font-medium ${
                    activeSection === item.id
                      ? 'bg-white/10 text-white'
                      : 'text-slate-300 hover:bg-white/6 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-2 grid gap-2">
                <button
                  onClick={() => downloadResume('developer')}
                  className="premium-button w-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Developer Resume
                </button>
                <button
                  onClick={() => downloadResume('datascientist')}
                  className="ghost-button w-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Data Scientist Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
