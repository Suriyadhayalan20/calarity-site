import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleReload = (path) => {
    window.location.href = path;
    setIsOpen(false);
  };

  const goDoctorLogin = () => {
    navigate("/doctor-login");
    setIsOpen(false);
  };

  const goPatientLogin = () => {
    navigate("/patient-login");
    setIsOpen(false);
  };

  const handleHomeClick = () => {
    navigate("/");
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div onClick={handleHomeClick} className="navbar-logo">Calarity</div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</div>

      {/* Dropdown links for mobile */}
      <ul className={isOpen ? "navbar-links open" : "navbar-links"}>
        <li><Link to="/" onClick={() => handleReload("/")}>Home</Link></li>
        <li><Link to="/about" onClick={() => handleReload("/about")}>About</Link></li>
        <li><Link to="/services" onClick={() => handleReload("/services")}>Services</Link></li>
        <li><Link to="/contact" onClick={() => handleReload("/contact")}>Contact</Link></li>

        {/* Mobile-only login buttons inside dropdown */}
        <li className="mobile-login">
          <button className="doctor-btn" onClick={goDoctorLogin}>Doctor Login</button>
          <button className="patient-btn" onClick={goPatientLogin}>Patient</button>
        </li>
      </ul>

      {/* Desktop-only login buttons (stay outside) */}
      <div className="login-buttons desktop-login">
        <button className="doctor-btn" onClick={goDoctorLogin}>Doctor Login</button>
        <button className="patient-btn" onClick={goPatientLogin}>Patient</button>
      </div>
    </nav>
  );
}
