import React from 'react';
import './Destinations.css';

const Destinations = () => {
  const experiences = [
    { 
      name: "PUBLIC AQUARIUM", 
      desc: "showcasing marine and aquatic life experiences",
      icon: "🦈" 
    },
    { 
      name: "WORLD-CLASS RACE CIRCUIT", 
      desc: "designed for motorsport and major events",
      icon: "🏁" 
    },
    { 
      name: "CHAMPIONSHIP GOLF COURSE", 
      desc: "integrated into the landscape",
      icon: "⛳" 
    },
    { 
      name: "MULTIPURPOSE ARENA", 
      desc: "for concerts, sports and large-scale events",
      icon: "🏟️" 
    },
    { 
      name: "SURF POOL & WATER FACILITY", 
      desc: "water experience facility for recreation and training",
      icon: "🌊" 
    },
    { 
      name: "DEDICATED EQUESTRIAN FACILITIES", 
      desc: "for sport, leisure and events",
      icon: "🐎" 
    }
  ];

  return (
    <section className="section destinations" id="destinations">
      <div className="container">
        <div className="dest-intro">
          <span className="section-tag">*A PLACE TO VISIT</span>
          <h2>Destination Experiences<br/>at the Heart of NellyCrest</h2>
          <p>
            NellyCrest is being designed not only as a place to live and work, but as a destination that attracts visitors from across Africa and beyond.
          </p>
          <p>
            As part of the wider masterplan, a collection of landmark leisure, sport and entertainment facilities is being considered to create a vibrant visitor experience and a strong sense of place. These will include:
          </p>
        </div>
        
        <div className="dest-grid">
          {experiences.map((exp, index) => (
            <div className="dest-card" key={index}>
              <div className="dest-card-inner">
                <span className="dest-icon">{exp.icon}</span>
                <h4>{exp.name}</h4>
                <p className="dest-desc">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="dest-footer-note">
          <p>
            These destinations are intended to complement the wider urban environment, creating a dynamic mix of culture, recreation and entertainment within NellyCrest.
          </p>
          <div className="dest-tagline">
            Together, they position NellyCrest as more than a development, but as a place people actively travel to experience.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;

