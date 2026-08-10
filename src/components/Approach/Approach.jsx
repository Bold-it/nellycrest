import React from 'react';
import './Approach.css';

const Approach = () => {
  return (
    <section className="section approach" id="approach">
      <div className="container">
        <div className="approach-header">
          <span className="section-tag">- - Our Approach - -</span>
          <h2>THE NELLYCREST APPROACH</h2>
          <h3 className="approach-subtitle">Think Long Term</h3>
        </div>

        <div className="approach-content">
          <p>
            The most successful cities are not created overnight.
          </p>
          <p>
            They emerge from a clear vision, disciplined planning and the ability to evolve with the people and economies they serve.
          </p>
          <p>
            NellyCrest is being approached with that philosophy.
          </p>
          <p>
            Every road, neighbourhood, public space, building and destination will ultimately form part of a larger urban story.
          </p>
          
          <div className="approach-tagline">
            A story being written today for the generations of tomorrow.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
