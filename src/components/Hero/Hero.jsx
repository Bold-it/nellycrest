import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background"></div>
      <div className="container hero-container">
        <div className="hero-grid">
          
          {/* Left Column: Headlines & Call to Action */}
          <div className="hero-left">
            <span className="hero-tag">- - The Landing Page - -</span>
            <h1 className="hero-brand">NELLYCREST</h1>
            <h2 className="hero-title">A New Chapter for Urban Development</h2>
            <p className="hero-subtitle">
              A masterplanned destination designed for the way Africa will live, work, connect and grow.
            </p>
            <div className="hero-actions">
              <a href="#vision" className="btn btn-primary">Explore the Vision</a>
              <a href="#investment-partnerships" className="btn btn-outline">Register Your Interest</a>
            </div>
          </div>

          {/* Right Column: Narrative Card */}
          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-card-header">
                <span className="card-badge">THE LANDMARK DEVELOPMENT</span>
              </div>
              <p className="hero-card-p">
                NellyCrest is a landmark urban development taking shape in Ghana, conceived as an integrated environment where residential, commercial, social and economic activity come together within one thoughtfully planned destination.
              </p>
              <p className="hero-card-p">
                With masterplanning currently underway, NellyCrest is being designed around a simple ambition: to create a place built not only for today, but for the generations that follow.
              </p>
              <div className="hero-card-footer">
                <span className="click-label">Click below to:</span>
                <div className="click-links">
                  <a href="#vision" className="hero-card-link">[Explore the Vision]</a>
                  <a href="#investment-partnerships" className="hero-card-link">[Register Your Interest]</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;


