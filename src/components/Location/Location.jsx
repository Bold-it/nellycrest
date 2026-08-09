import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <section className="section location" id="development">
      <div className="container">
        
        <div className="info-grid">
          <div className="info-item">
            <div className="info-icon">⚲</div>
            <div className="info-text">
              <h4>CONNECTIVITY</h4>
              <p>Designed around movement. Connected to opportunity, community and Ghana's future.</p>
              <a href="#development" className="info-link">EXPLORE CONNECTIVITY →</a>
            </div>
          </div>
          <div className="info-item" id="location">
            <div className="info-icon">◎</div>
            <div className="info-text">
              <h4>LOCATION</h4>
              <p>Strategically positioned for growth and long-term accessibility.</p>
              <a href="#development" className="info-link">DISCOVER THE LOCATION →</a>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">◩</div>
            <div className="info-text">
              <h4>LONG-TERM DEVELOPMENT</h4>
              <p>A phased approach that allows NellyCrest to grow sustainably and intentionally over time.</p>
              <a href="#development" className="info-link">LEARN MORE →</a>
            </div>
          </div>
          <div className="info-item" id="partnerships">
            <div className="info-icon">🤝</div>
            <div className="info-text">
              <h4>INVESTMENT & PARTNERSHIPS</h4>
              <p>Opportunities for investors, developers, institutions and strategic partners.</p>
              <a href="#investment" className="info-link">PARTNERSHIP ENQUIRIES →</a>
            </div>
          </div>
        </div>

        <div className="dev-status">
          <div className="dev-status-header">
            <h5>DEVELOPMENT STATUS</h5>
            <h2>NELLYCREST IS TAKING SHAPE.</h2>
            <p>Masterplanning in progress. Our architectural and planning teams are actively developing the masterplan and design strategy.</p>
            <a href="#investment" className="btn btn-primary" style={{marginTop: '1rem'}}>FOLLOW THE JOURNEY</a>
          </div>
          
          <div className="timeline">
            <div className="timeline-item active">
              <span className="dot"></span>
              <span className="label">VISION &<br/>STRATEGY</span>
            </div>
            <div className="timeline-item">
              <span className="dot"></span>
              <span className="label">MASTERPLAN</span>
            </div>
            <div className="timeline-item">
              <span className="dot"></span>
              <span className="label">DISTRICTS &<br/>USES</span>
            </div>
            <div className="timeline-item">
              <span className="dot"></span>
              <span className="label">INFRASTRUCTURE</span>
            </div>
            <div className="timeline-item">
              <span className="dot"></span>
              <span className="label">DEVELOPMENT<br/>PHASING</span>
            </div>
            <div className="timeline-item">
              <span className="dot"></span>
              <span className="label">INVESTMENT<br/>OPPORTUNITIES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
