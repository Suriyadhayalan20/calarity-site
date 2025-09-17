// import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand / Intro */}
        <div className="footer-col brand">
          <h2 className="logo">Calarity</h2>
          <p>Automated scheduling for busy teams.</p>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h3>Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p><a href="mailto:info@calarity.example">info@calarity.example</a></p>
          <div className="socials">
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Calarity. All rights reserved.
      </div>
    </footer>
  );
}
