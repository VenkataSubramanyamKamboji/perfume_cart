import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-essence">ESSENCE</span>
          <span className="logo-subtitle">Luxury Perfumes</span>
        </Link>
        
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <a href="#collections" className="navbar-link" onClick={() => setIsOpen(false)}>
            Collections
          </a>
          <a href="#about" className="navbar-link" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#contact" className="navbar-link" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>

        <div className="navbar-actions">
          <button className="navbar-search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="navbar-cart">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M1 1h3l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L22 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="cart-count">0</span>
          </button>
        </div>

        <button 
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
