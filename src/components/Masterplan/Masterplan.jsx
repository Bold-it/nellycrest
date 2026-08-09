import React from 'react';
import './Masterplan.css';

const Masterplan = () => {
  return (
    <section className="section masterplan" id="masterplan">
      <div className="container">
        <div className="masterplan-intro">
          <div className="masterplan-header">
            <h5>The Masterplan</h5>
            <h2>Designed as a City,<br/>Planned as a Community</h2>
          </div>
          <div className="masterplan-desc">
            <p>NellyCrest is currently undergoing professional masterplanning by an appointed team of architects and design professionals.</p>
            <p>The emerging masterplan is being developed around:</p>
            <ul className="masterplan-list">
              <li>Connected neighbourhoods</li>
              <li>High-quality residential environments</li>
              <li>Commercial and business opportunities</li>
              <li>Retail and lifestyle destinations</li>
              <li>Hospitality</li>
              <li>Community and social infrastructure</li>
              <li>Parks and public spaces</li>
              <li>Mobility and connectivity</li>
              <li>Sustainable infrastructure</li>
              <li>Long-term development flexibility</li>
            </ul>
            <a href="#development" className="btn btn-primary" style={{marginTop: '2rem'}}>Follow The Development</a>
          </div>
        </div>

        <div className="pillars-section">
          <h5 className="pillars-title">Three Pillars of NellyCrest</h5>
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-image placeholder-image">
                <span className="pillar-number">01</span>
              </div>
              <div className="pillar-content">
                <div className="pillar-icon">⌂</div>
                <h3>A Place To Live</h3>
                <p className="pillar-subtitle">Homes Designed Around Life</p>
                <a href="#masterplan" className="pillar-link">Discover More →</a>
              </div>
            </div>
            
            <div className="pillar-card">
              <div className="pillar-image placeholder-image">
                <span className="pillar-number">02</span>
              </div>
              <div className="pillar-content">
                <div className="pillar-icon">💼</div>
                <h3>A Place To Work</h3>
                <p className="pillar-subtitle">Creating Space for Opportunity</p>
                <a href="#masterplan" className="pillar-link">Discover More →</a>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-image placeholder-image">
                <span className="pillar-number">03</span>
              </div>
              <div className="pillar-content">
                <div className="pillar-icon">👥</div>
                <h3>A Place To Connect</h3>
                <p className="pillar-subtitle">Community at the Centre</p>
                <a href="#destinations" className="pillar-link">Discover More →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Masterplan;
