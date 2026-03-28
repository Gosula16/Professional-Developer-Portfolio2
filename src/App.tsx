import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import RevealSection from './components/RevealSection';

function App() {
  return (
    <ThemeProvider>
      <div className="app-shell min-h-screen text-white">
        <div className="ambient-orb left-[-8rem] top-24 h-72 w-72 bg-cyan-400/20"></div>
        <div className="ambient-orb right-[-6rem] top-[32rem] h-80 w-80 bg-blue-500/20"></div>
        <div className="ambient-orb bottom-[-4rem] left-1/3 h-72 w-72 bg-amber-300/10"></div>
        <Header />
        <main>
          <RevealSection>
            <Hero />
          </RevealSection>
          <RevealSection>
            <Bio />
          </RevealSection>
          <RevealSection>
            <Skills />
          </RevealSection>
          <RevealSection>
            <Projects />
          </RevealSection>
          <RevealSection>
            <Experience />
          </RevealSection>
          <RevealSection>
            <Education />
          </RevealSection>
          <RevealSection>
            <Certifications />
          </RevealSection>
          <RevealSection>
            <Achievements />
          </RevealSection>
          <RevealSection>
            <Testimonials />
          </RevealSection>
          <RevealSection>
            <Gallery />
          </RevealSection>
          <RevealSection>
            <Contact />
          </RevealSection>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
