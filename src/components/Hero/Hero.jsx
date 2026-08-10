import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background"></div>
      <div className="container hero-content">
        <span className="hero-tag">- - The Landing Page - -</span>
        <h1>
          NELLYCREST:<br />
          A New Chapter for<br />
          Urban Development
        </h1>
        <p className="subtitle">
          A masterplanned destination designed for the way Africa will live, work, connect and grow.
        </p>
        <div className="hero-description">
          <p>
            NellyCrest is a landmark urban development taking shape in Ghana, conceived as an integrated environment where residential, commercial, social and economic activity come together within one thoughtfully planned destination.
          </p>
          <p>
            With masterplanning currently underway, NellyCrest is being designed around a simple ambition: to create a place built not only for today, but for the generations that follow.
          </p>
        </div>
        <div className="hero-actions">
          <a href="#vision" className="btn btn-primary">Explore the Vision</a>
          <a href="#investment" className="btn btn-outline">Register Your Interest</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

