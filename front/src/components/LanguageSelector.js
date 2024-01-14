import React, {useState} from "react";
import i18n from '../i18n';
import './styles/Nav.css';

const LanguageSelector = ({ toggleDarkTheme, toggleDarkMode }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);   
        setSelectedLanguage(e.target.value);
        localStorage.setItem("lang", e.target.value);
    }

    const languageClass = toggleDarkMode ? 'nav-language-dark-theme' : 'nav-language-light-theme';

    return (
		<div id="language-selector">
            <select id="language-select" className={languageClass} defaultValue={selectedLanguage} onChange={chooseLanguage}>  
                <option value="de">German</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
            </select>
		</div>
    );
};

export default LanguageSelector;