import React from 'react';
import './Masterplan.css';

const Masterplan = () => {
  return (
    <section className="section masterplan" id="masterplan">
      <div className="container">
        
        {/* Masterplan Header & Intro */}
        <div className="masterplan-intro">
          <div className="masterplan-header">
            <span className="section-tag">- - The Masterplan - -</span>
            <h2>THE MASTERPLAN</h2>
            <p className="section-subtitle">Designed as a City, Planned as a Community</p>
            <div className="masterplan-banner">
              <img src="/images/photo_2026-08-11_00-37-04.jpg" alt="Aerial Masterplan Overview" />
              <div className="masterplan-banner-caption">
                <span>MASTERPLAN AERIAL CONCEPT</span>
              </div>
            </div>
          </div>
          <div className="masterplan-desc">
            <p>
              NellyCrest is currently undergoing professional masterplanning by an appointed team of architects and design professionals.
            </p>
            <p>
              The masterplanning process is focused on creating a coherent urban environment in which individual districts and developments contribute to a broader sense of place.
            </p>
            <p className="highlight-text">The emerging masterplan is being developed around:</p>
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
            <p className="masterplan-note">
              The masterplan is being carefully developed to allow NellyCrest to evolve over time while maintaining a clear overarching vision.
            </p>
            <span className="status-badge">Masterplan currently in development</span>
          </div>
        </div>

        {/* The Pillars of NellyCrest */}
        <div className="pillars-section">
          <div className="pillars-header">
            <span className="section-tag">- - The Pillars - -</span>
            <h2>THE PILLARS OF NELLYCREST</h2>
          </div>
          
          <div className="pillars-grid">
            {/* Pillar 1: A Place to Live */}
            <div className="pillar-card">
              <div className="pillar-img-box">
                <img src="/images/photo_2026-08-10_21-50-11.jpg" alt="A Place to Live - Residential Environments" />
                <span className="pillar-badge-overlay">PILLAR 01</span>
              </div>
              <div className="pillar-card-header">
                <h3>A PLACE TO LIVE</h3>
                <h4>Homes Designed Around Life</h4>
              </div>
              <div className="pillar-body">
                <p>
                  NellyCrest will bring together a range of residential environments designed to respond to different lifestyles, stages of life and aspirations.
                </p>
                <p>
                  From contemporary apartments to larger family-oriented residences, the residential vision is centered on creating neighbourhoods that feel connected, comfortable and distinctly NellyCrest. Our residential development will be integrated with access to amenities, open spaces, services and everyday conveniences.
                </p>
                <div className="pillar-tagline">
                  A place to come home to. A place to grow. A place to belong.
                </div>
              </div>
            </div>

            {/* Pillar 2: A Place to Work */}
            <div className="pillar-card">
              <div className="pillar-img-box">
                <img src="/images/photo_2026-08-10_21-50-00.jpg" alt="A Place to Work - Commercial Environments" />
                <span className="pillar-badge-overlay">PILLAR 02</span>
              </div>
              <div className="pillar-card-header">
                <h3>A PLACE TO WORK</h3>
                <h4>Creating Space for Opportunity</h4>
              </div>
              <div className="pillar-body">
                <p>
                  NellyCrest is envisioned as more than a residential destination.
                </p>
                <p>
                  Commercial and business environments will form an important part of the wider development, creating opportunities for enterprises, entrepreneurs, professionals and institutions to establish a presence within a growing destination.
                </p>
                <p>
                  The objective is to create an environment where economic activity and everyday life will exist in close proximity, reducing the separation between where people live, work, shop and spend their time.
                </p>
                <div className="pillar-tagline">
                  Live. Work. Connect. Grow.
                </div>
              </div>
            </div>

            {/* Pillar 3: A Place to Connect */}
            <div className="pillar-card">
              <div className="pillar-img-box">
                <img src="/images/photo_2026-08-10_21-50-42.jpg" alt="A Place to Connect - Community Spaces" />
                <span className="pillar-badge-overlay">PILLAR 03</span>
              </div>
              <div className="pillar-card-header">
                <h3>A PLACE TO CONNECT</h3>
                <h4>Community at the Centre</h4>
              </div>
              <div className="pillar-body">
                <p>
                  Great destinations are defined not only by their buildings, but by the spaces between them.
                </p>
                <p>
                  NellyCrest’s masterplanning approach places emphasis on public realm, greenery, pedestrian experiences, recreation and spaces where people can meet and connect.
                </p>
                <p>
                  The vision is to create neighbourhoods that encourage interaction while providing moments of privacy, relaxation and escape.
                </p>
                <div className="pillar-tagline">
                  From everyday encounters to major experiences, NellyCrest is being designed around the idea that community should be part of the architecture of the city.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Masterplan;

