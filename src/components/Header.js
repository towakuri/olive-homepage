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
      <h1>Olive</h1>
      <div className="menuIcon" onClick={toggleMenu}>
        &#9776;
      </div>
      <nav style={{ right: menuOpen ? '0' : '-300px' }}>
        <div className="closeIcon" onClick={toggleMenu}>
          &times;
        </div>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/information" onClick={toggleMenu}>Information</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
