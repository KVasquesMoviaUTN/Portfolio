import React, {useState} from "react";
import './styles/Nav.css';

const ColorSelector = ({ toggleDarkTheme }) => {
  return (
    <div id="color-selector">
      <button onClick={toggleDarkTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ColorSelector;