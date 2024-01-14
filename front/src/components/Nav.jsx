import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Nav.css';
import LanguageSelector from './LanguageSelector';
import ColorSelector from './ColorSelector';
import './styles/global.css';

const Nav = ({ toggleDarkTheme, toggleDarkMode }) => {
    const navClass = toggleDarkMode ? 'nav-dark-theme' : 'nav-light-theme';
    const navElementClass = toggleDarkMode ? 'nav-element-dark-theme' : 'nav-element-light-theme';

    return(
            <nav className={navClass}>
                <ul>
                    <li className={navElementClass}><Link to="/" className={navElementClass}>Home</Link></li>
                    <li className={navElementClass}><Link to="/about" className={navElementClass}>About </Link></li>
                    <li className={navElementClass}><Link to="/contact" className={navElementClass}>Contact</Link></li>
                    <li className={navElementClass}><Link to="/projects" className={navElementClass}>Projects</Link></li>
                    <li id="color-selector" ><ColorSelector toggleDarkTheme={toggleDarkTheme} toggleDarkMode={toggleDarkMode}/></li>
                    <li id="language-selector"><LanguageSelector toggleDarkTheme={toggleDarkTheme} toggleDarkMode={toggleDarkMode} /></li>
                </ul>
            </nav>
    )    
}

export default Nav;