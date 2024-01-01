import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './views/Home';
import Nav from './components/Nav';
import LanguageSelector from './components/LanguageSelector';
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ColorSelector from './components/ColorSelector';
import './components/styles/global.css';

const App = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const theme  = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light',
      primary: {
        main: toggleDarkMode ? '#2196f3' : '#1976D2',
      },
      secondary: {
        main: toggleDarkMode ? '#f50057' : '#C2185B',
      },
    },
  });

  return (
    <ThemeProvider theme={ theme }>
      {/* <CssBaseline /> */}
      <div className={`body ${toggleDarkMode ? 'dark-theme' : 'light-theme'}`}>
          <Nav toggleDarkTheme={toggleDarkTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/languages" element={<LanguageSelector />} />
            <Route path="/color" element={<ColorSelector />} />
          </Routes>
        </div>
    </ThemeProvider>
  );
};

export default App;
