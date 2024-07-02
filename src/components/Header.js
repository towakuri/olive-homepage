// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // 必要に応じてCSSをインポート

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <h1 className="title">Olive</h1>
      <div className="menuIcon" onClick={toggleMenu}>
        &#9776;
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <div className="closeIcon" onClick={toggleMenu}>
          &times;
        </div>
        <ul className="navList">
          <li className="navItem">
            <Link to="/" onClick={toggleMenu} className="navLink">Home</Link>
          </li>
          <li className="navItem">
            <Link to="/information" onClick={toggleMenu} className="navLink">Information</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
