import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import Education from './components/Education';
import Contact from './components/Contact';
import Certificates from './components/Certificates';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-slate-200 selection:bg-primary-500/30">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <CodingProfiles />
      <Contact />
    </div>
  );
}

export default App;
