import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="investment">
      <div className="container">
        <div className="footer-top">
          <div className="footer-journey">
            <h5>JOIN THE JOURNEY</h5>
            <h2>BE PART OF WHAT COMES NEXT</h2>
            <p>Whether you are an investor, developer, institution, business, professional or future resident, we invite you to stay connected as the vision develops.</p>
            <div className="footer-actions">
              <a href="mailto:info@wardcapital.com?subject=Register Interest" className="btn btn-primary">REGISTER YOUR INTEREST</a>
              <a href="mailto:info@wardcapital.com?subject=Partnership Enquiry" className="btn btn-outline">PARTNERSHIP ENQUIRIES</a>
              <a href="mailto:info@wardcapital.com" className="btn btn-outline">CONTACT US</a>
            </div>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <h3 className="footer-logo">NELLYCREST</h3>
            <p className="footer-tagline">A new chapter for urban development in Ghana.</p>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">in</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">ig</a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>EXPLORE</h4>
              <ul>
                <li><a href="#vision">Vision</a></li>
                <li><a href="#masterplan">Masterplan</a></li>
                <li><a href="#development">Development</a></li>
                <li><a href="#destinations">Destinations</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>&nbsp;</h4>
              <ul>
                <li><a href="#location">Location</a></li>
                <li><a href="#investment">Investment</a></li>
                <li><a href="#development">News & Updates</a></li>
                <li><a href="#investment">Contact</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>CONNECT</h4>
              <ul>
                <li><a href="mailto:info@wardcapital.com?subject=Register Interest">Register Your Interest</a></li>
                <li><a href="mailto:info@wardcapital.com?subject=Partnership Enquiry">Partnership Enquiries</a></li>
                <li><a href="mailto:info@wardcapital.com">Contact Us</a></li>
              </ul>
            </div>
            <div className="link-group dev-status-footer">
              <h4>DEVELOPMENT STATUS</h4>
              <p>Masterplanning in progress.</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 NellyCrest. All rights reserved. A product of Ward Capital Ltd.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
          <p className="disclaimer">
            All plans, concepts, descriptions, images and development information presented on this website are not final and subject to change as masterplanning, design, approvals and development progress.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
