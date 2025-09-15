import React from "react";
import sampleVideo from "../assets/hero-vid.mp4"; 
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom"; 

export default function Hero() {

  const navigate = useNavigate();

  const handleClick =()=>{
    navigate('#how');
  }

  return (
    <section className="hero">
      <div className="container grid-2">
        <div className="hero-left">
          <h1 className="hero-title">Never miss an appointment or feel overwhelmed by scheduling</h1>
          <p className="hero-sub">
            Our platform automates scheduling so your day runs smoothly. Spend less time on spreadsheets and more time on care.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary large">Request a Demo</Link>
            <a href="#how" onClick={handleClick} className="btn btn-ghost large">See How It Works</a>
          </div>
        </div>

        <div className="hero-right" aria-hidden>

          <video width="600" height="400" autoPlay loop muted>
        <source src={sampleVideo} type="video/mp4" />
        
      </video>
          {/* <img src={sampleVideo} alt="Doctor showing prescription on tablet"/> */}
         
        </div>
      </div>
    </section>
  );
}
