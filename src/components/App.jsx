import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';

import { PortfolioProvider } from '../context/context';

import { aboutData, skillsData, projectsData, footerData } from '../mock/data';

function App() {
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setSkills([...skillsData]);
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ about, projects, skills, footer }}>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
