import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#resources">Resources</a></li>
        <li><a href="#setup">Developer Setup</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;