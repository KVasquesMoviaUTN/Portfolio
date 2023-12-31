import logo from './logo.svg';
import './App.css';
import React from 'react';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './views/Home';
import Nav from './components/Nav';
import LanguageSelector from './components/LanguageSelector';


const App = () => {
  return (
  <div>
    {/* <LanguageSelector /> */}
    <Nav/>
    <Routes>
      <Route path="/languages" element={<LanguageSelector />} />
      <Route path="/" element={ <Home /> }/>
      <Route path="/aboutme" element={ <AboutMe /> }/>
      <Route path="/contact" element={ <Contact /> }/>   
      <Route path="/projects" element={ <Projects /> }/>  
      <Route path="/portfolio" element={ <Portfolio /> }/>    
    </Routes>
  </div>

  );
};

export default App;
