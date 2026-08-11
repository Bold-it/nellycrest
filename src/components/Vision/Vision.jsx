import React from 'react';
import './Vision.css';

const Vision = () => {
  return (
    <section className="section vision" id="vision">
      <div className="container">
        <div className="vision-header">
          <span className="section-tag">- - The Vision - -</span>
          <h2>THE VISION</h2>
          <p className="section-subtitle">Building More Than a Development</p>
        </div>

        <div className="vision-grid">
          <div className="vision-content">
            <div className="vision-text">
              <p>
                NellyCrest is being conceived as a new model for large-scale urban development in Ghana.
                Rather than treating residential, commercial, leisure and community uses as isolated components, the development brings them together within a coordinated masterplan designed to create a connected and vibrant destination.
              </p>
              <p>
                The vision is to establish an environment where people can <strong>live, work, invest, connect and thrive</strong>; supported by carefully considered infrastructure, public spaces, amenities and services.
              </p>
              <p className="vision-highlight">Every element of NellyCrest is being considered as part of a larger whole.</p>
            </div>
          </div>

          <div className="vision-media">
            <div className="vision-img-frame">
              <img src="/images/photo_2026-08-10_21-50-53.jpg" alt="NellyCrest Vision Masterplan" />
              <div className="vision-img-overlay">
                <span>PARKLAND & SKYLINE VISION</span>
              </div>
            </div>
          </div>
        </div>

        <div className="vision-features">
          <div className="feature">
            <div className="feature-icon">❖</div>
            <p className="feature-title">One Vision.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">⬡</div>
            <p className="feature-title">One Masterplan.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">◈</div>
            <p className="feature-title">One Connected<br/>Destination.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

