import React, { useEffect, useState } from 'react';
import './Navbar.scss';

import darkModeLogo from '../../assets/dark_mode.svg';
import lightModeLogo from '../../assets/light_mode.svg';

export const Navbar: React.FC = () => {

  const [darkMode, setDarkMode] = useState(true);

  useEffect(()=> {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="navbar">
      <div className='sections'>
        <a href='/#/'>Home</a>
        <a href='/#/projects'>Portfolio</a>
      </div>
      <div className='theme' onClick={toggleTheme}>
        {darkMode ? <img src={darkModeLogo} alt="dark mode logo" className='theme-logo'/> : <img src={lightModeLogo} alt="light mode logo" className='theme-logo'/>}
      </div>
    </div>
  );
};