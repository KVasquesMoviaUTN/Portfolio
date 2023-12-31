import React, {useState} from "react";
import i18n from '../i18n';
import './styles/Nav.css';

const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(e.target.value);
        localStorage.setItem("lang", e.target.value);
    }

    return (
			<div id="language-selector">
            <select className="language-select" defaultValue={selectedLanguage} onChange={chooseLanguage}>  
            <option value="de">German</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
        </select>
			</div>
    );
};

export default LanguageSelector;