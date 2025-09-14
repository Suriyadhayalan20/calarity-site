// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";


export default function Navbar() {

  const handleReload = (path) => {
    window.location.href = path; // forces reload
  };


  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");  // takes you to Login page
  };

  const handleHomeClick = () =>{
    navigate("/");
  };

  return (
    <nav className="navbar">
    <div onClick={handleHomeClick} className="navbar-logo">Calarity</div>
      <ul className="navbar-links">
        <li><Link to="/" onClick={() => handleReload("/")}>Home</Link></li>
        <li><Link to="/about" onClick={() => handleReload("/about")}>About</Link></li>
        <li><Link to="/services" onClick={() => handleReload("/services")}>Services</Link></li>
        <li><Link to="/contact" onClick={() => handleReload("/contact")}>Contact</Link></li>
      </ul>
      <button onClick={handleLoginClick} className="login-button">Login</button>
    </nav>
  );
}
