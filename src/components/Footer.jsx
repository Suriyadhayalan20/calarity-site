import React from "react";


export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">
            <div className="brand-mark small" aria-hidden/>
            <div className="brand-text">Calarity</div>
          </div>
          <p className="muted">Automated scheduling for busy teams.</p>
        </div>

        <div>
          <h4>Links</h4>
          <ul className="link-list">
            <li><a href="#about">About</a></li>
            <li><a href="#usecases">Use cases</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p className="muted">info@calerity.example</p>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Calerity. All rights reserved.
      </div>
    </footer>
  );
}
