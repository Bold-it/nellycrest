import React from 'react';
import './Destinations.css';

const Destinations = () => {
  const experiences = [
    { name: "AQUARIUM", icon: "🦈" },
    { name: "RACE CIRCUIT", icon: "🏁" },
    { name: "GOLF COURSE", icon: "⛳" },
    { name: "ARENA", icon: "🏟️" },
    { name: "SURF POOL", icon: "🌊" },
    { name: "EQUESTRIAN CENTRE", icon: "🐎" }
  ];

  return (
    <section className="section destinations" id="destinations">
      <div className="container">
        <div className="dest-intro">
          <h5>A Place To Visit</h5>
          <h2>Destination Experiences<br/>at the Heart of NellyCrest</h2>
          <p>
            NellyCrest is being designed not only as a place to live and work, but as a destination that attracts visitors from across Africa and beyond.
          </p>
          <a href="#destinations" className="dest-link">Concepts currently being explored as part of the masterplanning process.</a>
        </div>
        
        <div className="dest-grid">
          {experiences.map((exp, index) => (
            <div className="dest-card" key={index}>
              <div className="dest-bg placeholder-image"></div>
              <div className="dest-content">
                <span className="dest-icon">{exp.icon}</span>
                <h4>{exp.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
