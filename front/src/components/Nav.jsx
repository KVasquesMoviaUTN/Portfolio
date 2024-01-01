import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Nav.css';
import LanguageSelector from './LanguageSelector';
import ColorSelector from './ColorSelector';

const Nav = ({ toggleDarkTheme }) => {
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><ColorSelector toggleDarkTheme={toggleDarkTheme} /></li>
                <li><LanguageSelector /></li>
            </ul>
        </nav>
    )    
}

export default Nav;