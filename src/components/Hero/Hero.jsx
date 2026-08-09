import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background"></div>
      <div className="container hero-content">
        <h1>
          A New Chapter<br />
          For Urban Development<br />
          In Ghana
        </h1>
        <p className="subtitle">
          A masterplanned destination designed for the way Africa will live, work, connect and grow.
        </p>
        <div className="hero-actions">
          <a href="#vision" className="btn btn-primary">Explore The Vision</a>
          <a href="#destinations" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Watch The Video
            <span className="play-icon">▶</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
