import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import { Link } from 'react-router-dom';


const Portfolio = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Acerca de Mí</Link>
          </li>
          <li>
            <Link to="/projects">Proyectos</Link>
          </li>
        </ul>
      </nav>
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
};

export default Portfolio;