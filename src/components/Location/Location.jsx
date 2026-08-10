import React from 'react';
import './Location.css';

const Location = () => {
  const collaborationAreas = [
    {
      title: "Real Estate",
      desc: "Residential, commercial, retail and mixed-use development."
    },
    {
      title: "Hospitality",
      desc: "Hotels, serviced residences and destination experiences."
    },
    {
      title: "Infrastructure",
      desc: "Utilities, mobility, technology and essential infrastructure."
    },
    {
      title: "Institutional Development",
      desc: "Education, healthcare, community and social infrastructure."
    },
    {
      title: "Investment",
      desc: "Institutional capital, development finance and strategic investment."
    },
    {
      title: "Development Partnerships",
      desc: "Joint ventures and specialist development opportunities. Partnership opportunities will be introduced progressively as the masterplan and development strategy advance."
    }
  ];

  return (
    <section className="section location" id="development">
      <div className="container">
        
        {/* Connectivity */}
        <div className="location-block" id="connectivity">
          <span className="section-tag">- - Connectivity - -</span>
          <h2>CONNECTIVITY</h2>
          <h3 className="block-subtitle">Designed Around Movement</h3>
          <p>
            NellyCrest is being planned with connectivity at its core.
          </p>
          <p>
            The development will consider how residents, workers, visitors, businesses and services move through the wider destination, while creating a balanced relationship between vehicles, pedestrians, public spaces and the built environment. Connectivity will extend beyond the development itself, positioning NellyCrest as part of Ghana’s broader urban and economic growth.
          </p>
          <div className="block-tagline">
            Connected to opportunity. Connected to community. Connected to Ghana’s future.
          </div>
        </div>

        {/* The Location */}
        <div className="location-block" id="location">
          <span className="section-tag">- - The Location - -</span>
          <h2>THE LOCATION</h2>
          <h3 className="block-subtitle">Positioned for Growth</h3>
          <p>
            NellyCrest is being developed in Ghana at a time when the country’s cities and economic centres are experiencing significant growth and transformation.
          </p>
          <p>
            Its location has been selected with long-term accessibility, connectivity and development potential in mind.
          </p>
          <p className="subtle-note">
            As the masterplan progresses, further information about NellyCrest’s location, connectivity and surrounding context will be released.
          </p>
        </div>

        {/* The Development */}
        <div className="location-block" id="the-development">
          <span className="section-tag">- - The Development - -</span>
          <h2>THE DEVELOPMENT</h2>
          <h3 className="block-subtitle">Designed for the Long Term</h3>
          <p>
            NellyCrest is conceived as a long-term development rather than a single project delivered in isolation.
          </p>
          <p>
            Its masterplan is structured to support phased growth, allowing the development to evolve progressively while maintaining the integrity of the overall vision.
          </p>
          <p>
            This approach creates the potential for different districts, uses and development partners to come forward at the appropriate stages.
          </p>
          <div className="block-tagline">
            The goal is not simply to build quickly. It is to build deliberately.
          </div>
        </div>

        {/* Investment & Partnerships */}
        <div className="location-block" id="investment-partnerships">
          <span className="section-tag">- - Investment and partnership - -</span>
          <h2>INVESTMENT & PARTNERSHIPS</h2>
          <h3 className="block-subtitle">Building With the Right Partners</h3>
          <p>
            Transformational developments require more than capital. They require expertise, experience, technology, institutions and long-term partnerships.
          </p>
          <p>
            NellyCrest is being developed with the ambition of creating opportunities for strategic partners across multiple sectors. Potential areas of collaboration include:
          </p>
          
          <div className="collaboration-grid">
            {collaborationAreas.map((area, idx) => (
              <div key={idx} className="collaboration-card">
                <h4>{area.title}</h4>
                <p>{area.desc}</p>
              </div>
            ))}
          </div>

          <div className="block-actions">
            <a href="mailto:info@wardcapital.com?subject=Partnership Enquiry" className="btn btn-primary">Partnership Enquiries</a>
          </div>
        </div>

        {/* Development Status */}
        <div className="dev-status" id="dev-status">
          <span className="section-tag">- - Development status - -</span>
          <h2>DEVELOPMENT STATUS</h2>
          <h3 className="block-subtitle">NellyCrest Is Taking Shape</h3>
          <p className="status-main-text">
            NellyCrest is currently in the <strong>masterplanning phase</strong>. Appointed architectural and planning teams are actively developing the masterplan and supporting design strategy.
          </p>
          
          <p className="progress-intro">As the project progresses, additional information will be released covering:</p>

          <div className="timeline">
            <div className="timeline-item active">
              <span className="timeline-num">01</span>
              <span className="label">Vision & Strategy</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-num">02</span>
              <span className="label">Masterplan Drawings</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-num">03</span>
              <span className="label">Districts & Uses</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-num">04</span>
              <span className="label">Infrastructure</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-num">05</span>
              <span className="label">Development Phasing</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-num">06</span>
              <span className="label">Investment Opportunities</span>
            </div>
          </div>

          <p className="evolving-note">
            This website will evolve alongside the project. <strong>Follow the journey.</strong> (Subscribe to newsletters)
          </p>
        </div>

      </div>
    </section>
  );
};

export default Location;

