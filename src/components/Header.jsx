import React, { useState, useContext } from 'react';
import '../styles/Header.css'
import ThemeContext from '../context/ThemeContext';

const Header = () => {

  const [darkMode,setDarkmode] = useState(false);
  const color = useContext(ThemeContext);

  const handleClick = (e) => {
    e.preventDefault();
    setDarkmode(!darkMode);
  }

  return (
    <nav className={darkMode ? 'darkMode' : 'whiteMode'}>
      <h1 style={{color}}>Hey Hooks</h1>
      <button className={darkMode ? 'darkButton' : 'whiteButton'} type='button' onClick={(e) => {handleClick(e)}}>{darkMode ? 'DarkMode' : 'WhiteMode'}</button>
      <button className={darkMode ? 'darkButton' : 'whiteButton'} type='button' onClick={() => setDarkmode(!darkMode)}>{darkMode ? 'DarkMode' : 'WhiteMode'}</button>
    </nav>
  );
}

export default Header;