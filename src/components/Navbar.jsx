// import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false); // ✅ Added state for mobile menu
  const navigate = useNavigate();

  const handleReload = (path) => {
    window.location.href = path; // forces reload
     setIsOpen(false); // close menu on mobile
  };

  const handleLoginClick = () => {
    navigate("/login");  // takes you to Login page
    setIsOpen(false);
  };

  const handleHomeClick = () =>{
    navigate("/");
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
    <div onClick={handleHomeClick} className="navbar-logo">Calarity</div>

    {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* links */}
      <ul className={isOpen ? "navbar-links open" : "navbar-links"}>
        <li><Link to="/" onClick={() => handleReload("/")}>Home</Link></li>
        <li><Link to="/about" onClick={() => handleReload("/about")}>About</Link></li>
        <li><Link to="/services" onClick={() => handleReload("/services")}>Services</Link></li>
        <li><Link to="/contact" onClick={() => handleReload("/contact")}>Contact</Link></li>
      </ul>
      <button onClick={handleLoginClick} className="login-button">Login</button>
    </nav>
  );
}
