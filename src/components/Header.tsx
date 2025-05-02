import React, { useState } from 'react';
import logo from '../assets/logo.png';
import '../App.css';
import { Link } from 'react-router-dom';

const headerStyle: React.CSSProperties = {
  padding: '1rem 2rem',
  background: '#1fa463',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  zIndex: 10,
  minHeight: '72px',
};

const leftStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  textDecoration: 'none',
  minWidth: 0,
  zIndex: 2,
};

const navStyle: React.CSSProperties = {
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
};

const mobileMenuButtonStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  color: '#fff',
  fontSize: '2rem',
  cursor: 'pointer',
  display: 'none',
  marginLeft: 'auto',
  alignSelf: 'flex-end',
  zIndex: 2,
};

const mobileNavOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(31, 164, 99, 0.98)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 100,
};

const mobileNavLinksStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  alignItems: 'center',
};

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const handleOpen = () => {
    setMobileOpen(true);
    setAnimateOut(false);
  };

  const handleClose = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setMobileOpen(false);
      setAnimateOut(false);
    }, 300);
  };

  return (
    <header style={headerStyle}>
      <div style={leftStyle}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
          <img src={logo} alt="Logo" style={{ height: '3.2rem', width: '3.2rem', objectFit: 'contain' }} />
          <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#fff', textDecoration: 'none', whiteSpace: 'nowrap' }}>E-Connect</h1>
        </Link>
      </div>
      <nav style={navStyle} className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/team" className="nav-link">Team</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
      <button
        style={mobileMenuButtonStyle}
        className="header-mobile-menu-btn"
        aria-label="Open navigation menu"
        onClick={handleOpen}
      >
        &#9776;
      </button>
      {mobileOpen && (
        <div
          style={mobileNavOverlayStyle}
          className={`header-mobile-nav ${animateOut ? 'header-mobile-nav-hide' : 'header-mobile-nav-show'}`}
        >
          <button
            style={{
              ...mobileMenuButtonStyle,
              position: 'absolute',
              top: 24,
              right: 32,
              fontSize: '2.5rem',
              display: 'block',
              marginLeft: 0,
            }}
            aria-label="Close navigation menu"
            onClick={handleClose}
          >
            &times;
          </button>
          <nav style={mobileNavLinksStyle}>
            <Link to="/" className="nav-link" onClick={handleClose}>Home</Link>
            <Link to="/team" className="nav-link" onClick={handleClose}>Team</Link>
            <Link to="/contact" className="nav-link" onClick={handleClose}>Contact</Link>
            <Link to="/about" className="nav-link" onClick={handleClose}>About</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
