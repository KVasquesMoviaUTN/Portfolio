import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import { Link } from 'react-router-dom';


const Portfolio = () => {
  return (
    <div>
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
};

export default Portfolio;