import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Nav.css';
import LanguageSelector from './LanguageSelector';
import ColorSelector from './ColorSelector';
import './styles/global.css';

const Nav = ({ toggleDarkTheme }) => {
    return(
        <nav>
            <ul>
                <li class="nav-element"><Link to="/">Home</Link></li>
                <li class="nav-element"><Link to="/about">About </Link></li>
                <li class="nav-element"><Link to="/contact">Contact</Link></li>
                <li class="nav-element"><Link to="/projects">Projects</Link></li>
                <li id="color-selector"><ColorSelector toggleDarkTheme={toggleDarkTheme}/></li>
                <li id="language-selector"><LanguageSelector /></li>
            </ul>
        </nav>
    )    
}

export default Nav;