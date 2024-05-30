// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Olive</h1>
      <div style={styles.menuIcon} onClick={toggleMenu}>
        &#9776;
      </div>
      <nav style={{ ...styles.nav, right: menuOpen ? '0' : '-300px' }}>
        <div style={styles.closeIcon} onClick={toggleMenu}>
          &times;
        </div>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" onClick={toggleMenu} style={styles.navLink}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/information" onClick={toggleMenu} style={styles.navLink}>Information</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    background: '#333',
    color: '#fff',
    position: 'relative',
    overflow: 'hidden',
    height: '60px',
  },
  title: {
    margin: 0,
  },
  menuIcon: {
    cursor: 'pointer',
    fontSize: '24px',
  },
  nav: {
    position: 'absolute',
    top: '0',
    right: '-300px',
    height: '100%',
    background: '#fff',
    color: '#333',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'right 0.3s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '300px',
  },
  closeIcon: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    fontSize: '24px',
  },
  navList: {
    listStyle: 'none',
    padding: '10px',
    margin: 0,
    textAlign: 'center',
  },
  navItem: {
    padding: '10px 0',
    width: '100%',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
  },
};

export default Header;
