import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <a href="#">NELLYCREST</a>
        </div>
        
        <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#vision" onClick={closeMenu}>Vision</a></li>
            <li><a href="#masterplan" onClick={closeMenu}>Masterplan</a></li>
            <li><a href="#destinations" onClick={closeMenu}>Destinations</a></li>
            <li><a href="#connectivity" onClick={closeMenu}>Connectivity</a></li>
            <li><a href="#location" onClick={closeMenu}>Location</a></li>
            <li><a href="#the-development" onClick={closeMenu}>Development</a></li>
            <li><a href="#investment-partnerships" onClick={closeMenu}>Partnerships</a></li>
            <li><a href="#approach" onClick={closeMenu}>Our Approach</a></li>
          </ul>
          <div className="nav-actions">
            <a href="#investment-partnerships" className="btn btn-outline" onClick={closeMenu}>Register Your Interest</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
