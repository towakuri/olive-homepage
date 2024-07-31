// src/components/Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // 必要に応じてCSSをインポート

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleTitleClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <Link to="/" className="titleLink" onClick={handleTitleClick}>
        <h1 className="title">Olive</h1>
      </Link>
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
