import React from "react";
import './styles/Nav.css';

const ColorSelector = ({ toggleDarkTheme, toggleDarkMode }) => {
  const colorClass = toggleDarkMode ? 'nav-color-dark-theme' : 'nav-color-light-theme';

  return (
    <div id="color-selector-div">
      <button id="color-selector-button"  className={colorClass} onClick={toggleDarkTheme}>
        <img src="E:\Descargas\dark-theme-svgrepo-com.svg" alt="Theme"></img>
      </button>
    </div>
  );
};

export default ColorSelector;