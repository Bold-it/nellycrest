import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <a href="#">NELLYCREST</a>
        </div>
        <ul className="nav-links">
          <li><a href="#vision">Vision</a></li>
          <li><a href="#masterplan">Masterplan</a></li>
          <li><a href="#development">Development</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#location">Location</a></li>
          <li><a href="#investment">Investment</a></li>
        </ul>
        <div className="nav-actions">
          <a href="#investment" className="btn btn-outline">Register Your Interest</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
